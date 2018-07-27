(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Sitefinity"] = factory();
	else
		root["Sitefinity"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/Authentication.ts":
/*!*******************************!*\
  !*** ./src/Authentication.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
* @class Authentication
* @classdesc The constructor of the Authentication object. This object is used for authenticating a user to Sitefinity.
* @param {object} options - An object containing configuration options for the {@Link Authentication} object.
* @param {string} options.serviceUrl - Your service url that points to the configured instance of Sitefinity service.
*/
var Authentication = /** @class */ (function () {
    function Authentication(options) {
        this._token = null;
        this._serviceUrl = options.serviceUrl;
        this.factory = options.factory;
    }
    /**
    * Logins the user. A service call is made to login the user. If the call is successful and the service returns a token, this token is cached in the {@link Authentication} object.
    * @memberOf Authentication
    * @instance
    * @param {string} username - The username.
    * @param {string} password - The password.
    * @param {Function} [success] - The success handler of the method.
    * @param {Function} [failure] - The error handler of the method.
    * @deprecated This method is deprecated and should not be used with versions of sitefinity >= 10.0
    * @example
    * sf.authentication.login("username", "password", successCb, failureCb);
    */
    Authentication.prototype.login = function (username, password, success, failure) {
        var that = this;
        var request = this.factory.create({
            data: {
                username: username,
                password: password
            },
            urlOptions: {
                baseUrl: that._serviceUrl + 'login'
            },
            successCb: function (data) {
                that.setToken(data.value);
                if (typeof success === 'function')
                    success(data.value);
            },
            failureCb: failure
        });
        request._execute();
    };
    /**
    * Logouts the user.
    * @memberOf Authentication
    * @instance
    * @param {Function} [success] - The success handler of the method.
    * @param {Function} [failure] - The error handler of the method.
    * @deprecated This method is deprecated and should not be used with versions of sitefinity >= 10.0
    */
    Authentication.prototype.logout = function (success, failure) {
        var that = this;
        var request = this.factory.create({
            urlOptions: {
                baseUrl: that._serviceUrl + 'logout',
                token: that.getToken()
            },
            successCb: function (data) {
                that.setToken(null);
                if (typeof success === 'function')
                    success(data);
            },
            failureCb: failure
        });
        request._execute();
    };
    /**
    * Sets the authentication token.
    * @memberOf Authentication
    * @instance
    * @param {string} token - The token, which will be used for authentication.
    */
    Authentication.prototype.setToken = function (token) {
        this._token = token;
    };
    /**
    * Gets the authentication token.
    * @memberOf Authentication
    * @instance
    * @returns {string}
    */
    Authentication.prototype.getToken = function () {
        return this._token;
    };
    return Authentication;
}());
exports.Authentication = Authentication;


/***/ }),

/***/ "./src/BlobBuilder.ts":
/*!****************************!*\
  !*** ./src/BlobBuilder.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @classdesc The BlobBuilder class is used to generate blob objects.
 * @class BlobBuilder
 */
var BlobBuilder = /** @class */ (function () {
    function BlobBuilder() {
        this._blob = new Blob();
    }
    /**
    * Append new value to blob.
    * @memberOf BlobBuilder
    * @instance
    * @param {object} value - The value to be appended.
    */
    BlobBuilder.prototype.append = function (value) {
        this._blob = new Blob([this._blob, value]);
    };
    /**
    * Get generated blob.
    * @memberOf BlobBuilder
    */
    BlobBuilder.prototype.build = function () {
        return this._blob;
    };
    return BlobBuilder;
}());
exports.BlobBuilder = BlobBuilder;


/***/ }),

/***/ "./src/ContentTypes.ts":
/*!*****************************!*\
  !*** ./src/ContentTypes.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var contentTypes = {
    json: "application/json"
};
exports.default = contentTypes;


/***/ }),

/***/ "./src/Data.ts":
/*!*********************!*\
  !*** ./src/Data.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
* @class Data
* @classdesc The constructor of the Data object. This object is used for requesting data from Sitefinity.
* @param {object} urlOptions - An object containing configuration options for the {@link Data} object.
* @param {string} urlOptions.baseUrl - Your service url that points to the configured instance of Sitefinity service.
* @param {string} urlOptions.entitySet - The url name of the type.
* @param {object} urlOptions.SFParams - An object containing configuration options for requests.
* @param {string} urlOptions.SFParams.provider - The provider name to use in each request.
* @param {string} urlOptions.SFParams.culture - The culture name to use in each request.
*/
var Data = /** @class */ (function () {
    function Data(urlOptions, factory) {
        this.urlOptions = urlOptions;
        this.factory = factory;
    }
    // TODO: rethink this
    /**
    * Executes a GET request to retrieve a collection of items.
    * @memberOf Data
    * @instance
    * @param {object} parameters - The parameters for the request.
    * @param {string} parameters.action - The OData action along with its parameters.
    * @param {object} parameters.query - The {@link WhereQuery} with which to filter the items.
    * @param {Function} parameters.successCb - The success callback function.
    * @param {Function} parameters.failureCb - The error callback function.
    */
    Data.prototype.get = function (parameters) {
        parameters = parameters || {};
        // TODO: move to Request
        if (parameters.query)
            this.urlOptions.ODataParams = parameters.query;
        var request = this.factory.get({
            urlOptions: this.urlOptions,
            action: parameters.action,
            successCb: parameters.successCb,
            failureCb: parameters.failureCb,
            fallbackProperties: parameters.fallbackProperties
        });
        request._execute();
    };
    /**
    * Executes a GET request to retrieve an/all item(s) operations.
    * @memberOf Data
    * @instance
    * @param {object} parameters - The parameters for the request.
    * @param {Function} parameters.successCb - The success callback function.
    * @param {Function} parameters.failureCb - The error callback function.
    */
    Data.prototype.getOperations = function (parameters) {
        var request;
        var action = "operations";
        // Set parentId if no item key is passed
        if (!parameters.key)
            action += "?parentId=" + parameters.parentId;
        var params = {
            urlOptions: this.urlOptions,
            action: action,
            successCb: parameters.successCb,
            failureCb: parameters.failureCb
        };
        if (parameters.key) {
            params.key = parameters.key;
            request = this.factory.getSingle(params);
        }
        else {
            request = this.factory.get(params);
        }
        request._execute();
    };
    /**
    * Executes a GET request for a single item.
    * @memberOf Data
    * @instance
    * @param {object} parameters - The parameters for the request.
    * @param {object} parameters.query - The {@link QueryBase} object containing the OData query options that should be sent to the server.
    * @param {string} parameters.key - The identifier of the item to be retrieved.
    * @param {string} parameters.action - The OData action along with its parameters.
    * @param {Function} parameters.successCb - The success callback function.
    * @param {Function} parameters.failureCb - The error callback function.
    */
    Data.prototype.getSingle = function (parameters) {
        if (!(parameters.key))
            throw "Parameter 'key' is required!";
        if (parameters.query)
            this.urlOptions.ODataParams = parameters.query;
        var request = this.factory.getSingle({
            urlOptions: this.urlOptions,
            key: parameters.key,
            action: parameters.action,
            successCb: parameters.successCb,
            failureCb: parameters.failureCb,
            fallbackProperties: parameters.fallbackProperties
        });
        request._execute();
    };
    /**
    * Executes a POST request for a single item.
    * @memberOf Data
    * @instance
    * @param {object} parameters - The parameters for the request.
    * @param {string} parameters.key - The identifier of the item.
    * @param {object} parameters.data - The payload of the request.
    * @param {string} parameters.action - The OData action along with its parameters.
    * @param {Function} parameters.successCb - The success callback function.
    * @param {Function} parameters.failureCb - The error callback function.
    */
    Data.prototype.create = function (parameters) {
        if (!(parameters.data))
            throw "Parameter 'data' is required!";
        var request = this.factory.create({
            urlOptions: this.urlOptions,
            key: parameters.key,
            data: parameters.data,
            action: parameters.action,
            successCb: parameters.successCb,
            failureCb: parameters.failureCb
        });
        request._execute();
    };
    /**
    * Executes a PATCH request to update a single item.
    * @memberOf Data
    * @instance
    * @param {object} parameters - The parameters for the request.
    * @param {bool} parameters.saveTemp - A flag indicating whether to save in temp.
    * @param {string} parameters.key - The identifier of the item to be updated.
    * @param {object} parameters.data - The payload of the request.
    * @param {string} parameters.action - The OData action along with its parameters.
    * @param {Function} parameters.successCb - The success callback function.
    * @param {Function} parameters.failureCb - The error callback function.
    * @example
    * var data = sf.data({
    *     urlName: "newsitems",
    *     providerName: "OpenAccessDataProvider",
    *     cultureName: "en"
    * });
    *
    * var newsItemUpdate =  {
    *    "Title": 'updated news title'
    * };
    *
    * data.update({
    *   key: '00000000-0000-0000-0000-000000000000', // key of item to update
    *   data: newsItemUpdate,
    *   saveTemp: true,
    *   successCb: successCb,
    *   failureCb: failureCb
    * });
    */
    Data.prototype.update = function (parameters) {
        if (!(parameters.key || parameters.data))
            throw "Parameters: 'data' and 'key' are required!";
        var request = this.factory.update({
            urlOptions: this.urlOptions,
            key: parameters.key,
            data: parameters.data,
            action: parameters.action,
            saveTemp: parameters.saveTemp,
            successCb: parameters.successCb,
            failureCb: parameters.failureCb
        });
        request._execute();
    };
    /**
    * Executes a DELETE request to delete a single item.
    * @memberOf Data
    * @instance
    * @param {object} parameters - The parameters for the request.
    * @param {string} parameters.key - The identifier of the item to be deleted.
    * @param {Function} parameters.successCb - The success callback function.
    * @param {Function} parameters.failureCb - The error callback function.
    */
    Data.prototype.destroy = function (parameters) {
        if (!(parameters.key))
            throw "Parameter 'key' is required!";
        var request = this.factory.destroy({
            urlOptions: this.urlOptions,
            key: parameters.key,
            successCb: parameters.successCb,
            failureCb: parameters.failureCb
        });
        request._execute();
    };
    /**
    * Executes a POST request to execute a workflow operation for single item.
    * @memberOf Data
    * @instance
    * @param {object} parameters - The parameters for the request.
    * @param {string} parameters.key - The identifier of the item.
    * @param {object} parameters.data - The payload of the request.
    * @param {Function} parameters.successCb - The success callback function.
    * @param {Function} parameters.failureCb - The error callback function.
    */
    Data.prototype.operation = function (parameters) {
        if (!(parameters.key || parameters.data))
            throw "Parameters: 'data' and 'key' are required!";
        var request = this.factory.create({
            urlOptions: this.urlOptions,
            key: parameters.key,
            action: "operation",
            data: parameters.data,
            successCb: parameters.successCb,
            failureCb: parameters.failureCb
        });
        request._execute();
    };
    /**
    * Executes a GET request to get the property of a single item.
    * @memberOf Data
    * @instance
    * @param {object} parameters - The parameters for the request.
    * @param {string} parameters.key - The identifier of the item.
    * @param {string} parameters.property - The name of the property to be retrieved.
    * @param {Function} parameters.successCb - The success callback function.
    * @param {Function} parameters.failureCb - The error callback function.
    */
    Data.prototype.getProperty = function (parameters) {
        if (!(parameters.key || parameters.property))
            throw "Parameters: 'data' and 'property' are required!";
        var request = this.factory.getProperty({
            urlOptions: this.urlOptions,
            key: parameters.key,
            navigationProperty: parameters.property,
            successCb: parameters.successCb,
            failureCb: parameters.failureCb
        });
        request._execute();
    };
    /**
    * Executes a GET request to get the related property value of a single item.
    * @memberOf Data
    * @instance
    * @param {object} parameters - The parameters for the request.
    * @param {string} parameters.key - The identifier of the item.
    * @param {string} parameters.navigationProperty - The name of the navigation property to be retrieved.
    * @param {Function} parameters.successCb - The success callback function.
    * @param {Function} parameters.failureCb - The error callback function.
    */
    Data.prototype.getRelated = function (parameters) {
        if (!(parameters.key || parameters.navigationProperty))
            throw "Parameters: 'data' and 'navigationProperty' are required!";
        var request = this.factory.getRelated({
            urlOptions: this.urlOptions,
            key: parameters.key,
            navigationProperty: parameters.navigationProperty,
            successCb: parameters.successCb,
            failureCb: parameters.failureCb
        });
        request._execute();
    };
    /**
    * Executes a GET request to retrieve the related property value of a single item by the id of the related item.
    * @memberOf Data
    * @instance
    * @param {object} parameters - The parameters for the request.
    * @param {string} parameters.key - The identifier of the item.
    * @param {string} parameters.navigationProperty - The name of the navigation property to be retrieved.
    * @param {string} parameters.relatedKey - The identifier of the related item.
    * @param {Function} parameters.successCb - The success callback function.
    * @param {Function} parameters.failureCb - The error callback function.
    */
    Data.prototype.getRelatedById = function (parameters) {
        if (!(parameters.key || parameters.navigationProperty || parameters.relatedKey))
            throw "Parameters: 'data', 'relatedKey' and 'navigationProperty' are required!";
        var request = this.factory.getRelatedById({
            urlOptions: this.urlOptions,
            key: parameters.key,
            relatedKey: parameters.relatedKey,
            navigationProperty: parameters.navigationProperty,
            successCb: parameters.successCb,
            failureCb: parameters.failureCb
        });
        request._execute();
    };
    /**
    * Executes a DELETE request to retrieve the delete all of the associated members in the relation property.
    * @memberOf Data
    * @instance
    * @param {object} parameters - The parameters for the request.
    * @param {string} parameters.key - The identifier of the item.
    * @param {string} parameters.navigationProperty - The name of the navigation property.
    * @param {Function} parameters.successCb - The success callback function.
    * @param {Function} parameters.failureCb - The error callback function.
    */
    Data.prototype.destroyRelated = function (parameters) {
        if (!(parameters.key || parameters.navigationProperty))
            throw "Parameters: 'data' and 'navigationProperty' are required!";
        var request = this.factory.destroyRelated({
            urlOptions: this.urlOptions,
            key: parameters.key,
            navigationProperty: parameters.navigationProperty,
            successCb: parameters.successCb,
            failureCb: parameters.failureCb
        });
        request._execute();
    };
    /**
    * Executes a DELETE request to retrieve the a single entry of the associated members in the relation property.
    * @memberOf Data
    * @instance
    * @param {object} parameters - The parameters for the request.
    * @param {string} parameters.key - The identifier of the item.
    * @param {string} parameters.navigationProperty - The name of the navigation property.
    * @param {string} parameters.relatedKey - The identifier of the related item.
    * @param {Function} parameters.successCb - The success callback function.
    * @param {Function} parameters.failureCb - The error callback function.
    */
    Data.prototype.destroyRelatedById = function (parameters) {
        if (!(parameters.key || parameters.navigationProperty || parameters.relatedKey))
            throw "Parameters: 'data', 'relatedKey' and 'navigationProperty' are required!";
        var request = this.factory.destroyRelatedById({
            urlOptions: this.urlOptions,
            key: parameters.key,
            relatedKey: parameters.relatedKey,
            navigationProperty: parameters.navigationProperty,
            successCb: parameters.successCb,
            failureCb: parameters.failureCb
        });
        request._execute();
    };
    /**
    * Executes a POST request to add a related item to the property collection.
    * @memberOf Data
    * @instance
    * @param {object} parameters - The parameters for the request.
    * @param {string} parameters.key - The identifier of the item.
    * @param {string} parameters.navigationProperty - The name of the navigation property.
    * @param {string} parameters.link - The URL of the related item.
    * @param {Function} parameters.successCb - The success callback function.
    * @param {Function} parameters.failureCb - The error callback function.
    */
    Data.prototype.createRelated = function (parameters) {
        if (!(parameters.key || parameters.navigationProperty || parameters.link))
            throw "Parameters: 'data', 'link' and 'navigationProperty' are required!";
        var data = {
            "@odata.id": parameters.link
        };
        var request = this.factory.createRelated({
            urlOptions: this.urlOptions,
            key: parameters.key,
            navigationProperty: parameters.navigationProperty,
            data: data,
            successCb: parameters.successCb,
            failureCb: parameters.failureCb
        });
        request._execute();
    };
    /**
    * Executes a POST request to upload a media item.
    * @memberOf Data
    * @instance
    * @param {object} parameters - The parameters for the request.
    * @param {string} parameters.data - The data to be uploaded.
    * @param {string} parameters.data.content - The base64 representation of the media item.
    * @param {string} parameters.data.contentType - The content type of the item. E.g. image/jpeg.
    * @param {string} parameters.data.name - The name of the media item.
    * @param {string} parameters.data.payload - Holds the JSON metadata about the image. E.g. Title, Urlname etc.
    * @param {string} parameters.data.uploadProperties - The properties passed on upload. Must contain ParentId and can contain FolderId, Title, UrlName, etc.
    * @param {Function} parameters.successCb - The success callback function.
    * @param {Function} parameters.failureCb - The error callback function.
    * @example
    *
    * var data = sf.data({
    *     urlName: "images"
    * });
    * data.upload({
    *     data: {
    *         content: "base 64 representation of the file",
    *         contentType: "image/jpeg",
    *         name: "test.jpg",
    *         payload: {
    *             Title: "Test",
    *             UrlName: "test"
    *         },
    *         uploadProperties: {
    *             ParentId: "4BA7AD46-F29B-4E65-BE17-9BF7CE5BA1FB"
    *         }
    *     },
    *     successCb: successCb,
    *     failureCb: failureCb
    * });
    */
    Data.prototype.upload = function (parameters) {
        if (!(parameters || parameters.data || parameters.data.content || parameters.data.contentType || parameters.data || parameters.data.name || parameters.data.uploadProperties))
            throw "parameters: content, contentType, name and uploadProperties are required!";
        var options = {
            urlOptions: this.urlOptions,
            _factory: this.factory,
            successCb: parameters.successCb,
            failureCb: parameters.failureCb
        };
        var batch = this.factory.batch(options);
        var transaction = batch.beginTransaction();
        var uploadedFile = transaction.upload({
            entitySet: this.urlOptions.entitySet,
            data: parameters.data.content,
            contentType: parameters.data.contentType,
            fileName: parameters.data.name,
            uploadProperties: parameters.data.uploadProperties
        });
        if (parameters.data.payload)
            transaction.update({
                entitySet: this.urlOptions.entitySet,
                key: uploadedFile,
                data: parameters.data.payload
            });
        if (parameters.publish === true) {
            transaction.operation({
                entitySet: this.urlOptions.entitySet,
                key: uploadedFile,
                data: {
                    action: "Publish"
                }
            });
        }
        batch.endTransaction(transaction);
        var executor = this.factory.createExecutor(batch);
        executor._execute();
    };
    return Data;
}());
exports.Data = Data;


