// pages/home/childCpns/my-recommend/my-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[],

    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isload:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleImageload(){
        if(!this.data.isload){
          
          this.data.isload=true
          this.triggerEvent('imageload')
        }
    }
  }
})
