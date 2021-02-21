// pages/home/home.js
import request from '../../service/network.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 原生发送网络请求
    // this.get_data_origin();

    // 使用封装的request发送网络请求
    request({
      url: 'http://152.136.185.210:7878/api/m5/home/multidata'
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  },

  get_data_origin() {
    // 发送网络请求
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: "post",
    //   data: {
    //     name: 'frank',
    //     age: 24
    //   },
    //   success(res) {
    //     console.log(res);
    //   },
    //   fail(err) {
    //     console.log(err);
    //   }
    // })
  }
})