/***/ }),

/***/ "./src/Expression.ts":
/*!***************************!*\
  !*** ./src/Expression.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var ExpressionBase = /** @class */ (function () {
    function ExpressionBase(type) {
        this.type = type;
    }
    ExpressionBase.prototype.getType = function () {
        return this.type;
    };
    return ExpressionBase;
}());
exports.ExpressionBase = ExpressionBase;
var BinaryExpression = /** @class */ (function (_super) {
    tslib_1.__extends(BinaryExpression, _super);
    function BinaryExpression(type, parameter, constant) {
        var _this = _super.call(this, type) || this;
        _this.parameter = parameter;
        _this.constant = constant;
        return _this;
    }
    BinaryExpression.prototype.getParameter = function () {
        return this.parameter;
    };
    BinaryExpression.prototype.getConstant = function () {
        return this.constant;
    };
    return BinaryExpression;
}(ExpressionBase));
exports.BinaryExpression = BinaryExpression;
var ComplexExpression = /** @class */ (function (_super) {
    tslib_1.__extends(ComplexExpression, _super);
    function ComplexExpression(type, expressions) {
        var _this = _super.call(this, type) || this;
        _this.expressions = expressions;
        return _this;
    }
    ComplexExpression.prototype.getExpressions = function () {
        return this.expressions;
    };
    return ComplexExpression;
}(ExpressionBase));
exports.ComplexExpression = ComplexExpression;


/***/ }),

/***/ "./src/Headers.ts":
/*!************************!*\
  !*** ./src/Headers.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.headerNames = {
    contentType: "Content-Type",
    authorization: "Authorization",
    contentEncoding: "Content-Encoding",
    operation: "X-Operation",
    properties: "X-Sf-Properties",
    fileName: "X-File-Name",
    serviceRequest: "X-SF-Service-Request"
};


/***/ }),

/***/ "./src/HttpMethods.ts":
/*!****************************!*\
  !*** ./src/HttpMethods.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var methods = {
    Get: "GET",
    Put: "PUT",
    Post: "POST",
    Patch: "PATCH",
    Delete: "DELETE"
};
exports.default = methods;


/***/ }),

/***/ "./src/OrderProperty.ts":
/*!******************************!*\
  !*** ./src/OrderProperty.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var OrderProperty = /** @class */ (function () {
    function OrderProperty(propertyPath, isDesc) {
        if (isDesc === void 0) { isDesc = null; }
        this.propertyPath = propertyPath;
        this.isDesc = isDesc;
        if (!utils_1.utils.isString(propertyPath))
            throw new Error('Property name is not a valid string');
        propertyPath = propertyPath.trim();
        var parts = propertyPath.split(' ');
        // parts[0] is the propertyPath; [1] would be whether descending or not.
        if (parts.length > 1 && isDesc !== true && isDesc !== false) {
            isDesc = parts[1].toLowerCase() == 'desc';
            if (!isDesc) {
                // isDesc is false but check to make sure its intended.
                var isAsc = parts[1].toLowerCase() == 'asc';
                if (!isAsc) {
                    throw new Error("the second word in the propertyPath must begin with 'desc' or 'asc'");
                }
            }
        }
        this.propertyPath = parts[0];
        this.isDesc = isDesc;
    }
    OrderProperty.prototype.getPropertyPath = function () {
        return this.propertyPath;
    };
    OrderProperty.prototype.getDirection = function () {
        return this.isDesc;
    };
    OrderProperty.prototype.getValue = function () {
        var direction = (this.isDesc) ? 'desc' : 'asc';
        return this.propertyPath + ' ' + direction;
    };
    return OrderProperty;
}());
exports.OrderProperty = OrderProperty;


/***/ }),

/***/ "./src/Query.ts":
/*!**********************!*\
  !*** ./src/Query.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var QueryBase_1 = __webpack_require__(/*! ./QueryBase */ "./src/QueryBase.ts");
var WhereQuery_1 = __webpack_require__(/*! ./WhereQuery */ "./src/WhereQuery.ts");
var OrderProperty_1 = __webpack_require__(/*! ./OrderProperty */ "./src/OrderProperty.ts");
var QueryBuilder_1 = __webpack_require__(/*! ./QueryBuilder */ "./src/QueryBuilder.ts");
/**
 * @classdesc The query class is used for constructing queries.
 * @class Query
 * @augments QueryBase
 * @example
 * var query = new Sitefinity.Query();
 * var query0 = query.where().and().endsWith("Title", "Record").done().or().startsWith('Title', 'asd').done().done();
 * var query1 = query.where().or().endsWith("Record", "Title").ne('age', '15').eq('Content', 'test').done().done();
 * var query2 = query.where().and().endsWith("Title", "Record").done().done();
 * var query3 = query.where().endsWith("Record", "Title").or().ne('age', '15').eq('Content', 'test').done().done();
 * var query4 = query.where().not().endsWith("Record", "Title").done().and().not().eq('Content', 'test').done().done().done();
 * var query5 = query.where().not().and().endsWith("Record", "Title").eq('Content', 'test').done().done().done();
 * var query6 = query.select("Id", "Title", "Content").expand('Tags').order("Title desc").where().ne('Title', 'zzz').eq('Title', 'newTitle').done()//.count();
 * var query7 = query.order("Title desc").where().eq('Title', 'newTitleUPDATE1').done().select("Title", "Content");
 * var query8 = query.where().eq('Title', 'newTitleN11').done();
 */
