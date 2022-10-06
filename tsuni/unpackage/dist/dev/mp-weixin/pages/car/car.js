"use strict";
var __defProp = Object.defineProperty;
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
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    const data = common_vendor.reactive({
      checked: false,
      carlist: []
    });
    common_vendor.onShow(() => {
      common_vendor.index.getStorage({
        key: "info",
        success: (e) => {
          console.log("\u6570\u636E\u83B7\u53D6\u6210\u529F");
          console.log(e);
          data.carlist = e.data;
          console.log(data.carlist);
        },
        fail: () => {
          console.log("\u6570\u636E\u83B7\u53D6\u5931\u8D25");
        }
      });
    });
    return __spreadValues({}, common_vendor.toRefs(data));
  }
};
if (!Array) {
  const _easycom_u_checkbox2 = common_vendor.resolveComponent("u-checkbox");
  const _easycom_u_number_box2 = common_vendor.resolveComponent("u-number-box");
  (_easycom_u_checkbox2 + _easycom_u_number_box2)();
}
const _easycom_u_checkbox = () => "../../uni_modules/vk-uview-ui/components/u-checkbox/u-checkbox.js";
const _easycom_u_number_box = () => "../../uni_modules/vk-uview-ui/components/u-number-box/u-number-box.js";
if (!Math) {
  (_easycom_u_checkbox + _easycom_u_number_box)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(_ctx.carlist, (item, k0, i0) => {
      return {
        a: "1d08a704-0-" + i0,
        b: item.goods_big_logo,
        c: common_vendor.t(item.goods_name),
        d: common_vendor.t(item.goods_price),
        e: "1d08a704-1-" + i0,
        f: common_vendor.o(($event) => item.num = $event),
        g: common_vendor.p({
          modelValue: item.num
        }),
        h: item.cat_one_id
      };
    }),
    b: common_vendor.o(($event) => _ctx.checked = $event),
    c: common_vendor.p({
      modelValue: _ctx.checked
    }),
    d: common_vendor.o(($event) => _ctx.checkedAll = $event),
    e: common_vendor.p({
      modelValue: _ctx.checkedAll
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u5168\u6808/\u5B9E\u8BAD\u4E00/tsuni/pages/car/car.vue"]]);
wx.createPage(MiniProgramPage);
