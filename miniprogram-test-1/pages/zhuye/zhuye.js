// pages/zhuye/zhuye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots:false,
    autoplay:true,
    interval:5000,
    duration:1000,
    imgUrls:[
      'https://img.zcool.cn/community/01b9a358992eaaa8012060c880f2cd.jpg@1280w_1l_2o_100sh.jpg',
      'https://img.zcool.cn/community/01782b58992eb4a8012060c87af56c.jpg@1280w_1l_2o_100sh.jpg',
      'https://img.zcool.cn/community/0140e458992eb1a801219c7725291c.jpg@1280w_1l_2o_100sh.jpg'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  yule:function(e){
    wx.navigateTo({
      url: '../yulezixun/yule',
    })
  },
  keji:function(e){
    wx.navigateTo({
      url: '../kejizixun/keji',
    })
  },
  shipin:function(e){
    wx.navigateTo({
      url: '../shipinzixun/shipin',
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