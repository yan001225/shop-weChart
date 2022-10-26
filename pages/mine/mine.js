// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: '', // 状态栏高度
    navigationHeight: '', // 状态栏 + 导航栏 高度
    userInfo: {},
    hasUserInfo: false,
    cardList: [{
        id: 1,
        title: '代付款',
        img: '/assets/images/mine/card2.png'
      },
      {
        id: 2,
        title: '代发货',
        img: '/assets/images/mine/card1.png'
      },
      {
        id: 3,
        title: '代收货',
        img: '/assets/images/mine/card4.png'
      },
      {
        id: 4,
        title: '代评价',
        img: '/assets/images/mine/card3.png'
      },
      {
        id: 5,
        title: '已完成',
        img: '/assets/images/mine/card5.png'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getStorageUserInfo()
  },

  // 获取本地存储的值
  getStorageUserInfo: function() {
    wx.getStorage({
      key:'userInfo',
      success:(res) => {
        console.log(res)
        if(res) {
          this.setData({
            hasUserInfo: true,
            userInfo: res.data
          })
        }
      }
    })
    
  },

  // 退出登录
  loginOut() {
    wx.removeStorage({
      key: 'userInfo',
      success:(res) => {
        console.log(res)
        this.setData({
          userInfo: {},
          hasUserInfo: false
        })
      }
    })
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
    this.getStorageUserInfo()
    this.getSystemInto();
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

  },
  // 获取用户信息
  getUserInfo: function () {
    console.log('获取应用实例')
    wx.getUserProfile({
      desc: '用于完善用户信息',
      success: (res) => {
        if (res && res.userInfo) {
          wx.setStorage({
            key: 'userInfo',
            data: res.userInfo
          })
          this.setData({
            hasUserInfo: true,
            userInfo: res.userInfo
          })
        }

        console.log(this.data.userInfo)
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },
  // 获取系统信息
  getSystemInto: function () {
    wx.getSystemInfo({
      success: res => {
        this.setData({
          statusBarHeight:  res.statusBarHeight,
        })
      }
    })
  },
  // 获取用户授权信息
  getSetting: function () {
    wx.getSetting({
      withSubscriptions: true,
      success(res) {
        console.log(res)
      },
    })
  }
})