var Query = /** @class */ (function (_super) {
    tslib_1.__extends(Query, _super);
    function Query() {
        var _this = _super.call(this) || this;
        _this._order = null;
        _this._skip = null;
        _this._take = null;
        _this._search = null;
        _this._count = null;
        _this.expr = null;
        return _this;
    }
    /**
    * Begins a where clause for filtering the items.
    * @memberOf Query
    * @returns {@link WhereQuery}
    */
    Query.prototype.where = function () {
        var clone = this._clone(function (newObj) {
            newObj.expr = new WhereQuery_1.WhereQuery(newObj);
        });
        return clone.expr;
    };
    /**
    * Specifies the order by clause.
    * @memberOf Query
    * @example
    * // filter by single field
    * order("Title desc")
    * @example
    * // filter by multiple fields
    * order("Title desc", "Description asc")
    * @returns {@link Query}
    */
    Query.prototype.order = function () {
        var orderPropPaths = this._extractArguments(arguments);
        this._validatePropertyPaths(orderPropPaths);
        return this._clone(function (newObj) {
            var orderItems = [];
            for (var i = 0; i < orderPropPaths.length; i++) {
                var member = orderPropPaths[i];
                var orderProp = new OrderProperty_1.OrderProperty(member);
                orderItems.push(orderProp);
            }
            newObj._order = orderItems;
        });
    };
    /** Skips a certain number of items from the beginning before returning the rest of the items. Used for paging.
    * @memberOf Query.prototype
    * @method skip
    * @see [query.take]{@link query.take}
    * @param {number} value The number of items to skip.
    * @returns {Query}
    */
    Query.prototype.skip = function (value) {
        // validate
        return this._clone(function (newObj) {
            newObj._skip = value;
        });
    };
    /** Takes a specified number of items from the query result. Used for paging.
    * @memberOf Query.prototype
    * @param {number} value The number of items to take.
    * @returns {Query}
    */
    Query.prototype.take = function (value) {
        return this._clone(function (newObj) {
            newObj._take = value;
        });
    };
    /** Searches for the items matching the specified expression.
    * @memberOf Query.prototype
    * @param {string} value The search expression.
    * @returns {Query}
    */
    Query.prototype.search = function (value) {
        return this._clone(function (newObj) {
            newObj._search = value;
        });
    };
    /** Returns the total item count with the result. Used for paging.
    * @memberOf Query.prototype
    * @param {inline} inline Whether to return only the count of the items with or without their JSON representation.
    * @returns {Query}
    */
    Query.prototype.count = function (inline) {
        if (inline === void 0) { inline = true; }
        return this._clone(function (newObj) {
            newObj._count = inline;
        });
    };
    Query.prototype._getFilter = function () {
        return this.expr;
    };
    Query.prototype._getOrderBy = function () {
        return this._order;
    };
    Query.prototype.build = function () {
        return new QueryBuilder_1.QueryBuilder(this).build();
    };
    return Query;
}(QueryBase_1.QueryBase));
exports.Query = Query;


/***/ }),

/***/ "./src/QueryBase.ts":
/*!**************************!*\
  !*** ./src/QueryBase.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/**
 * @classdesc The base class for dealing with queries.
 * @class QueryBase
 */
var QueryBase = /** @class */ (function () {
    function QueryBase() {
        this._select = null;
        this._expand = null;
    }
    /**
    * Selects which fields will be returned when querying the service.
    * @memberOf QueryBase
    * @instance
    * @param {string} arguments - an array of fields to include in the $select statement.
    * @returns {QueryBase}
    */
    QueryBase.prototype.select = function () {
        var selectPropPaths = this._extractArguments(arguments);
        this._validatePropertyPaths(selectPropPaths);
        return this._clone(function (newObj) {
            newObj._select = selectPropPaths;
        });
    };
    /**
    * Selects which navigation properties will be returned when querying the service.
    * @memberOf QueryBase
    * @instance
    * @param {string} arguments - an array of fields to include in the $expand statement.
    * @returns {QueryBase}
    */
    QueryBase.prototype.expand = function () {
        var propPaths = this._extractArguments(arguments);
        this._validatePropertyPaths(propPaths);
        return this._clone(function (newObj) {
            newObj._expand = propPaths;
        });
    };
    QueryBase.prototype._extractArguments = function (arg) {
        var values = [];
        for (var index = 0; index < arg.length; index++) {
            values.push(arg[index]);
        }
        return values;
    };
    QueryBase.prototype._getSelect = function () {
        return this._select;
    };
    QueryBase.prototype._getExpand = function () {
        return this._expand;
    };
    QueryBase.prototype._validatePropertyPaths = function (propPaths, allowNested) {
        if (allowNested === void 0) { allowNested = false; }
        for (var i = 0; i < propPaths.length; i++) {
            var member = propPaths[i];
            if (!utils_1.utils.isString(member)) {
                throw new Error('Invalid argument in clause');
            }
            if (!allowNested && member.indexOf('.') > -1) {
                throw new Error('Invalid argument in clause');
            }
        }
    };
    QueryBase.prototype._clone = function (setter) {
        if (setter === void 0) { setter = null; }
        var newObj = utils_1.utils.clone(this, new QueryBase(), setter);
        return newObj;
    };
    return QueryBase;
}());
exports.QueryBase = QueryBase;


/***/ }),

/***/ "./src/QueryBuilder.ts":
/*!*****************************!*\
  !*** ./src/QueryBuilder.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var WhereQuery_1 = __webpack_require__(/*! ./WhereQuery */ "./src/WhereQuery.ts");
var Expression_1 = __webpack_require__(/*! ./Expression */ "./src/Expression.ts");
var OrderProperty_1 = __webpack_require__(/*! ./OrderProperty */ "./src/OrderProperty.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var constants = __webpack_require__(/*! ./constants */ "./src/constants.ts").default;
var QueryBuilder = /** @class */ (function () {
    function QueryBuilder(query) {
        this.query = query;
    }
    QueryBuilder.prototype.build = function () {
        var queryParameters = {};
        this._buildODataQueryParams(this.query, queryParameters);
        return queryParameters;
    };
    QueryBuilder.prototype._buildODataQueryParams = function (query, queryParameters) {
        var queryParams = constants.ODataParams;
        var whereClause = query._getFilter();
        if (whereClause instanceof WhereQuery_1.WhereQuery) {
            var expression = whereClause._getExpression();
            if (expression instanceof Expression_1.ComplexExpression) {
                var result = this._buildComplexExpression(expression, null);
                if (result) {
                    queryParameters[queryParams.$filter] = result;
                }
            }
        }
        var selectClause = query._getSelect();
        if (selectClause instanceof Array) {
            queryParameters[queryParams.$select] = selectClause.join(', ');
        }
        var expandClause = query._getExpand();
        if (expandClause instanceof Array)
            queryParameters[queryParams.$expand] = expandClause.join(', ');
        var orderByClause = query._order;
        if (orderByClause instanceof Array) {
            var order = [];
            for (var i in orderByClause) {
                if (orderByClause[i] instanceof OrderProperty_1.OrderProperty)
                    order.push(orderByClause[i].getValue());
            }
            queryParameters[queryParams.$orderby] = order.join(', ');
        }
        var take = query._take;
        if (utils_1.utils.isNumber(take))
            queryParameters[queryParams.$top] = take;
        var skip = query._skip;
        if (utils_1.utils.isNumber(skip))
            queryParameters[queryParams.$skip] = skip;
        var search = query._search;
        if (search)
            queryParameters[queryParams.$search] = search;
        var count = query._count;
        // means that the count is required inline
        if (count !== null) {
            queryParameters[queryParams.$count] = count;
        }
        return queryParameters;
    };
    QueryBuilder.prototype._buildComplexExpression = function (expression, parent) {
        if (!(expression instanceof Expression_1.ComplexExpression))
            throw new Error('Invalid complex expression');
        var OperatorType = constants.ExpressionType;
        var counter = 0;
        var result = '';
        var subExpressions = expression.getExpressions();
        if (!subExpressions.length) {
            return result;
        }
        while (true) {
            var currentExp = subExpressions[counter];
            if (currentExp instanceof Expression_1.BinaryExpression) {
                result += this._buildBinaryExpression(currentExp);
            }
            else if (currentExp instanceof Expression_1.ComplexExpression) {
                var complexResult = this._buildComplexExpression(currentExp, expression.type);
                if (complexResult) {
                    result += '(' + complexResult + ')';
                }
            }
            if (expression.getType() === OperatorType.not)
                result = expression.getType() + ' ' + result;
            // TODOSDK: Rethink this!
            if (expression.getType() === OperatorType.any) {
                var exprVal = [];
                for (var index = 0; index < subExpressions.length; index++) {
                    if (subExpressions[index].type == OperatorType.contains || subExpressions[index].type == OperatorType.startsWith || subExpressions[index].type == OperatorType.endsWith)
                        exprVal.push(subExpressions[index].type.toLowerCase() + "(x, '" + subExpressions[index].constant + "')");
                    else
                        exprVal.push('x ' + subExpressions[index].type.toLowerCase() + ' ' + this._checkType(subExpressions[index].constant));
                }
                result = currentExp.parameter + '/' + expression.getType() + '(x:' + exprVal.join(' ' + parent + ' ') + ')';
            }
            counter++;
            if (counter == subExpressions.length)
                break;
            result += ' ' + expression.getType() + ' ';
        }
        return result;
    };
    QueryBuilder.prototype._buildBinaryExpression = function (expression) {
        if (!(expression instanceof Expression_1.BinaryExpression))
            throw new Error('Invalid binary expression');
        var ExpressionType = constants.ExpressionType;
        var result = null;
        var type = expression.getType();
        switch (type) {
            case ExpressionType.eq:
            case ExpressionType.ne:
            case ExpressionType.lt:
            case ExpressionType.le:
            case ExpressionType.gt:
            case ExpressionType.ge:
                var constant = expression.getConstant();
                /*var template = '({0} {1} \'{2}\')';
                if (/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(constant))
                    template = '({0} {1} {2})';*/
                result = "(" + expression.getParameter() + " " + type + " " + this._checkType(constant) + ")";
                break;
            // TODO contains is substringOf in Odata ?
            case ExpressionType.contains:
            case ExpressionType.startsWith:
            case ExpressionType.endsWith:
                result = type.toLowerCase() + "(" + expression.getParameter() + ", " + this._checkType(expression.getConstant()) + ")";
                break;
            default:
                var msg = "Unsupported operator " + type;
                throw new Error(msg);
        }
        return result;
    };
    QueryBuilder.prototype._checkType = function (constant) {
        if (this._isGuid(constant))
            return constant;
        if (constant == null)
            return null;
        constant = constant.replace(/[+/?%#&]/g, function ($0) {
            return encodeURIComponent($0);
        });
        // escapes the apostrophes
        constant = constant.replace(/'/g, "''");
        return "'" + constant + "'";
    };
    QueryBuilder.prototype._isGuid = function (constant) {
        return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(constant);
    };
    return QueryBuilder;
}());
exports.QueryBuilder = QueryBuilder;


/***/ }),

/***/ "./src/Requests/BatchRequest.ts":
/*!**************************************!*\
  !*** ./src/Requests/BatchRequest.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var Request_1 = __webpack_require__(/*! ./Request */ "./src/Requests/Request.ts");
