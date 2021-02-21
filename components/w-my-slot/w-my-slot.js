// components/w-my-slot/w-my-slot.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
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
  pageLifetimes: {
    show() {
      console.log('监听组件所在页面显示起来');
    },
    hide() {
      console.log('监听组件所在页面隐藏起来');
    },
    resize() {
      console.log('监听页面尺寸的变化');
    }
  },
  lifetimes: {
    created() {
      console.log('组件被创建出来');
    },
    attached() {
      console.log('组件被添加到页面');
    },
    ready() {
      console.log('组件被渲染出来');
    },
    moved() {
      console.log('组件被移动到其它节点');
    },
    detached() {
      console.log('组件被销毁');
    }
  }
})
