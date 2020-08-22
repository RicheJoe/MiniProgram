// components/my-slot/my-slot.js
Component({
  /**
   * 组件的属性列表 可以传入数据
   */
  properties: {

  },

  /**
   * 组件的初始数据 
   */
  data: {

  },

  /**
   * 组件的方法列表 
   */
  methods: {

  },

  /**
   * 定义组件的配置选项
   */
  options:{
    multipleSlots:true//多插槽使用
    ,styleIsolation:'isolated'
  },


  /**
   * 外界额外样式
   */
  externalClasses:[],

  /**
   * 监听props/data改变
   */
  observers:{

  },


  /**
   * 监听页面生命周期
   */
  pageLifetimes:{
    show(){

    },
    hide(){

    },
    resize(){

    }
  },

  /**
   * 监听组件本身生命周期
   */
  lifetimes:{
    created(){

    },
    ready(){

    },
    moved(){

    },
    attached(){
      //组件被添加
    },
    detached(){
      //移除
    }
  }
})
