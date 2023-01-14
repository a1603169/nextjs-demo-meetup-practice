"use strict";
(() => {
var exports = {};
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ new_meetup)
});

;// CONCATENATED MODULE: external "mongodb"
const external_mongodb_namespaceObject = require("mongodb");
;// CONCATENATED MODULE: ./pages/api/new-meetup.js

// /api/new-meetup
async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        // const { title, image, address, description } = data;
        const result = await meetupsCollection.insertOne(data);
        await client.close();
        res.status(201).json({
            message: "Meetup inserted!"
        });
    }
}
/* harmony default export */ const new_meetup = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(634));
module.exports = __webpack_exports__;

})();