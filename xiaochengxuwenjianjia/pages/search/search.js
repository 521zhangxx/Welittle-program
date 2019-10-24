Page({

  /**
   * 页面的初始数据
   */
    
  input1:function(e){
    var name = {}
    this.name = e.detail.value
    this.setData(name)
  },
  input2:function(e){
    var name = {}
    this.name = e.detail.value
    this.setData(name)
  },

  submit: function (e) {
    wx.request({
      method: 'post',
      url: 'http://127.0.0.1:3000/',
      data: e.detail.value,
      success: function (res) {
        console.log(res)
      }
    })
  },
})