var BlobBuilder_1 = __webpack_require__(/*! ../BlobBuilder */ "./src/BlobBuilder.ts");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var headerNames = __webpack_require__(/*! ../Headers */ "./src/Headers.ts").headerNames;
var httpMethods = __webpack_require__(/*! ../HttpMethods */ "./src/HttpMethods.ts").default;
/**
 * @classdesc The transaction class is used to group operations that involve data manipulation together and execute them as a single atomic operation.
 * @class Transaction
 * @param {object} urlOptions - The url options that are passed to the {@link _factory} object.
 * @param {object} _factory - The factory object used for request generation.
 */
var Transaction = /** @class */ (function () {
    function Transaction(urlOptions, _factory) {
        this.urlOptions = urlOptions;
        this._factory = _factory;
        this._requests = [];
        this._counter = 0;
    }
    Transaction.prototype.upload = function (parameters) {
        var urlOptions = this.urlParametersClone(parameters.entitySet);
        var options = {
            urlOptions: urlOptions,
            data: parameters.data,
            contentType: parameters.contentType,
            fileName: parameters.fileName,
            uploadProperties: JSON.stringify(parameters.uploadProperties)
        };
        var request = this._factory.upload(options);
        return this.addRequest(this, request);
    };
    /**
    * Adds a POST request to create a single item.
    * @memberOf Transaction
    * @instance
    * @param {object} parameters - The parameters for the request.
    * @param {object} parameters.data - The payload of the request.
    */
    Transaction.prototype.create = function (parameters) {
        if (!(parameters || parameters.entitySet))
            throw "entitySet is required!";
        var urlOptions = this.urlParametersClone(parameters.entitySet);
        var options = {
            key: parameters.key,
            action: parameters.action,
            urlOptions: urlOptions,
            data: JSON.stringify(parameters.data)
        };
        var request = this._factory.create(options);
        return this.addRequest(this, request);
    };
    /**
    * Adds a POST request to execute an operation on single item.
    * @memberOf Transaction
    * @instance
    * @param {object} parameters - The parameters for the request.
    * @param {string} parameters.key - The identifier of the item to be updated.
    * @param {object} parameters.data - The payload of the request.
    */
    Transaction.prototype.operation = function (parameters) {
        if (!(parameters || parameters.entitySet || parameters.key || parameters.data))
            throw "parameters: entitySet, key and data are required!";
        var urlOptions = this.urlParametersClone(parameters.entitySet);
        var options = {
            urlOptions: urlOptions,
            key: parameters.key,
            action: 'operation',
            data: JSON.stringify(parameters.data)
        };
        var request = this._factory.create(options);
        this._overrideUrlGeneration(request, parameters.key, 'operation', options.urlOptions);
        this.addRequest(this, request);
    };
    /**
    * Adds a PATCH request to update a single item.
    * @memberOf Transaction
    * @instance
    * @param {object} parameters - The parameters for the request.
    * @param {bool} parameters.saveTemp - A flag indicating whether to save in temp.
    * @param {string} parameters.key - The identifier of the item to be updated.
    * @param {object} parameters.data - The payload of the request.
    */
    Transaction.prototype.update = function (parameters) {
        if (!(parameters || parameters.entitySet || parameters.key || parameters.data))
            throw "parameters: entitySet, key and data are required!";
        var urlOptions = this.urlParametersClone(parameters.entitySet);
        var options = {
            urlOptions: urlOptions,
            saveTemp: parameters.saveTemp,
            key: parameters.key,
            data: JSON.stringify(parameters.data)
        };
        var request = this._factory.update(options);
        this._overrideUrlGeneration(request, parameters.key, undefined, options.urlOptions);
        this.addRequest(this, request);
    };
    /**
    * Adds a DELETE request to delete a single item.
    * @memberOf Transaction
    * @instance
    * @param {object} parameters - The parameters for the request.
    * @param {string} parameters.key - The identifier of the item to be deleted.
    */
    Transaction.prototype.destroy = function (parameters) {
        if (!(parameters || parameters.entitySet || parameters.key))
            throw "parameters: entitySet and key are required!";
        var urlOptions = this.urlParametersClone(parameters.entitySet);
        var options = {
            urlOptions: urlOptions,
            key: parameters.key
        };
        var request = this._factory.destroy(options);
        this._overrideUrlGeneration(request, parameters.key, undefined, options.urlOptions);
        this.addRequest(this, request);
    };
    /**
    * Adds a DELETE request to retrieve the delete all of the associated members in the relation property.
    * @memberOf Transaction
    * @instance
    * @param {object} parameters - The parameters for the request.
    * @param {string} parameters.key - The identifier of the item.
    * @param {string} parameters.navigationProperty - The name of the navigation property.
    */
    Transaction.prototype.destroyRelated = function (parameters) {
        if (!(parameters || parameters.entitySet || parameters.key))
            throw "parameters: entitySet and key are required!";
        var urlOptions = this.urlParametersClone(parameters.entitySet);
        var options = {
            urlOptions: urlOptions,
            key: parameters.key,
            navigationProperty: parameters.navigationProperty
        };
        var request = this._factory.destroyRelated(options);
        var navigationPropertyURL = request.navigationProperty + '/$ref';
        this._overrideUrlGeneration(request, parameters.key, navigationPropertyURL, options.urlOptions);
        this.addRequest(this, request);
    };
    /**
    * Adds a DELETE request to retrieve the a single entry of the associated members in the relation property.
    * @memberOf Transaction
    * @instance
    * @param {object} parameters - The parameters for the request.
    * @param {string} parameters.key - The identifier of the item.
    * @param {string} parameters.navigationProperty - The name of the navigation property.
    * @param {string} parameters.relatedKey - The identifier of the related item.
    */
    Transaction.prototype.destroyRelatedById = function (parameters) {
        if (!(parameters || parameters.entitySet || parameters.key || parameters.relatedKey || parameters.navigationProperty))
            throw "parameters: entitySet, key, relatedKey and navigationProperty are required!";
        var urlOptions = this.urlParametersClone(parameters.entitySet);
        var options = {
            urlOptions: urlOptions,
            key: parameters.key,
            relatedKey: parameters.relatedKey,
            navigationProperty: parameters.navigationProperty
        };
        var request = this._factory.destroyRelatedById(options);
        this.addRequest(this, request);
    };
    /**
    * Adds a POST request to add a related item to the property collection.
    * @memberOf Transaction
    * @instance
    * @see {@link Data.createRelated}
    * @param {object} parameters - The parameters for the request.
    * @param {string} parameters.key - The identifier of the item.
    * @param {string} parameters.navigationProperty - The name of the navigation property
    */
    Transaction.prototype.createRelated = function (parameters) {
        if (!(parameters || parameters.entitySet || parameters.key || parameters.link || parameters.navigationProperty))
            throw "parameters: entitySet, key, link and navigationProperty are required!";
        // TODO: rethink about the urls
        var urlOptions = this.urlParametersClone(parameters.entitySet);
        for (var index = 0; index < this._requests.length; index += 1) {
            if (this._requests[index].id == parameters.link) {
                parameters.link = "$" + this._requests[index].id;
            }
        }
        var data = {
            '@odata.id': parameters.link
        };
        var options = {
            urlOptions: urlOptions,
            key: parameters.key,
            navigationProperty: parameters.navigationProperty,
            data: JSON.stringify(data)
        };
        var request = this._factory.createRelated(options);
        var navigationPropertyURL = request.navigationProperty + '/$ref';
        this._overrideUrlGeneration(request, parameters.key, navigationPropertyURL, options.urlOptions);
        return this.addRequest(this, request);
    };
    Transaction.prototype._overrideUrlGeneration = function (request, key, additionalPropertyURL, sfParams) {
        // TODO: match requests with Content-ID's!
        // Content-ID's are the same as id's in _requests.
        for (var index = 0; index < this._requests.length; index += 1) {
            if (this._requests[index].id == key) {
                request._buildUrl = function () {
                    var uri = "$" + key;
                    if (additionalPropertyURL !== undefined) {
                        uri = uri + '/' + additionalPropertyURL;
                    }
                    if (sfParams) {
                        var queryString = request._getQueryString(sfParams);
                        if (queryString) {
                            uri = uri + queryString;
                        }
                    }
                    return uri;
                };
            }
        }
    };
    Transaction.prototype.addRequest = function (that, request) {
        that._requests.push({ "id": that._counter, "request": request });
        return that._counter++;
    };
    Transaction.prototype.urlParametersClone = function (entitySet) {
        var options = utils_1.utils.clone(this.urlOptions);
        options.entitySet = entitySet;
        return options;
    };
    return Transaction;
}());
/**
 * @classdesc The batch request class is used for grouping requests into a single batch request to execute on the server.
 * @class BatchRequest
 */
