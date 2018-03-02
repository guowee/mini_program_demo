var texts = [
  '对酒当歌，人生几何！',
  '譬如朝露，去日苦多。',
  '慨当以慷，忧思难忘。',
  '何以解忧？唯有杜康。',
  '青青子衿，悠悠我心。',
  '但为君故，沉吟至今。',
  '呦呦鹿鸣，食野之苹。',
  '我有嘉宾，鼓瑟吹笙。',
  '明明如月，何时可掇？',
  '忧从中来，不可断绝。'
];

Page({
  data: {
    text: '',
    canAdd: true,
    canRemove: false
  },
  extraLine: [],
  add: function(e) {
    var that = this;
    this.extraLine.push(texts[this.extraLine.length % 10])
    this.setData({
      text: this.extraLine.join('\n'),
      canAdd: this.extraLine.length < 10,
      canRemove: this.extraLine.length > 0
    })
    setTimeout(function(){
      that.setData({
        scrollTop: 99999
      });
    }, 0)
  },
  remove: function(e) {
    var that = this;
    if (this.extraLine.length > 0) {
      this.extraLine.pop()
      this.setData({
        text: this.extraLine.join('\n'),
        canAdd: this.extraLine.length < 10,
        canRemove: this.extraLine.length > 0,
      })
    }
    setTimeout(function(){
      that.setData({
        scrollTop: 99999
      });
    }, 0)
  }
})
