// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  num1:0,  //设置变量
  num2:0,   //同上
  number1:function(e)      //设置监听
  {
    this.num1 = Number(e.detail.value)     //赋值，获取id的内容
  },
  number2: function (e) {
    this.num2 = Number(e.detail.value)
  },

  data: {
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  Compare:function(e){             //监听
    var str = 'They are in same.'   //变量
    if(this.num1>this.num2){
      str = 'The first number is bigger.'
    }
    if (this.num1 < this.num2){
      str = 'The second number is bigger.'
    }
  
    this.setData({result:str})      //输出结果
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