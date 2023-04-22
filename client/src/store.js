import { configureStore, createSlice } from '@reduxjs/toolkit'

let 부서info = createSlice({
  name : '부서info',
  initialState : [
    {id: 1, dep: '영유아2부'},
    {id: 2, dep: '영유아3부'},
    {id: 3, dep: '유치2부'}, 
    {id: 4, dep: '유치3부'},
    {id: 5, dep: '유년2부'},
    {id: 6, dep: '유년3부'},
    {id: 7, dep: '초등2부'},
    {id: 8, dep: '초등3부'},
    {id: 9, dep: '중등부'}, 
    {id: 10, dep: '고등부'}
  ]
}) 

let 빈박스11개 = createSlice({
  name : '빈박스11개',
  initialState : [
    {
      1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', 10:'', 11:''
    }
  ]
}) 

let 빈박스50개 = createSlice({
  name : '빈박스50개',
  initialState : [
    {
      1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', 10:'', 11:'', 12:'', 13:'', 14:'', 15:'', 16:'',
      17:'', 18:'', 19:'', 20:'', 21:'', 22:'', 23:'', 24:'', 25:'', 26:'', 27:'', 28:'', 29:'', 30:'', 31:'', 32:'',
      33:'', 34:'', 35:'', 36:'', 37:'', 38:'', 39:'', 40:'', 41:'', 42:'', 43:'', 44:'', 45:'', 46:'', 47:'', 48:'',
      49:'', 50:''
    }
  ]
}) 

let images = createSlice({
  name : 'images',
  initialState : [
    {n:1, img:"/img/1.jpg"},
    {n:2, img:"/img/2.jpg"},
    {n:3, img:"/img/3.jpg"},
    {n:4, img:"/img/4.jpg"},
    {n:5, img:"/img/5.jpg"},
    {n:6, img:"/img/6.jpg"},
    {n:7, img:"/img/7.jpg"},
    {n:8, img:"/img/8.jpg"},
    {n:9, img:"/img/9.jpg"},
    {n:10, img:"/img/10.jpg"},
    {n:11, img:"/img/11.jpg"},
    {n:12, img:"/img/12.jpg"}
  ]
}) 




export default configureStore({
  reducer: {
    images : images.reducer,
    부서info : 부서info.reducer,
    빈박스11개 : 빈박스11개.reducer,
    빈박스50개 : 빈박스50개.reducer
  }
}) 