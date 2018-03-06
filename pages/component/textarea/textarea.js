// pages/component/textarea/textarea.js
Page({
  data: {
    focus: false
  },
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
  }
})