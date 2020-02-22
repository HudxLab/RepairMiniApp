// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    specs: [
      { id: 1, name: '设备类型', value: '笔记本电脑' },
      { id: 2, name: 'CPU', value: 'Intel Core i5 2.4G' },
      { id: 3, name: 'IP', value: '134.99.1.1' },
      { id: 3, name: '系统', value: 'windows 10' },
    ],
    orderInfo: [
      { id: 1, name: '管理员', value: '杨志才' },
      { id: 2, name: '使用人', value: '杨志才' },
      { id: 3, name: '报修人', value: '杨志才' },
      { id: 4, name: '报修人联系方式', value: '12345678910' },
      { id: 5, name: '工单状态', value: '杨志才' },
      { id: 6, name: '超时时间', value: '杨志才' },
    ],
    collapsed: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})