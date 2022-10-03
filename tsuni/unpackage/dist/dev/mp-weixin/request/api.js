"use strict";
var request_http = require("./http.js");
const nav1 = async () => {
  let data = await request_http.http({
    url: "/home/catitems",
    method: "get"
  });
  return data;
};
const floorList = async () => {
  let data = await request_http.http({
    url: "/home/floordata",
    method: "get"
  });
  return data;
};
const classxx = async () => {
  let data = await request_http.http({
    url: "/categories",
    method: "get"
  });
  return data;
};
exports.classxx = classxx;
exports.floorList = floorList;
exports.nav1 = nav1;
