"use strict";

var __exp; // tslib.js without these: entries startsWith includes forEach remove


if (!Object.entries) {
  Object.entries = function (obj) {
    var ownProps = Object.keys(obj),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array

    while (i--) {
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    }

    return resArray;
  };
}

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
} // https://developer.mozilla.org/en_us-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
} // https://it.cha138.com/javascript/show-58000.html


if (!NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
} // https://www.codenong.com/18919560/


if (!Element.prototype.remove) {
  Element.prototype.remove = function () {
    this.parentElement.removeChild(this);
  };
}

if (!NodeList.prototype.remove) {
  NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
    for (var i = this.length - 1; i >= 0; i--) {
      if (this[i] && this[i].parentElement) {
        this[i].parentElement.removeChild(this[i]);
      }
    }
  };
}