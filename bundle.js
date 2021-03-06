"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var listGuests = /*#__PURE__*/function () {
  function listGuests() {
    _classCallCheck(this, listGuests);

    this.guests = [];
  }

  _createClass(listGuests, [{
    key: "addGuest",
    value: function addGuest(name, age, id) {
      this.guests.push({
        name: name,
        age: age,
        id: id
      });
      console.log(this.guests);
    }
  }, {
    key: "listGuests",
    value: function listGuests() {
      console.log(this.guests);
    }
  }]);

  return listGuests;
}();

var listGuest = new listGuests();

document.getElementById('addGuest').onclick = function () {
  var name = document.getElementById('name').value;
  listGuest.addGuest(name, 22, "1234567");
};

document.getElementById('listGuest').onclick = function () {
  listGuest.listGuests();
};
