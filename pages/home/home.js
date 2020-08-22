// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad');
    
    wx.request({
      url: 'http://t.yushu.im/v2/movie/in_theaters',
      success:(res)=>{
        const data = res.data.subjects;
        this.setData({
          movies:data
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow','切换页面会执行这个生命周期函数');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   * 初次渲染先执行onshow
   */
  onReady: function () {
    console.log('onReady');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
    
  },


  /**
   * 监听页面滚动
   */
  onPageScroll:function(){

  },

  /**
   * 监听页面滚动到底部
   */
  onReachBottom:function(){

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})