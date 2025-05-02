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
  var _sessionStorage$getIt, _sessionStorage$getIt2;
  var apiURL = 'https://fav-prom.com/api_your_promo2';
  var mainPage = document.querySelector(".fav-page"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.btn-join'),
    loader = document.querySelector(".spinner-overlay");
  var hrLeng = document.querySelector('#hrLeng');
  var enLeng = document.querySelector('#enLeng');
  var locale = (_sessionStorage$getIt = sessionStorage.getItem("locale")) !== null && _sessionStorage$getIt !== void 0 ? _sessionStorage$getIt : "hr";
  // let locale = "en"

  if (hrLeng) locale = 'hr';
  if (enLeng) locale = 'en';
  var debug = true;
  if (debug) hideLoader();
  var i18nData = {};
  var translateState = true;
  var userId = null;
  // userId = 100300268;

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
      //
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
    return fetch("".concat(apiURL, "/translates/").concat(locale)).then(function (res) {
      return res.json();
    }).then(function (json) {
      i18nData = json;
      translate();
      var mutationObserver = new MutationObserver(function (mutations) {
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
    if (locale === 'en') {
      mainPage.classList.add('en');
    }
    refreshLocalizedClass();
  }
  function refreshLocalizedClass(element, baseCssClass) {
    if (!element) {
      return;
    }
    for (var _i = 0, _arr = ['hr', 'en']; _i < _arr.length; _i++) {
      var lang = _arr[_i];
      element.classList.remove(baseCssClass + lang);
    }
    element.classList.add(baseCssClass + locale);
  }

  // loadTranslations().then(init)

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
    document.querySelectorAll('.progressBar__item, .challenge__prize-item, .challenge__bonus-itemп').forEach(function (el) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsImhyTGVuZyIsImVuTGVuZyIsImxvY2FsZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImRlYnVnIiwiaGlkZUxvYWRlciIsImkxOG5EYXRhIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsInJlbW92ZSIsImluaXQiLCJ0cnlEZXRlY3RVc2VySWQiLCJxdWlja0NoZWNrQW5kUmVuZGVyIiwiY2hlY2tVc2VyQXV0aCIsIndpbmRvdyIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImdfdXNlcl9pZCIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ3YWl0Rm9yVXNlcklkIiwicmVzb2x2ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibG9hZFRyYW5zbGF0aW9ucyIsInRyYW5zbGF0ZSIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwib2JzZXJ2ZSIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImxvYWRUaW1lIiwic2V0VGltZW91dCIsInNob3dFbGVtZW50cyIsImVsZW1lbnRzIiwiZm9yRWFjaCIsImVsIiwiaGlkZUVsZW1lbnRzIiwidXNlcmlkIiwicmVwb3J0RXJyb3IiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2ciLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsIml0ZW1zVHh0Iiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJvYnMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaXRlbSIsImluZGV4IiwiZGlzY29ubmVjdCIsInRocmVzaG9sZCIsInBhcmVudEVsZW1lbnQiLCJzbGlkZXJJbml0aWFsaXplZCIsImN1cnJlbnRJbmRleCIsInN0YXJ0WCIsImlzRHJhZ2dpbmciLCJyZXNpemVUaW1lb3V0Iiwic2xpZGVyIiwiaXRlbXMiLCJ0b3RhbEl0ZW1zIiwidXBkYXRlU2xpZGVyIiwiZGlzdGFuY2UiLCJuZXdQb3NpdGlvbiIsInNjYWxlIiwidHJhbnNmb3JtIiwiekluZGV4IiwidG9nZ2xlIiwibmV4dFNsaWRlIiwicHJldlNsaWRlIiwiaGFuZGxlVG91Y2hTdGFydCIsImUiLCJ0b3VjaGVzIiwiY2xpZW50WCIsImhhbmRsZVRvdWNoTW92ZSIsImRlbHRhWCIsIk1hdGgiLCJhYnMiLCJoYW5kbGVUb3VjaEVuZCIsImVuYWJsZVNsaWRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNhYmxlU2xpZGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNoZWNrU2xpZGVyQWN0aXZhdGlvbiIsImlubmVyV2lkdGgiLCJjbGVhclRpbWVvdXQiLCJsbmdCdG4iLCJyZW1vdmVJdGVtIiwic2V0SXRl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QUFDLENBQUM7RUFDTixDQUFDLENBQUM7RUFFRmhJLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM0SSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUN4RTdJLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsQ0FBQ29FLE9BQU8sQ0FBQyxVQUFBQyxFQUFFLEVBQUk7TUFDekRBLEVBQUUsQ0FBQ3hDLFNBQVMsQ0FBQ2dHLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDOztFQUVGO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFFSixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX3lvdXJfcHJvbW8yJ1xuXG4gICAgY29uc3QgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdi1wYWdlXCIpLFxuICAgICAgICB1bmF1dGhNc2dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVuYXV0aC1tc2cnKSxcbiAgICAgICAgcGFydGljaXBhdGVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhcnQtYnRuJyksXG4gICAgICAgIHJlZGlyZWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idG4tam9pbicpLFxuICAgICAgICBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwaW5uZXItb3ZlcmxheVwiKVxuXG4gICAgY29uc3QgaHJMZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hyTGVuZycpO1xuICAgIGNvbnN0IGVuTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbkxlbmcnKTtcblxuICAgIGxldCBsb2NhbGUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibG9jYWxlXCIpID8/IFwiaHJcIlxuICAgIC8vIGxldCBsb2NhbGUgPSBcImVuXCJcblxuICAgIGlmIChockxlbmcpIGxvY2FsZSA9ICdocic7XG4gICAgaWYgKGVuTGVuZykgbG9jYWxlID0gJ2VuJztcblxuICAgIGxldCBkZWJ1ZyA9IHRydWVcblxuICAgIGlmIChkZWJ1ZykgaGlkZUxvYWRlcigpXG5cbiAgICBsZXQgaTE4bkRhdGEgPSB7fTtcbiAgICBjb25zdCB0cmFuc2xhdGVTdGF0ZSA9IHRydWU7XG4gICAgbGV0IHVzZXJJZCA9IG51bGw7XG4gICAgLy8gdXNlcklkID0gMTAwMzAwMjY4O1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIC8vIHJlcG9ydEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIC8vIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVMb2FkZXIoKXtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2FpdEZvclVzZXJJZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnlEZXRlY3RVc2VySWQoKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlcklkIHx8IGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIH0sIGF0dGVtcHRJbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JVc2VySWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke2FwaVVSTH0vdHJhbnNsYXRlcy8ke2xvY2FsZX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieW91clByb21vSWRcIiksIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgY29uc3QgbG9hZFRpbWUgPSAyMDA7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93RWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgIGNvbnN0IGhpZGVFbGVtZW50cyA9IChlbGVtZW50cykgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuXG4gICAgICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyh1bmF1dGhNc2dzKTtcbiAgICAgICAgICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhpZGVFbGVtZW50cyh1bmF1dGhNc2dzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGxvYWRUaW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCwgYmFzZUNzc0NsYXNzKSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ2hyJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShiYXNlQ3NzQ2xhc3MgKyBsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFzZUNzc0NsYXNzICsgbG9jYWxlKTtcbiAgICB9XG5cbiAgICAvLyBsb2FkVHJhbnNsYXRpb25zKCkudGhlbihpbml0KVxuXG4gICAgLy9hbmltYXRpb25cbiAgICBjb25zdCBpdGVtc1R4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnN0cnVjdGlvbnNfX3R4dC1pdGVtJylcblxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnMpID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgaXRlbXNUeHQuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKVxuICAgICAgICAgICAgICAgICAgICB9LCBpbmRleCAqIDMwMClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIG9icy5kaXNjb25uZWN0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9LCB7XG4gICAgICAgIHRocmVzaG9sZDogMC4yXG4gICAgfSlcblxuICAgIGlmIChpdGVtc1R4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoaXRlbXNUeHRbMF0ucGFyZW50RWxlbWVudClcbiAgICB9XG5cbi8vc2xpZGVyXG4gICAgbGV0IHNsaWRlckluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gICAgbGV0IHN0YXJ0WCA9IDA7XG4gICAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICBsZXQgcmVzaXplVGltZW91dDtcblxuICAgIGxldCBzbGlkZXI7XG4gICAgbGV0IGl0ZW1zO1xuICAgIGxldCB0b3RhbEl0ZW1zO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2xpZGVyKCkge1xuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBpbmRleCAtIGN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICBsZXQgc2NhbGUgPSAwLjk7XG5cbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBzY2FsZSA9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlID09PSAtMSB8fCAoY3VycmVudEluZGV4ID09PSAwICYmIGluZGV4ID09PSB0b3RhbEl0ZW1zIC0gMSkpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiA9IC0yMjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgPT09IDEgfHwgKGN1cnJlbnRJbmRleCA9PT0gdG90YWxJdGVtcyAtIDEgJiYgaW5kZXggPT09IDApKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSAyMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7bmV3UG9zaXRpb259JSkgc2NhbGUoJHtzY2FsZX0pYDtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuekluZGV4ID0gaW5kZXggPT09IGN1cnJlbnRJbmRleCA/IDIgOiAxO1xuXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGluZGV4ID09PSBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdsZWZ0LXNsaWRlJywgZGlzdGFuY2UgPT09IC0xIHx8IChjdXJyZW50SW5kZXggPT09IDAgJiYgaW5kZXggPT09IHRvdGFsSXRlbXMgLSAxKSk7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC50b2dnbGUoJ3JpZ2h0LXNsaWRlJywgZGlzdGFuY2UgPT09IDEgfHwgKGN1cnJlbnRJbmRleCA9PT0gdG90YWxJdGVtcyAtIDEgJiYgaW5kZXggPT09IDApKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbmV4dFNsaWRlKCkge1xuICAgICAgICBjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4ICsgMSkgJSB0b3RhbEl0ZW1zO1xuICAgICAgICB1cGRhdGVTbGlkZXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmV2U2xpZGUoKSB7XG4gICAgICAgIGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggLSAxICsgdG90YWxJdGVtcykgJSB0b3RhbEl0ZW1zO1xuICAgICAgICB1cGRhdGVTbGlkZXIoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KGUpIHtcbiAgICAgICAgaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICAgIHN0YXJ0WCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZShlKSB7XG4gICAgICAgIGlmICghaXNEcmFnZ2luZykgcmV0dXJuO1xuICAgICAgICBjb25zdCBkZWx0YVggPSBlLnRvdWNoZXNbMF0uY2xpZW50WCAtIHN0YXJ0WDtcblxuICAgICAgICBpZiAoTWF0aC5hYnMoZGVsdGFYKSA+IDUwKSB7XG4gICAgICAgICAgICBpZiAoZGVsdGFYID4gMCkge1xuICAgICAgICAgICAgICAgIHByZXZTbGlkZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKCkge1xuICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5hYmxlU2xpZGVyKCkge1xuICAgICAgICBpZiAoc2xpZGVySW5pdGlhbGl6ZWQpIHJldHVybjtcblxuICAgICAgICBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxlbmdlX19jYXJkcycpO1xuICAgICAgICBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFsbGVuZ2VfX2NhcmRzIC5jYXJkJyk7XG4gICAgICAgIHRvdGFsSXRlbXMgPSBpdGVtcy5sZW5ndGg7XG4gICAgICAgIGlmICghc2xpZGVyIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGN1cnJlbnRJbmRleCA9IDA7XG4gICAgICAgIHVwZGF0ZVNsaWRlcigpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGVuZ2VfX2NvbnRyb2wtbGVmdCcpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByZXZTbGlkZSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFsbGVuZ2VfX2NvbnRyb2wtcmlnaHQnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXh0U2xpZGUpO1xuXG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlVG91Y2hTdGFydCk7XG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBoYW5kbGVUb3VjaE1vdmUpO1xuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBoYW5kbGVUb3VjaEVuZCk7XG5cbiAgICAgICAgc2xpZGVySW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc2FibGVTbGlkZXIoKSB7XG4gICAgICAgIGlmICghc2xpZGVySW5pdGlhbGl6ZWQpIHJldHVybjtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxlbmdlX19jb250cm9sLWxlZnQnKT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmV2U2xpZGUpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxlbmdlX19jb250cm9sLXJpZ2h0Jyk/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dFNsaWRlKTtcblxuICAgICAgICBzbGlkZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVRvdWNoU3RhcnQpO1xuICAgICAgICBzbGlkZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlVG91Y2hNb3ZlKTtcbiAgICAgICAgc2xpZGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlVG91Y2hFbmQpO1xuXG4gICAgICAgIC8vINCh0LrQuNC00LDRlNC80L4g0YHRgtC40LvRliDRgtCwINC60LvQsNGB0LhcbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gJyc7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLnpJbmRleCA9ICcnO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnLCAnbGVmdC1zbGlkZScsICdyaWdodC1zbGlkZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzbGlkZXJJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrU2xpZGVyQWN0aXZhdGlvbigpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNjAxKSB7XG4gICAgICAgICAgICBlbmFibGVTbGlkZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpc2FibGVTbGlkZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoZWNrU2xpZGVyQWN0aXZhdGlvbigpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZVRpbWVvdXQpO1xuICAgICAgICByZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjaGVja1NsaWRlckFjdGl2YXRpb24oKTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICB9KTtcblxuICAgIC8vIFRFU1RcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFyay1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkYXJrJyk7XG4gICAgfSk7XG4gICAgY29uc3QgbG5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sbmctYnRuXCIpXG5cbiAgICBsbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGVcIikpIHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2NhbGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxlXCIsIFwiZW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aC1idG5cIilcbiAgICBhdXRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICAgICAgaWYodXNlcklkKXtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VySWRcIilcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlcklkXCIsIFwiMTg5MDg0NjVcIilcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICB9KTtcblxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRlc3RcIik/LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRlXCIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikgPz8gbnVsbFxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Y2Nlc3MtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJykuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJnID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fYmcnKTtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NCbG9jayA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmRfX3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgYmcuY2xhc3NMaXN0LnJlbW92ZSgnc3VjY2VzcycsICdpblByb2dyZXNzJywgJ2ZhaWwnLCAnbG9ja2VkJyk7XG5cbiAgICAgICAgICAgIGJnLmNsYXNzTGlzdC5hZGQoJ3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgc3VjY2Vzc0Jsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5Qcm9ncmVzcy1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKS5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmcgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19iZycpO1xuICAgICAgICAgICAgY29uc3Qgc3VjY2Vzc0Jsb2NrID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fc3VjY2VzcycpO1xuXG4gICAgICAgICAgICBpZiAoYmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWNjZXNzJykgfHwgYmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdpblByb2dyZXNzJykgfHwgYmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYWlsJykgfHwgYmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2NrZWQnKSkge1xuICAgICAgICAgICAgICAgIGJnLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Y2Nlc3MnLCAnaW5Qcm9ncmVzcycsICdmYWlsJywgJ2xvY2tlZCcpO1xuXG4gICAgICAgICAgICAgICAgYmcuY2xhc3NMaXN0LmFkZCgnaW5Qcm9ncmVzcycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzQmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0Jsb2NrLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhaWwtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJykuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJnID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fYmcnKTtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NCbG9jayA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmRfX3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgaWYgKGJnLmNsYXNzTGlzdC5jb250YWlucygnc3VjY2VzcycpIHx8IGJnLmNsYXNzTGlzdC5jb250YWlucygnaW5Qcm9ncmVzcycpIHx8IGJnLmNsYXNzTGlzdC5jb250YWlucygnZmFpbCcpIHx8IGJnLmNsYXNzTGlzdC5jb250YWlucygnbG9ja2VkJykpIHtcbiAgICAgICAgICAgICAgICBiZy5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzJywgJ2luUHJvZ3Jlc3MnLCAnZmFpbCcsICdsb2NrZWQnKTtcblxuICAgICAgICAgICAgICAgIGJnLmNsYXNzTGlzdC5hZGQoJ2ZhaWwnKTtcblxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzc0Jsb2NrLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NCbG9jay5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NrZWQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJykuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJnID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fYmcnKTtcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NCbG9jayA9IGNhcmQucXVlcnlTZWxlY3RvcignLmNhcmRfX3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgaWYgKGJnLmNsYXNzTGlzdC5jb250YWlucygnc3VjY2VzcycpIHx8IGJnLmNsYXNzTGlzdC5jb250YWlucygnaW5Qcm9ncmVzcycpIHx8IGJnLmNsYXNzTGlzdC5jb250YWlucygnZmFpbCcpIHx8IGJnLmNsYXNzTGlzdC5jb250YWlucygnbG9ja2VkJykpIHtcbiAgICAgICAgICAgICAgICBiZy5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzJywgJ2luUHJvZ3Jlc3MnLCAnZmFpbCcsICdsb2NrZWQnKTtcblxuICAgICAgICAgICAgICAgIGJnLmNsYXNzTGlzdC5hZGQoJ2xvY2tlZCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzQmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0Jsb2NrLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2dyZXNzQmFyLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZ3Jlc3NCYXJfX2l0ZW0sIC5jaGFsbGVuZ2VfX3ByaXplLWl0ZW0sIC5jaGFsbGVuZ2VfX2JvbnVzLWl0ZW3QvycpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpdGhvdXRCb251cy1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoYWxsZW5nZV9fYm9udXMnKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyByZW5kZXJVc2VycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3JlbmRlclVzZXJzINCy0LjQvNC60L3QtdC90L4g0LTQu9GPINGC0LXRgdGC0YMnKTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBwb3B1bGF0ZVVzZXJzVGFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdwb3B1bGF0ZVVzZXJzVGFibGUg0LLQuNC80LrQvdC10L3QviDQtNC70Y8g0YLQtdGB0YLRgycpO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGRpc3BsYXlVc2VyID0gZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnZGlzcGxheVVzZXIg0LLQuNC80LrQvdC10L3QviDQtNC70Y8g0YLQtdGB0YLRgycpO1xuICAgIC8vIH1cblxufSkoKTtcblxuXG4iXX0=
