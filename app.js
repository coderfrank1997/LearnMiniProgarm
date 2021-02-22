App({
  data: {
    token: null,
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 1.先从缓存中取出token
    const token = wx.getStorageSync('token');

    // 2.判断token是否有值
    if(token && token.length != 0) { // 已经有token，验证token是否过期
      // 验证token是否过期
      this.check_token(token);
    } else { // 没有token，进行登录操作
      this.login();
    }
  },
  check_token(token) {
    console.log('执行了验证token的操作');
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token,
      },
      success: res => {
        if(!res.data.errCode) {
          console.log('token有效');
          this.data.token = token;
        } else {
          this.login();
        }
      },
      fail(err) {
        console.log(err);
      }
    })
  },
  login() {
    console.log('执行了登录操作');
    // 登录操作
    wx.login({
      // code之后5分钟的有效期
      success: res => {
        // 1.获取code
        const code = res.code;

        // 2.将code发送给我们的服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          success: res => {
            // 1.取出token
            const token = res.data.token;

            // 2.将token保存在globaData中
            this.data.token = token;

            // 3.进行本地存储
            wx.setStorageSync('token', token);
          }
        })
      },
    })
  }
})
