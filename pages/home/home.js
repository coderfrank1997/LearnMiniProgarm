Page({
  data: {
    name: 'Frank',
    counter: 0
  },
  getInfo(e) {
    console.log(e);
  },
  handleBtn() {
    // 1.数据发生变化，但界面不会刷新
    // this.data.counter++;
    // console.log(this.data.counter);
    console.log(this);
    // 2.this.setData()
    this.setData({
      counter: this.data.counter + 1,
    });
  }
})