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
  var apiURL = 'https://fav-prom.com/api_your_promo';
  var mainPage = document.querySelector(".fav-page"),
    unauthMsgs = document.querySelectorAll('.unauth-msg'),
    participateBtns = document.querySelectorAll('.part-btn'),
    redirectBtns = document.querySelectorAll('.btn-join'),
    loader = document.querySelector(".spinner-overlay");
  var ukLeng = document.querySelector('#ukLeng');
  var enLeng = document.querySelector('#enLeng');
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
    for (var _i = 0, _arr = ['uk', 'en']; _i < _arr.length; _i++) {
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
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsInVrTGVuZyIsImVuTGVuZyIsImxvY2FsZSIsImRlYnVnIiwiaGlkZUxvYWRlciIsImkxOG5EYXRhIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsInJlbW92ZSIsImluaXQiLCJ0cnlEZXRlY3RVc2VySWQiLCJxdWlja0NoZWNrQW5kUmVuZGVyIiwiY2hlY2tVc2VyQXV0aCIsIndpbmRvdyIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImdfdXNlcl9pZCIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ3YWl0Rm9yVXNlcklkIiwicmVzb2x2ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibG9hZFRyYW5zbGF0aW9ucyIsInRyYW5zbGF0ZSIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwib2JzZXJ2ZSIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImxvYWRUaW1lIiwic2V0VGltZW91dCIsInNob3dFbGVtZW50cyIsImVsZW1lbnRzIiwiZm9yRWFjaCIsImVsIiwiaGlkZUVsZW1lbnRzIiwidXNlcmlkIiwicmVwb3J0RXJyb3IiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2ciLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsIml0ZW1zVHh0Iiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJvYnMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaXRlbSIsImluZGV4IiwiZGlzY29ubmVjdCIsInRocmVzaG9sZCIsInBhcmVudEVsZW1lbnQiLCJzbGlkZXJJbml0aWFsaXplZCIsImN1cnJlbnRJbmRleCIsInN0YXJ0WCIsImlzRHJhZ2dpbmciLCJyZXNpemVUaW1lb3V0Iiwic2xpZGVyIiwiaXRlbXMiLCJ0b3RhbEl0ZW1zIiwidXBkYXRlU2xpZGVyIiwiZGlzdGFuY2UiLCJuZXdQb3NpdGlvbiIsInNjYWxlIiwidHJhbnNmb3JtIiwiekluZGV4IiwidG9nZ2xlIiwibmV4dFNsaWRlIiwicHJldlNsaWRlIiwiaGFuZGxlVG91Y2hTdGFydCIsImUiLCJ0b3VjaGVzIiwiY2xpZW50WCIsImhhbmRsZVRvdWNoTW92ZSIsImRlbHRhWCIsIk1hdGgiLCJhYnMiLCJoYW5kbGVUb3VjaEVuZCIsImVuYWJsZVNsaWRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNhYmxlU2xpZGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNoZWNrU2xpZGVyQWN0aXZhdGlvbiIsImlubmVyV2lkdGgiLCJjbGVhclRpbWVvdXQiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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QVUsR0FBRyxHQUFHLEVBQUU7TUFDekJMLFlBQVksRUFBRTtJQUNsQixDQUFDLE1BQU07TUFDSEUsYUFBYSxFQUFFO0lBQ25CO0VBQ0o7RUFFQUUscUJBQXFCLEVBQUU7RUFFdkJ0RyxNQUFNLENBQUNtRyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtJQUNwQ0ssWUFBWSxDQUFDNUIsYUFBYSxDQUFDO0lBQzNCQSxhQUFhLEdBQUdsRCxVQUFVLENBQUMsWUFBTTtNQUM3QjRFLHFCQUFxQixFQUFFO0lBQzNCLENBQUMsRUFBRSxHQUFHLENBQUM7RUFDWCxDQUFDLENBQUM7QUFFTixDQUFDLEdBQUciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cbiAgICBjb25zdCBhcGlVUkwgPSAnaHR0cHM6Ly9mYXYtcHJvbS5jb20vYXBpX3lvdXJfcHJvbW8nXG5cbiAgICBjb25zdCBtYWluUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2LXBhZ2VcIiksXG4gICAgICAgIHVuYXV0aE1zZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudW5hdXRoLW1zZycpLFxuICAgICAgICBwYXJ0aWNpcGF0ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFydC1idG4nKSxcbiAgICAgICAgcmVkaXJlY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1qb2luJyksXG4gICAgICAgIGxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3Bpbm5lci1vdmVybGF5XCIpXG5cbiAgICBjb25zdCB1a0xlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdWtMZW5nJyk7XG4gICAgY29uc3QgZW5MZW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuTGVuZycpO1xuXG4gICAgbGV0IGxvY2FsZSA9IFwiZW5cIlxuXG4gICAgaWYgKHVrTGVuZykgbG9jYWxlID0gJ3VrJztcbiAgICBpZiAoZW5MZW5nKSBsb2NhbGUgPSAnZW4nO1xuXG4gICAgbGV0IGRlYnVnID0gdHJ1ZVxuXG4gICAgaWYgKGRlYnVnKSBoaWRlTG9hZGVyKClcblxuICAgIGxldCBpMThuRGF0YSA9IHt9O1xuICAgIGNvbnN0IHRyYW5zbGF0ZVN0YXRlID0gdHJ1ZTtcbiAgICBsZXQgdXNlcklkID0gbnVsbDtcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBmdW5jdGlvbiAobGluaywgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChhcGlVUkwgKyBsaW5rLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4uKGV4dHJhT3B0aW9ucyB8fCB7fSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQVBJIGVycm9yJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQVBJIHJlcXVlc3QgZmFpbGVkOicsIGVycik7XG5cbiAgICAgICAgICAgICAgICAvLyByZXBvcnRFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdi1wYWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAvLyBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuc3RhcnRzV2l0aChcImh0dHBzOi8vd3d3LmZhdmJldC5oci9cIikpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vY2lqZS9wcm9tb2NpamEvc3R1Yi8nO1xuICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9tb3MvcHJvbW8vc3R1Yi8nO1xuICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlTG9hZGVyKCl7XG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCJcbiAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImxvYWRpbmdcIilcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDIwO1xuICAgICAgICBjb25zdCBhdHRlbXB0SW50ZXJ2YWwgPSA1MDtcblxuICAgICAgICBmdW5jdGlvbiB0cnlEZXRlY3RVc2VySWQoKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnN0b3JlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB3aW5kb3cuc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSBzdGF0ZS5hdXRoLmlzQXV0aG9yaXplZCAmJiBzdGF0ZS5hdXRoLmlkIHx8ICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZ191c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgdXNlcklkID0gd2luZG93LmdfdXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKSB7XG4gICAgICAgICAgICBjaGVja1VzZXJBdXRoKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHdhaXRGb3JVc2VySWQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5RGV0ZWN0VXNlcklkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJJZCB8fCBhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgICAgICAgICAgICBxdWlja0NoZWNrQW5kUmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgICB9LCBhdHRlbXB0SW50ZXJ2YWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yVXNlcklkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRUcmFuc2xhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaChgJHthcGlVUkx9L3RyYW5zbGF0ZXMvJHtsb2NhbGV9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgICAgIGkxOG5EYXRhID0ganNvbjtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcblxuICAgICAgICAgICAgICAgIHZhciBtdXRhdGlvbk9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInlvdXJQcm9tb0lkXCIpLCB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGNoZWNrVXNlckF1dGgoKSB7XG4gICAgICAgIGNvbnN0IGxvYWRUaW1lID0gMjAwO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2hvd0VsZW1lbnRzID0gKGVsZW1lbnRzKSA9PiBlbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKSk7XG4gICAgICAgICAgICBjb25zdCBoaWRlRWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpKTtcblxuICAgICAgICAgICAgaWYgKCF1c2VySWQpIHtcbiAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICBzaG93RWxlbWVudHModW5hdXRoTXNncyk7XG4gICAgICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoaWRlRWxlbWVudHModW5hdXRoTXNncyk7XG5cbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0KGAvZmF2dXNlci8ke3VzZXJJZH0/bm9jYWNoZT0xYCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMudXNlcmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzaG93RWxlbWVudHMocGFydGljaXBhdGVCdG5zKTtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHJlZGlyZWN0QnRucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBsb2FkVGltZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwb3J0RXJyb3IoZXJyKSB7XG4gICAgICAgIGNvbnN0IHJlcG9ydERhdGEgPSB7XG4gICAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdXNlcmlkOiB1c2VySWQsXG4gICAgICAgICAgICBlcnJvclRleHQ6IGVycj8uZXJyb3IgfHwgZXJyPy50ZXh0IHx8IGVycj8ubWVzc2FnZSB8fCAnVW5rbm93biBlcnJvcicsXG4gICAgICAgICAgICB0eXBlOiBlcnI/Lm5hbWUgfHwgJ1Vua25vd25FcnJvcicsXG4gICAgICAgICAgICBzdGFjazogZXJyPy5zdGFjayB8fCAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGktY21zL3JlcG9ydHMvYWRkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcG9ydERhdGEpXG4gICAgICAgIH0pLmNhdGNoKGNvbnNvbGUud2Fybik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJhbnNsYXRlKCkge1xuICAgICAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRyYW5zbGF0ZV0nKVxuICAgICAgICBpZiAoZWxlbXMgJiYgZWxlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZih0cmFuc2xhdGVTdGF0ZSl7XG4gICAgICAgICAgICAgICAgZWxlbXMuZm9yRWFjaChlbGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdHJhbnNsYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gaTE4bkRhdGFba2V5XSB8fCAnKi0tLS1ORUVEIFRPIEJFIFRSQU5TTEFURUQtLS0tKiAgIGtleTogICcgKyBrZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpMThuRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYW5zbGF0aW9uIHdvcmtzIVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb2NhbGUgPT09ICdlbicpIHtcbiAgICAgICAgICAgIG1haW5QYWdlLmNsYXNzTGlzdC5hZGQoJ2VuJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExvY2FsaXplZENsYXNzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExvY2FsaXplZENsYXNzKGVsZW1lbnQsIGJhc2VDc3NDbGFzcykge1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGxhbmcgb2YgWyd1aycsICdlbiddKSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoYmFzZUNzc0NsYXNzICsgbGFuZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGJhc2VDc3NDbGFzcyArIGxvY2FsZSk7XG4gICAgfVxuXG4gICAgLy8gbG9hZFRyYW5zbGF0aW9ucygpLnRoZW4oaW5pdClcblxuICAgIC8vYW5pbWF0aW9uXG4gICAgY29uc3QgaXRlbXNUeHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5zdHJ1Y3Rpb25zX190eHQtaXRlbScpXG5cbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzKSA9PiB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgIGl0ZW1zVHh0LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJylcbiAgICAgICAgICAgICAgICAgICAgfSwgaW5kZXggKiAzMDApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBvYnMuZGlzY29ubmVjdCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSwge1xuICAgICAgICB0aHJlc2hvbGQ6IDAuMlxuICAgIH0pXG5cbiAgICBpZiAoaXRlbXNUeHQubGVuZ3RoID4gMCkge1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGl0ZW1zVHh0WzBdLnBhcmVudEVsZW1lbnQpXG4gICAgfVxuXG4vL3NsaWRlclxuICAgIGxldCBzbGlkZXJJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuICAgIGxldCBzdGFydFggPSAwO1xuICAgIGxldCBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgbGV0IHJlc2l6ZVRpbWVvdXQ7XG5cbiAgICBsZXQgc2xpZGVyO1xuICAgIGxldCBpdGVtcztcbiAgICBsZXQgdG90YWxJdGVtcztcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNsaWRlcigpIHtcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gaW5kZXggLSBjdXJyZW50SW5kZXg7XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgbGV0IHNjYWxlID0gMC45O1xuXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPT09IDApIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgc2NhbGUgPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXN0YW5jZSA9PT0gLTEgfHwgKGN1cnJlbnRJbmRleCA9PT0gMCAmJiBpbmRleCA9PT0gdG90YWxJdGVtcyAtIDEpKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSAtMjI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlID09PSAxIHx8IChjdXJyZW50SW5kZXggPT09IHRvdGFsSXRlbXMgLSAxICYmIGluZGV4ID09PSAwKSkge1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gMjI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke25ld1Bvc2l0aW9ufSUpIHNjYWxlKCR7c2NhbGV9KWA7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLnpJbmRleCA9IGluZGV4ID09PSBjdXJyZW50SW5kZXggPyAyIDogMTtcblxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBpbmRleCA9PT0gY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnbGVmdC1zbGlkZScsIGRpc3RhbmNlID09PSAtMSB8fCAoY3VycmVudEluZGV4ID09PSAwICYmIGluZGV4ID09PSB0b3RhbEl0ZW1zIC0gMSkpO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdyaWdodC1zbGlkZScsIGRpc3RhbmNlID09PSAxIHx8IChjdXJyZW50SW5kZXggPT09IHRvdGFsSXRlbXMgLSAxICYmIGluZGV4ID09PSAwKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5leHRTbGlkZSgpIHtcbiAgICAgICAgY3VycmVudEluZGV4ID0gKGN1cnJlbnRJbmRleCArIDEpICUgdG90YWxJdGVtcztcbiAgICAgICAgdXBkYXRlU2xpZGVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJldlNsaWRlKCkge1xuICAgICAgICBjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4IC0gMSArIHRvdGFsSXRlbXMpICUgdG90YWxJdGVtcztcbiAgICAgICAgdXBkYXRlU2xpZGVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydChlKSB7XG4gICAgICAgIGlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICBzdGFydFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoZSkge1xuICAgICAgICBpZiAoIWlzRHJhZ2dpbmcpIHJldHVybjtcbiAgICAgICAgY29uc3QgZGVsdGFYID0gZS50b3VjaGVzWzBdLmNsaWVudFggLSBzdGFydFg7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKGRlbHRhWCkgPiA1MCkge1xuICAgICAgICAgICAgaWYgKGRlbHRhWCA+IDApIHtcbiAgICAgICAgICAgICAgICBwcmV2U2xpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZCgpIHtcbiAgICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuYWJsZVNsaWRlcigpIHtcbiAgICAgICAgaWYgKHNsaWRlckluaXRpYWxpemVkKSByZXR1cm47XG5cbiAgICAgICAgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWxsZW5nZV9fY2FyZHMnKTtcbiAgICAgICAgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbGxlbmdlX19jYXJkcyAuY2FyZCcpO1xuICAgICAgICB0b3RhbEl0ZW1zID0gaXRlbXMubGVuZ3RoO1xuICAgICAgICBpZiAoIXNsaWRlciB8fCBpdGVtcy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgICAgICBjdXJyZW50SW5kZXggPSAwO1xuICAgICAgICB1cGRhdGVTbGlkZXIoKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxlbmdlX19jb250cm9sLWxlZnQnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmV2U2xpZGUpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxlbmdlX19jb250cm9sLXJpZ2h0Jyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dFNsaWRlKTtcblxuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVRvdWNoU3RhcnQpO1xuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlVG91Y2hNb3ZlKTtcbiAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlVG91Y2hFbmQpO1xuXG4gICAgICAgIHNsaWRlckluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNhYmxlU2xpZGVyKCkge1xuICAgICAgICBpZiAoIXNsaWRlckluaXRpYWxpemVkKSByZXR1cm47XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWxsZW5nZV9fY29udHJvbC1sZWZ0Jyk/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJldlNsaWRlKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWxsZW5nZV9fY29udHJvbC1yaWdodCcpPy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG5leHRTbGlkZSk7XG5cbiAgICAgICAgc2xpZGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVUb3VjaFN0YXJ0KTtcbiAgICAgICAgc2xpZGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZVRvdWNoTW92ZSk7XG4gICAgICAgIHNsaWRlci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZVRvdWNoRW5kKTtcblxuICAgICAgICAvLyDQodC60LjQtNCw0ZTQvNC+INGB0YLQuNC70ZYg0YLQsCDQutC70LDRgdC4XG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgICAgICAgICAgaXRlbS5zdHlsZS56SW5kZXggPSAnJztcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJywgJ2xlZnQtc2xpZGUnLCAncmlnaHQtc2xpZGUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2xpZGVySW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1NsaWRlckFjdGl2YXRpb24oKSB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMSkge1xuICAgICAgICAgICAgZW5hYmxlU2xpZGVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXNhYmxlU2xpZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1NsaWRlckFjdGl2YXRpb24oKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dChyZXNpemVUaW1lb3V0KTtcbiAgICAgICAgcmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY2hlY2tTbGlkZXJBY3RpdmF0aW9uKCk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfSk7XG5cbn0pKCk7XG5cblxuIl19
