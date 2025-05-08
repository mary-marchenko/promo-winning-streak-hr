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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsImhyTGVuZyIsImVuTGVuZyIsInRvZ2dsZUNsYXNzZXMiLCJlbGVtZW50cyIsImNsYXNzTmFtZSIsImZvckVhY2giLCJlbCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInRvZ2dsZVRyYW5zbGF0ZXMiLCJkYXRhQXR0ciIsInNldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsImkxOG5EYXRhIiwicmVtb3ZlQXR0cmlidXRlIiwibG9hZGVyQnRuIiwibG9jYWxlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZGVidWciLCJoaWRlTG9hZGVyIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJOdW1iZXIiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJhZGQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsInJlbW92ZSIsImluaXQiLCJ0cnlEZXRlY3RVc2VySWQiLCJxdWlja0NoZWNrQW5kUmVuZGVyIiwiY2hlY2tVc2VyQXV0aCIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXJ0aWNpcGF0ZSIsIndpbmRvdyIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImdfdXNlcl9pZCIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ3YWl0Rm9yVXNlcklkIiwicmVzb2x2ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibG9hZFRyYW5zbGF0aW9ucyIsImxvZyIsInRyYW5zbGF0ZSIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwic2hvdWxkU2tpcCIsImV2ZXJ5IiwibXV0YXRpb24iLCJ0YXJnZXQiLCJjbG9zZXN0Iiwib2JzZXJ2ZSIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImxvYWRUaW1lIiwic2V0VGltZW91dCIsInNob3dFbGVtZW50cyIsImhpZGVFbGVtZW50cyIsInVzZXJpZCIsInJlcG9ydEVycm9yIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXJuIiwiZWxlbXMiLCJsZW5ndGgiLCJlbGVtIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImxhbmciLCJyZW5kZXJVc2VycyIsImRhdGEiLCJ1c2VycyIsInBvcHVsYXRlVXNlcnNUYWJsZSIsImN1cnJlbnRVc2VySWQiLCJyZXN1bHRzVGFibGUiLCJyZXN1bHRzVGFibGVPdGhlciIsImN1cnJlbnRVc2VyIiwiZmluZCIsInVzZXIiLCJ0b3BVc2VycyIsInNsaWNlIiwiaXNUb3BDdXJyZW50VXNlciIsInNvbWUiLCJkaXNwbGF5VXNlciIsIndlZWsiLCJpc0N1cnJlbnRVc2VyIiwidGFibGUiLCJyZW5kZXJSb3ciLCJ1c2VyRGF0YSIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJjcmVhdGVFbGVtZW50IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsIm1hc2tVc2VySWQiLCJwb2ludHMiLCJ0cmFuc2xhdGVLZXkiLCJhcHBlbmQiLCJpbmRleCIsImRlZmF1bHRWYWx1ZSIsIm5lZWRLZXkiLCJ0b1N0cmluZyIsInBhcmFtcyIsIml0ZW1zVHh0Iiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJvYnMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaXRlbSIsImRpc2Nvbm5lY3QiLCJ0aHJlc2hvbGQiLCJwYXJlbnRFbGVtZW50Iiwic2xpZGVySW5pdGlhbGl6ZWQiLCJjdXJyZW50SW5kZXgiLCJzdGFydFgiLCJpc0RyYWdnaW5nIiwicmVzaXplVGltZW91dCIsInNsaWRlciIsIml0ZW1zIiwidG90YWxJdGVtcyIsInVwZGF0ZVNsaWRlciIsImRpc3RhbmNlIiwibmV3UG9zaXRpb24iLCJzY2FsZSIsInRyYW5zZm9ybSIsInpJbmRleCIsIm5leHRTbGlkZSIsInByZXZTbGlkZSIsImhhbmRsZVRvdWNoU3RhcnQiLCJlIiwidG91Y2hlcyIsImNsaWVudFgiLCJoYW5kbGVUb3VjaE1vdmUiLCJkZWx0YVgiLCJNYXRoIiwiYWJzIiwiaGFuZGxlVG91Y2hFbmQiLCJlbmFibGVTbGlkZXIiLCJkaXNhYmxlU2xpZGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNoZWNrU2xpZGVyQWN0aXZhdGlvbiIsImlubmVyV2lkdGgiLCJjbGVhclRpbWVvdXQiLCJsbmdCdG4iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInJlbG9hZCIsImF1dGhCdG4iLCJjYXJkIiwiYmciLCJzdWNjZXNzQmxvY2siLCJjb250YWlucyJdLCJtYXBwaW5ncyI6Ijs7OytDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxDQUFDLFlBQVk7RUFBQTtFQUNULElBQU1BLE1BQU0sR0FBRyx5Q0FBeUM7RUFDeEQ7O0VBRUEsSUFBTUMsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDaERDLFVBQVUsR0FBR0YsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7SUFDckRDLGVBQWUsR0FBR0osUUFBUSxD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UyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDO1FBRTlEeUosRUFBRSxDQUFDN0wsU0FBUyxDQUFDZ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUUxQixJQUFJLENBQUM4SixZQUFZLENBQUM5TCxTQUFTLENBQUMrTCxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7VUFDMUNELFlBQVksQ0FBQzlMLFNBQVMsQ0FBQ2dDLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDdEM7TUFDSjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztFQUVGOUMsUUFBUSxDQUFDQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQ3VELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3ZFeEQsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxvRUFBb0UsQ0FBQyxDQUFDUyxPQUFPLENBQUMsVUFBQUMsRUFBRSxFQUFJO01BQzFHQSxFQUFFLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7RUFFRmYsUUFBUSxDQUFDQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQ3VELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ3hFeEQsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDUyxPQUFPLENBQUMsVUFBQUMsRUFBRSxFQUFJO01BQ3pEQSxFQUFFLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUMvQixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7O0VBRUY7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUVKLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX3dpbm5pbmdfc3RyZWFrJ1xuICAgIC8vIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfaGFyZGNvcmVfdGVubmlzJ1xuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtYnRuJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tam9pbicpLFxuICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItb3ZlcmxheVwiKVxuXG4gICAgY29uc3QgaHJMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hyTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGNvbnN0IHRvZ2dsZUNsYXNzZXMgPSAoZWxlbWVudHMsIGNsYXNzTmFtZSkgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKGAke2NsYXNzTmFtZX1gKSk7XG4gICAgY29uc3QgdG9nZ2xlVHJhbnNsYXRlcyA9IChlbGVtZW50cywgZGF0YUF0dHIpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJywgYCR7ZGF0YUF0dHJ9YClcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gaTE4bkRhdGFbZGF0YUF0dHJdIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGRhdGFBdHRyO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgfSk7XG5cbiAgICBsZXQgbG9hZGVyQnRuID0gZmFsc2VcblxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpID8/IFwiaHJcIlxuICAgIC8vIGxldCBsb2NhbGUgPSBcImhyXCJcblxuICAgIGlmIChockxlbmcpIGxvY2FsZSA9ICdocic7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCBkZWJ1ZyA9IHRydWVcblxuICAgIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IHRydWU7XG4gICAgLy8gbGV0IHVzZXJJZCA9IG51bGw7XG4gICAgbGV0IHVzZXJJZCA9IE51bWJlcihzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpKSA/PyBudWxsXG5cbiAgICBjb25zdCByZXF1ZXN0ID0gZnVuY3Rpb24gKGxpbmssIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gZmV0Y2goYXBpVVJMICsgbGluaywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC4uLihleHRyYU9wdGlvbnMgfHwge30pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBlcnJvcicpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXF1ZXN0IGZhaWxlZDonLCBlcnIpO1xuXG4gICAgICAgICAgICAgICAgLy8gcmVwb3J0RXJyb3IoZXJyKTtcblxuICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXYtcGFnZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgLy8gaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLnN0YXJ0c1dpdGgoXCJodHRwczovL3d3dy5mYXZiZXQuaHIvXCIpKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb2NpamUvcHJvbW9jaWphL3N0dWIvJztcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9zL3Byb21vL3N0dWIvJztcbiAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUxvYWRlcigpe1xuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiXG4gICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkaW5nXCIpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAyMDtcbiAgICAgICAgY29uc3QgYXR0ZW1wdEludGVydmFsID0gNTA7XG5cbiAgICAgICAgZnVuY3Rpb24gdHJ5RGV0ZWN0VXNlcklkKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zdG9yZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gd2luZG93LnN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gc3RhdGUuYXV0aC5pc0F1dGhvcml6ZWQgJiYgc3RhdGUuYXV0aC5pZCB8fCAnJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmdfdXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHdpbmRvdy5nX3VzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBxdWlja0NoZWNrQW5kUmVuZGVyKCkge1xuICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpO1xuICAgICAgICAgICAgcGFydGljaXBhdGVCdG5zLmZvckVhY2goYnRuID0+IGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBhcnRpY2lwYXRlKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3YWl0Rm9yVXNlcklkID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyeURldGVjdFVzZXJJZCgpO1xuICAgICAgICAgICAgICAgIGlmICh1c2VySWQgfHwgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tDaGVja0FuZFJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgICAgfSwgYXR0ZW1wdEludGVydmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvclVzZXJJZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkVHJhbnNsYXRpb25zKCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdChgL3RyYW5zbGF0ZXMvJHtsb2NhbGV9YClcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpMThuRGF0YSk7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICAgICAgICAgICAgdmFyIG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNob3VsZFNraXAgPSBtdXRhdGlvbnMuZXZlcnkobXV0YXRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG11dGF0aW9uLnRhcmdldC5jbG9zZXN0KCcudGFibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRTa2lwKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2lubmluZ1N0cmVha1wiKSwge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBjaGVja1VzZXJBdXRoKCkge1xuICAgICAgICBjb25zdCBsb2FkVGltZSA9IDIwMDtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNob3dFbGVtZW50cyA9IChlbGVtZW50cykgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJykpO1xuICAgICAgICAgICAgY29uc3QgaGlkZUVsZW1lbnRzID0gKGVsZW1lbnRzKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKSk7XG5cbiAgICAgICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHJlZGlyZWN0QnRucyk7XG4gICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHVuYXV0aE1zZ3MpO1xuICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHVuYXV0aE1zZ3MpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdChgL2ZhdnVzZXIvJHt1c2VySWR9P25vY2FjaGU9MWApLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzLnVzZXJpZCkge1xuICAgICAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHJlZGlyZWN0QnRucyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0VsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgbG9hZFRpbWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9ydEVycm9yKGVycikge1xuICAgICAgICBjb25zdCByZXBvcnREYXRhID0ge1xuICAgICAgICAgICAgb3JpZ2luOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHVzZXJpZDogdXNlcklkLFxuICAgICAgICAgICAgZXJyb3JUZXh0OiBlcnI/LmVycm9yIHx8IGVycj8udGV4dCB8fCBlcnI/Lm1lc3NhZ2UgfHwgJ1Vua25vd24gZXJyb3InLFxuICAgICAgICAgICAgdHlwZTogZXJyPy5uYW1lIHx8ICdVbmtub3duRXJyb3InLFxuICAgICAgICAgICAgc3RhY2s6IGVycj8uc3RhY2sgfHwgJydcbiAgICAgICAgfTtcblxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpLWNtcy9yZXBvcnRzL2FkZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXBvcnREYXRhKVxuICAgICAgICB9KS5jYXRjaChjb25zb2xlLndhcm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZSgpIHtcbiAgICAgICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10cmFuc2xhdGVdJylcbiAgICAgICAgaWYgKGVsZW1zICYmIGVsZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYodHJhbnNsYXRlU3RhdGUpe1xuICAgICAgICAgICAgICAgIGVsZW1zLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW0uZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtLmlubmVySFRNTCA9IGkxOG5EYXRhW2tleV0gfHwgJyotLS0tTkVFRCBUTyBCRSBUUkFOU0xBVEVELS0tLSogICBrZXk6ICAnICsga2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaTE4bkRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cmFuc2xhdGlvbiB3b3JrcyFcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MobWFpblBhZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhlbGVtZW50KSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ2hyJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQobG9jYWxlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJVc2VycygpIHtcbiAgICAgICAgcmVxdWVzdChgL3VzZXJzL2ApXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VycyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCB1c2VySWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcG9wdWxhdGVVc2Vyc1RhYmxlKHVzZXJzLCBjdXJyZW50VXNlcklkKSB7XG4gICAgICAgIHJlc3VsdHNUYWJsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcmVzdWx0c1RhYmxlT3RoZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGlmICghdXNlcnM/Lmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IHVzZXJzLmZpbmQodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG4gICAgICAgIGNvbnN0IHRvcFVzZXJzID0gdXNlcnMuc2xpY2UoMCwgMTApO1xuICAgICAgICBjb25zdCBpc1RvcEN1cnJlbnRVc2VyID0gY3VycmVudFVzZXIgJiYgdG9wVXNlcnMuc29tZSh1c2VyID0+IHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkKTtcbiAgICAgICAgdG9wVXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKHVzZXIsIHVzZXIudXNlcmlkID09PSBjdXJyZW50VXNlcklkLCByZXN1bHRzVGFibGUsIHRvcFVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyLCB3ZWVrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghaXNUb3BDdXJyZW50VXNlciAmJiBjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgZGlzcGxheVVzZXIoY3VycmVudFVzZXIsIHRydWUsIHJlc3VsdHNUYWJsZU90aGVyLCB1c2VycywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheVVzZXIodXNlciwgaXNDdXJyZW50VXNlciwgdGFibGUsIHVzZXJzLCBpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgIGNvbnN0IHJlbmRlclJvdyA9ICh1c2VyRGF0YSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGhpZ2hsaWdodCA9IGZhbHNlLCBuZWlnaGJvciA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgY29uc3QgdXNlclJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCd0YWJsZV9fcm93Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJQbGFjZSA9IHVzZXJzLmluZGV4T2YodXNlckRhdGEpICsgMTtcbiAgICAgICAgICAgIGNvbnN0IHByaXplS2V5ID0gZGVidWcgPyBudWxsIDogZ2V0UHJpemVUcmFuc2xhdGlvbktleSh1c2VyUGxhY2UpO1xuXG4gICAgICAgICAgICBpZiAodXNlclBsYWNlIDw9IDMpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoYHBsYWNlJHt1c2VyUGxhY2V9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoaWdobGlnaHQpIHtcbiAgICAgICAgICAgICAgICB1c2VyUm93LmNsYXNzTGlzdC5hZGQoJ195b3VyJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5laWdoYm9yKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfbmVpZ2hib3InKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXNlclJvdy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyUGxhY2UgPCAxMCA/ICcwJyArIHVzZXJQbGFjZSA6IHVzZXJQbGFjZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7aGlnaGxpZ2h0ID8gdXNlckRhdGEudXNlcmlkIDogbWFza1VzZXJJZCh1c2VyRGF0YS51c2VyaWQpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHt1c2VyRGF0YS5wb2ludHN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke3ByaXplS2V5ID8gdHJhbnNsYXRlS2V5KHByaXplS2V5KSA6ICcgLSAnfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG5cbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZCh1c2VyUm93KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzQ3VycmVudFVzZXIgJiYgIWlzVG9wQ3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdXNlcnMuaW5kZXhPZih1c2VyKTtcbiAgICAgICAgICAgIGlmICh1c2Vyc1tpbmRleCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyUm93KHVzZXJzW2luZGV4IC0gMV0sIHsgbmVpZ2hib3I6IHRydWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJSb3codXNlciwgeyBoaWdobGlnaHQ6IHRydWUgfSk7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCArIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlS2V5KGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5lZWRLZXkgPSBkZWJ1ZyA/IGtleSA6IGAqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qIGtleTogJHtrZXl9YFxuXG4gICAgICAgIGRlZmF1bHRWYWx1ZSA9ICBuZWVkS2V5IHx8IGtleTtcbiAgICAgICAgcmV0dXJuIGkxOG5EYXRhW2tleV0gfHwgZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1hc2tVc2VySWQodXNlcklkKSB7XG4gICAgICAgIHJldHVybiBcIioqXCIgKyB1c2VySWQudG9TdHJpbmcoKS5zbGljZSgyKTtcbiAgICB9XG5cbiAgICAvLyBmdW5jdGlvbiBnZXRQcml6ZVRyYW5zbGF0aW9uS2V5KHBsYWNlLCB3ZWVrKSB7XG4gICAgLy8gICAgIGlmIChwbGFjZSA8PSAzKSByZXR1cm4gYHByaXplXyR7d2Vla30tJHtwbGFjZX1gO1xuICAgIC8vICAgICBpZiAocGxhY2UgPD0gMTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS00LTEwYDtcbiAgICAvLyAgICAgaWYgKHBsYWNlIDw9IDI1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTEtMjVgO1xuICAgIC8vICAgICBpZiAocGxhY2UgPD0gNTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0yNi01MGA7XG4gICAgLy8gICAgIGlmIChwbGFjZSA8PSA3NSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTUxLTc1YDtcbiAgICAvLyAgICAgaWYgKHBsYWNlIDw9IDEwMCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTc2LTEwMGA7XG4gICAgLy8gICAgIGlmIChwbGFjZSA8PSAxMjUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMDEtMTI1YDtcbiAgICAvLyAgICAgaWYgKHBsYWNlIDw9IDE1MCkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTEyNi0xNTBgO1xuICAgIC8vICAgICBpZiAocGxhY2UgPD0gMTc1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTUxLTE3NWA7XG4gICAgLy8gICAgIGlmIChwbGFjZSA8PSAyMDApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xNzYtMjAwYDtcbiAgICAvLyB9XG5cbiAgICBmdW5jdGlvbiBwYXJ0aWNpcGF0ZSgpIHtcbiAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7IHVzZXJpZDogdXNlcklkIH07XG4gICAgICAgIGZldGNoKGFwaVVSTCArICcvdXNlci8nLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRlckJ0biA9IHRydWVcbiAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+e1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVUcmFuc2xhdGVzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJfcmVhZHlcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwiZG9uZVwiKVxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzc2VzKHBhcnRpY2lwYXRlQnRucywgXCJsb2FkZXJcIilcbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBjaGVja1VzZXJBdXRoKClcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgbG9hZFRyYW5zbGF0aW9ucygpLnRoZW4oaW5pdCkgLy8gINC30LDQv9GD0YHQuiDRltC90ZbRgtGDINGB0YLQvtGA0ZbQvdC60LhcblxuICAgIC8vYW5pbWF0aW9uXG4gICAgY29uc3QgaXRlbXNUeHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5zdHJ1Y3Rpb25zX190eHQtaXRlbScpXG5cbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzKSA9PiB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgIGl0ZW1zVHh0LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJylcbiAgICAgICAgICAgICAgICAgICAgfSwgaW5kZXggKiAzMDApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBvYnMuZGlzY29ubmVjdCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSwge1xuICAgICAgICB0aHJlc2hvbGQ6IDAuMlxuICAgIH0pXG5cbiAgICBpZiAoaXRlbXNUeHQubGVuZ3RoID4gMCkge1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGl0ZW1zVHh0WzBdLnBhcmVudEVsZW1lbnQpXG4gICAgfVxuXG4gICAgLy9zbGlkZXJcbiAgICBsZXQgc2xpZGVySW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcbiAgICBsZXQgc3RhcnRYID0gMDtcbiAgICBsZXQgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIGxldCByZXNpemVUaW1lb3V0O1xuXG4gICAgbGV0IHNsaWRlcjtcbiAgICBsZXQgaXRlbXM7XG4gICAgbGV0IHRvdGFsSXRlbXM7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTbGlkZXIoKSB7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGluZGV4IC0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gMDtcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IDAuOTtcblxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIHNjYWxlID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgPT09IC0xIHx8IChjdXJyZW50SW5kZXggPT09IDAgJiYgaW5kZXggPT09IHRvdGFsSXRlbXMgLSAxKSkge1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gLTIyO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA9PT0gMSB8fCAoY3VycmVudEluZGV4ID09PSB0b3RhbEl0ZW1zIC0gMSAmJiBpbmRleCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiA9IDIyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtuZXdQb3NpdGlvbn0lKSBzY2FsZSgke3NjYWxlfSlgO1xuICAgICAgICAgICAgaXRlbS5zdHlsZS56SW5kZXggPSBpbmRleCA9PT0gY3VycmVudEluZGV4ID8gMiA6IDE7XG5cbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgaW5kZXggPT09IGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2xlZnQtc2xpZGUnLCBkaXN0YW5jZSA9PT0gLTEgfHwgKGN1cnJlbnRJbmRleCA9PT0gMCAmJiBpbmRleCA9PT0gdG90YWxJdGVtcyAtIDEpKTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgncmlnaHQtc2xpZGUnLCBkaXN0YW5jZSA9PT0gMSB8fCAoY3VycmVudEluZGV4ID09PSB0b3RhbEl0ZW1zIC0gMSAmJiBpbmRleCA9PT0gMCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuZXh0U2xpZGUoKSB7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggKyAxKSAlIHRvdGFsSXRlbXM7XG4gICAgICAgIHVwZGF0ZVNsaWRlcigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZXZTbGlkZSgpIHtcbiAgICAgICAgY3VycmVudEluZGV4ID0gKGN1cnJlbnRJbmRleCAtIDEgKyB0b3RhbEl0ZW1zKSAlIHRvdGFsSXRlbXM7XG4gICAgICAgIHVwZGF0ZVNsaWRlcigpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnQoZSkge1xuICAgICAgICBpc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgc3RhcnRYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlKGUpIHtcbiAgICAgICAgaWYgKCFpc0RyYWdnaW5nKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGRlbHRhWCA9IGUudG91Y2hlc1swXS5jbGllbnRYIC0gc3RhcnRYO1xuXG4gICAgICAgIGlmIChNYXRoLmFicyhkZWx0YVgpID4gNTApIHtcbiAgICAgICAgICAgIGlmIChkZWx0YVggPiAwKSB7XG4gICAgICAgICAgICAgICAgcHJldlNsaWRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5leHRTbGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoKSB7XG4gICAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmFibGVTbGlkZXIoKSB7XG4gICAgICAgIGlmIChzbGlkZXJJbml0aWFsaXplZCkgcmV0dXJuO1xuXG4gICAgICAgIHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGVuZ2VfX2NhcmRzJyk7XG4gICAgICAgIGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYWxsZW5nZV9fY2FyZHMgLmNhcmQnKTtcbiAgICAgICAgdG90YWxJdGVtcyA9IGl0ZW1zLmxlbmd0aDtcbiAgICAgICAgaWYgKCFzbGlkZXIgfHwgaXRlbXMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgdXBkYXRlU2xpZGVyKCk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWxsZW5nZV9fY29udHJvbC1sZWZ0Jyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJldlNsaWRlKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWxsZW5nZV9fY29udHJvbC1yaWdodCcpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5leHRTbGlkZSk7XG5cbiAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVUb3VjaFN0YXJ0KTtcbiAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZVRvdWNoTW92ZSk7XG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZVRvdWNoRW5kKTtcblxuICAgICAgICBzbGlkZXJJbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzYWJsZVNsaWRlcigpIHtcbiAgICAgICAgaWYgKCFzbGlkZXJJbml0aWFsaXplZCkgcmV0dXJuO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGVuZ2VfX2NvbnRyb2wtbGVmdCcpPy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHByZXZTbGlkZSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGVuZ2VfX2NvbnRyb2wtcmlnaHQnKT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXh0U2xpZGUpO1xuXG4gICAgICAgIHNsaWRlci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlVG91Y2hTdGFydCk7XG4gICAgICAgIHNsaWRlci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaE1vdmUpO1xuICAgICAgICBzbGlkZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVUb3VjaEVuZCk7XG5cbiAgICAgICAgLy8g0KHQutC40LTQsNGU0LzQviDRgdGC0LjQu9GWINGC0LAg0LrQu9Cw0YHQuFxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSAnJztcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuekluZGV4ID0gJyc7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScsICdsZWZ0LXNsaWRlJywgJ3JpZ2h0LXNsaWRlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNsaWRlckluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tTbGlkZXJBY3RpdmF0aW9uKCkge1xuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA2MDEpIHtcbiAgICAgICAgICAgIGVuYWJsZVNsaWRlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlzYWJsZVNsaWRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tTbGlkZXJBY3RpdmF0aW9uKCk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplVGltZW91dCk7XG4gICAgICAgIHJlc2l6ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGNoZWNrU2xpZGVyQWN0aXZhdGlvbigpO1xuICAgICAgICB9LCAyMDApO1xuICAgIH0pO1xuXG4gICAgLy8gVEVTVFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXJrLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2RhcmsnKTtcbiAgICB9KTtcbiAgICBjb25zdCBsbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxuZy1idG5cIilcblxuICAgIGxuZ0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsZVwiKSkge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcImxvY2FsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJsb2NhbGVcIiwgXCJlblwiKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhdXRoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRoLWJ0blwiKVxuICAgIGF1dGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+e1xuICAgICAgICBpZih1c2VySWQpe1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJZFwiKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VySWRcIiwgXCIxODkwODQ2NVwiKVxuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgIH0pO1xuXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idG5cIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdGVzdFwiKT8uY2xhc3NMaXN0LnRvZ2dsZShcImhpZGVcIik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJZFwiKSA/PyBudWxsXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VjY2Vzcy1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKS5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmcgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19iZycpO1xuICAgICAgICAgICAgY29uc3Qgc3VjY2Vzc0Jsb2NrID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fc3VjY2VzcycpO1xuXG4gICAgICAgICAgICBiZy5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzJywgJ2luUHJvZ3Jlc3MnLCAnZmFpbCcsICdsb2NrZWQnKTtcblxuICAgICAgICAgICAgYmcuY2xhc3NMaXN0LmFkZCgnc3VjY2VzcycpO1xuXG4gICAgICAgICAgICBzdWNjZXNzQmxvY2suY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pblByb2dyZXNzLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgICAgICBjb25zdCBiZyA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmRfX2JnJyk7XG4gICAgICAgICAgICBjb25zdCBzdWNjZXNzQmxvY2sgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19zdWNjZXNzJyk7XG5cbiAgICAgICAgICAgIGlmIChiZy5jbGFzc0xpc3QuY29udGFpbnMoJ3N1Y2Nlc3MnKSB8fCBiZy5jbGFzc0xpc3QuY29udGFpbnMoJ2luUHJvZ3Jlc3MnKSB8fCBiZy5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhaWwnKSB8fCBiZy5jbGFzc0xpc3QuY29udGFpbnMoJ2xvY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgYmcuY2xhc3NMaXN0LnJlbW92ZSgnc3VjY2VzcycsICdpblByb2dyZXNzJywgJ2ZhaWwnLCAnbG9ja2VkJyk7XG5cbiAgICAgICAgICAgICAgICBiZy5jbGFzc0xpc3QuYWRkKCdpblByb2dyZXNzJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3NCbG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSkge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzQmxvY2suY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFpbC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKS5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmcgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19iZycpO1xuICAgICAgICAgICAgY29uc3Qgc3VjY2Vzc0Jsb2NrID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fc3VjY2VzcycpO1xuXG4gICAgICAgICAgICBpZiAoYmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWNjZXNzJykgfHwgYmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdpblByb2dyZXNzJykgfHwgYmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYWlsJykgfHwgYmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2NrZWQnKSkge1xuICAgICAgICAgICAgICAgIGJnLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Y2Nlc3MnLCAnaW5Qcm9ncmVzcycsICdmYWlsJywgJ2xvY2tlZCcpO1xuXG4gICAgICAgICAgICAgICAgYmcuY2xhc3NMaXN0LmFkZCgnZmFpbCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzQmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0Jsb2NrLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2tlZC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKS5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmcgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19iZycpO1xuICAgICAgICAgICAgY29uc3Qgc3VjY2Vzc0Jsb2NrID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fc3VjY2VzcycpO1xuXG4gICAgICAgICAgICBpZiAoYmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWNjZXNzJykgfHwgYmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdpblByb2dyZXNzJykgfHwgYmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYWlsJykgfHwgYmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2NrZWQnKSkge1xuICAgICAgICAgICAgICAgIGJnLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Y2Nlc3MnLCAnaW5Qcm9ncmVzcycsICdmYWlsJywgJ2xvY2tlZCcpO1xuXG4gICAgICAgICAgICAgICAgYmcuY2xhc3NMaXN0LmFkZCgnbG9ja2VkJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXN1Y2Nlc3NCbG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSkge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzQmxvY2suY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3NCYXItYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9ncmVzc0Jhcl9faXRlbSwgLmNoYWxsZW5nZV9fcHJpemUtaXRlbSwgLmNoYWxsZW5nZV9fYm9udXMtaXRlbScpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpdGhvdXRCb251cy1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYWxsZW5nZV9fYm9udXMnKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyByZW5kZXJVc2VycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3JlbmRlclVzZXJzINCy0LjQvNC60L3QtdC90L4g0LTQu9GPINGC0LXRgdGC0YMnKTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBwb3B1bGF0ZVVzZXJzVGFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdwb3B1bGF0ZVVzZXJzVGFibGUg0LLQuNC80LrQvdC10L3QviDQtNC70Y8g0YLQtdGB0YLRgycpO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGRpc3BsYXlVc2VyID0gZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnZGlzcGxheVVzZXIg0LLQuNC80LrQvdC10L3QviDQtNC70Y8g0YLQtdGB0YLRgycpO1xuICAgIC8vIH1cblxufSkoKTtcblxuXG4iXX0=
