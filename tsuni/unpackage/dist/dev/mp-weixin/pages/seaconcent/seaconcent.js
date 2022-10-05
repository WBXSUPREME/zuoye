"use strict";
var common_vendor = require("../../common/vendor.js");
var request_api = require("../../request/api.js");
require("../../request/http.js");
const _sfc_main = {
  setup(__props) {
    const data = common_vendor.reactive({
      inp: "",
      searchlists: []
    });
    const searchinput = () => {
      request_api.searchs(data.inp).then((res) => {
        console.log(res.message);
        data.searchlists = res.message;
      });
    };
    const goodsxq = (item) => {
      console.log(item.goods_id);
      common_vendor.index.navigateTo({
        url: `/pages/goodsxqs/goodsxqs?id=${item.goods_id}`,
        success: (res) => {
          console.log("\u5546\u54C1\u8BE6\u60C5\u9875\u9762\u8DF3\u8F6C\u6210\u529F");
        },
        fail: () => {
          console.log("\u5546\u54C1\u8BE6\u60C5\u9875\u9762\u8DF3\u8F6C\u5931\u8D25");
        },
        complete: () => {
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o([($event) => common_vendor.unref(data).inp = $event.detail.value, searchinput]),
        b: common_vendor.unref(data).inp,
        c: common_vendor.f(common_vendor.unref(data).searchlists, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.goods_name),
            b: item.goods_id,
            c: common_vendor.o(($event) => goodsxq(item), item.goods_id)
          };
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-60c2c466"], ["__file", "D:/\u5168\u6808/\u5B9E\u8BAD\u4E00/tsuni/pages/seaconcent/seaconcent.vue"]]);
wx.createPage(MiniProgramPage);
