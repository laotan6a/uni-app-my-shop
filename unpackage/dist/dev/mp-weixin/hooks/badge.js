"use strict";
var common_vendor = require("../common/vendor.js");
var stores_cart = require("../stores/cart.js");
function badgeMix() {
  const store = stores_cart.useCartStore();
  const {
    total
  } = common_vendor.storeToRefs(store);
  common_vendor.onShow(() => {
    setBadge();
  });
  function setBadge() {
    common_vendor.index.setTabBarBadge({
      index: 2,
      text: total + ""
    });
  }
  return;
}
exports.badgeMix = badgeMix;