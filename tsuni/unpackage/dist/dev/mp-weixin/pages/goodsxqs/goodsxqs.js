"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var common_vendor = require("../../common/vendor.js");
var request_api = require("../../request/api.js");
require("../../request/http.js");
const _sfc_main = {
  setup() {
    const data = common_vendor.reactive({
      id: null,
      img: [],
      list: [],
      newlist: [],
      isCollect: false,
      options: [{
        icon: "headphones",
        text: "\u5BA2\u670D"
      }, {
        icon: "shop",
        text: "\u5E97\u94FA",
        info: 2,
        infoBackgroundColor: "#007aff",
        infoColor: "red"
      }, {
        icon: "cart",
        text: "\u8D2D\u7269\u8F66",
        info: 2
      }],
      buttonGroup: [
        {
          text: "\u52A0\u5165\u8D2D\u7269\u8F66",
          backgroundColor: "#ff0000",
          color: "#fff",
          click: "addcar"
        },
        {
          text: "\u7ACB\u5373\u8D2D\u4E70",
          backgroundColor: "#ffa200",
          color: "#fff"
        }
      ]
    });
    common_vendor.onLoad((option) => {
      console.log(option.id);
      data.id = option.id;
      request_api.goods(data.id).then((res) => {
        console.log(res.message);
        data.img = res.message.pics;
        data.list = res.message;
      });
    });
    const handleCollect = () => {
      console.log(1);
      data.isCollect = !data.isCollect;
    };
    const buttonClick = (e) => {
      console.log(e);
      if (e.index === 0) {
        data.newlist = common_vendor.index.getStorageSync("info") || [];
        console.log(data.newlist);
        let index = data.newlist.findIndex((item) => item.goods_id == data.list.goods_id);
        if (index == -1) {
          data.list.num = 1;
          data.newlist.push(data.list);
        } else {
          data.newlist[index].num++;
        }
        common_vendor.index.setStorage({
          key: "info",
          data: data.newlist
        });
        console.log("\u52A0\u5165\u8D2D\u7269\u8ECA\u6210\u529F");
      }
    };
    return __spreadProps(__spreadValues({}, common_vendor.toRefs(data)), {
      handleCollect,
      buttonClick
    });
  }
};
if (!Array) {
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  _easycom_uni_goods_nav2();
}
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  _easycom_uni_goods_nav();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(_ctx.img, (item, index, i0) => {
      return {
        a: item.pics_mid,
        b: index
      };
    }),
    b: common_vendor.t(_ctx.list.goods_price),
    c: common_vendor.t(_ctx.list.goods_name),
    d: common_vendor.t(_ctx.list.goods_name),
    e: common_vendor.o((...args) => $setup.handleCollect && $setup.handleCollect(...args)),
    f: _ctx.list.goods_introduce,
    g: common_vendor.o($setup.buttonClick),
    h: common_vendor.p({
      fill: true,
      options: _ctx.options,
      buttonGroup: _ctx.buttonGroup
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u5168\u6808/\u5B9E\u8BAD\u4E00/tsuni/pages/goodsxqs/goodsxqs.vue"]]);
wx.createPage(MiniProgramPage);
