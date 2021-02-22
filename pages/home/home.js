// pages/home/home.js
Page({
  handClick1() {
    wx.showToast({
      title: 'loading...',
      duration: 3000,
      icon: 'loading',
      success() {
        console.log('弹出成功');
      },
      fail() {
        console.log('弹出失败');
      },
      complete() {
        console.log('完成函数的调用');
      }
    })
  },
  handClick2() {
    wx.showModal({
      title: '我是标题',
      content: '哈哈哈',
      cancelText: '回退',
      cancelColor: '#fa805c',
      confirmColor: '#fa805c',
      // showCancel: false,
      success(res) {
        console.log(res);
      }
    })
  },
  handClick3() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: 'red',
      success: (result) => {
        console.log(result);
      },
      fail: (res) => {},
      complete: (res) => {},
    })
  },
  handClick4() {
    wx.showLoading({
      title: 'loading...',
    });

    setTimeout(() => {
      wx.hideLoading({
        success: (res) => {},
      })
    }, 3000);
  },
  onShareAppMessage(options) {
    return {
      title: '你好啊！frank',
      
    }
  }
})