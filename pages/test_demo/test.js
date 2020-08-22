// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgpath:'',
    inputShowed: false,
    inputVal: "",
    isActive:false,
    nowTime:new Date().toLocaleTimeString(),
    movies:[],
    counter:0
  },


  //选择照片或者拍照
  choosePic(){
    wx.chooseImage({
      count: 3,
      success:(res)=>{
        const path = res.tempFilePaths[0];
        this.setData({
          imgpath:path
        })
      }
    })
  },

  imgload(){
    //console.log("图片加载完成");
    this.setData({
      search: this.search.bind(this)
  })
    
  },

  handleinput(e){
    console.log(e);
    
  },
  handlefocus(e){
    console.log(e);
  },
  handleconfirm(e){
    console.log(e);
  },
  handlescroll(e){
    console.log(e); 
  },
  search: function (value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{text: '搜索结果', value: 1}, {text: '搜索结果2', value: 2}])
        }, 200)
    })
},
  selectResult: function (e) {
      console.log('select result', e.detail)
  },
  changeColor:function(){
    this.setData({
      isActive:! this.data.isActive
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(() => {
      this.setData({
        nowTime:new Date().toLocaleTimeString()
      })
    }, 1000);
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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  },
  increment(event){
    this.setData({
      counter:this.data.counter+event.detail.add
    })
  },
  itemClick(e){
    console.log(e);
    
  },
  clickinner(){
    const tabcontrol = this.selectComponent('#control')
    tabcontrol.setData({
      counter: tabcontrol.data.counter + 20
    })
  }
})