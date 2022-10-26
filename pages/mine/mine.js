// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight:'', // 状态栏高度
    navigationHeight : '', // 状态栏 + 导航栏 高度
    userInfo: {},
    hasUserInfo: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSystemInto();
    // console.log(wx.getUserProfile, '-----')
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

  },
  // 获取用户信息
  getUserInfo: function() {
    console.log('获取应用实例')
    wx.getUserProfile({
      desc: '用于完善用户信息',
      success:(res) => {
        console.log(res)
        this.setData({
          hasUserInfo: true,
          userInfo: res.userInfo
        })
        console.log(this.data.userInfo)
      },
      fail:(err) => {
        console.log(err)
      }
    })
  },
  // 获取系统信息
  getSystemInto: function () {
    wx.getSystemInfo({
      success: res => {
        const statusBarHeight = res.statusBarHeight;
        this.setData({
          statusBarHeight:statusBarHeight,
          navigationHeight: (statusBarHeight + 44) + 'px',
        })
      }
    })
  },
})