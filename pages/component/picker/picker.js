// pages/component/picker/picker.js
Page({
  data: {
    array: ['中国', '美国', '巴西', '日本'],
    index: 0,
    date: '2018-03-06',
    time: '15:30'
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  }
})