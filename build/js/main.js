"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  var _sessionStorage$getIt, _Number, _sessionStorage$getIt2;
  var apiURL = 'https://fav-prom.com/api_winning_streak';
  var mainPage = document.querySelector(".fav-page"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.play-btn'),
    loader = document.querySelector(".spinner-overlay");
  var hrLeng = document.querySelector('#hrLeng');
  var enLeng = document.querySelector('#enLeng');
  var toggleClasses = function toggleClasses(elements, className) {
    return elements.forEach(function (el) {
      return el.classList.toggle("".concat(className));
    });
  };
  var toggleTranslates = function toggleTranslates(elements, dataAttr) {
    return elements.forEach(function (el) {
      el.setAttribute('data-translate', "".concat(dataAttr));
      el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
      el.removeAttribute('data-translate');
    });
  };
  var loaderBtn = false;
  var locale = (_sessionStorage$getIt = sessionStorage.getItem("locale")) !== null && _sessionStorage$getIt !== void 0 ? _sessionStorage$getIt : "hr";
  // let locale = "hr"

  if (hrLeng) locale = 'hr';
  if (enLeng) locale = 'en';
  var debug = false;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = true;
  // let userId = null;
  var userId = (_Number = Number(sessionStorage.getItem("userId"))) !== null && _Number !== void 0 ? _Number : null;
  var request = function request(link, extraOptions) {
    return fetch(apiURL + link, _objectSpread({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, extraOptions || {})).then(function (res) {
      if (!res.ok) throw new Error('API error');
      return res.json();
    })["catch"](function (err) {
      console.error('API request failed:', err);

      // reportError(err);

      // document.querySelector('.fav-page').style.display = 'none';
      // if (window.location.href.startsWith("https://www.favbet.hr/")) {
      //     window.location.href = '/promocije/promocija/stub/';
      // } else {
      //     window.location.href = '/promos/promo/stub/';
      // }

      return Promise.reject(err);
    });
  };
  function hideLoader() {
    loader.classList.add("hide");
    document.body.style.overflow = "auto";
    mainPage.classList.remove("loading");
  }
  function init() {
    return _init.apply(this, arguments);
  }
  function _init() {
    _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var attempts, maxAttempts, attemptInterval, tryDetectUserId, quickCheckAndRender, waitForUserId;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            quickCheckAndRender = function _quickCheckAndRender() {
              checkUserAuth();
              participateBtns.forEach(function (btn) {
                return btn.addEventListener('click', participate);
              });
            };
            tryDetectUserId = function _tryDetectUserId() {
              if (window.store) {
                var state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
              } else if (window.g_user_id) {
                userId = window.g_user_id;
              }
            };
            attempts = 0;
            maxAttempts = 20;
            attemptInterval = 50;
            waitForUserId = new Promise(function (resolve) {
              var interval = setInterval(function () {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                  quickCheckAndRender();
                  clearInterval(interval);
                  resolve();
                }
                attempts++;
              }, attemptInterval);
            });
            _context.next = 8;
            return waitForUserId;
          case 8:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _init.apply(this, arguments);
  }
  function loadTranslations() {
    return request("/translates/".concat(locale)).then(function (json) {
      i18nData = json;
      console.log(i18nData);
      translate();
      var mutationObserver = new MutationObserver(function (mutations) {
        var shouldSkip = mutations.every(function (mutation) {
          return mutation.target.closest('.table');
        });
        if (shouldSkip) return;
        translate();
      });
      mutationObserver.observe(document.getElementById("winningStreak"), {
        childList: true,
        subtree: true
      });
    });
  }
  function checkUserAuth() {
    var loadTime = 200;
    setTimeout(function () {
      var showElements = function showElements(elements) {
        return elements.forEach(function (el) {
          return el.classList.remove('hide');
        });
      };
      var hideElements = function hideElements(elements) {
        return elements.forEach(function (el) {
          return el.classList.add('hide');
        });
      };
      if (!userId) {
        hideElements(participateBtns);
        hideElements(redirectBtns);
        showElements(unauthMsgs);
        hideLoader();
        return Promise.resolve(false);
      }
      hideElements(unauthMsgs);
      return request("/favuser/".concat(userId, "?nocache=1")).then(function (res) {
        if (res.userid) {
          hideElements(participateBtns);
          showElements(redirectBtns);
        } else {
          showElements(participateBtns);
          hideElements(redirectBtns);
        }
        hideLoader();
      });
    }, loadTime);
  }
  function reportError(err) {
    var reportData = {
      origin: window.location.href,
      userid: userId,
      errorText: (err === null || err === void 0 ? void 0 : err.error) || (err === null || err === void 0 ? void 0 : err.text) || (err === null || err === void 0 ? void 0 : err.message) || 'Unknown error',
      type: (err === null || err === void 0 ? void 0 : err.name) || 'UnknownError',
      stack: (err === null || err === void 0 ? void 0 : err.stack) || ''
    };
    fetch('https://fav-prom.com/api-cms/reports/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reportData)
    })["catch"](console.warn);
  }
  function translate() {
    var elems = document.querySelectorAll('[data-translate]');
    if (elems && elems.length) {
      if (translateState) {
        elems.forEach(function (elem) {
          var key = elem.getAttribute('data-translate');
          elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
          if (i18nData[key]) {
            elem.removeAttribute('data-translate');
          }
        });
      } else {
        console.log("translation works!");
      }
    }
    refreshLocalizedClass(mainPage);
  }
  function refreshLocalizedClass(element) {
    if (!element) {
      return;
    }
    for (var _i = 0, _arr = ['hr', 'en']; _i < _arr.length; _i++) {
      var lang = _arr[_i];
      element.classList.remove(lang);
    }
    element.classList.add(locale);
  }
  function renderUsers() {
    request("/users/").then(function (data) {
      var users = data;
      populateUsersTable(users, userId);
    });
  }
  function populateUsersTable(users, currentUserId) {
    resultsTable.innerHTML = '';
    resultsTableOther.innerHTML = '';
    if (!(users !== null && users !== void 0 && users.length)) return;
    var currentUser = users.find(function (user) {
      return user.userid === currentUserId;
    });
    var topUsers = users.slice(0, 10);
    var isTopCurrentUser = currentUser && topUsers.some(function (user) {
      return user.userid === currentUserId;
    });
    topUsers.forEach(function (user) {
      displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
    });
    if (!isTopCurrentUser && currentUser) {
      displayUser(currentUser, true, resultsTableOther, users, false);
    }
  }
  function displayUser(user, isCurrentUser, table, users, isTopCurrentUser) {
    var renderRow = function renderRow(userData) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$highlight = options.highlight,
        highlight = _options$highlight === void 0 ? false : _options$highlight,
        _options$neighbor = options.neighbor,
        neighbor = _options$neighbor === void 0 ? false : _options$neighbor;
      var userRow = document.createElement('div');
      userRow.classList.add('table__row');
      var userPlace = users.indexOf(userData) + 1;
      var prizeKey = debug ? null : getPrizeTranslationKey(userPlace);
      if (userPlace <= 3) {
        userRow.classList.add("place".concat(userPlace));
      }
      if (highlight) {
        userRow.classList.add('_your');
      } else if (neighbor) {
        userRow.classList.add('_neighbor');
      }
      userRow.innerHTML = "\n            <div class=\"table__row-item\">\n                ".concat(userPlace < 10 ? '0' + userPlace : userPlace, "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(highlight ? userData.userid : maskUserId(userData.userid), "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(userData.points, "\n            </div>\n            <div class=\"table__row-item\">\n                ").concat(prizeKey ? translateKey(prizeKey) : ' - ', "\n            </div>\n        ");
      table.append(userRow);
    };
    if (isCurrentUser && !isTopCurrentUser) {
      var index = users.indexOf(user);
      if (users[index - 1]) {
        renderRow(users[index - 1], {
          neighbor: true
        });
      }
      renderRow(user, {
        highlight: true
      });
      if (users[index + 1]) {
        renderRow(users[index + 1], {
          neighbor: true
        });
      }
    } else {
      renderRow(user);
    }
  }
  function translateKey(key, defaultValue) {
    if (!key) {
      return;
    }
    var needKey = debug ? key : "*----NEED TO BE TRANSLATED----* key: ".concat(key);
    defaultValue = needKey || key;
    return i18nData[key] || defaultValue;
  }
  function maskUserId(userId) {
    return "**" + userId.toString().slice(2);
  }

  // function getPrizeTranslationKey(place, week) {
  //     if (place <= 3) return `prize_${week}-${place}`;
  //     if (place <= 10) return `prize_${week}-4-10`;
  //     if (place <= 25) return `prize_${week}-11-25`;
  //     if (place <= 50) return `prize_${week}-26-50`;
  //     if (place <= 75) return `prize_${week}-51-75`;
  //     if (place <= 100) return `prize_${week}-76-100`;
  //     if (place <= 125) return `prize_${week}-101-125`;
  //     if (place <= 150) return `prize_${week}-126-150`;
  //     if (place <= 175) return `prize_${week}-151-175`;
  //     if (place <= 200) return `prize_${week}-176-200`;
  // }

  function participate() {
    if (!userId) {
      return;
    }
    var params = {
      userid: userId
    };
    fetch(apiURL + '/user/', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(params)
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      loaderBtn = true;
      toggleClasses(participateBtns, "loader");
      toggleTranslates(participateBtns, "loader");
      setTimeout(function () {
        toggleTranslates(participateBtns, "loader_ready");
        toggleClasses(participateBtns, "done");
        toggleClasses(participateBtns, "loader");
      }, 500);
      setTimeout(function () {
        checkUserAuth();
      }, 1000);
    });
  }
  loadTranslations().then(init); //  запуск ініту сторінки

  //animation
  document.addEventListener('DOMContentLoaded', function () {
    var wrappers = document.querySelectorAll('.instructions__container');
    if (wrappers.length === 0) {
      console.error('Не знайдено жодного .instructions__container');
      return;
    }
    var options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };
    wrappers.forEach(function (wrapper) {
      var observer = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            console.log('IntersectionObserver: Блок став видимим');
            setTimeout(function () {
              console.log('IntersectionObserver: додаю visible через 100 мс');
              wrapper.classList.add('visible');
            }, 100);
            obs.disconnect();
          }
        });
      }, options);
      requestAnimationFrame(function () {
        var rect = wrapper.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < windowHeight && rect.bottom > 0) {
          setTimeout(function () {
            wrapper.classList.add('visible');
          }, 1800);
        } else {
          observer.observe(wrapper);
        }
      });
    });
  });

  //slider
  var sliderInitialized = false;
  var currentIndex = 0;
  var startX = 0;
  var isDragging = false;
  var resizeTimeout;
  var slider;
  var items;
  var totalItems;
  function updateSlider() {
    items.forEach(function (item, index) {
      var distance = index - currentIndex;
      var newPosition = 0;
      var scale = 0.9;
      if (distance === 0) {
        newPosition = 0;
        scale = 1;
      } else if (distance === -1 || currentIndex === 0 && index === totalItems - 1) {
        newPosition = -22;
      } else if (distance === 1 || currentIndex === totalItems - 1 && index === 0) {
        newPosition = 22;
      } else {
        newPosition = 0;
      }
      item.style.transform = "translateX(".concat(newPosition, "%) scale(").concat(scale, ")");
      item.style.zIndex = index === currentIndex ? 2 : 1;
      item.classList.toggle('active', index === currentIndex);
      item.classList.toggle('left-slide', distance === -1 || currentIndex === 0 && index === totalItems - 1);
      item.classList.toggle('right-slide', distance === 1 || currentIndex === totalItems - 1 && index === 0);
    });
  }
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateSlider();
  }
  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateSlider();
  }
  function handleTouchStart(e) {
    isDragging = true;
    startX = e.touches[0].clientX;
  }
  function handleTouchMove(e) {
    if (!isDragging) return;
    var deltaX = e.touches[0].clientX - startX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
      isDragging = false;
    }
  }
  function handleTouchEnd() {
    isDragging = false;
  }
  function enableSlider() {
    var _document$querySelect, _document$querySelect2;
    if (sliderInitialized) return;
    slider = document.querySelector('.challenge__cards');
    items = document.querySelectorAll('.challenge__cards .card');
    totalItems = items.length;
    if (!slider || items.length === 0) return;
    currentIndex = 0;
    updateSlider();
    (_document$querySelect = document.querySelector('.challenge__control-left')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener('click', prevSlide);
    (_document$querySelect2 = document.querySelector('.challenge__control-right')) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.addEventListener('click', nextSlide);
    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchmove', handleTouchMove);
    slider.addEventListener('touchend', handleTouchEnd);
    sliderInitialized = true;
  }
  function disableSlider() {
    var _document$querySelect3, _document$querySelect4;
    if (!sliderInitialized) return;
    (_document$querySelect3 = document.querySelector('.challenge__control-left')) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.removeEventListener('click', prevSlide);
    (_document$querySelect4 = document.querySelector('.challenge__control-right')) === null || _document$querySelect4 === void 0 ? void 0 : _document$querySelect4.removeEventListener('click', nextSlide);
    slider.removeEventListener('touchstart', handleTouchStart);
    slider.removeEventListener('touchmove', handleTouchMove);
    slider.removeEventListener('touchend', handleTouchEnd);

    // Скидаємо стилі та класи
    items.forEach(function (item) {
      item.style.transform = '';
      item.style.zIndex = '';
      item.classList.remove('active', 'left-slide', 'right-slide');
    });
    sliderInitialized = false;
  }
  function checkSliderActivation() {
    if (window.innerWidth < 601) {
      enableSlider();
    } else {
      disableSlider();
    }
  }
  checkSliderActivation();
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function () {
      checkSliderActivation();
    }, 200);
  });

  // TEST
  document.querySelector('.dark-btn').addEventListener('click', function () {
    document.body.classList.toggle('dark');
  });
  var lngBtn = document.querySelector(".lng-btn");
  lngBtn.addEventListener("click", function () {
    if (sessionStorage.getItem("locale")) {
      sessionStorage.removeItem("locale");
    } else {
      sessionStorage.setItem("locale", "en");
    }
    window.location.reload();
  });
  var authBtn = document.querySelector(".auth-btn");
  authBtn.addEventListener("click", function () {
    if (userId) {
      sessionStorage.removeItem("userId");
    } else {
      sessionStorage.setItem("userId", "18908465");
    }
    window.location.reload();
  });
  var btnParticipante = document.querySelector(".btn-participante");
  btnParticipante.addEventListener("click", function () {
    if (sessionStorage.getItem("userId") == "18908465") {
      unauthMsgs.forEach(function (item) {
        return item.classList.add('hide');
      });
      participateBtns.forEach(function (item) {
        return item.classList.add('hide');
      });
      redirectBtns.forEach(function (item) {
        return item.classList.remove('hide');
      });
    } else {
      sessionStorage.setItem("userId", "777");
    }
  });
  document.addEventListener("DOMContentLoaded", function () {
    var _document$querySelect5;
    (_document$querySelect5 = document.querySelector(".menu-btn")) === null || _document$querySelect5 === void 0 ? void 0 : _document$querySelect5.addEventListener("click", function () {
      var _document$querySelect6;
      (_document$querySelect6 = document.querySelector(".menu-test")) === null || _document$querySelect6 === void 0 ? void 0 : _document$querySelect6.classList.toggle("hide");
    });
  });
  userId = (_sessionStorage$getIt2 = sessionStorage.getItem("userId")) !== null && _sessionStorage$getIt2 !== void 0 ? _sessionStorage$getIt2 : null;
  document.querySelector('.success-btn').addEventListener('click', function () {
    document.querySelectorAll('.card').forEach(function (card) {
      card.classList.remove('success', 'inProgress', 'fail', 'locked');
      card.classList.add('success');
    });
  });
  document.querySelector('.inProgress-btn').addEventListener('click', function () {
    document.querySelectorAll('.card').forEach(function (card) {
      card.classList.remove('success', 'inProgress', 'fail', 'locked');
      card.classList.add('inProgress');
    });
  });
  document.querySelector('.fail-btn').addEventListener('click', function () {
    document.querySelectorAll('.card').forEach(function (card) {
      card.classList.remove('success', 'inProgress', 'fail', 'locked');
      card.classList.add('fail');
    });
  });
  document.querySelector('.locked-btn').addEventListener('click', function () {
    document.querySelectorAll('.card').forEach(function (card) {
      card.classList.remove('success', 'inProgress', 'fail', 'locked');
      card.classList.add('locked');
    });
  });
  document.querySelector('.progressBar-btn').addEventListener('click', function () {
    document.querySelectorAll('.progressBar__item, .challenge__prize-item, .challenge__bonus-item').forEach(function (el) {
      el.classList.toggle('active');
    });
  });
  document.querySelector('.withoutBonus-btn').addEventListener('click', function () {
    document.querySelectorAll('.challenge__bonus').forEach(function (el) {
      el.classList.toggle('hide');
    });
  });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsImhyTGVuZyIsImVuTGVuZyIsInRvZ2dsZUNsYXNzZXMiLCJlbGVtZW50cyIsImNsYXNzTmFtZSIsImZvckVhY2giLCJlbCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRvZ2dsZVRyYW5zbGF0ZXMiLCJkYXRhQXR0ciIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImkxOG5EYXRhIiwicmVtb3ZlQXR0cmlidXRlIiwibG9hZGVyQnRuIiwibG9jYWxlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVidWciLCJoaWRlTG9hZGVyIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJOdW1iZXIiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJhZGQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsInJlbW92ZSIsImluaXQiLCJ0cnlEZXRlY3RVc2VySWQiLCJxdWlja0NoZWNrQW5kUmVuZGVyIiwiY2hlY2tVc2VyQXV0aCIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJ0aWNpcGF0ZSIsIndpbmRvdyIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImdfdXNlcl9pZCIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ3YWl0Rm9yVXNlcklkIiwicmVzb2x2ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibG9hZFRyYW5zbGF0aW9ucyIsImxvZyIsInRyYW5zbGF0ZSIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwic2hvdWxkU2tpcCIsImV2ZXJ5IiwibXV0YXRpb24iLCJ0YXJnZXQiLCJjbG9zZXN0Iiwib2JzZXJ2ZSIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImxvYWRUaW1lIiwic2V0VGltZW91dCIsInNob3dFbGVtZW50cyIsImhpZGVFbGVtZW50cyIsInVzZXJpZCIsInJlcG9ydEVycm9yIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXJuIiwiZWxlbXMiLCJsZW5ndGgiLCJlbGVtIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImxhbmciLCJyZW5kZXJVc2VycyIsImRhdGEiLCJ1c2VycyIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImN1cnJlbnRVc2VySWQiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsImN1cnJlbnRVc2VyIiwiZmluZCIsInVzZXIiLCJ0b3BVc2VycyIsInNsaWNlIiwiaXNUb3BDdXJyZW50VXNlciIsInNvbWUiLCJkaXNwbGF5VXNlciIsIndlZWsiLCJpc0N1cnJlbnRVc2VyIiwidGFibGUiLCJyZW5kZXJSb3ciLCJ1c2VyRGF0YSIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJjcmVhdGVFbGVtZW50IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsIm1hc2tVc2VySWQiLCJwb2ludHMiLCJ0cmFuc2xhdGVLZXkiLCJhcHBlbmQiLCJpbmRleCIsImRlZmF1bHRWYWx1ZSIsIm5lZWRLZXkiLCJ0b1N0cmluZyIsInBhcmFtcyIsIndyYXBwZXJzIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJ3cmFwcGVyIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJvYnMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiZGlzY29ubmVjdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aW5kb3dIZWlnaHQiLCJpbm5lckhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInRvcCIsImJvdHRvbSIsInNsaWRlckluaXRpYWxpemVkIiwiY3VycmVudEluZGV4Iiwic3RhcnRYIiwiaXNEcmFnZ2luZyIsInJlc2l6ZVRpbWVvdXQiLCJzbGlkZXIiLCJpdGVtcyIsInRvdGFsSXRlbXMiLCJ1cGRhdGVTbGlkZXIiLCJpdGVtIiwiZGlzdGFuY2UiLCJuZXdQb3NpdGlvbiIsInNjYWxlIiwidHJhbnNmb3JtIiwiekluZGV4IiwibmV4dFNsaWRlIiwicHJldlNsaWRlIiwiaGFuZGxlVG91Y2hTdGFydCIsImUiLCJ0b3VjaGVzIiwiY2xpZW50WCIsImhhbmRsZVRvdWNoTW92ZSIsImRlbHRhWCIsIk1hdGgiLCJhYnMiLCJoYW5kbGVUb3VjaEVuZCIsImVuYWJsZVNsaWRlciIsImRpc2FibGVTbGlkZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2hlY2tTbGlkZXJBY3RpdmF0aW9uIiwiaW5uZXJXaWR0aCIsImNsZWFyVGltZW91dCIsImxuZ0J0biIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwicmVsb2FkIiwiYXV0aEJ0biIsImJ0blBhcnRpY2lwYW50ZSIsImNhcmQiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsQ0FBQyxZQUFZO0VBQUE7RUFDVCxJQUFNQSxNQUFNLEdBQUcseUNBQXlDO0VB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UUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQ3VELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3ZFeEQsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxvRUFBb0UsQ0FBQyxDQUFDUyxPQUFPLENBQUMsVUFBQUMsRUFBRSxFQUFJO01BQzFHQSxFQUFFLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7RUFFRmYsUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQ3VELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3hFeEQsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDUyxPQUFPLENBQUMsVUFBQUMsRUFBRSxFQUFJO01BQ3pEQSxFQUFFLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUMvQixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFFTixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV93aW5uaW5nX3N0cmVhaydcblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheS1idG4nKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIilcblxuICAgIGNvbnN0IGhyTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNockxlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBjb25zdCB0b2dnbGVDbGFzc2VzID0gKGVsZW1lbnRzLCBjbGFzc05hbWUpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZShgJHtjbGFzc05hbWV9YCkpO1xuICAgIGNvbnN0IHRvZ2dsZVRyYW5zbGF0ZXMgPSAoZWxlbWVudHMsIGRhdGFBdHRyKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIGAke2RhdGFBdHRyfWApXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGkxOG5EYXRhW2RhdGFBdHRyXSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBkYXRhQXR0cjtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgIH0pO1xuXG4gICAgbGV0IGxvYWRlckJ0biA9IGZhbHNlXG5cbiAgICBsZXQgbG9jYWxlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSA/PyBcImhyXCJcbiAgICAvLyBsZXQgbG9jYWxlID0gXCJoclwiXG5cbiAgICBpZiAoaHJMZW5nKSBsb2NhbGUgPSAnaHInO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSBmYWxzZVxuXG4gICAgaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcbiAgICAvLyBsZXQgdXNlcklkID0gbnVsbDtcbiAgICBsZXQgdXNlcklkID0gTnVtYmVyKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikpID8/IG51bGxcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICAvLyByZXBvcnRFcnJvcihlcnIpO1xuXG4gICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAvLyBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDIwO1xuICAgICAgICBjb25zdCBhdHRlbXB0SW50ZXJ2YWwgPSA1MDtcblxuICAgICAgICBmdW5jdGlvbiB0cnlEZXRlY3RVc2VySWQoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKSB7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChidG4gPT4gYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGFydGljaXBhdGUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0KGAvdHJhbnNsYXRlcy8ke2xvY2FsZX1gKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGkxOG5EYXRhKTtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICB2YXIgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2tpcCA9IG11dGF0aW9ucy5ldmVyeShtdXRhdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbXV0YXRpb24udGFyZ2V0LmNsb3Nlc3QoJy50YWJsZScpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZFNraXApIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5uaW5nU3RyZWFrXCIpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGNvbnN0IGxvYWRUaW1lID0gMjAwO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvd0VsZW1lbnRzID0gKGVsZW1lbnRzKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICBjb25zdCBoaWRlRWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcblxuICAgICAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICBzaG93RWxlbWVudHModW5hdXRoTXNncyk7XG4gICAgICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoaWRlRWxlbWVudHModW5hdXRoTXNncyk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHJlZGlyZWN0QnRucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBsb2FkVGltZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhtYWluUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsnaHInLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChsb2NhbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKCkge1xuICAgICAgICByZXF1ZXN0KGAvdXNlcnMvYClcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJzID0gZGF0YTtcbiAgICAgICAgICAgICAgICBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIHVzZXJJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwb3B1bGF0ZVVzZXJzVGFibGUodXNlcnMsIGN1cnJlbnRVc2VySWQpIHtcbiAgICAgICAgcmVzdWx0c1RhYmxlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICByZXN1bHRzVGFibGVPdGhlci5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaWYgKCF1c2Vycz8ubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gdXNlcnMuZmluZCh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcbiAgICAgICAgY29uc3QgdG9wVXNlcnMgPSB1c2Vycy5zbGljZSgwLCAxMCk7XG4gICAgICAgIGNvbnN0IGlzVG9wQ3VycmVudFVzZXIgPSBjdXJyZW50VXNlciAmJiB0b3BVc2Vycy5zb21lKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuICAgICAgICB0b3BVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIodXNlciwgdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQsIHJlc3VsdHNUYWJsZSwgdG9wVXNlcnMsIGlzVG9wQ3VycmVudFVzZXIsIHdlZWspO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFpc1RvcEN1cnJlbnRVc2VyICYmIGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcihjdXJyZW50VXNlciwgdHJ1ZSwgcmVzdWx0c1RhYmxlT3RoZXIsIHVzZXJzLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5VXNlcih1c2VyLCBpc0N1cnJlbnRVc2VyLCB0YWJsZSwgdXNlcnMsIGlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgY29uc3QgcmVuZGVyUm93ID0gKHVzZXJEYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaGlnaGxpZ2h0ID0gZmFsc2UsIG5laWdoYm9yID0gZmFsc2UgfSA9IG9wdGlvbnM7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ3RhYmxlX19yb3cnKTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclBsYWNlID0gdXNlcnMuaW5kZXhPZih1c2VyRGF0YSkgKyAxO1xuICAgICAgICAgICAgY29uc3QgcHJpemVLZXkgPSBkZWJ1ZyA/IG51bGwgOiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHVzZXJQbGFjZSk7XG5cbiAgICAgICAgICAgIGlmICh1c2VyUGxhY2UgPD0gMykge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZChgcGxhY2Uke3VzZXJQbGFjZX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhpZ2hsaWdodCkge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgnX3lvdXInKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmVpZ2hib3IpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ19uZWlnaGJvcicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1c2VyUm93LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJQbGFjZSA8IDEwID8gJzAnICsgdXNlclBsYWNlIDogdXNlclBsYWNlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtoaWdobGlnaHQgPyB1c2VyRGF0YS51c2VyaWQgOiBtYXNrVXNlcklkKHVzZXJEYXRhLnVzZXJpZCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3VzZXJEYXRhLnBvaW50c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7cHJpemVLZXkgPyB0cmFuc2xhdGVLZXkocHJpemVLZXkpIDogJyAtICd9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICAgICAgdGFibGUuYXBwZW5kKHVzZXJSb3cpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoaXNDdXJyZW50VXNlciAmJiAhaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB1c2Vycy5pbmRleE9mKHVzZXIpO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4IC0gMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggLSAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyLCB7IGhpZ2hsaWdodDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCArIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4ICsgMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJSb3codXNlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGVLZXkoa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmVlZEtleSA9IGRlYnVnID8ga2V5IDogYCotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSoga2V5OiAke2tleX1gXG5cbiAgICAgICAgZGVmYXVsdFZhbHVlID0gIG5lZWRLZXkgfHwga2V5O1xuICAgICAgICByZXR1cm4gaTE4bkRhdGFba2V5XSB8fCBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFza1VzZXJJZCh1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIFwiKipcIiArIHVzZXJJZC50b1N0cmluZygpLnNsaWNlKDIpO1xuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIGdldFByaXplVHJhbnNsYXRpb25LZXkocGxhY2UsIHdlZWspIHtcbiAgICAvLyAgICAgaWYgKHBsYWNlIDw9IDMpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0ke3BsYWNlfWA7XG4gICAgLy8gICAgIGlmIChwbGFjZSA8PSAxMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTQtMTBgO1xuICAgIC8vICAgICBpZiAocGxhY2UgPD0gMjUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMS0yNWA7XG4gICAgLy8gICAgIGlmIChwbGFjZSA8PSA1MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTI2LTUwYDtcbiAgICAvLyAgICAgaWYgKHBsYWNlIDw9IDc1KSByZXR1cm4gYHByaXplXyR7d2Vla30tNTEtNzVgO1xuICAgIC8vICAgICBpZiAocGxhY2UgPD0gMTAwKSByZXR1cm4gYHByaXplXyR7d2Vla30tNzYtMTAwYDtcbiAgICAvLyAgICAgaWYgKHBsYWNlIDw9IDEyNSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTEwMS0xMjVgO1xuICAgIC8vICAgICBpZiAocGxhY2UgPD0gMTUwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMTI2LTE1MGA7XG4gICAgLy8gICAgIGlmIChwbGFjZSA8PSAxNzUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNTEtMTc1YDtcbiAgICAvLyAgICAgaWYgKHBsYWNlIDw9IDIwMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTE3Ni0yMDBgO1xuICAgIC8vIH1cblxuICAgIGZ1bmN0aW9uIHBhcnRpY2lwYXRlKCkge1xuICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgdXNlcmlkOiB1c2VySWQgfTtcbiAgICAgICAgZmV0Y2goYXBpVVJMICsgJy91c2VyLycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcylcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgbG9hZGVyQnRuID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVRyYW5zbGF0ZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlcl9yZWFkeVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJkb25lXCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImxvYWRlclwiKVxuICAgICAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKVxuICAgICAgICAgICAgICAgIH0sIDEwMDApXG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICBsb2FkVHJhbnNsYXRpb25zKCkudGhlbihpbml0KSAvLyAg0LfQsNC/0YPRgdC6INGW0L3RltGC0YMg0YHRgtC+0YDRltC90LrQuFxuXG4gICAgLy9hbmltYXRpb25cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB3cmFwcGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnN0cnVjdGlvbnNfX2NvbnRhaW5lcicpO1xuXG4gICAgICAgIGlmICh3cmFwcGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Cd0LUg0LfQvdCw0LnQtNC10L3QviDQttC+0LTQvdC+0LPQviAuaW5zdHJ1Y3Rpb25zX19jb250YWluZXInKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgcm9vdE1hcmdpbjogJzBweCcsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDAuMixcbiAgICAgICAgfTtcblxuICAgICAgICB3cmFwcGVycy5mb3JFYWNoKCh3cmFwcGVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzKSA9PiB7XG4gICAgICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbnRlcnNlY3Rpb25PYnNlcnZlcjog0JHQu9C+0Log0YHRgtCw0LIg0LLQuNC00LjQvNC40LwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbnRlcnNlY3Rpb25PYnNlcnZlcjog0LTQvtC00LDRjiB2aXNpYmxlINGH0LXRgNC10LcgMTAwINC80YEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnMuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBvcHRpb25zKTtcblxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWN0ID0gd3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgICAgICAgICAgICAgIGlmIChyZWN0LnRvcCA8IHdpbmRvd0hlaWdodCAmJiByZWN0LmJvdHRvbSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTgwMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh3cmFwcGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvL3NsaWRlclxuICAgIGxldCBzbGlkZXJJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuICAgIGxldCBzdGFydFggPSAwO1xuICAgIGxldCBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgbGV0IHJlc2l6ZVRpbWVvdXQ7XG5cbiAgICBsZXQgc2xpZGVyO1xuICAgIGxldCBpdGVtcztcbiAgICBsZXQgdG90YWxJdGVtcztcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNsaWRlcigpIHtcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gaW5kZXggLSBjdXJyZW50SW5kZXg7XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgbGV0IHNjYWxlID0gMC45O1xuXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPT09IDApIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgc2NhbGUgPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA9PT0gLTEgfHwgKGN1cnJlbnRJbmRleCA9PT0gMCAmJiBpbmRleCA9PT0gdG90YWxJdGVtcyAtIDEpKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSAtMjI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlID09PSAxIHx8IChjdXJyZW50SW5kZXggPT09IHRvdGFsSXRlbXMgLSAxICYmIGluZGV4ID09PSAwKSkge1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gMjI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke25ld1Bvc2l0aW9ufSUpIHNjYWxlKCR7c2NhbGV9KWA7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLnpJbmRleCA9IGluZGV4ID09PSBjdXJyZW50SW5kZXggPyAyIDogMTtcblxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBpbmRleCA9PT0gY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnbGVmdC1zbGlkZScsIGRpc3RhbmNlID09PSAtMSB8fCAoY3VycmVudEluZGV4ID09PSAwICYmIGluZGV4ID09PSB0b3RhbEl0ZW1zIC0gMSkpO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdyaWdodC1zbGlkZScsIGRpc3RhbmNlID09PSAxIHx8IChjdXJyZW50SW5kZXggPT09IHRvdGFsSXRlbXMgLSAxICYmIGluZGV4ID09PSAwKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5leHRTbGlkZSgpIHtcbiAgICAgICAgY3VycmVudEluZGV4ID0gKGN1cnJlbnRJbmRleCArIDEpICUgdG90YWxJdGVtcztcbiAgICAgICAgdXBkYXRlU2xpZGVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJldlNsaWRlKCkge1xuICAgICAgICBjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4IC0gMSArIHRvdGFsSXRlbXMpICUgdG90YWxJdGVtcztcbiAgICAgICAgdXBkYXRlU2xpZGVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydChlKSB7XG4gICAgICAgIGlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICBzdGFydFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoZSkge1xuICAgICAgICBpZiAoIWlzRHJhZ2dpbmcpIHJldHVybjtcbiAgICAgICAgY29uc3QgZGVsdGFYID0gZS50b3VjaGVzWzBdLmNsaWVudFggLSBzdGFydFg7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKGRlbHRhWCkgPiA1MCkge1xuICAgICAgICAgICAgaWYgKGRlbHRhWCA+IDApIHtcbiAgICAgICAgICAgICAgICBwcmV2U2xpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZCgpIHtcbiAgICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuYWJsZVNsaWRlcigpIHtcbiAgICAgICAgaWYgKHNsaWRlckluaXRpYWxpemVkKSByZXR1cm47XG5cbiAgICAgICAgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWxsZW5nZV9fY2FyZHMnKTtcbiAgICAgICAgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbGxlbmdlX19jYXJkcyAuY2FyZCcpO1xuICAgICAgICB0b3RhbEl0ZW1zID0gaXRlbXMubGVuZ3RoO1xuICAgICAgICBpZiAoIXNsaWRlciB8fCBpdGVtcy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgICAgICBjdXJyZW50SW5kZXggPSAwO1xuICAgICAgICB1cGRhdGVTbGlkZXIoKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxlbmdlX19jb250cm9sLWxlZnQnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmV2U2xpZGUpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxlbmdlX19jb250cm9sLXJpZ2h0Jyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dFNsaWRlKTtcblxuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVRvdWNoU3RhcnQpO1xuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlVG91Y2hNb3ZlKTtcbiAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlVG91Y2hFbmQpO1xuXG4gICAgICAgIHNsaWRlckluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNhYmxlU2xpZGVyKCkge1xuICAgICAgICBpZiAoIXNsaWRlckluaXRpYWxpemVkKSByZXR1cm47XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWxsZW5nZV9fY29udHJvbC1sZWZ0Jyk/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJldlNsaWRlKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWxsZW5nZV9fY29udHJvbC1yaWdodCcpPy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG5leHRTbGlkZSk7XG5cbiAgICAgICAgc2xpZGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVUb3VjaFN0YXJ0KTtcbiAgICAgICAgc2xpZGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZVRvdWNoTW92ZSk7XG4gICAgICAgIHNsaWRlci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZVRvdWNoRW5kKTtcblxuICAgICAgICAvLyDQodC60LjQtNCw0ZTQvNC+INGB0YLQuNC70ZYg0YLQsCDQutC70LDRgdC4XG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgICAgICAgICAgaXRlbS5zdHlsZS56SW5kZXggPSAnJztcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJywgJ2xlZnQtc2xpZGUnLCAncmlnaHQtc2xpZGUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2xpZGVySW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1NsaWRlckFjdGl2YXRpb24oKSB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMSkge1xuICAgICAgICAgICAgZW5hYmxlU2xpZGVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXNhYmxlU2xpZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1NsaWRlckFjdGl2YXRpb24oKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dChyZXNpemVUaW1lb3V0KTtcbiAgICAgICAgcmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY2hlY2tTbGlkZXJBY3RpdmF0aW9uKCk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfSk7XG5cbiAgICAvLyBURVNUXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhcmstYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpO1xuICAgIH0pO1xuICAgIGNvbnN0IGxuZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG5nLWJ0blwiKVxuXG4gICAgbG5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpKSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9jYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsZVwiLCBcImVuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGF1dGhCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGgtYnRuXCIpXG4gICAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKHVzZXJJZCl7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlcklkXCIpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCBcIjE4OTA4NDY1XCIpXG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgfSk7XG5cbiAgICBjb25zdCBidG5QYXJ0aWNpcGFudGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1wYXJ0aWNpcGFudGVcIilcblxuICAgIGJ0blBhcnRpY2lwYW50ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICAgIGlmKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIik9PVwiMTg5MDg0NjVcIil7XG4gICAgICAgICAgICB1bmF1dGhNc2dzLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG4gICAgICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMuZm9yRWFjaChpdGVtID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcbiAgICAgICAgICAgIHJlZGlyZWN0QnRucy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgXCI3NzdcIilcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ0blwiKT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS10ZXN0XCIpPy5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB1c2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpID8/IG51bGxcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWNjZXNzLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Y2Nlc3MnLCAnaW5Qcm9ncmVzcycsICdmYWlsJywgJ2xvY2tlZCcpO1xuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdzdWNjZXNzJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluUHJvZ3Jlc3MtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJykuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnc3VjY2VzcycsICdpblByb2dyZXNzJywgJ2ZhaWwnLCAnbG9ja2VkJyk7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2luUHJvZ3Jlc3MnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFpbC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKS5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzJywgJ2luUHJvZ3Jlc3MnLCAnZmFpbCcsICdsb2NrZWQnKTtcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnZmFpbCcpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NrZWQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJykuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnc3VjY2VzcycsICdpblByb2dyZXNzJywgJ2ZhaWwnLCAnbG9ja2VkJyk7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2xvY2tlZCcpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzc0Jhci1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2dyZXNzQmFyX19pdGVtLCAuY2hhbGxlbmdlX19wcml6ZS1pdGVtLCAuY2hhbGxlbmdlX19ib251cy1pdGVtJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2l0aG91dEJvbnVzLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbGxlbmdlX19ib251cycpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxufSkoKTtcblxuXG4iXX0=
