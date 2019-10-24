// pages/mypage/mypage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled:true,
    btnstata:'default',
    account:'',
    password:'',
    text:'',
  },
  accountInput: function (e) {
    var content = e.detail.value;
    console.log(content);
    if (content != '') {
      this.setData({ disabled: false, btnstata: "primary", account: content });
    } else {
      this.setData({ disabled: true, btnstate: "default" });
    }
  },
  pwdBlur: function (e) {
    var password = e.detail.value;
    console.log(password);
    if (password != '') {
      this.setData({ password: password });
    }
  },
  login:function(e){
    var account = e.detail.accountInput;
    var password = e.detail.pwdBlur;
    if (account = '123') {
      if (password = '123') {
        wx.navigateTo({
          url: '../me/me',
        })
      }else{text:'非法用户'};
    }else{text:'非法用户'};
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