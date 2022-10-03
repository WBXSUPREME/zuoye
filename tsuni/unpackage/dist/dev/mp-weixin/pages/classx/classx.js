"use strict";
var common_vendor = require("../../common/vendor.js");
var request_api = require("../../request/api.js");
require("../../request/http.js");
if (!Array) {
  const _easycom_u_col2 = common_vendor.resolveComponent("u-col");
  const _easycom_u_row2 = common_vendor.resolveComponent("u-row");
  (_easycom_u_col2 + _easycom_u_row2)();
}
const _easycom_u_col = () => "../../uni_modules/vk-uview-ui/components/u-col/u-col.js";
const _easycom_u_row = () => "../../uni_modules/vk-uview-ui/components/u-row/u-row.js";
if (!Math) {
  (headerbutton + _easycom_u_col + _easycom_u_row)();
}
const headerbutton = () => "../../components/headerbutton/headerbutton.js";
const _sfc_main = {
  setup(__props) {
    const data = common_vendor.reactive({
      classlist: [],
      classlists: [],
      i: 1,
      scrollTop: 0,
      old: {
        scrollTop: 0
      }
    });
    request_api.classxx().then((res) => {
      console.log(res.message);
      data.classlist = res.message;
      data.classlists = res.message[0];
      console.log(data.classlist);
      console.log(data.classlists);
    });
    const qie = (item) => {
      data.i = item.cat_id;
      data.classlists = item;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(data).classlist, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.cat_name),
            b: item.cat_id,
            c: common_vendor.o(($event) => qie(item), item.cat_id),
            d: common_vendor.unref(data).i == item.cat_id ? 1 : ""
          };
        }),
        b: _ctx.scrollTop,
        c: common_vendor.o((...args) => _ctx.upper && _ctx.upper(...args)),
        d: common_vendor.o((...args) => _ctx.lower && _ctx.lower(...args)),
        e: common_vendor.o((...args) => _ctx.scroll && _ctx.scroll(...args)),
        f: common_vendor.p({
          span: "4"
        }),
        g: common_vendor.f(common_vendor.unref(data).classlists.children, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.cat_name),
            b: common_vendor.f(item.children, (citem, k1, i1) => {
              return {
                a: citem.cat_icon,
                b: common_vendor.t(citem.cat_name)
              };
            }),
            c: item.cat_id,
            d: item.cat_id
          };
        }),
        h: _ctx.scrollTop,
        i: common_vendor.o((...args) => _ctx.upper && _ctx.upper(...args)),
        j: common_vendor.o((...args) => _ctx.lower && _ctx.lower(...args)),
        k: common_vendor.o((...args) => _ctx.scroll && _ctx.scroll(...args)),
        l: common_vendor.p({
          span: "8"
        }),
        m: common_vendor.p({
          gutter: "16",
          justify: "space-between"
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-665aa474"], ["__file", "D:/\u5168\u6808/\u5B9E\u8BAD\u4E00/tsuni/pages/classx/classx.vue"]]);
wx.createPage(MiniProgramPage);
