"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup(__props) {
    const jumpserch = () => {
      console.log(1);
      common_vendor.index.navigateTo({
        url: "/pages/seaconcent/seaconcent",
        success: (res) => {
          console.log("\u8DF3\u8F6C\u6210\u529F");
        },
        fail: () => {
          console.log("\u8DF3\u8F6C\u5931\u8D25");
        },
        complete: () => {
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(jumpserch)
      };
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7978d3e4"], ["__file", "D:/\u5168\u6808/\u5B9E\u8BAD\u4E00/tsuni/components/headerbutton/headerbutton.vue"]]);
wx.createComponent(Component);
