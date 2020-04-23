//index.js//获取应用实例
Page({
  data: {
    // tab 切换
    tabArr: {
      curHdIndex: 1,
      curBdIndex: 1
    }
  },
  //tab切换
  tab: function (e) {
    //var dataId = e.currentTarget.dataset.id;
    var dataId = e.currentTarget.id;
    var obj = {};
    obj.curHdIndex = dataId;
    obj.curBdIndex = dataId;
    this.setData({
      tabArr: obj
    })
    console.log(obj);

    list: [
      [{
        text: '春分减肥小知识',
        icon: '/images/u101.png'
      }],
      [
      ], [], [], []

    ]
  },
})