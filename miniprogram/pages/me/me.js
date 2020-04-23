//index.js
Page({

  popTest: function () {
    wx.showToast({
      title: '联系我们，请拨打1234678990', 
      icon: 'none',       
      duration: 2000 })   
    },
      

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      [{
        text: '体重记录',
        icon: '/images/u16.png'
      },
      {
        text: '消息通知',
        icon: '/images/u11.png'
      },
      {
        text: '收藏',
        icon: '/images/u17.png'
      },
      {
        text: '会员中心',
        icon: '/images/u19.png'
      },
      {
        text: '关于和帮助',
        icon: '/images/u13.png'
      },
      ]
    ]
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