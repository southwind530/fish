"use strict";
const common_vendor = require("../../common/vendor.js");
common_vendor.ref("hello world");
const _sfc_main = {};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t(_ctx.hello)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/fish/weixin/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
