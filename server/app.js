const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('build'));
app.use(express.urlencoded({extended: true})) 

app.listen(80, ()=>{
  console.log('server is running')
});

app.use(express.json());
var cors = require('cors');
const { json } = require('body-parser');
app.use(cors());


// // 클라우드 업로드용 (naver)
var mysql = require('mysql');
var db = mysql.createPool({
  host     : 'localhost',
  port     : '3306',
  user     : 'root',
  password : '',
  database : 'report'
});

// 내 컴퓨터 용
// var mysql = require('mysql');
// const { request } = require('https');
// var db = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'gksksla',
//   database : 'report'
// });
// db.connect();



// 부서별 데이터(/dep/:id) 가져오기
app.get('/dep/:id', function(req, res) {
  var id = '';
  if (!isNaN(req.params.id)) {
    id = req.params.id
  } else {
    return
  }
  var command = `
    SELECT * FROM (
        SELECT * FROM d${id}_a1
        UNION ALL
        SELECT * FROM d${id}_a2
        UNION ALL
        SELECT * FROM d${id}_a3
    ) AS combined_data
    ORDER BY dag;
  `
  db.query(command, function (error, result) {
      if (error) {console.log(error);} 
      res.send(result) 
  });  
})



// 출석입력 dateinput
app.post('/dateinput', function(req, res) {
  console.log(req.body);
  const { day, dep, year, person } = req.body;
  var command = `
    UPDATE d${dep}_a${year}
    SET day${day} = CASE
      ${person.map((p, index) => `WHEN n='${p}' THEN '1'`).join('\n')}
      ELSE day${day}
    END
    WHERE n IN (${person.map((p) => `'${p}'`).join(', ')});
  `;
  db.query(command, function(error, result) {
    if (error) {
      throw error;
    }
    if (result.affectedRows > 0) {
      res.send('입력 성공!');
      res.end();
    } else {
      res.send('중복된 이름이 있거나 입력 정보가 올바르지 않습니다.');
    }
  });
});

// 출석삭제 datedelete
app.post('/datedelete', function(req, res) {
  console.log(req.body);
  const { day, dep, year, person } = req.body;
  var command = `
    UPDATE d${dep}_a${year}
    SET day${day} = CASE
      ${person.map((p, index) => `WHEN n='${p}' THEN '0'`).join('\n')}
      ELSE day${day}
    END
    WHERE n IN (${person.map((p) => `'${p}'`).join(', ')});
  `;
  db.query(command, function(error, result) {
    if (error) {
      throw error;
    }
    if (result.affectedRows > 0) {
      res.send('입력 성공!');
      res.end();
    } else {
      res.send('중복된 이름이 있거나 입력 정보가 올바르지 않습니다.');
    }
  });
});

// 부서 수정 데이터(dep?) 가져오기
app.get('/depmain/:id', function(req, res) {
  var id = '';
  if (!isNaN(req.params.id)) {
    id = req.params.id
  } else {
    return
  }
  var command = `
      SELECT * FROM d${id} order by field dgn
    `
  db.query(command, function (error, result) {
      if (error) {console.log(error);} 
      res.send(result) 
  });  
})



///////////// 로그인
app.post('/login', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  if (username && password) {
      db.query('SELECT * FROM user WHERE username = ? AND password = ?'
      , [username, password], function(error, result, fields) {
        if (error) throw error;
        if (result.length > 0) {
          res.send(result);
          res.end();
        } else {              
          res.send("로그인 정보가 일치하지 않습니다.");
        }            
      });
  } else {        
      res.send("username과 password를 입력하세요!");    
      res.end();
  }
});


// nameadd.post //
app.post('/nameadd', function(req, res){
  console.log(req.body)
  const { d_num, a_num, g_num, g_ko, new_n } = req.body;
  db.query(`
  INSERT IGNORE INTO d${d_num}_a${a_num} (dag, dag_ko, n) VALUES ('${d_num}-${a_num}-${g_num}', '${g_ko}', '${new_n}');
  `,function(error, result){
  if (error) {throw error}
  if (result.affectedRows > 0) {            
    res.send("입력되었습니다!");
    res.end();
  } else {
    res.send("중복된 이름이 있거나 입력 정보가 올바르지 않습니다.");  
  }})
});

// namedelete //
app.post('/namedelete', function(req, res){
  console.log(req.body)
  const { d_num, a_num, g_ko, delete_n } = req.body;
  db.query(`
  delete from d${d_num}_a${a_num} where dag_ko = '${g_ko}' and n = '${delete_n}';
  `,function(error, result){
  if (error) {throw error}
  if (result.affectedRows > 0) {            
    res.send("삭제되었습니다!");
    res.end();
  } else {
    res.send("이름이 없거나 정보가 올바르지 않습니다.");  
  }})
});


// groupadd.post //
app.post('/groupadd', function(req, res){
  console.log(req.body)
  const { d_num, a_num, new_group, addyear, g_numplus1 } = req.body;
  db.query(`
  INSERT IGNORE INTO d${d_num} (an, dgn, dgn_ko, an_ko) values ('${d_num}-${a_num}', '${d_num}-${a_num}-${g_numplus1}', '${new_group}', '${addyear}')
  `,function(error, result){
  if (error) {throw error}
  if (result.affectedRows > 0) {            
    res.send("입력되었습니다!");
    res.end();
  } else {
    res.send("중복된 이름이 있거나 입력 정보가 올바르지 않습니다.");  
  }})
});

// groupdelete //
app.post('/groupdelete', function(req, res){
  console.log(req.body)
  const { d_num, a_num, delete_n } = req.body;
  db.query(`
  delete from d${d_num} where an = '${d_num}-${a_num}' and dgn_ko = '${delete_n}';
  `,function(error, result){
  if (error) {throw error}
  if (result.affectedRows > 0) {            
    res.send("삭제되었습니다!");
    res.end();
  } else {
    res.send("중복된 이름이 있거나 입력 정보가 올바르지 않습니다.");  
  }  
  })
});

// report ///////////////////////////////////////////////////////////////////////////////

// info //
app.get('/info', function(req, res) {
  db.query(`
  select * from info
  `, function (error, result) {if(error) {console.log(error);} res.send(result) });
})

// result.부서별총계입력
app.post('/uplord', function(req, res){
  console.log(req.body)
  const { dep, num, date_num } = req.body;
  db.query(`
  UPDATE result SET ${dep} = ${num} WHERE id = '${date_num}';
  `,function(error, result){
  if (error) {throw error}
  if (result.affectedRows > 0) {            
    res.send("업로드되었습니다!");
    res.end();
  } else {
    res.send("입력 정보가 올바르지 않습니다.");
  }  
  })
});

// result출력
app.get('/lastresult', function(req, res) {
  db.query('SELECT * FROM result', function (error, result) {
    if (error) {console.log(error);}
    res.send(result)
  });
})


//////////////////////////////////////////////////////////////////////////

app.use(express.static(path.join(__dirname, '/build')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});


