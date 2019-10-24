// pages/yulezixun/yule.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  onGankTap: function (event) {
    var url = event.currentTarget.dataset.posturl;
    var desc = event.currentTarget.dataset.postdesc;
    var postType = event.currentTarget.dataset.posttype;
    var who = event.currentTarget.dataset.postwho;
    var date = event.currentTarget.dataset.postdate;
    var images = event.currentTarget.dataset.postimages;

    wx.navigateTo({
      url: "reading-detail/reading-detail?url=" + url + "&content=" + desc + "&type=" + postType + "&who=" + who + "&date=" + date + "&images=" + images
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var url = options.url;
    var content = options.content;
    var postType = options.type;
    var who = options.who;
    var date = options.date;
    var images = options.images.split(',');
    var imageArray = [];
    var hadImage = false;

    for (var i = 0; i < images.length; i++) {
      // 图片不为空则存到数组中
      if (images[i] != "undefined") {
        var obj = {
          imageUrl: images[i],
        }
        imageArray.push(obj);
        }
    }
    // 是否有图片
    if (imageArray.length > 0) {
      hadImage = true;
    } else {
      hadImage = false;
    }
    // 传递数据给ui显示
    this.setData({
       url: url,
      content: content,
      date: date,
      postType: postType,
      who: who,
      images: imageArray,
      hadImage: hadImage
    })
    // 标题
    wx.setNavigationBarTitle({
      title: "文章详情"
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