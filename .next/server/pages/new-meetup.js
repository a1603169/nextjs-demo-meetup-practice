(() => {
var exports = {};
exports.id = 37;
exports.ids = [37];
exports.modules = {

/***/ 3093:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "NewMeetupForm_form__dA95d",
	"control": "NewMeetupForm_control__jRNhP",
	"actions": "NewMeetupForm_actions__2fkck"
};


/***/ }),

/***/ 8140:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__73YTa"
};


/***/ }),

/***/ 2281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8140);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);


function Card(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
        children: props.children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ 3466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ new_meetup)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/ui/Card.js
var Card = __webpack_require__(2281);
// EXTERNAL MODULE: ./components/meetups/NewMeetupForm.module.css
var NewMeetupForm_module = __webpack_require__(3093);
var NewMeetupForm_module_default = /*#__PURE__*/__webpack_require__.n(NewMeetupForm_module);
;// CONCATENATED MODULE: ./components/meetups/NewMeetupForm.js




function NewMeetupForm(props) {
    const titleInputRef = (0,external_react_.useRef)();
    const imageInputRef = (0,external_react_.useRef)();
    const addressInputRef = (0,external_react_.useRef)();
    const descriptionInputRef = (0,external_react_.useRef)();
    function submitHandler(event) {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };
        props.onAddMeetup(meetupData);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(Card/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            className: (NewMeetupForm_module_default()).form,
            onSubmit: submitHandler,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (NewMeetupForm_module_default()).control,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            htmlFor: "title",
                            children: "Meetup Title"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            required: true,
                            id: "title",
                            ref: titleInputRef
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (NewMeetupForm_module_default()).control,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            htmlFor: "image",
                            children: "Meetup Image"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "url",
                            required: true,
                            id: "image",
                            ref: imageInputRef
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (NewMeetupForm_module_default()).control,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            htmlFor: "address",
                            children: "Address"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            required: true,
                            id: "address",
                            ref: addressInputRef
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (NewMeetupForm_module_default()).control,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                            htmlFor: "description",
                            children: "Description"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                            id: "description",
                            required: true,
                            rows: "5",
                            ref: descriptionInputRef
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (NewMeetupForm_module_default()).actions,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        children: "Add Meetup"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const meetups_NewMeetupForm = (NewMeetupForm);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
;// CONCATENATED MODULE: ./pages/new-meetup/index.js





function NewMeetUpPage() {
    const router = (0,router_.useRouter)();
    async function addMeetupHandler(enteredMeetupData) {
        // console.log(enteredMeetupData);
        const response = await fetch("/api/new-meetup", {
            method: "POST",
            body: JSON.stringify(enteredMeetupData),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        console.log(data);
        router.push("/");
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(head_.Head, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Add a New Meetup"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Add your own meetups and create opportunities with others for networking"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(meetups_NewMeetupForm, {
                onAddMeetup: addMeetupHandler
            })
        ]
    });
}
/* harmony default export */ const new_meetup = (NewMeetUpPage);


/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3466));
module.exports = __webpack_exports__;

})();