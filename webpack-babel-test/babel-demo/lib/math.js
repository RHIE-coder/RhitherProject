"use strict";

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/web.dom-collections.iterator.js");

module.exports = class {
  constructor() {
    for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }

    this.data = data;
  }

  add() {
    return [...this.data].reduce((p, c) => p + c);
  }

  mul() {
    return [...this.data].reduce((p, c) => p * c);
  }

};