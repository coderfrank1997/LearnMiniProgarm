// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ['衣服','裤子','鞋子'],
    counter: 0,
    flag: true
  },
  changes() {
    this.setData({
      flag: !this.data.flag,
    });
  },
  sub() {
    const com_sel = this.selectComponent('#my-event');
    // 通过setData修改组件的数据（不合理）
    // com_sel.setData({
    //   num: com_sel.data.num + 5,
    // });

    // 通过方法对数据进行修改
    com_sel.subb(10);
  },
  iiClick(e) {
    // console.log(e);
  },
  incer(event) {
    this.setData({
      counter: this.data.counter + 1,
    })
  },
  changeClick1(event) {
    console.log('changeClick1');
  },
  changeClick2(event) {
    console.log('changeClick2');
  },
  changeClick3() {
    console.log('捕获阶段');
  },
  handleTtem(event) {
    const datas = event.currentTarget.dataset;
    const item = datas.item;
    console.log(item);
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