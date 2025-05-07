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
  // const apiURL = 'https://fav-prom.com/api_hardcore_tennis'

  var mainPage = document.querySelector(".fav-page"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.btn-join'),
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
  var debug = true;
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
      reportError(err);
      document.querySelector('.fav-page').style.display = 'none';
      if (window.location.href.startsWith("https://www.favbet.hr/")) {
        window.location.href = '/promocije/promocija/stub/';
      } else {
        window.location.href = '/promos/promo/stub/';
      }
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
    return fetch("".concat(apiURL, "/new-translates/").concat(locale)).then(function (res) {
      return res.json();
    }).then(function (json) {
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
  var itemsTxt = document.querySelectorAll('.instructions__txt-item');
  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        itemsTxt.forEach(function (item, index) {
          setTimeout(function () {
            item.classList.add('visible');
          }, index * 300);
        });
        obs.disconnect();
      }
    });
  }, {
    threshold: 0.2
  });
  if (itemsTxt.length > 0) {
    observer.observe(itemsTxt[0].parentElement);
  }

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
      var bg = card.querySelector('.card__bg');
      var successBlock = card.querySelector('.card__success');
      bg.classList.remove('success', 'inProgress', 'fail', 'locked');
      bg.classList.add('success');
      successBlock.classList.remove('hide');
    });
  });
  document.querySelector('.inProgress-btn').addEventListener('click', function () {
    document.querySelectorAll('.card').forEach(function (card) {
      var bg = card.querySelector('.card__bg');
      var successBlock = card.querySelector('.card__success');
      if (bg.classList.contains('success') || bg.classList.contains('inProgress') || bg.classList.contains('fail') || bg.classList.contains('locked')) {
        bg.classList.remove('success', 'inProgress', 'fail', 'locked');
        bg.classList.add('inProgress');
        if (!successBlock.classList.contains('hide')) {
          successBlock.classList.add('hide');
        }
      }
    });
  });
  document.querySelector('.fail-btn').addEventListener('click', function () {
    document.querySelectorAll('.card').forEach(function (card) {
      var bg = card.querySelector('.card__bg');
      var successBlock = card.querySelector('.card__success');
      if (bg.classList.contains('success') || bg.classList.contains('inProgress') || bg.classList.contains('fail') || bg.classList.contains('locked')) {
        bg.classList.remove('success', 'inProgress', 'fail', 'locked');
        bg.classList.add('fail');
        if (!successBlock.classList.contains('hide')) {
          successBlock.classList.add('hide');
        }
      }
    });
  });
  document.querySelector('.locked-btn').addEventListener('click', function () {
    document.querySelectorAll('.card').forEach(function (card) {
      var bg = card.querySelector('.card__bg');
      var successBlock = card.querySelector('.card__success');
      if (bg.classList.contains('success') || bg.classList.contains('inProgress') || bg.classList.contains('fail') || bg.classList.contains('locked')) {
        bg.classList.remove('success', 'inProgress', 'fail', 'locked');
        bg.classList.add('locked');
        if (!successBlock.classList.contains('hide')) {
          successBlock.classList.add('hide');
        }
      }
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

  // renderUsers = function () {
  //     console.log('renderUsers вимкнено для тесту');
  // }
  //
  // populateUsersTable = function () {
  //     console.log('populateUsersTable вимкнено для тесту');
  // }
  //
  // displayUser = function () {
  //     console.log('displayUser вимкнено для тесту');
  // }
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsImhyTGVuZyIsImVuTGVuZyIsInRvZ2dsZUNsYXNzZXMiLCJlbGVtZW50cyIsImNsYXNzTmFtZSIsImZvckVhY2giLCJlbCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRvZ2dsZVRyYW5zbGF0ZXMiLCJkYXRhQXR0ciIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImkxOG5EYXRhIiwicmVtb3ZlQXR0cmlidXRlIiwibG9hZGVyQnRuIiwibG9jYWxlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVidWciLCJoaWRlTG9hZGVyIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJOdW1iZXIiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInJlcG9ydEVycm9yIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3RhcnRzV2l0aCIsIlByb21pc2UiLCJyZWplY3QiLCJhZGQiLCJib2R5Iiwib3ZlcmZsb3ciLCJyZW1vdmUiLCJpbml0IiwidHJ5RGV0ZWN0VXNlcklkIiwicXVpY2tDaGVja0FuZFJlbmRlciIsImNoZWNrVXNlckF1dGgiLCJidG4iLCJhZGRFdmVudExpc3RlbmVyIiwicGFydGljaXBhdGUiLCJzdG9yZSIsInN0YXRlIiwiZ2V0U3RhdGUiLCJhdXRoIiwiaXNBdXRob3JpemVkIiwiaWQiLCJnX3VzZXJfaWQiLCJhdHRlbXB0cyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdEludGVydmFsIiwid2FpdEZvclVzZXJJZCIsInJlc29sdmUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImxvYWRUcmFuc2xhdGlvbnMiLCJsb2ciLCJ0cmFuc2xhdGUiLCJtdXRhdGlvbk9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsInNob3VsZFNraXAiLCJldmVyeSIsIm11dGF0aW9uIiwidGFyZ2V0IiwiY2xvc2VzdCIsIm9ic2VydmUiLCJnZXRFbGVtZW50QnlJZCIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJsb2FkVGltZSIsInNldFRpbWVvdXQiLCJzaG93RWxlbWVudHMiLCJoaWRlRWxlbWVudHMiLCJ1c2VyaWQiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwibGFuZyIsInJlbmRlclVzZXJzIiwiZGF0YSIsInVzZXJzIiwicG9wdWxhdGVVc2Vyc1RhYmxlIiwiY3VycmVudFVzZXJJZCIsInJlc3VsdHNUYWJsZSIsInJlc3VsdHNUYWJsZU90aGVyIiwiY3VycmVudFVzZXIiLCJmaW5kIiwidXNlciIsInRvcFVzZXJzIiwic2xpY2UiLCJpc1RvcEN1cnJlbnRVc2VyIiwic29tZSIsImRpc3BsYXlVc2VyIiwid2VlayIsImlzQ3VycmVudFVzZXIiLCJ0YWJsZSIsInJlbmRlclJvdyIsInVzZXJEYXRhIiwib3B0aW9ucyIsImhpZ2hsaWdodCIsIm5laWdoYm9yIiwidXNlclJvdyIsImNyZWF0ZUVsZW1lbnQiLCJ1c2VyUGxhY2UiLCJpbmRleE9mIiwicHJpemVLZXkiLCJnZXRQcml6ZVRyYW5zbGF0aW9uS2V5IiwibWFza1VzZXJJZCIsInBvaW50cyIsInRyYW5zbGF0ZUtleSIsImFwcGVuZCIsImluZGV4IiwiZGVmYXVsdFZhbHVlIiwibmVlZEtleSIsInRvU3RyaW5nIiwicGFyYW1zIiwiaXRlbXNUeHQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsIm9icyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJpdGVtIiwiZGlzY29ubmVjdCIsInRocmVzaG9sZCIsInBhcmVudEVsZW1lbnQiLCJzbGlkZXJJbml0aWFsaXplZCIsImN1cnJlbnRJbmRleCIsInN0YXJ0WCIsImlzRHJhZ2dpbmciLCJyZXNpemVUaW1lb3V0Iiwic2xpZGVyIiwiaXRlbXMiLCJ0b3RhbEl0ZW1zIiwidXBkYXRlU2xpZGVyIiwiZGlzdGFuY2UiLCJuZXdQb3NpdGlvbiIsInNjYWxlIiwidHJhbnNmb3JtIiwiekluZGV4IiwibmV4dFNsaWRlIiwicHJldlNsaWRlIiwiaGFuZGxlVG91Y2hTdGFydCIsImUiLCJ0b3VjaGVzIiwiY2xpZW50WCIsImhhbmRsZVRvdWNoTW92ZSIsImRlbHRhWCIsIk1hdGgiLCJhYnMiLCJoYW5kbGVUb3VjaEVuZCIsImVuYWJsZVNsaWRlciIsImRpc2FibGVTbGlkZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2hlY2tTbGlkZXJBY3RpdmF0aW9uIiwiaW5uZXJXaWR0aCIsImNsZWFyVGltZW91dCIsImxuZ0J0biIsInJlbW92ZUl0ZW0iLCJzZXRJdGVtIiwicmVsb2FkIiwiYXV0aEJ0biIsImNhcmQiLCJiZyIsInN1Y2Nlc3NCbG9jayIsImNvbnRhaW5zIl0sIm1hcHBpbmdzIjoiOzs7K0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLENBQUMsWUFBWTtFQUFBO0VBQ1QsSUFBTUEsTUFBTSxHQUFHLHlDQUF5QztFQUN4RDs7RUFFQSxJQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNoREMsVUFBVSxHQUFHRixRQUFRLENBQUNHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztJ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RSxZQUFNO0lBQ3hFOUQsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDUyxPQUFPLENBQUMsVUFBQUMsRUFBRSxFQUFJO01BQ3pEQSxFQUFFLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUMvQixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7O0VBRUY7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUVKLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX3dpbm5pbmdfc3RyZWFrJ1xuICAgIC8vIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfaGFyZGNvcmVfdGVubmlzJ1xuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtYnRuJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tam9pbicpLFxuICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItb3ZlcmxheVwiKVxuXG4gICAgY29uc3QgaHJMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hyTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGNvbnN0IHRvZ2dsZUNsYXNzZXMgPSAoZWxlbWVudHMsIGNsYXNzTmFtZSkgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKGAke2NsYXNzTmFtZX1gKSk7XG4gICAgY29uc3QgdG9nZ2xlVHJhbnNsYXRlcyA9IChlbGVtZW50cywgZGF0YUF0dHIpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgYCR7ZGF0YUF0dHJ9YClcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaTE4bkRhdGFbZGF0YUF0dHJdIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGRhdGFBdHRyO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgfSk7XG5cbiAgICBsZXQgbG9hZGVyQnRuID0gZmFsc2VcblxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpID8/IFwiaHJcIlxuICAgIC8vIGxldCBsb2NhbGUgPSBcImhyXCJcblxuICAgIGlmIChockxlbmcpIGxvY2FsZSA9ICdocic7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCBkZWJ1ZyA9IHRydWVcblxuICAgIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IHRydWU7XG4gICAgLy8gbGV0IHVzZXJJZCA9IG51bGw7XG4gICAgbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBhcnRpY2lwYXRlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2goYCR7YXBpVVJMfS9uZXctdHJhbnNsYXRlcy8ke2xvY2FsZX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGkxOG5EYXRhKTtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcblxuICAgICAgICAgICAgICAgIHZhciBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG91bGRTa2lwID0gbXV0YXRpb25zLmV2ZXJ5KG11dGF0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtdXRhdGlvbi50YXJnZXQuY2xvc2VzdCgnLnRhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkU2tpcCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbm5pbmdTdHJlYWtcIiksIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgY29uc3QgbG9hZFRpbWUgPSAyMDA7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93RWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgIGNvbnN0IGhpZGVFbGVtZW50cyA9IChlbGVtZW50cykgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuXG4gICAgICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyh1bmF1dGhNc2dzKTtcbiAgICAgICAgICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhpZGVFbGVtZW50cyh1bmF1dGhNc2dzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGxvYWRUaW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKG1haW5QYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWydocicsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGxvY2FsZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVXNlcnMoKSB7XG4gICAgICAgIHJlcXVlc3QoYC91c2Vycy9gKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcnMgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgdXNlcklkKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCkge1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuICAgICAgICBjb25zdCB0b3BVc2VycyA9IHVzZXJzLnNsaWNlKDAsIDEwKTtcbiAgICAgICAgY29uc3QgaXNUb3BDdXJyZW50VXNlciA9IGN1cnJlbnRVc2VyICYmIHRvcFVzZXJzLnNvbWUodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWlzVG9wQ3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlLCB1c2VycywgaXNUb3BDdXJyZW50VXNlcikge1xuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSB1c2Vycy5pbmRleE9mKHVzZXJEYXRhKSArIDE7XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0KSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfeW91cicpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgnX25laWdoYm9yJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVzZXJSb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlclBsYWNlIDwgMTAgPyAnMCcgKyB1c2VyUGxhY2UgOiB1c2VyUGxhY2V9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2hpZ2hsaWdodCA/IHVzZXJEYXRhLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlckRhdGEudXNlcmlkKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlckRhdGEucG9pbnRzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZWVkS2V5ID0gZGVidWcgPyBrZXkgOiBgKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiBrZXk6ICR7a2V5fWBcblxuICAgICAgICBkZWZhdWx0VmFsdWUgPSAgbmVlZEtleSB8fCBrZXk7XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKlwiICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgLy8gZnVuY3Rpb24gZ2V0UHJpemVUcmFuc2xhdGlvbktleShwbGFjZSwgd2Vlaykge1xuICAgIC8vICAgICBpZiAocGxhY2UgPD0gMykgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LSR7cGxhY2V9YDtcbiAgICAvLyAgICAgaWYgKHBsYWNlIDw9IDEwKSByZXR1cm4gYHByaXplXyR7d2Vla30tNC0xMGA7XG4gICAgLy8gICAgIGlmIChwbGFjZSA8PSAyNSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTExLTI1YDtcbiAgICAvLyAgICAgaWYgKHBsYWNlIDw9IDUwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMjYtNTBgO1xuICAgIC8vICAgICBpZiAocGxhY2UgPD0gNzUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS01MS03NWA7XG4gICAgLy8gICAgIGlmIChwbGFjZSA8PSAxMDApIHJldHVybiBgcHJpemVfJHt3ZWVrfS03Ni0xMDBgO1xuICAgIC8vICAgICBpZiAocGxhY2UgPD0gMTI1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTAxLTEyNWA7XG4gICAgLy8gICAgIGlmIChwbGFjZSA8PSAxNTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMjYtMTUwYDtcbiAgICAvLyAgICAgaWYgKHBsYWNlIDw9IDE3NSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTE1MS0xNzVgO1xuICAgIC8vICAgICBpZiAocGxhY2UgPD0gMjAwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMTc2LTIwMGA7XG4gICAgLy8gfVxuXG4gICAgZnVuY3Rpb24gcGFydGljaXBhdGUoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zID0geyB1c2VyaWQ6IHVzZXJJZCB9O1xuICAgICAgICBmZXRjaChhcGlVUkwgKyAnL3VzZXIvJywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkZXJCdG4gPSB0cnVlXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyX3JlYWR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIGxvYWRUcmFuc2xhdGlvbnMoKS50aGVuKGluaXQpIC8vICDQt9Cw0L/Rg9GB0Log0ZbQvdGW0YLRgyDRgdGC0L7RgNGW0L3QutC4XG5cbiAgICAvL2FuaW1hdGlvblxuICAgIGNvbnN0IGl0ZW1zVHh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluc3RydWN0aW9uc19fdHh0LWl0ZW0nKVxuXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9icykgPT4ge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICBpdGVtc1R4dC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpXG4gICAgICAgICAgICAgICAgICAgIH0sIGluZGV4ICogMzAwKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgb2JzLmRpc2Nvbm5lY3QoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0sIHtcbiAgICAgICAgdGhyZXNob2xkOiAwLjJcbiAgICB9KVxuXG4gICAgaWYgKGl0ZW1zVHh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShpdGVtc1R4dFswXS5wYXJlbnRFbGVtZW50KVxuICAgIH1cblxuICAgIC8vc2xpZGVyXG4gICAgbGV0IHNsaWRlckluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gICAgbGV0IHN0YXJ0WCA9IDA7XG4gICAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICBsZXQgcmVzaXplVGltZW91dDtcblxuICAgIGxldCBzbGlkZXI7XG4gICAgbGV0IGl0ZW1zO1xuICAgIGxldCB0b3RhbEl0ZW1zO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2xpZGVyKCkge1xuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBpbmRleCAtIGN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICBsZXQgc2NhbGUgPSAwLjk7XG5cbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBzY2FsZSA9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlID09PSAtMSB8fCAoY3VycmVudEluZGV4ID09PSAwICYmIGluZGV4ID09PSB0b3RhbEl0ZW1zIC0gMSkpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiA9IC0yMjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgPT09IDEgfHwgKGN1cnJlbnRJbmRleCA9PT0gdG90YWxJdGVtcyAtIDEgJiYgaW5kZXggPT09IDApKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSAyMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bmV3UG9zaXRpb259JSkgc2NhbGUoJHtzY2FsZX0pYDtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuekluZGV4ID0gaW5kZXggPT09IGN1cnJlbnRJbmRleCA/IDIgOiAxO1xuXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGluZGV4ID09PSBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdsZWZ0LXNsaWRlJywgZGlzdGFuY2UgPT09IC0xIHx8IChjdXJyZW50SW5kZXggPT09IDAgJiYgaW5kZXggPT09IHRvdGFsSXRlbXMgLSAxKSk7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ3JpZ2h0LXNsaWRlJywgZGlzdGFuY2UgPT09IDEgfHwgKGN1cnJlbnRJbmRleCA9PT0gdG90YWxJdGVtcyAtIDEgJiYgaW5kZXggPT09IDApKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV4dFNsaWRlKCkge1xuICAgICAgICBjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4ICsgMSkgJSB0b3RhbEl0ZW1zO1xuICAgICAgICB1cGRhdGVTbGlkZXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmV2U2xpZGUoKSB7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggLSAxICsgdG90YWxJdGVtcykgJSB0b3RhbEl0ZW1zO1xuICAgICAgICB1cGRhdGVTbGlkZXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KGUpIHtcbiAgICAgICAgaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICAgIHN0YXJ0WCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZShlKSB7XG4gICAgICAgIGlmICghaXNEcmFnZ2luZykgcmV0dXJuO1xuICAgICAgICBjb25zdCBkZWx0YVggPSBlLnRvdWNoZXNbMF0uY2xpZW50WCAtIHN0YXJ0WDtcblxuICAgICAgICBpZiAoTWF0aC5hYnMoZGVsdGFYKSA+IDUwKSB7XG4gICAgICAgICAgICBpZiAoZGVsdGFYID4gMCkge1xuICAgICAgICAgICAgICAgIHByZXZTbGlkZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKCkge1xuICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5hYmxlU2xpZGVyKCkge1xuICAgICAgICBpZiAoc2xpZGVySW5pdGlhbGl6ZWQpIHJldHVybjtcblxuICAgICAgICBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxlbmdlX19jYXJkcycpO1xuICAgICAgICBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFsbGVuZ2VfX2NhcmRzIC5jYXJkJyk7XG4gICAgICAgIHRvdGFsSXRlbXMgPSBpdGVtcy5sZW5ndGg7XG4gICAgICAgIGlmICghc2xpZGVyIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGN1cnJlbnRJbmRleCA9IDA7XG4gICAgICAgIHVwZGF0ZVNsaWRlcigpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGVuZ2VfX2NvbnRyb2wtbGVmdCcpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByZXZTbGlkZSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGVuZ2VfX2NvbnRyb2wtcmlnaHQnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXh0U2xpZGUpO1xuXG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlVG91Y2hTdGFydCk7XG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaE1vdmUpO1xuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVUb3VjaEVuZCk7XG5cbiAgICAgICAgc2xpZGVySW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc2FibGVTbGlkZXIoKSB7XG4gICAgICAgIGlmICghc2xpZGVySW5pdGlhbGl6ZWQpIHJldHVybjtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxlbmdlX19jb250cm9sLWxlZnQnKT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmV2U2xpZGUpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxlbmdlX19jb250cm9sLXJpZ2h0Jyk/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dFNsaWRlKTtcblxuICAgICAgICBzbGlkZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVRvdWNoU3RhcnQpO1xuICAgICAgICBzbGlkZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlVG91Y2hNb3ZlKTtcbiAgICAgICAgc2xpZGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlVG91Y2hFbmQpO1xuXG4gICAgICAgIC8vINCh0LrQuNC00LDRlNC80L4g0YHRgtC40LvRliDRgtCwINC60LvQsNGB0LhcbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLnpJbmRleCA9ICcnO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnLCAnbGVmdC1zbGlkZScsICdyaWdodC1zbGlkZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzbGlkZXJJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrU2xpZGVyQWN0aXZhdGlvbigpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNjAxKSB7XG4gICAgICAgICAgICBlbmFibGVTbGlkZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc2FibGVTbGlkZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrU2xpZGVyQWN0aXZhdGlvbigpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZVRpbWVvdXQpO1xuICAgICAgICByZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjaGVja1NsaWRlckFjdGl2YXRpb24oKTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICB9KTtcblxuICAgIC8vIFRFU1RcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFyay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJyk7XG4gICAgfSk7XG4gICAgY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpXG5cbiAgICBsbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aC1idG5cIilcbiAgICBhdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYodXNlcklkKXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsIFwiMTg5MDg0NjVcIilcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KTtcblxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIik/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikgPz8gbnVsbFxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Y2Nlc3MtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJykuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJnID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fYmcnKTtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NCbG9jayA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmRfX3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgYmcuY2xhc3NMaXN0LnJlbW92ZSgnc3VjY2VzcycsICdpblByb2dyZXNzJywgJ2ZhaWwnLCAnbG9ja2VkJyk7XG5cbiAgICAgICAgICAgIGJnLmNsYXNzTGlzdC5hZGQoJ3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgc3VjY2Vzc0Jsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5Qcm9ncmVzcy1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKS5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmcgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19iZycpO1xuICAgICAgICAgICAgY29uc3Qgc3VjY2Vzc0Jsb2NrID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fc3VjY2VzcycpO1xuXG4gICAgICAgICAgICBpZiAoYmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWNjZXNzJykgfHwgYmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdpblByb2dyZXNzJykgfHwgYmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYWlsJykgfHwgYmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2NrZWQnKSkge1xuICAgICAgICAgICAgICAgIGJnLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Y2Nlc3MnLCAnaW5Qcm9ncmVzcycsICdmYWlsJywgJ2xvY2tlZCcpO1xuXG4gICAgICAgICAgICAgICAgYmcuY2xhc3NMaXN0LmFkZCgnaW5Qcm9ncmVzcycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzQmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0Jsb2NrLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhaWwtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJykuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJnID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fYmcnKTtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NCbG9jayA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmRfX3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgaWYgKGJnLmNsYXNzTGlzdC5jb250YWlucygnc3VjY2VzcycpIHx8IGJnLmNsYXNzTGlzdC5jb250YWlucygnaW5Qcm9ncmVzcycpIHx8IGJnLmNsYXNzTGlzdC5jb250YWlucygnZmFpbCcpIHx8IGJnLmNsYXNzTGlzdC5jb250YWlucygnbG9ja2VkJykpIHtcbiAgICAgICAgICAgICAgICBiZy5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzJywgJ2luUHJvZ3Jlc3MnLCAnZmFpbCcsICdsb2NrZWQnKTtcblxuICAgICAgICAgICAgICAgIGJnLmNsYXNzTGlzdC5hZGQoJ2ZhaWwnKTtcblxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzc0Jsb2NrLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NCbG9jay5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NrZWQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJykuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJnID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fYmcnKTtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NCbG9jayA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmRfX3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgaWYgKGJnLmNsYXNzTGlzdC5jb250YWlucygnc3VjY2VzcycpIHx8IGJnLmNsYXNzTGlzdC5jb250YWlucygnaW5Qcm9ncmVzcycpIHx8IGJnLmNsYXNzTGlzdC5jb250YWlucygnZmFpbCcpIHx8IGJnLmNsYXNzTGlzdC5jb250YWlucygnbG9ja2VkJykpIHtcbiAgICAgICAgICAgICAgICBiZy5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzJywgJ2luUHJvZ3Jlc3MnLCAnZmFpbCcsICdsb2NrZWQnKTtcblxuICAgICAgICAgICAgICAgIGJnLmNsYXNzTGlzdC5hZGQoJ2xvY2tlZCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzQmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0Jsb2NrLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2dyZXNzQmFyLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZ3Jlc3NCYXJfX2l0ZW0sIC5jaGFsbGVuZ2VfX3ByaXplLWl0ZW0sIC5jaGFsbGVuZ2VfX2JvbnVzLWl0ZW0nKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aXRob3V0Qm9udXMtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFsbGVuZ2VfX2JvbnVzJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gcmVuZGVyVXNlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdyZW5kZXJVc2VycyDQstC40LzQutC90LXQvdC+INC00LvRjyDRgtC10YHRgtGDJyk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gcG9wdWxhdGVVc2Vyc1RhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygncG9wdWxhdGVVc2Vyc1RhYmxlINCy0LjQvNC60L3QtdC90L4g0LTQu9GPINGC0LXRgdGC0YMnKTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBkaXNwbGF5VXNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2Rpc3BsYXlVc2VyINCy0LjQvNC60L3QtdC90L4g0LTQu9GPINGC0LXRgdGC0YMnKTtcbiAgICAvLyB9XG5cbn0pKCk7XG5cblxuIl19
