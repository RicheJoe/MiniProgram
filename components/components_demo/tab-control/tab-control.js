// components/tab-control/tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:Array,
      value:[1,2,3]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0,
    counter:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    indexClick(e){
      //console.log(e.currentTarget.dataset.index);
      const index = e.currentTarget.dataset.index
      this.setData({
        currentIndex : index
      }),

      this.triggerEvent("itemClick",
      {index,title:this.properties.title[index]},{})
    }
  }
})
