// miniprogram/pages/index/index.js
//初始化云端数据库
const db=wx.cloud.database();
//获取云端数据集合
const products=db.collection("products");

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onTapDayWeather() {
    wx.navigateTo({
      url: '/pages/show/show',
    })
  },


  onSubmit:function(event){
    console.log(event.detail.value);
  //添加数据
    products.add({
      data:{
        name: event.detail.value.name,
        weight: event.detail.value.weight,
        dec: event.detail.value.dec
      }
    }).then(res=>{
      console.log(res)
    })
  }
  
  
})