var BatchRequest = /** @class */ (function (_super) {
    tslib_1.__extends(BatchRequest, _super);
    function BatchRequest(options) {
        var _this = _super.call(this, options) || this;
        _this._factory = options._factory;
        _this._requests = [];
        _this._counter = 0;
        _this.boundary = _this._createBoundary("sf_batch_");
        _this.responseHeaderRegex = /^([^()<>@,;:\\"\/[\]?={} \t]+)\s?:\s?(.*)/;
        _this.responseStatusRegex = /^HTTP\/1\.\d (\d{3}) (.*)$/i;
        return _this;
    }
    /**
    * Adds a GET request to retrieve a collection of items.
    * @memberOf BatchRequest
    * @instance
    * @param {object} parameters - The parameters for the request.
    * @param {object} parameters.query - The {@link WhereQuery} with which to filter the items
    */
    BatchRequest.prototype.get = function (parameters) {
        if (!(parameters || parameters.entitySet))
            throw "entitySet is required!";
        var urlOptions = this.urlParametersClone(parameters.entitySet);
        if (parameters && parameters.query)
            urlOptions.ODataParams = parameters.query;
        var options = {
            urlOptions: urlOptions,
            fallbackProperties: parameters.fallbackPropertyNames
        };
        var request = this._factory.get(options);
        this.addRequest(request);
    };
    /**
    * Adds a GET request for the retrieval of a single item.
    * @memberOf BatchRequest
    * @instance
    * @param {object} parameters - The parameters for the request.
    * @param {object} parameters.query - The {@link QueryBase} object containing the OData query options that should be sent to the server.
    * @param {string} parameters.key - The identifier of the item to be retrieved.
    */
    BatchRequest.prototype.getSingle = function (parameters) {
        if (!(parameters || parameters.entitySet || parameters.key))
            throw "parameters: entitySet and key are required!";
        var urlOptions = this.urlParametersClone(parameters.entitySet);
        var options = {
            urlOptions: urlOptions,
            key: parameters.key
        };
        if (parameters.query)
            options.ODataParams = parameters.query;
        var request = this._factory.getSingle(options);
        this.addRequest(request);
    };
    /**
    * Adds a GET request to get the property of a single item.
    * @memberOf BatchRequest
    * @instance
    * @param {object} parameters - The parameters for the request.
    * @param {string} parameters.key - The identifier of the item.
    * @param {string} parameters.property - The name of the property to be retrieved.
    */
    BatchRequest.prototype.getProperty = function (parameters) {
        if (!(parameters || parameters.entitySet || parameters.key, parameters.property))
            throw "parameters: entitySet, key and property are required!";
        var urlOptions = this.urlParametersClone(parameters.entitySet);
        var options = {
            urlOptions: urlOptions,
            key: parameters.key,
            navigationProperty: parameters.property
        };
        var request = this._factory.getProperty(options);
        this.addRequest(request);
    };
    /**
    * Adds a GET request to get the related property value of a single item.
    * @memberOf BatchRequest
    * @instance
    * @param {object} parameters - The parameters for the request.
    * @param {string} parameters.key - The identifier of the item.
    * @param {string} parameters.navigationProperty - The name of the navigation property to be retrieved.
    */
    BatchRequest.prototype.getRelated = function (parameters) {
        if (!(parameters || parameters.entitySet || parameters.key || parameters.navigationProperty))
            throw "parameters: entitySet, key and navigationProperty are required!";
        var urlOptions = this.urlParametersClone(parameters.entitySet);
        var options = {
            urlOptions: urlOptions,
            key: parameters.key,
            navigationProperty: parameters.navigationProperty
        };
        var request = this._factory.getRelated(options);
        this.addRequest(request);
    };
    /**
    * Adds a GET request to retrieve the related property value of a single item by the id of the related item.
    * @memberOf BatchRequest
    * @instance
    * @param {object} parameters - The parameters for the request.
    * @param {string} parameters.key - The identifier of the item.
    * @param {string} parameters.navigationProperty - The name of the navigation property to be retrieved.
    * @param {string} parameters.relatedKey - The identifier of the related item.
    */
    BatchRequest.prototype.getRelatedById = function (parameters) {
        if (!(parameters || parameters.entitySet || parameters.key || parameters.relatedKey || parameters.navigationProperty))
            throw "parameters: entitySet, key, relatedKey and navigationProperty are required!";
        var urlOptions = this.urlParametersClone(parameters.entitySet);
        var options = {
            urlOptions: urlOptions,
            key: parameters.key,
            relatedKey: parameters.relatedKey,
            navigationProperty: parameters.navigationProperty
        };
        var request = this._factory.getRelatedById(options);
        this.addRequest(request);
    };
    /**
    * Begins a transaction.
    * @memberOf BatchRequest
    * @instance
    * @returns {@link Transaction}
    */
    BatchRequest.prototype.beginTransaction = function () {
        var option = utils_1.utils.clone(this.urlOptions);
        var newTransaction = new Transaction(option, this._factory);
        newTransaction.id = ++this._counter;
        return newTransaction;
    };
    /**
    * Ends a transaction.
    * @memberOf BatchRequest
    * @instance
    */
    BatchRequest.prototype.endTransaction = function (transaction) {
        this._requests.push({
            id: transaction.id,
            request: transaction
        });
    };
    BatchRequest.prototype._getBody = function () {
        return this._buildRequestBody();
    };
    BatchRequest.prototype._getMethod = function () {
        return httpMethods.Post;
    };
    BatchRequest.prototype._getHeaders = function () {
        var contentType = "multipart/mixed; boundary=" + this.boundary;
        var headers = {};
        headers[headerNames.contentType] = contentType;
        return headers;
    };
    BatchRequest.prototype._buildUrl = function () {
        var url = this.urlOptions.baseUrl + "$batch";
        var queryString = this._getQueryString(this.urlOptions);
        if (queryString) {
            url += queryString;
        }
        return url;
    };
    BatchRequest.prototype._parseResponse = function (http) {
        var context = {
            position: 0,
            boundaries: []
        };
        var pos = context.position;
        var partHeaders = this._readHeaders(http.getAllResponseHeaders(), context);
        var partContentType = this._contentType(partHeaders["content-type"]);
        if (partContentType && partContentType.mediaType == "multipart/mixed") {
            context.boundaries.push(partContentType.properties.boundary);
        }
        context.position = pos;
        var batchResponse = this._parseBatchResponse(http.responseText, context);
        var responseParsed = [];
        for (var i = 0; i < batchResponse.length; i++) {
            try {
                var finalResult = null;
                var singleResponse = batchResponse[i];
                var changesets = singleResponse.__changeResponses;
                if (changesets) {
                    finalResult = [];
                    for (var j = 0; j < changesets.length; j++) {
                        var changeset = changesets[j];
                        var response = changeset.response;
                        var responseResult = this._getResponseResult(response);
                        finalResult.push(responseResult);
                    }
                }
                else {
                    var response = singleResponse.response;
                    finalResult = this._getResponseResult(response);
                }
                var statusCodeCheck = function (r) {
                    return r.statusCode >= 400;
                };
                var isSuccessful = Array.isArray(finalResult) ?
                    finalResult.filter(statusCodeCheck).length === 0 :
                    !statusCodeCheck(finalResult);
                responseParsed.push({ isSuccessful: isSuccessful, response: finalResult });
            }
            catch (e) {
                // TODO: why continue ?
                continue;
            }
        }
        var isSuccessfulCheck = function (r) {
            return !r.isSuccessful;
        };
        var batchIsSuccessful = responseParsed.filter(isSuccessfulCheck).length === 0;
        return { data: responseParsed, isSuccessful: batchIsSuccessful };
    };
    BatchRequest.prototype._parseBatchResponse = function (text, context) {
        // get boundary from response
        var delimiter = "--" + this._currentBoundary(context);
        this._readTo(text, delimiter, context);
        this._readLine(text, context);
        var responses = [];
        var partEnd;
        while (partEnd !== "--" && context.position < text.length) {
            var partHeaders = this._readHeaders(text, context);
            var partContentType = this._contentType(partHeaders["content-type"]);
            var changeResponses;
            if (partContentType && partContentType.mediaType === "multipart/mixed") {
                context.boundaries.push(partContentType.properties.boundary);
                try {
                    changeResponses = this._parseBatchResponse(text, context);
                }
                catch (e) {
                    e.response = this._readResponse(text, context, delimiter);
                    changeResponses = [e];
                }
                responses.push({ __changeResponses: changeResponses });
                context.boundaries.pop();
                this._readTo(text, "--" + this._currentBoundary(context), context);
            }
            else {
                if (!partContentType || partContentType.mediaType !== "application/http") {
                    throw { message: "invalid MIME part type " };
                }
                // Skip empty line
                this._readLine(text, context);
                // Read the response
                var response = this._readResponse(text, context, delimiter);
                try {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        response = { message: response.statusCode + " Http request is OK", response: response };
                    }
                    else {
                        // Keep track of failed responses and continue processing the batch.
                        response = { message: "HTTP request failed", response: response };
                    }
                }
                catch (e) {
                    response = e;
                }
                responses.push(response);
            }
            partEnd = text.substr(context.position, 2);
            // Ignore the incoming line.
            this._readLine(text, context);
        }
        return responses;
    };
    BatchRequest.prototype._getResponseResult = function (response) {
        var responseBody = response.body;
        var data = utils_1.utils.parseStringToJson(responseBody);
        return {
            data: data,
            statusCode: response.statusCode,
            headers: response.headers
        };
    };
    BatchRequest.prototype._currentBoundary = function (context) {
        var boundaries = context.boundaries;
        return boundaries[boundaries.length - 1];
    };
    BatchRequest.prototype._contentType = function (str) {
        if (!str) {
            return null;
        }
        var contentTypeParts = str.split(";");
        var properties = {};
        var i, len;
        for (i = 1, len = contentTypeParts.length; i < len; i++) {
            var contentTypeParams = contentTypeParts[i].split("=");
            properties[contentTypeParams[0].replace(/^\s+|\s+$/g, '')] = contentTypeParams[1];
        }
        return { mediaType: contentTypeParts[0].replace(/^\s+|\s+$/g, ''), properties: properties };
    };
    BatchRequest.prototype._readTo = function (text, str, context) {
        var start = context.position || 0;
        var end = text.length;
        if (str) {
            end = text.indexOf(str, start);
            if (end === -1) {
                return null;
            }
            context.position = end + str.length;
        }
        else {
            context.position = end;
        }
        return text.substring(start, end);
    };
    BatchRequest.prototype._readLine = function (text, context) {
        return this._readTo(text, BatchRequest.constants.newLine, context);
    };
    BatchRequest.prototype._readHeaders = function (text, context) {
        var headers = {};
        var parts;
        var line;
        var pos;
        do {
            pos = context.position;
            line = this._readLine(text, context);
            parts = this.responseHeaderRegex.exec(line);
            if (parts !== null) {
                headers[parts[1].toLowerCase()] = parts[2];
            }
            else {
                // Whatever was found is not a header, so reset the context position.
                context.position = pos;
            }
        } while (line && parts);
        return headers;
    };
    BatchRequest.prototype._readResponse = function (text, context, delimiter) {
        // Read the status line.
        var pos = context.position;
        var match = this.responseStatusRegex.exec(this._readLine(text, context));
        var statusCode;
        var statusText;
        var headers;
        if (match) {
            statusCode = match[1];
            statusText = match[2];
            headers = this._readHeaders(text, context);
            this._readLine(text, context);
        }
        else {
            context.position = pos;
        }
        return {
            statusCode: statusCode,
            statusText: statusText,
            headers: headers,
            body: this._readTo(text, "\r\n" + delimiter, context)
        };
    };
    BatchRequest.prototype._buildRequestBody = function () {
        var builder = new BlobBuilder_1.BlobBuilder();
        builder.append('');
        for (var index = 0; index < this._requests.length; index += 1) {
            var request = this._requests[index].request;
            if (index != 0)
                builder.append(BatchRequest.constants.newLine + BatchRequest.constants.newLine);
            builder.append("--" + this.boundary);
            if (request instanceof Transaction) {
                builder.append(this._buildTransaction(request));
            }
            else {
                builder.append(this._buildRequest(request));
            }
        }
        builder.append(this._createDelimeter(this.boundary, true));
        return builder.build();
    };
    BatchRequest.prototype._buildRequest = function (request) {
        var builder = new BlobBuilder_1.BlobBuilder();
        builder.append(BatchRequest.constants.newLine + 'Content-Type: application/http' +
            BatchRequest.constants.newLine + 'Content-Transfer-Encoding: binary' +
            BatchRequest.constants.newLine +
            BatchRequest.constants.newLine +
            request._getMethod() +
            ' ' + request._buildUrl() + ' HTTP/1.1');
        return builder.build();
    };
    BatchRequest.prototype._buildTransaction = function (transaction) {
        if (transaction._requests.length == 0)
            return;
        var builder = new BlobBuilder_1.BlobBuilder();
        builder.append(BatchRequest.constants.newLine);
        var changeset = this._createBoundary("sf_changeset_");
        builder.append('Content-Type: multipart/mixed; boundary=' + changeset);
        var changesetRequests = transaction._requests;
        for (var index = 0; index < changesetRequests.length; index += 1) {
            var currentRequest = changesetRequests[index].request;
            builder.append(this._createDelimeter(changeset, false) +
                BatchRequest.constants.newLine + 'Content-Type: application/http' +
                BatchRequest.constants.newLine + 'Content-Transfer-Encoding: binary' +
                BatchRequest.constants.newLine + 'Content-ID: ' + changesetRequests[index].id);
            var requestUrl = currentRequest._buildUrl();
            builder.append('\r\n\r\n' + currentRequest._getMethod() + ' ' + requestUrl + ' HTTP/1.1');
            var headers = currentRequest._getHeaders();
            var headerNames = Object.keys(headers);
            for (var i = 0; i < headerNames.length; i++) {
                var headerName = headerNames[i];
                builder.append(BatchRequest.constants.newLine + headerName + ": " + headers[headerName]);
            }
            var body = currentRequest._getBody();
            if (body) {
                builder.append('\r\n\r\n');
                builder.append(body);
            }
        }
        builder.append(this._createDelimeter(changeset, true));
        return builder.build();
    };
    BatchRequest.prototype._createDelimeter = function (boundary, close) {
        var result = BatchRequest.constants.newLine +
            BatchRequest.constants.newLine
            + "--" + boundary;
        if (close)
            result += "--";
        return result;
    };
    BatchRequest.prototype._createBoundary = function (prefix) {
        return prefix + utils_1.utils.hex16() + '-' + utils_1.utils.hex16() + '-' + utils_1.utils.hex16();
    };
    BatchRequest.prototype.addRequest = function (request) {
        return Transaction.prototype.addRequest(this, request);
    };
    BatchRequest.prototype.urlParametersClone = function (entitySet) {
        return Transaction.prototype.urlParametersClone.call(this, entitySet);
    };
    BatchRequest.constants = {
        newLine: '\r\n'
    };
    return BatchRequest;
}(Request_1.RequestBase));
module.exports = BatchRequest;


/***/ }),

