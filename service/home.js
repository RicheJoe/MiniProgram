import request from './network'


export function  getMultidata(){
   return request({
    url:'http://123.207.32.32:8000/home/multidata'
  })
}

export function getGoodsData(type,page){
  return request({
    url:'http://152.136.185.210:8000/api/z8/home/data',
    data:{
      type,
      page
    }
  })
}