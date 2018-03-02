//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   list:[
     {
       id: 'content',
       name: '基础容器',
       open: false,
       pages: ['text', 'icon', 'progress']
     },
     {
       id: 'form',
       name: '表单容器',
       open: false,
       pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch', 'textarea']
     },
     {
       id: 'view',
       name: '视图容器',
       open: false,
       pages: ['view', 'scroll-view', 'swiper']
     },
     {
       id: 'nav',
       name: '导航',
       open: false,
       pages: ['navigator']
     },
     {
       id: 'media',
       name: '媒体组件',
       open: false,
       pages:['image','audio','video']
     }
   ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
})
