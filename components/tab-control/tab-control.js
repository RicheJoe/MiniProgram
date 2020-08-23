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
      
      //点击是发射事件
      this.triggerEvent("tabClick",
      {index,title:this.properties.title[index]},{})
    }
  }
})
