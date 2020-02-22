// components/dropmenu/dropmenu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    data: Array,
    collapsed: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    collapsed: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showList: function() {
      this.setData({
        collapsed: !this.data.collapsed
      })
    }
  }
})