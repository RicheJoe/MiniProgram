import request from './service/network.js'

const TOKEN = 'token'
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {

    //先从storge中取出token  如果没有在去请求登录
    
    const token = wx.getStorageSync(TOKEN)

    if(token && token.length !==0){
      //验证token是否过期
      this.check_token(token)
    }else{
      //没有则去登录
      this.login()
      this._this = this
    }


   
    
  },

   //登录操作封装的函数  code只有五分钟有效期
  login(){
    //console.log('登录');
    wx.login({
      success:(res)=>{
        //1、获取code
       const code = res.code
        //2、发送给自己的服务器
        wx.request({
          url:'http://123.207.32.32:3000/login',
          data:{
            code:code
          },
          method:'post',
          success:(res)=>{
            const token = res.data.token;
            //保存到对象中
            this.GlobalData.token = token;
            //保存到本地
            wx.setStorageSync(TOKEN, token)
          },
        })
        
      }
    })
  },

  //验证Token是否过期封装的函数
  check_token(token){
    //console.log('验证');
    
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'post',
      header:{
        token
      },
      success:(res)=>{
        if(!res.data.errCode){
          this.GlobalData.token = token
        }else{
          this.login()
        }
      }
    })
  },


  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    //场景信息和用户信息
    // console.log(options);
    
    // wx.getUserInfo({
    //   success: function(res){
    //     console.log(res);  
    //   }
    // })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },

  GlobalData:{
    name:'vn',
    age : 18,
    token:''
  }
})