/***/ "./src/Requests/ExecutableRequest.ts":
/*!*******************************************!*\
  !*** ./src/Requests/ExecutableRequest.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var headerNames = __webpack_require__(/*! ../Headers */ "./src/Headers.ts").headerNames;
var XMLHttpRequestDone = 4;
function isFunction(func) {
    return typeof func === 'function';
}
var ExecutableRequest = /** @class */ (function () {
    function ExecutableRequest(options) {
        this._getMethod = function () {
            return this.request._getMethod();
        };
        this._getHeaders = function () {
            return this.request._getHeaders();
        };
        this._getQueryString = function (urlOptions) {
            return this.request._getQueryString(urlOptions);
        };
        this._buildUrl = function () {
            return this.request._buildUrl();
        };
        this.request = options.request;
        this.handlers = options.handlers;
        this.token = options.token;
    }
    ExecutableRequest.prototype.execute = function () {
        this._execute();
    };
    ExecutableRequest.prototype._execute = function () {
        var _this = this;
        var http = new XMLHttpRequest();
        http.onreadystatechange = function () {
            if (http.readyState === XMLHttpRequestDone) {
                if (http.status > 0) {
                    var data = _this.request._parseResponse(http);
                    if (http.status >= 200 && http.status <= 206) {
                        if (isFunction(_this.request.successCb)) {
                            _this.request.successCb(data);
                        }
                        if (_this.handlers && isFunction(_this.handlers.successCb)) {
                            _this.handlers.successCb(data);
                        }
                    }
                    else if (http.status >= 400) {
                        // When the data is string, we save the string as message
                        // and convert the data to normal object with message property
                        if (utils_1.utils.isString(data)) {
                            var message = data;
                            data = {
                                message: message
                            };
                        }
                        data.status = http.status;
                        // in case of errors we would like there to be one handler for all of the errors
                        if (isFunction(_this.request.failureCb)) {
                            _this.request.failureCb(data);
                        }
                        if (_this.handlers && isFunction(_this.handlers.failureCb)) {
                            _this.handlers.failureCb(data);
                        }
                    }
                }
            }
        };
        if (isFunction(this.request.progressCb)) {
            if (http.upload) {
                var that = this;
                http.upload.onprogress = function (event) {
                    that.request.progressCb(event);
                };
            }
        }
        var method = this._getMethod();
        var url = this._buildUrl();
        http.open(method, url, true);
        this.setHeaders(http, this._getHeaders());
        http.send(this._getBody());
    };
    ExecutableRequest.prototype.setHeaders = function (http, headers) {
        var headerKeys = Object.keys(headers);
        for (var i = 0; i < headerKeys.length; i++) {
            var currentHeaderName = headerKeys[i];
            http.setRequestHeader(currentHeaderName, headers[currentHeaderName]);
        }
        if (this.token) {
            if (typeof this.token === 'string') {
                // for backward compatibility
                http.setRequestHeader(headerNames.authorization, this.token);
            }
            else {
                http.setRequestHeader(headerNames.authorization, this.token.type + " " + this.token.value);
            }
        }
        // for backward compatibility
        http.setRequestHeader(headerNames.serviceRequest, "true");
    };
    ExecutableRequest.prototype._getBody = function () {
        var body = utils_1.utils.serializeToJSON(this.request._getBody());
        return body;
    };
    return ExecutableRequest;
}());
exports.ExecutableRequest = ExecutableRequest;


/***/ }),

/***/ "./src/Requests/Request.ts":
/*!*********************************!*\
  !*** ./src/Requests/Request.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var constants = __webpack_require__(/*! ../constants */ "./src/constants.ts").default;
var headerNames = __webpack_require__(/*! ../Headers */ "./src/Headers.ts").headerNames;
var contentTypes = __webpack_require__(/*! ../ContentTypes */ "./src/ContentTypes.ts").default;
var httpMethods = __webpack_require__(/*! ../HttpMethods */ "./src/HttpMethods.ts").default;
var RequestBase = /** @class */ (function () {
    function RequestBase(options) {
        this.successCb = options.successCb;
        this.failureCb = options.failureCb;
        this.urlOptions = options.urlOptions;
        this.progressCb = options.progressCb;
        this.key = options.key;
        this.action = options.action;
        this._fallbackProperties = options.fallbackProperties;
    }
    RequestBase.prototype._getBody = function () {
        return undefined;
    };
    RequestBase.prototype._getMethod = function () {
        return null;
    };
    RequestBase.prototype._getHeaders = function () {
        var headers = {};
        headers[headerNames.contentType] = contentTypes.json;
        return headers;
    };
    RequestBase.prototype._getQueryParameters = function (paramDictionary, urlOptions) {
        var clause = constants.SfParams;
        if (urlOptions.SFParams) {
            var sfParams = urlOptions.SFParams;
            if (sfParams.provider) {
                paramDictionary[clause.provider] = sfParams.provider;
            }
            if (sfParams.culture) {
                paramDictionary[clause.culture] = sfParams.culture;
            }
            if (sfParams.siteId) {
                paramDictionary[clause.siteId] = sfParams.siteId;
            }
        }
        if (this._fallbackProperties) {
            paramDictionary["sf_fallback_prop_names"] = this._fallbackProperties.join();
        }
    };
    RequestBase.prototype._getQueryString = function (urlOptions) {
        var paramDictionary = {};
        this._getQueryParameters(paramDictionary, urlOptions);
        var keys = Object.keys(paramDictionary);
        if (keys.length == 0)
            return null;
        var queryString = "?";
        for (var prop in paramDictionary) {
            queryString += prop + "=" + paramDictionary[prop] + "&";
        }
        queryString = queryString.substring(0, queryString.length - 1);
        return queryString;
    };
    RequestBase.prototype._buildUrl = function () {
        var url = this.urlOptions.baseUrl + (this.urlOptions.entitySet || "");
        url += this.key ? ("(" + this.key + ")") : "";
        url += this.action ? ("/" + this.action) : "";
        // including count here
        // not the best solution as build() is called once more in getQueryString
        // but not that big of an issue right now
        if (this.urlOptions.ODataParams) {
            var getCount = this.urlOptions.ODataParams.build().$count;
            if (utils_1.utils.isBoolean(getCount) && !getCount) {
                url += "/$count";
            }
        }
        return this._addQueryParameters(url);
    };
    RequestBase.prototype._parseResponse = function (http) {
        var data = utils_1.utils.parseStringToJson(http.responseText);
        if (data) {
            if (http.status >= 400 && data.error) {
                return data.error;
            }
            return data;
        }
        return http.responseText;
    };
    RequestBase.prototype._addQueryParameters = function (url) {
        var queryString = this._getQueryString(this.urlOptions);
        if (queryString) {
            if (url.indexOf("?") > -1 && queryString[0] == "?") {
                queryString = "&" + queryString.substring(1);
            }
            url += queryString;
        }
        return url;
    };
    return RequestBase;
}());
exports.RequestBase = RequestBase;
var GetRequest = /** @class */ (function (_super) {
    tslib_1.__extends(GetRequest, _super);
    function GetRequest(options) {
        return _super.call(this, options) || this;
    }
    GetRequest.prototype._getMethod = function () {
        return httpMethods.Get;
    };
    GetRequest.prototype._getQueryParameters = function (paramDictionary, urlOptions) {
        var clause = constants.ODataParams;
        if (urlOptions.ODataParams) {
            var query = urlOptions.ODataParams.build();
            if (utils_1.utils.isString(query.$filter))
                paramDictionary[clause.$filter] = query.$filter;
            if (utils_1.utils.isString(query.$select))
                paramDictionary[clause.$select] = query.$select;
            if (utils_1.utils.isString(query.$expand))
                paramDictionary[clause.$expand] = query.$expand;
            if (utils_1.utils.isString(query.$orderby))
                paramDictionary[clause.$orderby] = query.$orderby;
            if (utils_1.utils.isNumber(query.$skip))
                paramDictionary[clause.$skip] = query.$skip;
            if (utils_1.utils.isNumber(query.$top))
                paramDictionary[clause.$top] = query.$top;
            if (utils_1.utils.isString(query.$search))
                paramDictionary[clause.$search] = query.$search;
            // inline count
            if (utils_1.utils.isBoolean(query.$count) && query.$count)
                paramDictionary[clause.$count] = query.$count;
        }
        _super.prototype._getQueryParameters.call(this, paramDictionary, urlOptions);
    };
    return GetRequest;
}(RequestBase));
exports.GetRequest = GetRequest;
var GetByIdRequest = /** @class */ (function (_super) {
    tslib_1.__extends(GetByIdRequest, _super);
    function GetByIdRequest(options) {
        return _super.call(this, options) || this;
    }
    GetByIdRequest.prototype._getMethod = function () {
        return httpMethods.Get;
    };
    GetByIdRequest.prototype._getQueryParameters = function (paramDictionary, urlOptions) {
        var clause = constants.ODataParams;
        if (urlOptions.ODataParams) {
            var query = urlOptions.ODataParams.build();
            if (utils_1.utils.isString(query.$select))
                paramDictionary[clause.$select] = query.$select;
            if (utils_1.utils.isString(query.$expand))
                paramDictionary[clause.$expand] = query.$expand;
        }
        _super.prototype._getQueryParameters.call(this, paramDictionary, urlOptions);
    };
    return GetByIdRequest;
}(RequestBase));
exports.GetByIdRequest = GetByIdRequest;
var DeleteRequest = /** @class */ (function (_super) {
    tslib_1.__extends(DeleteRequest, _super);
    function DeleteRequest(options) {
        return _super.call(this, options) || this;
    }
    DeleteRequest.prototype._getMethod = function () {
        return httpMethods.Delete;
    };
    return DeleteRequest;
}(RequestBase));
exports.DeleteRequest = DeleteRequest;
var UpdateRequest = /** @class */ (function (_super) {
    tslib_1.__extends(UpdateRequest, _super);
    function UpdateRequest(options) {
        var _this = _super.call(this, options) || this;
        _this._data = options.data;
        _this._saveTemp = options.saveTemp;
        return _this;
    }
    UpdateRequest.prototype._getMethod = function () {
        return httpMethods.Patch;
    };
    UpdateRequest.prototype._getBody = function () {
        var body = utils_1.utils.convertDateFieldToISOString(this._data);
        return body;
    };
    UpdateRequest.prototype._getHeaders = function () {
        var headers = RequestBase.prototype._getHeaders.call(this);
        if (this._saveTemp) {
            headers[headerNames.operation] = "SaveTemp";
        }
        return headers;
    };
    return UpdateRequest;
}(RequestBase));
exports.UpdateRequest = UpdateRequest;
var CreateRequest = /** @class */ (function (_super) {
    tslib_1.__extends(CreateRequest, _super);
    function CreateRequest(options) {
        var _this = _super.call(this, options) || this;
        _this._data = options.data;
        return _this;
    }
    CreateRequest.prototype._getMethod = function () {
        return httpMethods.Post;
    };
    CreateRequest.prototype._getBody = function () {
        var body = utils_1.utils.convertDateFieldToISOString(this._data);
        return body;
    };
    return CreateRequest;
}(RequestBase));
exports.CreateRequest = CreateRequest;
var GetRelatedRequest = /** @class */ (function (_super) {
    tslib_1.__extends(GetRelatedRequest, _super);
    function GetRelatedRequest(options) {
        var _this = _super.call(this, options) || this;
        _this.navigationProperty = options.navigationProperty;
        return _this;
    }
    GetRelatedRequest.prototype._buildUrl = function () {
        var url = this.urlOptions.baseUrl + this.urlOptions.entitySet + "(" + this.key + ")/" + this.navigationProperty;
        return this._addQueryParameters(url);
    };
    return GetRelatedRequest;
}(GetByIdRequest));
exports.GetRelatedRequest = GetRelatedRequest;
var GetRelatedByIdRequest = /** @class */ (function (_super) {
    tslib_1.__extends(GetRelatedByIdRequest, _super);
    function GetRelatedByIdRequest(options) {
        var _this = _super.call(this, options) || this;
        _this.navigationProperty = options.navigationProperty;
        _this.relatedKey = options.relatedKey;
        return _this;
    }
    GetRelatedByIdRequest.prototype._buildUrl = function () {
        var url = this.urlOptions.baseUrl + this.urlOptions.entitySet + "(" + this.key + ")/" + this.navigationProperty + "(" + this.relatedKey + ")";
        return this._addQueryParameters(url);
    };
    return GetRelatedByIdRequest;
}(GetByIdRequest));
exports.GetRelatedByIdRequest = GetRelatedByIdRequest;
var DeleteRelatedRequest = /** @class */ (function (_super) {
    tslib_1.__extends(DeleteRelatedRequest, _super);
    function DeleteRelatedRequest(options) {
        var _this = _super.call(this, options) || this;
        _this.navigationProperty = options.navigationProperty;
        return _this;
    }
    DeleteRelatedRequest.prototype._buildUrl = function () {
        var url = this.urlOptions.baseUrl + this.urlOptions.entitySet + "(" + this.key + ")/" + this.navigationProperty + "/$ref";
        return this._addQueryParameters(url);
    };
    return DeleteRelatedRequest;
}(DeleteRequest));
exports.DeleteRelatedRequest = DeleteRelatedRequest;
var DeleteRelatedByIdRequest = /** @class */ (function (_super) {
    tslib_1.__extends(DeleteRelatedByIdRequest, _super);
    function DeleteRelatedByIdRequest(options) {
        var _this = _super.call(this, options) || this;
        _this.navigationProperty = options.navigationProperty;
        _this.relatedKey = options.relatedKey;
        return _this;
    }
    DeleteRelatedByIdRequest.prototype._buildUrl = function () {
        var url = this.urlOptions.baseUrl + this.urlOptions.entitySet + "(" + this.key + ")/" + this.navigationProperty + "(" + this.relatedKey + ")/$ref";
        return this._addQueryParameters(url);
    };
    return DeleteRelatedByIdRequest;
}(DeleteRequest));
exports.DeleteRelatedByIdRequest = DeleteRelatedByIdRequest;
var CreateRelatedRequest = /** @class */ (function (_super) {
    tslib_1.__extends(CreateRelatedRequest, _super);
    function CreateRelatedRequest(options) {
        var _this = _super.call(this, options) || this;
        _this.navigationProperty = options.navigationProperty;
        _this.key = options.key;
        return _this;
    }
    CreateRelatedRequest.prototype._buildUrl = function () {
        var url = this.urlOptions.baseUrl + this.urlOptions.entitySet + "(" + this.key + ")/" + this.navigationProperty + "/$ref";
        return this._addQueryParameters(url);
    };
    return CreateRelatedRequest;
}(CreateRequest));
exports.CreateRelatedRequest = CreateRelatedRequest;
var UploadRequest = /** @class */ (function (_super) {
    tslib_1.__extends(UploadRequest, _super);
    function UploadRequest(options) {
        var _this = _super.call(this, options) || this;
        _this.fileName = options.fileName;
        _this.uploadProperties = options.uploadProperties;
        _this.contentType = options.contentType;
        return _this;
    }
    UploadRequest.prototype._getHeaders = function () {
        var headers = _super.prototype._getHeaders.call(this);
        headers[headerNames.contentType] = this.contentType || "application/octet-stream";
        headers[headerNames.fileName] = this.fileName;
        headers[headerNames.properties] = this.uploadProperties;
        headers[headerNames.contentEncoding] = "identity";
        return headers;
    };
    UploadRequest.prototype._getBody = function () {
        return this._data;
    };
    return UploadRequest;
}(CreateRequest));
exports.UploadRequest = UploadRequest;


