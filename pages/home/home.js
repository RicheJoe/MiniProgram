// pages/home/home.js


import {getMultidata,getGoodsData}from '../../service/home'

const type = ['pop','new','sell']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommends:[],
    titles:['流行','新款','精选'],
    goods:{
      'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
      'sell':{page:0,list:[]},
    },
    currentType:'pop',
    showBacktop:false,
    istabFixed:false,
    tabScrollTop:0


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

      //请求轮播图和推荐数据
      this.__getMultidata()

      //请求首页数据
      this.__getGoodsData('pop');
      this.__getGoodsData('new');
      this.__getGoodsData('sell');
      


    
    
    
    
    
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //console.log('onShow','切换页面会执行这个生命周期函数');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   * 初次渲染先执行onshow
   */
  onReady: function () {
    //console.log('onReady');
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
  onPageScroll:function(options){
    const scrollTop = options.scrollTop

    //返回顶部按钮的显示
    const flag = scrollTop >= 500
    if(flag!=this.data.showBacktop){
      this.setData({
        showBacktop : scrollTop >= 500
      })
    }

    //修改isfixed
    // const flag2 =  scrollTop >= this.data.tabScrollTop;
    // if(flag2!= this.data.istabFixed){
    //   this.setData({
    //     istabFixed : flag2
    //   })
    // }
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
    //上拉加载更多
    this.__getGoodsData(this.data.currentType)
    
  },

  /**
   * 用户点击右上角分享 也可使用按钮实现 open-type='share'
   */
  onShareAppMessage: function () {
    return {
      title:'分享的标题',
      path:' pages/category/category',//分享路径
      imageUrl:'/assets/tabbar/我2.png'
    }
  },




  //网络请求函数封装

  //1、轮播图和推荐
  __getMultidata(){
      getMultidata().then(res=>{
        const banners = res.data.data.banner.list
        const recommends = res.data.data.recommend.list
        this.setData({
          banners:banners,
          recommends:recommends
        })
      })
  },


  //2、首页数据

  __getGoodsData(type){

    //获取页码并加1
    const page = this.data.goods[type].page+1
    
    getGoodsData(type,page).then(res=>{
      //console.log(res);

      const  list = res.data.data.list;

      //更新数据并暂存
      const oldlist = this.data.goods[type].list
      oldlist.push(...list);
      
      //使用setdata更新数据  和 页码
      const typeKey = `goods.${type}.list`
      const paheKey = `goods.${type}.page`
      this.setData({
        [typeKey]:oldlist,
        [paheKey]:page
      })

      
      
    })
  },

  //自定义事件

  handleTabClick(e){
    
    const index = e.detail.index;
   
    //设置当前选择的菜单名称currenttype
    this.setData({
      currentType:type[index]
    })
    
    
  },
   imageload(){
    // wx.createSelectorQuery().select('#tab-control2').boundingClientRect(rect=>{
    //   this.data.scrollTop = rect.top
    
      
      
    // }).exec()
   }
 
})