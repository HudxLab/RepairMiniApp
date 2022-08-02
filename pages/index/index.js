//index.js
//获取应用实例
const app = getApp()

Page({
  onLoad: function(){
    // wx.getSetting({
    //   success: function(res){
    //     if (res.authSetting["scope.userInfo"]==true){

    //     }else {
    //       wx.authorize({
    //         scope: 'scope.userInfo',
    //         success() {
    //           wx.getUserInfo({
    //             success: function(res){
    //               console.log(res);
    //             }
    //           })
    //         }
    //       })
    //     }
    //   }
    // })
  },
  data: {
    default_info: {
      avatarUrl:'/image/default_user.png',
      scanUrl: '/image/qr_scan.png',
      laptopIcon: '/image/laptop.png',
      desktopIcon: '/image/desktop.png',
      printIcon: '/image/print.png',
      faxIcon: '/image/fax.png',
      defaultDeviceIcon: '/image/default_device.png',
    },
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    orderList: [
      { id: 1, submit_by: '杨志才', address: '凤凰大楼综合楼3楼', device_type: '笔记本电脑', desc: '无法开机'},
      { id: 2, submit_by: '杨志才', address: '凤凰大楼综合楼3楼', device_type: '笔记本电脑', desc: '无法开机'},
      { id: 3, submit_by: '杨志才', address: '凤凰大楼综合楼3楼', device_type: '笔记本电脑', desc: '无法开机'},
      { id: 4, submit_by: '杨志才', address: '凤凰大楼综合楼3楼', device_type: '笔记本电脑', desc: '无法开机'}
    ]
  },

  scanQrCode: function() {
    wx.scanCode({
      success(res) {
        console.log(res);
      }
    })
  },
  getOrder: function() {
    wx.navigateTo({
      url: "/pages/order/order",
    })
  },
})
