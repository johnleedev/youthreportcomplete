const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('build'));
app.use(express.urlencoded({extended: true})) 

app.listen(8001, ()=>{
  console.log('server is running')
});

app.use(express.json());
var cors = require('cors');
const { json } = require('body-parser');
app.use(cors());

// 클라우드 업로드용 (naver)
// var mysql = require('mysql');
// var db = mysql.createPool({
//   host     : 'localhost',
//   port     : '3306',
//   user     : 'root',
//   password : 'gksksla6985!',
//   database : 'report'
// });

// 내 컴퓨터 용
var mysql = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'gksksla',
  database : 'report'
});
db.connect();


app.get('/dep1', function(요청, 응답) {
  db.query('select dep1.id,dep1.groupname,name,day1,day2,day3,day4,day5,day6,day7,day8,day9,day10 from dep1 left join group1_1 on dep1.groupname = group1_1.groupname'
  , function (error, result) {
    console.log(result)
    if (error) {console.log(error);}
    응답.send(result)
  });
})


app.post('/nameinput', function(요청, 응답){
  console.log(요청.body);
  db.query(`INSERT INTO dep1 (groupname) values (?)`, []
  , function(error, result){
  if(error){
    throw error;
  }
  })
  db.query(`INSERT INTO group1_1 (dep, name, day1, day2, day3, day4, day5, day6, day7, day8, day9, day10)
   VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  [요청.body.dep, 요청.body.name, 요청.body.day1, 요청.body.day2, 요청.body.day3, 요청.body.day4,
    요청.body.day5, 요청.body.day6, 요청.body.day7, 요청.body.day8, 요청.body.day9, 요청.body.day10], 
  function(error, result){
  if(error){
    throw error;
  }
  })

});


app.delete('/dep_delete', function(요청, 응답) {
  console.log(요청.body);
  db.query(`DELETE FROM group1_1
  WHERE id='${요청.body.id}' AND groupname='${요청.body.groupname}' AND name='${요청.body.name}'`,
  function(error, result){
    if(error){throw error;}
  })
})



app.get('/uplord', function(요청, 응답) {
  db.query('SELECT * FROM result', function (error, result) {
    if (error) {console.log(error);}
    응답.send(result)
  });
})

app.post('/uplord', function(요청, 응답){
  console.log(요청.body);
  db.query(`INSERT INTO result (date, title, number) VALUES(?, ?, ?)`,
  [요청.body.date, 요청.body.title, 요청.body.number], 
  function(error, result){
  if(error){
    throw error;
  }
  })
});


app.delete('/delete', function(요청, 응답) {
  db.query(`DELETE FROM result 
  WHERE date='${요청.body.date}' AND title='${요청.body.title}' AND number='${요청.body.number}'`, 
  function(error, result){
    if(error){throw error;}
  })
})



app.use(express.static(path.join(__dirname, '/build')));
app.get('/', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/build/index.html'));
});
app.get('*', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/build/index.html'));
});

