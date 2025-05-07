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
  var _sessionStorage$getIt;
  var apiURL = 'https://fav-prom.com/api_your_promo';
  var getActiveWeek = function getActiveWeek(promoStartDate, weekDuration) {
    var currentDate = new Date();
    var weekDates = [];
    var Day = 24 * 60 * 60 * 1000;
    var Week = weekDuration * Day;
    var formatDate = function formatDate(date) {
      return "".concat(date.getDate().toString().padStart(2, "0"), ".").concat((date.getMonth() + 1).toString().padStart(2, "0"));
    };
    var calculateWeekPeriod = function calculateWeekPeriod(weekIndex) {
      var baseStart = promoStartDate.getTime();
      var start = new Date(baseStart + weekIndex * Week);
      var end = new Date(start.getTime() + (weekDuration * Day - 1));
      return {
        start: start,
        end: end
      };
    };
    var activeWeekIndex = null;

    // Перевірка поточного тижня
    for (var i = 0; i < 10; i++) {
      // Обмежуємо 10 тижнями (якщо потрібно більше, просто змініть лічильник)
      var _calculateWeekPeriod = calculateWeekPeriod(i),
        start = _calculateWeekPeriod.start,
        end = _calculateWeekPeriod.end;
      if (currentDate >= start && currentDate <= end) {
        activeWeekIndex = i + 1;
        break;
      }
    }
    return activeWeekIndex;
  };
  var promoStartDate = new Date("2025-05-05T00:00:00");
  var weekDuration = 10;
  var activeWeek = getActiveWeek(promoStartDate, weekDuration) || 1;
  var mainPage = document.querySelector(".fav-page"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.btn-join'),
    loader = document.querySelector(".spinner-overlay");
  var ukLeng = document.querySelector('#ukLeng');
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
  var locale = "en";
  if (ukLeng) locale = 'uk';
  if (enLeng) locale = 'en';
  var debug = true;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = true;
  var userId = null;
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
      translate();
      var mutationObserver = new MutationObserver(function (mutations) {
        var shouldSkip = mutations.every(function (mutation) {
          return mutation.target.closest('.table');
        });
        if (shouldSkip) return;
        translate();
      });
      mutationObserver.observe(document.getElementById("yourPromoId"), {
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
    for (var _i = 0, _arr = ['uk', 'en']; _i < _arr.length; _i++) {
      var lang = _arr[_i];
      element.classList.remove(lang);
    }
    element.classList.add(locale);
  }
  function renderUsers(week) {
    request("/users/".concat(week)).then(function (data) {
      var users = data;
      populateUsersTable(users, userId, week);
    });
  }
  function populateUsersTable(users, currentUserId, week) {
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
      displayUser(currentUser, true, resultsTableOther, users, false, week);
    }
  }
  function displayUser(user, isCurrentUser, table, users, isTopCurrentUser, week) {
    var renderRow = function renderRow(userData) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$highlight = options.highlight,
        highlight = _options$highlight === void 0 ? false : _options$highlight,
        _options$neighbor = options.neighbor,
        neighbor = _options$neighbor === void 0 ? false : _options$neighbor;
      var userRow = document.createElement('div');
      userRow.classList.add('table__row');
      var userPlace = users.indexOf(userData) + 1;
      var prizeKey = debug ? null : getPrizeTranslationKey(userPlace, week);
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
  function getPrizeTranslationKey(place, week) {
    if (place <= 3) return "prize_".concat(week, "-").concat(place);
    if (place <= 10) return "prize_".concat(week, "-4-10");
    if (place <= 25) return "prize_".concat(week, "-11-25");
    if (place <= 50) return "prize_".concat(week, "-26-50");
    if (place <= 75) return "prize_".concat(week, "-51-75");
    if (place <= 100) return "prize_".concat(week, "-76-100");
    if (place <= 125) return "prize_".concat(week, "-101-125");
    if (place <= 150) return "prize_".concat(week, "-126-150");
    if (place <= 175) return "prize_".concat(week, "-151-175");
    if (place <= 200) return "prize_".concat(week, "-176-200");
  }
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

  // loadTranslations().then(init) запуск ініту сторінки

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
  userId = (_sessionStorage$getIt = sessionStorage.getItem("userId")) !== null && _sessionStorage$getIt !== void 0 ? _sessionStorage$getIt : null;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwiZ2V0QWN0aXZlV2VlayIsInByb21vU3RhcnREYXRlIiwid2Vla0R1cmF0aW9uIiwiY3VycmVudERhdGUiLCJEYXRlIiwid2Vla0RhdGVzIiwiRGF5IiwiV2VlayIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRNb250aCIsImNhbGN1bGF0ZVdlZWtQZXJpb2QiLCJ3ZWVrSW5kZXgiLCJiYXNlU3RhcnQiLCJnZXRUaW1lIiwic3RhcnQiLCJlbmQiLCJhY3RpdmVXZWVrSW5kZXgiLCJpIiwiYWN0aXZlV2VlayIsIm1haW5QYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidW5hdXRoTXNncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJ0aWNpcGF0ZUJ0bnMiLCJyZWRpcmVjdEJ0bnMiLCJsb2FkZXIiLCJ1a0xlbmciLCJlbkxlbmciLCJ0b2dnbGVDbGFzc2VzIiwiZWxlbWVudHMiLCJjbGFzc05hbWUiLCJmb3JFYWNoIiwiZWwiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0b2dnbGVUcmFuc2xhdGVzIiwiZGF0YUF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJpMThuRGF0YSIsInJlbW92ZUF0dHJpYnV0ZSIsImxvYWRlckJ0biIsImxvY2FsZSIsImRlYnVnIiwiaGlkZUxvYWRlciIsInRyYW5zbGF0ZVN0YXRlIiwidXNlcklkIiwicmVxdWVzdCIsImxpbmsiLCJleHRyYU9wdGlvbnMiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwib2siLCJFcnJvciIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJyZXBvcnRFcnJvciIsInN0eWxlIiwiZGlzcGxheSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInN0YXJ0c1dpdGgiLCJQcm9taXNlIiwicmVqZWN0IiwiYWRkIiwiYm9keSIsIm92ZXJmbG93IiwicmVtb3ZlIiwiaW5pdCIsInRyeURldGVjdFVzZXJJZCIsInF1aWNrQ2hlY2tBbmRSZW5kZXIiLCJjaGVja1VzZXJBdXRoIiwic3RvcmUiLCJzdGF0ZSIsImdldFN0YXRlIiwiYXV0aCIsImlzQXV0aG9yaXplZCIsImlkIiwiZ191c2VyX2lkIiwiYXR0ZW1wdHMiLCJtYXhBdHRlbXB0cyIsImF0dGVtcHRJbnRlcnZhbCIsIndhaXRGb3JVc2VySWQiLCJyZXNvbHZlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJsb2FkVHJhbnNsYXRpb25zIiwidHJhbnNsYXRlIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJzaG91bGRTa2lwIiwiZXZlcnkiLCJtdXRhdGlvbiIsInRhcmdldCIsImNsb3Nlc3QiLCJvYnNlcnZlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwibG9hZFRpbWUiLCJzZXRUaW1lb3V0Iiwic2hvd0VsZW1lbnRzIiwiaGlkZUVsZW1lbnRzIiwidXNlcmlkIiwicmVwb3J0RGF0YSIsIm9yaWdpbiIsImVycm9yVGV4dCIsInRleHQiLCJtZXNzYWdlIiwidHlwZSIsIm5hbWUiLCJzdGFjayIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3YXJuIiwiZWxlbXMiLCJsZW5ndGgiLCJlbGVtIiwia2V5IiwiZ2V0QXR0cmlidXRlIiwibG9nIiwicmVmcmVzaExvY2FsaXplZENsYXNzIiwiZWxlbWVudCIsImxhbmciLCJyZW5kZXJVc2VycyIsIndlZWsiLCJkYXRhIiwidXNlcnMiLCJwb3B1bGF0ZVVzZXJzVGFibGUiLCJjdXJyZW50VXNlcklkIiwicmVzdWx0c1RhYmxlIiwicmVzdWx0c1RhYmxlT3RoZXIiLCJjdXJyZW50VXNlciIsImZpbmQiLCJ1c2VyIiwidG9wVXNlcnMiLCJzbGljZSIsImlzVG9wQ3VycmVudFVzZXIiLCJzb21lIiwiZGlzcGxheVVzZXIiLCJpc0N1cnJlbnRVc2VyIiwidGFibGUiLCJyZW5kZXJSb3ciLCJ1c2VyRGF0YSIsIm9wdGlvbnMiLCJoaWdobGlnaHQiLCJuZWlnaGJvciIsInVzZXJSb3ciLCJjcmVhdGVFbGVtZW50IiwidXNlclBsYWNlIiwiaW5kZXhPZiIsInByaXplS2V5IiwiZ2V0UHJpemVUcmFuc2xhdGlvbktleSIsIm1hc2tVc2VySWQiLCJwb2ludHMiLCJ0cmFuc2xhdGVLZXkiLCJhcHBlbmQiLCJpbmRleCIsImRlZmF1bHRWYWx1ZSIsIm5lZWRLZXkiLCJwbGFjZSIsInBhcnRpY2lwYXRlIiwicGFyYW1zIiwiaXRlbXNUeHQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsIm9icyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJpdGVtIiwiZGlzY29ubmVjdCIsInRocmVzaG9sZCIsInBhcmVudEVsZW1lbnQiLCJzbGlkZXJJbml0aWFsaXplZCIsImN1cnJlbnRJbmRleCIsInN0YXJ0WCIsImlzRHJhZ2dpbmciLCJyZXNpemVUaW1lb3V0Iiwic2xpZGVyIiwiaXRlbXMiLCJ0b3RhbEl0ZW1zIiwidXBkYXRlU2xpZGVyIiwiZGlzdGFuY2UiLCJuZXdQb3NpdGlvbiIsInNjYWxlIiwidHJhbnNmb3JtIiwiekluZGV4IiwibmV4dFNsaWRlIiwicHJldlNsaWRlIiwiaGFuZGxlVG91Y2hTdGFydCIsImUiLCJ0b3VjaGVzIiwiY2xpZW50WCIsImhhbmRsZVRvdWNoTW92ZSIsImRlbHRhWCIsIk1hdGgiLCJhYnMiLCJoYW5kbGVUb3VjaEVuZCIsImVuYWJsZVNsaWRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNhYmxlU2xpZGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNoZWNrU2xpZGVyQWN0aXZhdGlvbiIsImlubmVyV2lkdGgiLCJjbGVhclRpbWVvdXQiLCJsbmdCdG4iLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsInJlbG9hZCIsImF1dGhCdG4iLCJjYXJkIiwiYmci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Q0FBQ1MsT0FBTyxDQUFDLFVBQUFDLEVBQUUsRUFBSTtNQUN6REEsRUFBRSxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDOztFQUVGO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFFSixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYXBpVVJMID0gJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaV95b3VyX3Byb21vJ1xuXG4gICAgY29uc3QgZ2V0QWN0aXZlV2VlayA9IChwcm9tb1N0YXJ0RGF0ZSwgd2Vla0R1cmF0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IHdlZWtEYXRlcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IERheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG4gICAgICAgIGNvbnN0IFdlZWsgPSB3ZWVrRHVyYXRpb24gKiBEYXk7XG5cbiAgICAgICAgY29uc3QgZm9ybWF0RGF0ZSA9IChkYXRlKSA9PlxuICAgICAgICAgICAgYCR7ZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9LiR7KGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG5cbiAgICAgICAgY29uc3QgY2FsY3VsYXRlV2Vla1BlcmlvZCA9ICh3ZWVrSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJhc2VTdGFydCA9IHByb21vU3RhcnREYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoYmFzZVN0YXJ0ICsgd2Vla0luZGV4ICogV2Vlayk7XG4gICAgICAgICAgICBsZXQgZW5kID0gbmV3IERhdGUoc3RhcnQuZ2V0VGltZSgpICsgKHdlZWtEdXJhdGlvbiAqIERheSAtIDEpKTtcbiAgICAgICAgICAgIHJldHVybiB7IHN0YXJ0LCBlbmQgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgYWN0aXZlV2Vla0luZGV4ID0gbnVsbDtcblxuICAgICAgICAvLyDQn9C10YDQtdCy0ZbRgNC60LAg0L/QvtGC0L7Rh9C90L7Qs9C+INGC0LjQttC90Y9cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7IC8vINCe0LHQvNC10LbRg9GU0LzQviAxMCDRgtC40LbQvdGP0LzQuCAo0Y/QutGJ0L4g0L/QvtGC0YDRltCx0L3QviDQsdGW0LvRjNGI0LUsINC/0YDQvtGB0YLQviDQt9C80ZbQvdGW0YLRjCDQu9GW0YfQuNC70YzQvdC40LopXG4gICAgICAgICAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IGNhbGN1bGF0ZVdlZWtQZXJpb2QoaSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudERhdGUgPj0gc3RhcnQgJiYgY3VycmVudERhdGUgPD0gZW5kKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlV2Vla0luZGV4ID0gaSArIDE7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWN0aXZlV2Vla0luZGV4O1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9tb1N0YXJ0RGF0ZSA9IG5ldyBEYXRlKFwiMjAyNS0wNS0wNVQwMDowMDowMFwiKTtcbiAgICBjb25zdCB3ZWVrRHVyYXRpb24gPSAxMDtcblxuICAgIGNvbnN0IGFjdGl2ZVdlZWsgPSBnZXRBY3RpdmVXZWVrKHByb21vU3RhcnREYXRlLCB3ZWVrRHVyYXRpb24pIHx8IDE7XG5cblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIilcblxuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBjb25zdCB0b2dnbGVDbGFzc2VzID0gKGVsZW1lbnRzLCBjbGFzc05hbWUpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZShgJHtjbGFzc05hbWV9YCkpO1xuICAgIGNvbnN0IHRvZ2dsZVRyYW5zbGF0ZXMgPSAoZWxlbWVudHMsIGRhdGFBdHRyKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScsIGAke2RhdGFBdHRyfWApXG4gICAgICAgIGVsLmlubmVySFRNTCA9IGkxOG5EYXRhW2RhdGFBdHRyXSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBkYXRhQXR0cjtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgIH0pO1xuXG4gICAgbGV0IGxvYWRlckJ0biA9IGZhbHNlXG5cbiAgICBsZXQgbG9jYWxlID0gXCJlblwiXG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSB0cnVlXG5cbiAgICBpZiAoZGVidWcpIGhpZGVMb2FkZXIoKVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuICAgIGxldCB1c2VySWQgPSBudWxsO1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIHJlcG9ydEVycm9yKGVycik7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVMb2FkZXIoKXtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2FpdEZvclVzZXJJZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnlEZXRlY3RVc2VySWQoKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlcklkIHx8IGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIH0sIGF0dGVtcHRJbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JVc2VySWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke2FwaVVSTH0vbmV3LXRyYW5zbGF0ZXMvJHtsb2NhbGV9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcblxuICAgICAgICAgICAgICAgIHZhciBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzaG91bGRTa2lwID0gbXV0YXRpb25zLmV2ZXJ5KG11dGF0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtdXRhdGlvbi50YXJnZXQuY2xvc2VzdCgnLnRhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkU2tpcCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInlvdXJQcm9tb0lkXCIpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGNvbnN0IGxvYWRUaW1lID0gMjAwO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvd0VsZW1lbnRzID0gKGVsZW1lbnRzKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICBjb25zdCBoaWRlRWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcblxuICAgICAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICBzaG93RWxlbWVudHModW5hdXRoTXNncyk7XG4gICAgICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoaWRlRWxlbWVudHModW5hdXRoTXNncyk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHJlZGlyZWN0QnRucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBsb2FkVGltZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hMb2NhbGl6ZWRDbGFzcyhtYWluUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBsYW5nIG9mIFsndWsnLCAnZW4nXSkge1xuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChsb2NhbGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclVzZXJzKHdlZWspIHtcbiAgICAgICAgcmVxdWVzdChgL3VzZXJzLyR7d2Vla31gKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcnMgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgdXNlcklkLCB3ZWVrKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBvcHVsYXRlVXNlcnNUYWJsZSh1c2VycywgY3VycmVudFVzZXJJZCwgd2Vlaykge1xuICAgICAgICByZXN1bHRzVGFibGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHJlc3VsdHNUYWJsZU90aGVyLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBpZiAoIXVzZXJzPy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB1c2Vycy5maW5kKHVzZXIgPT4gdXNlci51c2VyaWQgPT09IGN1cnJlbnRVc2VySWQpO1xuICAgICAgICBjb25zdCB0b3BVc2VycyA9IHVzZXJzLnNsaWNlKDAsIDEwKTtcbiAgICAgICAgY29uc3QgaXNUb3BDdXJyZW50VXNlciA9IGN1cnJlbnRVc2VyICYmIHRvcFVzZXJzLnNvbWUodXNlciA9PiB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCk7XG4gICAgICAgIHRvcFVzZXJzLmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgICBkaXNwbGF5VXNlcih1c2VyLCB1c2VyLnVzZXJpZCA9PT0gY3VycmVudFVzZXJJZCwgcmVzdWx0c1RhYmxlLCB0b3BVc2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlayk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWlzVG9wQ3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIpIHtcbiAgICAgICAgICAgIGRpc3BsYXlVc2VyKGN1cnJlbnRVc2VyLCB0cnVlLCByZXN1bHRzVGFibGVPdGhlciwgdXNlcnMsIGZhbHNlLCB3ZWVrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXlVc2VyKHVzZXIsIGlzQ3VycmVudFVzZXIsIHRhYmxlLCB1c2VycywgaXNUb3BDdXJyZW50VXNlciwgd2Vlaykge1xuICAgICAgICBjb25zdCByZW5kZXJSb3cgPSAodXNlckRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBoaWdobGlnaHQgPSBmYWxzZSwgbmVpZ2hib3IgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IHVzZXJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgndGFibGVfX3JvdycpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUGxhY2UgPSB1c2Vycy5pbmRleE9mKHVzZXJEYXRhKSArIDE7XG4gICAgICAgICAgICBjb25zdCBwcml6ZUtleSA9IGRlYnVnID8gbnVsbCA6IGdldFByaXplVHJhbnNsYXRpb25LZXkodXNlclBsYWNlLCB3ZWVrKTtcblxuICAgICAgICAgICAgaWYgKHVzZXJQbGFjZSA8PSAzKSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKGBwbGFjZSR7dXNlclBsYWNlfWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0KSB7XG4gICAgICAgICAgICAgICAgdXNlclJvdy5jbGFzc0xpc3QuYWRkKCdfeW91cicpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZWlnaGJvcikge1xuICAgICAgICAgICAgICAgIHVzZXJSb3cuY2xhc3NMaXN0LmFkZCgnX25laWdoYm9yJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVzZXJSb3cuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlclBsYWNlIDwgMTAgPyAnMCcgKyB1c2VyUGxhY2UgOiB1c2VyUGxhY2V9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZV9fcm93LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAke2hpZ2hsaWdodCA/IHVzZXJEYXRhLnVzZXJpZCA6IG1hc2tVc2VySWQodXNlckRhdGEudXNlcmlkKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlX19yb3ctaXRlbVwiPlxuICAgICAgICAgICAgICAgICR7dXNlckRhdGEucG9pbnRzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGVfX3Jvdy1pdGVtXCI+XG4gICAgICAgICAgICAgICAgJHtwcml6ZUtleSA/IHRyYW5zbGF0ZUtleShwcml6ZUtleSkgOiAnIC0gJ31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmQodXNlclJvdyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChpc0N1cnJlbnRVc2VyICYmICFpc1RvcEN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHVzZXJzLmluZGV4T2YodXNlcik7XG4gICAgICAgICAgICBpZiAodXNlcnNbaW5kZXggLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclJvdyh1c2Vyc1tpbmRleCAtIDFdLCB7IG5laWdoYm9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVuZGVyUm93KHVzZXIsIHsgaGlnaGxpZ2h0OiB0cnVlIH0pO1xuICAgICAgICAgICAgaWYgKHVzZXJzW2luZGV4ICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZW5kZXJSb3codXNlcnNbaW5kZXggKyAxXSwgeyBuZWlnaGJvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlclJvdyh1c2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyYW5zbGF0ZUtleShrZXksIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZWVkS2V5ID0gZGVidWcgPyBrZXkgOiBgKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiBrZXk6ICR7a2V5fWBcblxuICAgICAgICBkZWZhdWx0VmFsdWUgPSAgbmVlZEtleSB8fCBrZXk7XG4gICAgICAgIHJldHVybiBpMThuRGF0YVtrZXldIHx8IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYXNrVXNlcklkKHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gXCIqKlwiICsgdXNlcklkLnRvU3RyaW5nKCkuc2xpY2UoMik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJpemVUcmFuc2xhdGlvbktleShwbGFjZSwgd2Vlaykge1xuICAgICAgICBpZiAocGxhY2UgPD0gMykgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LSR7cGxhY2V9YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDEwKSByZXR1cm4gYHByaXplXyR7d2Vla30tNC0xMGA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAyNSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTExLTI1YDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDUwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMjYtNTBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gNzUpIHJldHVybiBgcHJpemVfJHt3ZWVrfS01MS03NWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxMDApIHJldHVybiBgcHJpemVfJHt3ZWVrfS03Ni0xMDBgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMTI1KSByZXR1cm4gYHByaXplXyR7d2Vla30tMTAxLTEyNWA7XG4gICAgICAgIGlmIChwbGFjZSA8PSAxNTApIHJldHVybiBgcHJpemVfJHt3ZWVrfS0xMjYtMTUwYDtcbiAgICAgICAgaWYgKHBsYWNlIDw9IDE3NSkgcmV0dXJuIGBwcml6ZV8ke3dlZWt9LTE1MS0xNzVgO1xuICAgICAgICBpZiAocGxhY2UgPD0gMjAwKSByZXR1cm4gYHByaXplXyR7d2Vla30tMTc2LTIwMGA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFydGljaXBhdGUoKSB7XG4gICAgICAgIGlmICghdXNlcklkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFyYW1zID0geyB1c2VyaWQ6IHVzZXJJZCB9O1xuICAgICAgICBmZXRjaChhcGlVUkwgKyAnL3VzZXIvJywge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKVxuICAgICAgICB9KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkZXJCdG4gPSB0cnVlXG4gICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVHJhbnNsYXRlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyX3JlYWR5XCIpXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMocGFydGljaXBhdGVCdG5zLCBcImRvbmVcIilcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcyhwYXJ0aWNpcGF0ZUJ0bnMsIFwibG9hZGVyXCIpXG4gICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tVc2VyQXV0aCgpXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gbG9hZFRyYW5zbGF0aW9ucygpLnRoZW4oaW5pdCkg0LfQsNC/0YPRgdC6INGW0L3RltGC0YMg0YHRgtC+0YDRltC90LrQuFxuXG4gICAgLy9hbmltYXRpb25cbiAgICBjb25zdCBpdGVtc1R4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnN0cnVjdGlvbnNfX3R4dC1pdGVtJylcblxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnMpID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgaXRlbXNUeHQuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKVxuICAgICAgICAgICAgICAgICAgICB9LCBpbmRleCAqIDMwMClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIG9icy5kaXNjb25uZWN0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9LCB7XG4gICAgICAgIHRocmVzaG9sZDogMC4yXG4gICAgfSlcblxuICAgIGlmIChpdGVtc1R4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoaXRlbXNUeHRbMF0ucGFyZW50RWxlbWVudClcbiAgICB9XG5cbi8vc2xpZGVyXG4gICAgbGV0IHNsaWRlckluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gICAgbGV0IHN0YXJ0WCA9IDA7XG4gICAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICBsZXQgcmVzaXplVGltZW91dDtcblxuICAgIGxldCBzbGlkZXI7XG4gICAgbGV0IGl0ZW1zO1xuICAgIGxldCB0b3RhbEl0ZW1zO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2xpZGVyKCkge1xuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBpbmRleCAtIGN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICBsZXQgc2NhbGUgPSAwLjk7XG5cbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBzY2FsZSA9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlID09PSAtMSB8fCAoY3VycmVudEluZGV4ID09PSAwICYmIGluZGV4ID09PSB0b3RhbEl0ZW1zIC0gMSkpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiA9IC0yMjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgPT09IDEgfHwgKGN1cnJlbnRJbmRleCA9PT0gdG90YWxJdGVtcyAtIDEgJiYgaW5kZXggPT09IDApKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSAyMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bmV3UG9zaXRpb259JSkgc2NhbGUoJHtzY2FsZX0pYDtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuekluZGV4ID0gaW5kZXggPT09IGN1cnJlbnRJbmRleCA/IDIgOiAxO1xuXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGluZGV4ID09PSBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdsZWZ0LXNsaWRlJywgZGlzdGFuY2UgPT09IC0xIHx8IChjdXJyZW50SW5kZXggPT09IDAgJiYgaW5kZXggPT09IHRvdGFsSXRlbXMgLSAxKSk7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ3JpZ2h0LXNsaWRlJywgZGlzdGFuY2UgPT09IDEgfHwgKGN1cnJlbnRJbmRleCA9PT0gdG90YWxJdGVtcyAtIDEgJiYgaW5kZXggPT09IDApKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV4dFNsaWRlKCkge1xuICAgICAgICBjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4ICsgMSkgJSB0b3RhbEl0ZW1zO1xuICAgICAgICB1cGRhdGVTbGlkZXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmV2U2xpZGUoKSB7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggLSAxICsgdG90YWxJdGVtcykgJSB0b3RhbEl0ZW1zO1xuICAgICAgICB1cGRhdGVTbGlkZXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KGUpIHtcbiAgICAgICAgaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICAgIHN0YXJ0WCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZShlKSB7XG4gICAgICAgIGlmICghaXNEcmFnZ2luZykgcmV0dXJuO1xuICAgICAgICBjb25zdCBkZWx0YVggPSBlLnRvdWNoZXNbMF0uY2xpZW50WCAtIHN0YXJ0WDtcblxuICAgICAgICBpZiAoTWF0aC5hYnMoZGVsdGFYKSA+IDUwKSB7XG4gICAgICAgICAgICBpZiAoZGVsdGFYID4gMCkge1xuICAgICAgICAgICAgICAgIHByZXZTbGlkZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKCkge1xuICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5hYmxlU2xpZGVyKCkge1xuICAgICAgICBpZiAoc2xpZGVySW5pdGlhbGl6ZWQpIHJldHVybjtcblxuICAgICAgICBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxlbmdlX19jYXJkcycpO1xuICAgICAgICBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFsbGVuZ2VfX2NhcmRzIC5jYXJkJyk7XG4gICAgICAgIHRvdGFsSXRlbXMgPSBpdGVtcy5sZW5ndGg7XG4gICAgICAgIGlmICghc2xpZGVyIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGN1cnJlbnRJbmRleCA9IDA7XG4gICAgICAgIHVwZGF0ZVNsaWRlcigpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGVuZ2VfX2NvbnRyb2wtbGVmdCcpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByZXZTbGlkZSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGVuZ2VfX2NvbnRyb2wtcmlnaHQnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXh0U2xpZGUpO1xuXG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlVG91Y2hTdGFydCk7XG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaE1vdmUpO1xuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVUb3VjaEVuZCk7XG5cbiAgICAgICAgc2xpZGVySW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc2FibGVTbGlkZXIoKSB7XG4gICAgICAgIGlmICghc2xpZGVySW5pdGlhbGl6ZWQpIHJldHVybjtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxlbmdlX19jb250cm9sLWxlZnQnKT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmV2U2xpZGUpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxlbmdlX19jb250cm9sLXJpZ2h0Jyk/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dFNsaWRlKTtcblxuICAgICAgICBzbGlkZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVRvdWNoU3RhcnQpO1xuICAgICAgICBzbGlkZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlVG91Y2hNb3ZlKTtcbiAgICAgICAgc2xpZGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlVG91Y2hFbmQpO1xuXG4gICAgICAgIC8vINCh0LrQuNC00LDRlNC80L4g0YHRgtC40LvRliDRgtCwINC60LvQsNGB0LhcbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLnpJbmRleCA9ICcnO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnLCAnbGVmdC1zbGlkZScsICdyaWdodC1zbGlkZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzbGlkZXJJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrU2xpZGVyQWN0aXZhdGlvbigpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNjAxKSB7XG4gICAgICAgICAgICBlbmFibGVTbGlkZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc2FibGVTbGlkZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrU2xpZGVyQWN0aXZhdGlvbigpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZVRpbWVvdXQpO1xuICAgICAgICByZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjaGVja1NsaWRlckFjdGl2YXRpb24oKTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICB9KTtcblxuICAgIC8vIFRFU1RcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFyay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJyk7XG4gICAgfSk7XG4gICAgY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpXG5cbiAgICBsbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aC1idG5cIilcbiAgICBhdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYodXNlcklkKXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsIFwiMTg5MDg0NjVcIilcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KTtcblxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIik/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikgPz8gbnVsbFxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Y2Nlc3MtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJykuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJnID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fYmcnKTtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NCbG9jayA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmRfX3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgYmcuY2xhc3NMaXN0LnJlbW92ZSgnc3VjY2VzcycsICdpblByb2dyZXNzJywgJ2ZhaWwnLCAnbG9ja2VkJyk7XG5cbiAgICAgICAgICAgIGJnLmNsYXNzTGlzdC5hZGQoJ3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgc3VjY2Vzc0Jsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5Qcm9ncmVzcy1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKS5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmcgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19iZycpO1xuICAgICAgICAgICAgY29uc3Qgc3VjY2Vzc0Jsb2NrID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fc3VjY2VzcycpO1xuXG4gICAgICAgICAgICBpZiAoYmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWNjZXNzJykgfHwgYmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdpblByb2dyZXNzJykgfHwgYmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYWlsJykgfHwgYmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2NrZWQnKSkge1xuICAgICAgICAgICAgICAgIGJnLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Y2Nlc3MnLCAnaW5Qcm9ncmVzcycsICdmYWlsJywgJ2xvY2tlZCcpO1xuXG4gICAgICAgICAgICAgICAgYmcuY2xhc3NMaXN0LmFkZCgnaW5Qcm9ncmVzcycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzQmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0Jsb2NrLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhaWwtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJykuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJnID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fYmcnKTtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NCbG9jayA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmRfX3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgaWYgKGJnLmNsYXNzTGlzdC5jb250YWlucygnc3VjY2VzcycpIHx8IGJnLmNsYXNzTGlzdC5jb250YWlucygnaW5Qcm9ncmVzcycpIHx8IGJnLmNsYXNzTGlzdC5jb250YWlucygnZmFpbCcpIHx8IGJnLmNsYXNzTGlzdC5jb250YWlucygnbG9ja2VkJykpIHtcbiAgICAgICAgICAgICAgICBiZy5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzJywgJ2luUHJvZ3Jlc3MnLCAnZmFpbCcsICdsb2NrZWQnKTtcblxuICAgICAgICAgICAgICAgIGJnLmNsYXNzTGlzdC5hZGQoJ2ZhaWwnKTtcblxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzc0Jsb2NrLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NCbG9jay5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NrZWQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJykuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJnID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fYmcnKTtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NCbG9jayA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmRfX3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgaWYgKGJnLmNsYXNzTGlzdC5jb250YWlucygnc3VjY2VzcycpIHx8IGJnLmNsYXNzTGlzdC5jb250YWlucygnaW5Qcm9ncmVzcycpIHx8IGJnLmNsYXNzTGlzdC5jb250YWlucygnZmFpbCcpIHx8IGJnLmNsYXNzTGlzdC5jb250YWlucygnbG9ja2VkJykpIHtcbiAgICAgICAgICAgICAgICBiZy5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzJywgJ2luUHJvZ3Jlc3MnLCAnZmFpbCcsICdsb2NrZWQnKTtcblxuICAgICAgICAgICAgICAgIGJnLmNsYXNzTGlzdC5hZGQoJ2xvY2tlZCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzQmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0Jsb2NrLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2dyZXNzQmFyLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZ3Jlc3NCYXJfX2l0ZW0sIC5jaGFsbGVuZ2VfX3ByaXplLWl0ZW0sIC5jaGFsbGVuZ2VfX2JvbnVzLWl0ZW0nKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aXRob3V0Qm9udXMtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFsbGVuZ2VfX2JvbnVzJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gcmVuZGVyVXNlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdyZW5kZXJVc2VycyDQstC40LzQutC90LXQvdC+INC00LvRjyDRgtC10YHRgtGDJyk7XG4gICAgLy8gfVxuICAgIC8vXG4gICAgLy8gcG9wdWxhdGVVc2Vyc1RhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygncG9wdWxhdGVVc2Vyc1RhYmxlINCy0LjQvNC60L3QtdC90L4g0LTQu9GPINGC0LXRgdGC0YMnKTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBkaXNwbGF5VXNlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2Rpc3BsYXlVc2VyINCy0LjQvNC60L3QtdC90L4g0LTQu9GPINGC0LXRgdGC0YMnKTtcbiAgICAvLyB9XG5cbn0pKCk7XG5cblxuIl19
