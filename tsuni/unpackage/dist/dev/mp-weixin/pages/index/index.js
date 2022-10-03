"use strict";
var common_vendor = require("../../common/vendor.js");
var request_api = require("../../request/api.js");
require("../../request/http.js");
if (!Array) {
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  _easycom_u_swiper2();
}
const _easycom_u_swiper = () => "../../uni_modules/vk-uview-ui/components/u-swiper/u-swiper.js";
if (!Math) {
  (headerbutton + _easycom_u_swiper)();
}
const headerbutton = () => "../../components/headerbutton/headerbutton.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  setup(__props) {
    const data = common_vendor.reactive({
      list: [
        {
          image: "https://api-hmugo-web.itheima.net/pyg/banner1.png"
        },
        {
          image: "https://api-hmugo-web.itheima.net/pyg/banner2.png"
        },
        {
          image: "https://api-hmugo-web.itheima.net/pyg/banner3.png"
        }
      ],
      navlist: [],
      louceng: []
    });
    request_api.nav1().then((res) => {
      data.navlist = res.message;
    });
    request_api.floorList().then((res) => {
      console.log(res.message);
      data.louceng = res.message;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          height: "350",
          list: common_vendor.unref(data).list
        }),
        b: common_vendor.f(common_vendor.unref(data).navlist, (item, k0, i0) => {
          return {
            a: item.id,
            b: item.image_src
          };
        }),
        c: common_vendor.f(common_vendor.unref(data).louceng, (item, k0, i0) => {
          return {
            a: item.floor_title.image_src,
            b: common_vendor.f(item.product_list, (citem, k1, i1) => {
              return {
                a: citem.image_src,
                b: citem.id
              };
            }),
            c: item.id
          };
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-57280228"], ["__file", "D:/\u5168\u6808/\u5B9E\u8BAD\u4E00/tsuni/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
