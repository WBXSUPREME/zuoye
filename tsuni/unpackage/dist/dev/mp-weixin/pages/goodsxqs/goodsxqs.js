"use strict";
var request_api = require("../../request/api.js");
var common_vendor = require("../../common/vendor.js");
require("../../request/http.js");
const _sfc_main = {
  setup(__props) {
    common_vendor.onLoad((e) => {
      console.log(e);
      request_api.goods(e.id).then((res) => {
        console.log(res.message);
      });
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/\u5168\u6808/\u5B9E\u8BAD\u4E00/tsuni/pages/goodsxqs/goodsxqs.vue"]]);
wx.createPage(MiniProgramPage);
