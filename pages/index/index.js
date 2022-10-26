// index.js
// 获取应用实例
// const app = getApp()
Page({
  data: {
    statusBarHeight: '',
    isUserInfo: false,
    userInfo: {}
  },
  // 事件处理函数
  onLoad() {
    
  },
  onShow() {
    this.getSystemInfo()
    this.getUserInfoStorage()
  },
  getUserInfoStorage() {
    wx.getStorage({
      key:'userInfo',
      success:(res) => {
        console.log(res)
        if(res) {
          this.setData({
            userInfo: res.data,
            isUserInfo: true
          })
        }else {
          return
        }
      },
      fail:(err) => {
        this.setData({
          userInfo: {},
          isUserInfo: false
        })
      }
    })
  },
  getSystemInfo() {
    wx.getSystemInfo({
      success: (result) => {
        console.log(result)
        if(result) {
          this.setData({
            statusBarHeight: result.statusBarHeight + 'px'
          })
        }
      },
      fail: (res) => {},
      complete: (res) => {},
    })
  } 
})