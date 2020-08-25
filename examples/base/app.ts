import axios from '../../src'
//
// axios({
//   method:"get",
//   url:"/base/get",
//   params:{
//     foo:['bar','baz']
//   }
// })
//
// axios({
//   method:"get",
//   url:"/base/get",
//   params:{
//     foo: { 'bar': 'baz' }
//   }
// })
//
// axios({
//   method:"get",
//   url:"/base/get",
//   params:{
//     foo:new Date()
//   }
// })
//
// axios({
//   method:"get",
//   url:"/base/get",
//   params:{
//     foo:"@:$, "
//   }
// })
//
// axios({
//   method:"get",
//   url:"/base/get",
//   params:{
//     foo:"bar",
//     baz:null,
//     bar:undefined
//   }
// })
//
// axios({
//   method:"get",
//   url:"/base/get#hash",
//   params:{
//     foo:"bar",
//   }
// })
//
// axios({
//   method:"get",
//   url:"/base/get?bar=baz",
//   params:{
//     foo:"bar"
//   }
// })

axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1, b: 2
  }
})

const arr: Int32Array = new Int32Array([21, 31])
axios({
  method: 'post',
  url: '/base/buffer',
  data: arr
})