/***/ }),

/***/ "./src/Requests/RequestFactory.ts":
/*!****************************************!*\
  !*** ./src/Requests/RequestFactory.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Request_1 = __webpack_require__(/*! ./Request */ "./src/Requests/Request.ts");
var ExecutableRequest_1 = __webpack_require__(/*! ./ExecutableRequest */ "./src/Requests/ExecutableRequest.ts");
var BatchRequest = __webpack_require__(/*! ./BatchRequest */ "./src/Requests/BatchRequest.ts");
var RequestFactory = /** @class */ (function () {
    function RequestFactory(options) {
        this.token = null;
        this.handlers = options.handlers;
    }
    RequestFactory.prototype.get = function (parameters) {
        return this.createExecutor(new Request_1.GetRequest(parameters));
    };
    RequestFactory.prototype.getSingle = function (parameters) {
        return this.createExecutor(new Request_1.GetByIdRequest(parameters));
    };
    RequestFactory.prototype.create = function (parameters) {
        return this.createExecutor(new Request_1.CreateRequest(parameters));
    };
    RequestFactory.prototype.update = function (parameters) {
        return this.createExecutor(new Request_1.UpdateRequest(parameters));
    };
    RequestFactory.prototype.destroy = function (parameters) {
        return this.createExecutor(new Request_1.DeleteRequest(parameters));
    };
    RequestFactory.prototype.getProperty = function (parameters) {
        return this.createExecutor(new Request_1.GetRelatedRequest(parameters));
    };
    RequestFactory.prototype.getRelated = function (parameters) {
        return this.createExecutor(new Request_1.GetRelatedRequest(parameters));
    };
    RequestFactory.prototype.getRelatedById = function (parameters) {
        return this.createExecutor(new Request_1.GetRelatedByIdRequest(parameters));
    };
    RequestFactory.prototype.destroyRelated = function (parameters) {
        return this.createExecutor(new Request_1.DeleteRelatedRequest(parameters));
    };
    RequestFactory.prototype.destroyRelatedById = function (parameters) {
        return this.createExecutor(new Request_1.DeleteRelatedByIdRequest(parameters));
    };
    RequestFactory.prototype.createRelated = function (parameters) {
        return this.createExecutor(new Request_1.CreateRelatedRequest(parameters));
    };
    RequestFactory.prototype.batch = function (parameters) {
        parameters._factory = this;
        return new BatchRequest(parameters);
    };
    RequestFactory.prototype.upload = function (parameters) {
        return this.createExecutor(new Request_1.UploadRequest(parameters));
    };
    RequestFactory.prototype.createExecutor = function (request) {
        var executor = new ExecutableRequest_1.ExecutableRequest({
            request: request,
            handlers: this.handlers || {},
            token: this.token
        });
        // TODO
        executor.navigationProperty = request.navigationProperty;
        return executor;
    };
    return RequestFactory;
}());
exports.RequestFactory = RequestFactory;


/***/ }),

/***/ "./src/Sitefinity.ts":
/*!***************************!*\
  !*** ./src/Sitefinity.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var RequestFactory_1 = __webpack_require__(/*! ./Requests/RequestFactory */ "./src/Requests/RequestFactory.ts");
var Authentication_1 = __webpack_require__(/*! ./Authentication */ "./src/Authentication.ts");
var Data_1 = __webpack_require__(/*! ./Data */ "./src/Data.ts");
var Query_1 = __webpack_require__(/*! ./Query */ "./src/Query.ts");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/**
* @class Sitefinity
* @classdesc The constructor of the Sitefinity JavaScript SDK. This is the entry point for the SDK.
* @property {Object} authentication - The authentication object used for authenticating to Sitefinity. See {@link Authentication}
* @param {object} options - An object containing configuration options for the Setup object.
* @param {string} options.serviceUrl - Your service url that points to the configured instance of Sitefinity service.
* @param {string} options.siteId - The ID of the site, for which the query will be executed.
* @param {string} options.handlers - The global handlers for request execution
* @param {string} options.handlers.successCb - The success handler.
* @param {string} options.handlers.failureCb - The failure handler.
*/
var Sitefinity = /** @class */ (function () {
    function Sitefinity(options) {
        this.profileUrl = utils_1.utils.addTrailingSlash(options.serviceUrl);
        this.siteId = options.siteId;
        this.factory = new RequestFactory_1.RequestFactory({
            handlers: options.handlers
        });
        this.authentication = new Authentication_1.Authentication({
            serviceUrl: this.profileUrl,
            factory: this.factory
        });
    }
    /**
* Creates a new {@link Data} class.
* @memberOf Sitefinity
* @instance
* @param {object} options - An object containing configuration options for the Setup object.
* @param {string} options.urlName - The URL name of the type..
* @param {string} [options.providerName] - The name of the provider. If empty the default provider for the site will be used.
* @param {string} [options.cultureName] - The name of the culture. If empty the default culture for the site will be used.
* @example
* var data = sf.data({
*     urlName: "newsitems",
*     providerName: "OpenAccessDataProvider",
*     cultureName: "en"
* });
* @returns {Data}
*/
    Sitefinity.prototype.data = function (options) {
        var dataOptions = {
            baseUrl: this.profileUrl,
            SFParams: {
                provider: options.providerName,
                culture: options.cultureName,
                siteId: options.siteId || this.siteId
            },
            entitySet: options.urlName
        };
        this.factory.token = this.authentication.getToken();
        return new Data_1.Data(dataOptions, this.factory);
    };
    /**
    * Creates a new {@link BatchRequest} class. OData batch requests -> {@link http://docs.oasis-open.org/odata/odata/v4.0/os/part1-protocol/odata-v4.0-os-part1-protocol.html#_Toc372793748}
    * @memberOf Sitefinity
    * @instance
    * @param {Function} success - The success callback of the batch execution.
    * @param {string} options.urlName - The URL name of the type..
    * @param {string} [options.providerName] - The name of the provider. If empty the default provider for the site will be used.
    * @param {string} [options.cultureName] - The name of the culture. If empty the default culture for the site will be used.
    * @example
    * var sf = new Sitefinity({
    *   serviceUrl: 'http://mydomain/route/service/'
    * });
    *
    * var batch = sf.batch(successCbBatch, failureCb);
    * batch.get({
    *     entitySet: entitySet,
    *     query: query8
    * });
    *
    * var transaction = batch.beginTransaction();
    * var createId = transaction.create({
    *     entitySet: entitySet,
    *     data: newsItem
    * });
    *
    * batch.endTransaction(transaction);
    *
    * var transaction2 = batch.beginTransaction();
    * var createId2 = transaction2.create({
    *     entitySet: entitySet,
    *     data: newsItem
    * });
    *
    * var updateId2 = transaction2.update({
    *     entitySet: entitySet,
    *     key: createId2,
    *     data: newsItemUpdate
    * });
    *
    * batch.endTransaction(transaction2);
    *
    * batch.get({
    *     entitySet: entitySet
    * });
    *
    * batch.execute();
    * @returns {BatchRequest}
    */
    Sitefinity.prototype.batch = function (success, failure, progress, options) {
        if (typeof progress !== 'function') {
            options = progress;
            progress = null;
        }
        if (!options)
            options = {};
        this.factory.token = this.authentication.getToken();
        var batch = this.factory.batch({
            successCb: success,
            failureCb: failure,
            progressCb: progress,
            urlOptions: {
                baseUrl: this.profileUrl,
                SFParams: {
                    provider: options.providerName,
                    culture: options.cultureName,
                    siteId: this.siteId
                }
            }
        });
        var executor = this.factory.createExecutor(batch);
        executor.beginTransaction = function () {
            return batch.beginTransaction();
        };
        executor.endTransaction = function (transaction) {
            batch.endTransaction(transaction);
        };
        executor.get = function (options) {
            batch.constructor.prototype.get.call(batch, options);
        };
        executor.getOperations = function (options) {
            batch.constructor.prototype.getOperations.call(batch, options);
        };
        executor.getSingle = function (options) {
            batch.constructor.prototype.getSingle.call(batch, options);
        };
        executor.getProperty = function (options) {
            batch.constructor.prototype.getProperty.call(batch, options);
        };
        executor.getRelated = function (options) {
            batch.constructor.prototype.getRelated.call(batch, options);
        };
        executor.getRelatedById = function (options) {
            batch.constructor.prototype.getRelatedById.call(batch, options);
        };
        return executor;
    };
    Sitefinity.Query = Query_1.Query;
    return Sitefinity;
}());
exports.Sitefinity = Sitefinity;


/***/ }),

/***/ "./src/WhereQuery.ts":
/*!***************************!*\
  !*** ./src/WhereQuery.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Expression_1 = __webpack_require__(/*! ./Expression */ "./src/Expression.ts");
var OperatorType = __webpack_require__(/*! ./constants */ "./src/constants.ts").default.ExpressionType;
/**
 * @classdesc A fluent API operation for creating a filter for a query by chaining different rules.
 * @class WhereQuery
 * @protected
 */
var WhereQuery = /** @class */ (function () {
    function WhereQuery(parent, type) {
        if (type === void 0) { type = OperatorType.and; }
        this.parent = parent;
        this.expression = new Expression_1.ComplexExpression(type, []);
    }
    /**
    * Adds an `and` clause to the current condition and returns it for further chaining.
    * @method and
    * @memberOf WhereQuery.prototype
    * @returns {WhereQuery}
    */
    WhereQuery.prototype.and = function () {
        return new WhereQuery(this, OperatorType.and);
    };
    /**
     * Adds an `or` clause to the current condition and returns it for further chaining.
     * @method or
     * @memberOf WhereQuery.prototype
     * @returns {WhereQuery}
     */
    WhereQuery.prototype.or = function () {
        return new WhereQuery(this, OperatorType.or);
    };
    /**
     * Adds an `any` clause to the current condition and returns it for further chaining.
     * @method any
     * @memberOf WhereQuery.prototype
     * @returns {WhereQuery}
     */
    WhereQuery.prototype.any = function () {
        return new WhereQuery(this, OperatorType.any);
    };
    /**
     * Adds a `not` clause to the current condition and returns it for further chaining.
     * @method not
     * @memberOf WhereQuery.prototype
     * @returns {WhereQuery}
     */
    WhereQuery.prototype.not = function () {
        return new WhereQuery(this, OperatorType.not);
    };
    WhereQuery.prototype._simple = function (type, parameter, constant) {
        var currentExpr = new Expression_1.BinaryExpression(type, parameter, constant);
        var subExpressions = this.expression.getExpressions();
        subExpressions.push(currentExpr);
        if (this.expression.getType() === OperatorType.not && subExpressions.length > 1)
            throw new Error("Invalid operators count!");
        return this;
    };
    /**
     * Adds a condition that a field must be equal to a specific value.
     * @method eq
     * @memberOf WhereQuery.prototype
     * @param {string} field Field name.
     * @param {*} value Comparison value (to which the fields must be equal).
     * @returns {WhereQuery}
     */
    WhereQuery.prototype.eq = function (parameter, constant) {
        return this._simple(OperatorType.eq, parameter, constant);
    };
    /**
     * Adds a condition that a field must *not* be equal to a specific value.
     * @method ne
     * @memberOf WhereQuery.prototype
     * @param {string} field Field name.
     * @param {*} value Comparison value (to which the field must not be equal).
     * @returns {WhereQuery}
     */
    WhereQuery.prototype.ne = function (parameter, constant) {
        return this._simple(OperatorType.ne, parameter, constant);
    };
    /**
     * Adds a condition that a field must be `greater than` a certain value. Applicable to Number, String, and Date fields.
     * @method gt
     * @memberOf WhereQuery.prototype
     * @param {string} field Field name.
     * @param {*} value Comparison value (that the field should be greater than).
     * @returns {WhereQuery}
     */
    WhereQuery.prototype.gt = function (parameter, constant) {
        return this._simple(OperatorType.gt, parameter, constant);
    };
    /**
     * Adds a condition that a field must be `greater than or equal` to a certain value. Applicable to Number, String, and Date fields.
     * @method gte
     * @memberOf WhereQuery.prototype
     * @param {string} field Field name.
     * @param {*} value Comparison value (that the field should be greater than or equal to).
     * @returns {WhereQuery}
     */
    WhereQuery.prototype.gte = function (parameter, constant) {
        return this._simple(OperatorType.ge, parameter, constant);
    };
    /**
     * Adds a condition that a field must be `less than` a certain value. Applicable to Number, String, and Date fields.
     * @method lt
     * @memberOf WhereQuery.prototype
     * @param {string} field Field name.
     * @param {*} value Comparison value (that the field should be less than).
     * @returns {WhereQuery}
     */
    WhereQuery.prototype.lt = function (parameter, constant) {
        return this._simple(OperatorType.lt, parameter, constant);
    };
    /**
     * Adds a condition that a field must be `less than or equal` to a certain value. Applicable to Number, String, and Date fields.
     * @method lte
     * @memberOf WhereQuery.prototype
     * @param {string} field Field name.
     * @param {*} value Comparison value (that the field should be less than or equal to).
     * @returns {WhereQuery}
     */
    WhereQuery.prototype.lte = function (parameter, constant) {
        return this._simple(OperatorType.le, parameter, constant);
    };
    /**
     * Adds a condition that a field value must *start* with a specified string.
     * @method startsWith
     * @memberOf WhereQuery.prototype
     * @param {string} field Field name.
     * @param {string} value The string that the field should start with.
     * @param {string} [options] A string of regex options to use. See [specs](http://docs.mongodb.org/manual/reference/operator/query/regex/#op._S_options) for a description of available options.
     * @returns {WhereQuery}
     */
    WhereQuery.prototype.startsWith = function (parameter, constant) {
        return this._simple(OperatorType.startsWith, parameter, constant);
    };
    /**
     * Adds a condition that a field value must *contain* a specified string.
     * @method startsWith
     * @memberOf WhereQuery.prototype
     * @param {string} field Field name.
     * @param {string} value The string that the field should start with.
     * @param {string} [options] A string of regex options to use. See [specs](http://docs.mongodb.org/manual/reference/operator/query/regex/#op._S_options) for a description of available options.
     * @returns {WhereQuery}
     */
    WhereQuery.prototype.contains = function (parameter, constant) {
        return this._simple(OperatorType.contains, parameter, constant);
    };
    /**
     * Adds a condition that a field value must *end* with a specified string.
     * @method endsWith
     * @memberOf WhereQuery.prototype
     * @param {string} field Field name.
     * @param {string} value The string that the field should end with.
     * @param {string} [options] A string of  regex options to use. See [specs](http://docs.mongodb.org/manual/reference/operator/query/regex/#op._S_options) for a description of available options.
     * @returns {WhereQuery}
     */
    WhereQuery.prototype.endsWith = function (parameter, constant) {
        return this._simple(OperatorType.endsWith, parameter, constant);
    };
    /**
     * Ends the definition of the current WhereQuery. You need to call this method in order to continue with the definition of the parent {@link QueryBase}. All other `WhereQuery` methods return the current instance of `WhereQuery` to allow chaining.
     * @method done
     * @memberOf WhereQuery.prototype
     * @returns {Query}
     */
    WhereQuery.prototype.done = function () {
        if (this.parent instanceof WhereQuery) {
            this.parent._addComplexExpression(this);
            // TODO: If has and() || or() must call done() twice
            if (this.expression.getType() === OperatorType.not)
                return this.parent;
        }
        return this.parent;
    };
    WhereQuery.prototype._getExpression = function () {
        return this.expression;
    };
    WhereQuery.prototype._addComplexExpression = function (subQuery) {
        var subExpression = subQuery._getExpression();
        this.expression.getExpressions().push(subExpression);
    };
    return WhereQuery;
}());
exports.WhereQuery = WhereQuery;


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants = {
    ExpressionType: {
        query: 1,
        where: 100,
        and: 'and',
        or: 'or',
        not: 'not',
        eq: 'eq',
        ne: 'ne',
        lt: 'lt',
        le: 'le',
        gt: 'gt',
        ge: 'ge',
        any: 'any',
        /*isin: 126,
        notin: 127,
        all: 128,
        size: 129,
        regex: 130,*/
        contains: 'contains',
        startsWith: 'startsWith',
        endsWith: 'endsWith'
    },
    ODataParams: {
        $filter: '$filter',
        $select: '$select',
        $expand: '$expand',
        $orderby: '$orderby',
        $skip: '$skip',
        $top: '$top',
        $count: '$count',
        $search: '$search'
    },
    SfParams: {
        provider: 'sf_provider',
        culture: 'sf_culture',
        siteId: 'sf_site'
    }
};
exports.default = constants;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Sitefinity_1 = __webpack_require__(/*! ./Sitefinity */ "./src/Sitefinity.ts");
module.exports = Sitefinity_1.Sitefinity;


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils = /** @class */ (function () {
    function utils() {
    }
    utils.isString = function (obj) {
        return typeof (obj) === 'string' || obj instanceof String;
    };
    utils.isBoolean = function (obj) {
        return typeof (obj) === 'boolean';
    };
    utils.isBlob = function (obj) {
        return obj instanceof Blob;
    };
    ;
    utils.isNumber = function (value) {
        return typeof value === 'number' && isFinite(value);
    };
    ;
    utils.serializeToJSON = function (data) {
        if (!utils.isString(data) && !this.isBlob(data)) {
            return JSON.stringify(data);
        }
        return data;
    };
    utils.parseStringToJson = function (data) {
        if (!data) {
            return null;
        }
        var number = Number(data);
        if (!isNaN(number)) {
            return number;
        }
        var result = null;
        try {
            result = JSON.parse(data);
            result = utils._parseDateProperties(result);
        }
        catch (e) {
            console.log("An unexpected error occurred while parsing the response from server: " + e.message + ". Response body was: '" + data + "'");
        }
        return result;
    };
    utils.hex16 = function () {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substr(1);
    };
    utils.addTrailingSlash = function (url) {
        url = utils.removeSlashes(url);
        url += '/';
        return url;
    };
    utils.removeSlashes = function (url) {
        var ret = url;
        var fistChar = ret.substr(0, 1);
        if (fistChar == '/')
            ret = ret.substr(1);
        var lastChar = ret.substr(-1);
        if (lastChar == '/')
            ret = ret.substr(0, ret.length - 1);
        return ret;
    };
    utils.clone = function (from, to, action) {
        if (to === void 0) { to = {}; }
        if (action === void 0) { action = null; }
        if (!to)
            to = {};
        for (var property in from) {
            if (from[property] && from[property].constructor && from[property].constructor === Object && typeof from[property] == 'function') {
                to[property] = to[property] || {};
                arguments.callee(to[property], from[property]);
            }
            else {
                to[property] = from[property];
            }
            if (typeof action === 'function')
                action(to);
        }
        return to;
    };
    utils._parseDateProperties = function (data) {
        for (var obj in data) {
            // TODO
            if (data[obj] instanceof Array || (data[obj] instanceof Object && !data[obj] instanceof Function))
                this._parseDateProperties(data[obj]);
            else
                data[obj] = utils._tryFormatFieldToDate(data[obj]);
        }
        return data;
    };
    utils._tryFormatFieldToDate = function (date) {
        if ((/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/).test(date)) {
            date = new Date(date);
        }
        return date;
    };
    utils.convertDateFieldToISOString = function (data) {
        /*
        TODOSDK: when write tests for this try to use
        "Object.keys(obj).forEach(function(){})",
        Phantomjs does not recognize "for..in" operator.
        */
        for (var obj in data) {
            if (data[obj] instanceof Date) {
                data[obj] = data[obj].toISOString();
            }
        }
        return data;
    };
    return utils;
}());
exports.utils = utils;


/***/ })

/******/ });
});
//# sourceMappingURL=sitefinity-webservices-sdk.js.map