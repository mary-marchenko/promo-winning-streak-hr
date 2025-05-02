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
        newPosition = distance * 100;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYXBpVVJMIiwibWFpblBhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1bmF1dGhNc2dzIiwicXVlcnlTZWxlY3RvckFsbCIsInBhcnRpY2lwYXRlQnRucyIsInJlZGlyZWN0QnRucyIsImxvYWRlciIsInVrTGVuZyIsImVuTGVuZyIsImxvY2FsZSIsImRlYnVnIiwiaGlkZUxvYWRlciIsImkxOG5EYXRhIiwidHJhbnNsYXRlU3RhdGUiLCJ1c2VySWQiLCJyZXF1ZXN0IiwibGluayIsImV4dHJhT3B0aW9ucyIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsIkVycm9yIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJib2R5Iiwic3R5bGUiLCJvdmVyZmxvdyIsInJlbW92ZSIsImluaXQiLCJ0cnlEZXRlY3RVc2VySWQiLCJxdWlja0NoZWNrQW5kUmVuZGVyIiwiY2hlY2tVc2VyQXV0aCIsIndpbmRvdyIsInN0b3JlIiwic3RhdGUiLCJnZXRTdGF0ZSIsImF1dGgiLCJpc0F1dGhvcml6ZWQiLCJpZCIsImdfdXNlcl9pZCIsImF0dGVtcHRzIiwibWF4QXR0ZW1wdHMiLCJhdHRlbXB0SW50ZXJ2YWwiLCJ3YWl0Rm9yVXNlcklkIiwicmVzb2x2ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibG9hZFRyYW5zbGF0aW9ucyIsInRyYW5zbGF0ZSIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwib2JzZXJ2ZSIsImdldEVsZW1lbnRCeUlkIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImxvYWRUaW1lIiwic2V0VGltZW91dCIsInNob3dFbGVtZW50cyIsImVsZW1lbnRzIiwiZm9yRWFjaCIsImVsIiwiaGlkZUVsZW1lbnRzIiwidXNlcmlkIiwicmVwb3J0RXJyb3IiLCJyZXBvcnREYXRhIiwib3JpZ2luIiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3JUZXh0IiwidGV4dCIsIm1lc3NhZ2UiLCJ0eXBlIiwibmFtZSIsInN0YWNrIiwibWV0aG9kIiwiSlNPTiIsInN0cmluZ2lmeSIsIndhcm4iLCJlbGVtcyIsImxlbmd0aCIsImVsZW0iLCJrZXkiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2ciLCJyZWZyZXNoTG9jYWxpemVkQ2xhc3MiLCJlbGVtZW50IiwiYmFzZUNzc0NsYXNzIiwibGFuZyIsIml0ZW1zVHh0Iiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJvYnMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaXRlbSIsImluZGV4IiwiZGlzY29ubmVjdCIsInRocmVzaG9sZCIsInBhcmVudEVsZW1lbnQiLCJzbGlkZXJJbml0aWFsaXplZCIsImN1cnJlbnRJbmRleCIsInN0YXJ0WCIsImlzRHJhZ2dpbmciLCJyZXNpemVUaW1lb3V0Iiwic2xpZGVyIiwiaXRlbXMiLCJ0b3RhbEl0ZW1zIiwidXBkYXRlU2xpZGVyIiwiZGlzdGFuY2UiLCJuZXdQb3NpdGlvbiIsInNjYWxlIiwidHJhbnNmb3JtIiwiekluZGV4IiwidG9nZ2xlIiwibmV4dFNsaWRlIiwicHJldlNsaWRlIiwiaGFuZGxlVG91Y2hTdGFydCIsImUiLCJ0b3VjaGVzIiwiY2xpZW50WCIsImhhbmRsZVRvdWNoTW92ZSIsImRlbHRhWCIsIk1hdGgiLCJhYnMiLCJoYW5kbGVUb3VjaEVuZCIsImVuYWJsZVNsaWRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNhYmxlU2xpZGVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNoZWNrU2xpZGVyQWN0aXZhdGlvbiIsImlubmVyV2lkdGgiLCJjbGVhclRpbWVvdXQiXSwibWFwcGluZ3MiOiI7OzsrQ0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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TSxDQUFDdUcsVUFBVSxHQUFHLEdBQUcsRUFBRTtNQUN6QkwsWUFBWSxFQUFFO0lBQ2xCLENBQUMsTUFBTTtNQUNIRSxhQUFhLEVBQUU7SUFDbkI7RUFDSjtFQUVBRSxxQkFBcUIsRUFBRTtFQUV2QnRHLE1BQU0sQ0FBQ21HLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO0lBQ3BDSyxZQUFZLENBQUM1QixhQUFhLENBQUM7SUFDM0JBLGFBQWEsR0FBR2xELFVBQVUsQ0FBQyxZQUFNO01BQzdCNEUscUJBQXFCLEVBQUU7SUFDM0IsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUNYLENBQUMsQ0FBQztBQUVOLENBQUMsR0FBRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblxuICAgIGNvbnN0IGFwaVVSTCA9ICdodHRwczovL2Zhdi1wcm9tLmNvbS9hcGlfeW91cl9wcm9tbydcblxuICAgIGNvbnN0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXYtcGFnZVwiKSxcbiAgICAgICAgdW5hdXRoTXNncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bmF1dGgtbXNnJyksXG4gICAgICAgIHBhcnRpY2lwYXRlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXJ0LWJ0bicpLFxuICAgICAgICByZWRpcmVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWpvaW4nKSxcbiAgICAgICAgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGlubmVyLW92ZXJsYXlcIilcblxuICAgIGNvbnN0IHVrTGVuZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1a0xlbmcnKTtcbiAgICBjb25zdCBlbkxlbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZW5MZW5nJyk7XG5cbiAgICBsZXQgbG9jYWxlID0gXCJlblwiXG5cbiAgICBpZiAodWtMZW5nKSBsb2NhbGUgPSAndWsnO1xuICAgIGlmIChlbkxlbmcpIGxvY2FsZSA9ICdlbic7XG5cbiAgICBsZXQgZGVidWcgPSB0cnVlXG5cbiAgICBpZiAoZGVidWcpIGhpZGVMb2FkZXIoKVxuXG4gICAgbGV0IGkxOG5EYXRhID0ge307XG4gICAgY29uc3QgdHJhbnNsYXRlU3RhdGUgPSB0cnVlO1xuICAgIGxldCB1c2VySWQgPSBudWxsO1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IGZ1bmN0aW9uIChsaW5rLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGFwaVVSTCArIGxpbmssIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAuLi4oZXh0cmFPcHRpb25zIHx8IHt9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBUEkgZXJyb3InKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVxdWVzdCBmYWlsZWQ6JywgZXJyKTtcblxuICAgICAgICAgICAgICAgIC8vIHJlcG9ydEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2LXBhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIC8vIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5zdGFydHNXaXRoKFwiaHR0cHM6Ly93d3cuZmF2YmV0LmhyL1wiKSkge1xuICAgICAgICAgICAgICAgIC8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvbW9jaWplL3Byb21vY2lqYS9zdHViLyc7XG4gICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb21vcy9wcm9tby9zdHViLyc7XG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVMb2FkZXIoKXtcbiAgICAgICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIlxuICAgICAgICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwibG9hZGluZ1wiKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gMjA7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRJbnRlcnZhbCA9IDUwO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRyeURldGVjdFVzZXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHdpbmRvdy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgIHVzZXJJZCA9IHN0YXRlLmF1dGguaXNBdXRob3JpemVkICYmIHN0YXRlLmF1dGguaWQgfHwgJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5nX3VzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICB1c2VySWQgPSB3aW5kb3cuZ191c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcXVpY2tDaGVja0FuZFJlbmRlcigpIHtcbiAgICAgICAgICAgIGNoZWNrVXNlckF1dGgoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgd2FpdEZvclVzZXJJZCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnlEZXRlY3RVc2VySWQoKTtcbiAgICAgICAgICAgICAgICBpZiAodXNlcklkIHx8IGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1aWNrQ2hlY2tBbmRSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIH0sIGF0dGVtcHRJbnRlcnZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JVc2VySWQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFRyYW5zbGF0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke2FwaVVSTH0vdHJhbnNsYXRlcy8ke2xvY2FsZX1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgICAgICAgICAgaTE4bkRhdGEgPSBqc29uO1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieW91clByb21vSWRcIiksIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aCgpIHtcbiAgICAgICAgY29uc3QgbG9hZFRpbWUgPSAyMDA7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaG93RWxlbWVudHMgPSAoZWxlbWVudHMpID0+IGVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpKTtcbiAgICAgICAgICAgIGNvbnN0IGhpZGVFbGVtZW50cyA9IChlbGVtZW50cykgPT4gZWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKCdoaWRlJykpO1xuXG4gICAgICAgICAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgIGhpZGVFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyh1bmF1dGhNc2dzKTtcbiAgICAgICAgICAgICAgICBoaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhpZGVFbGVtZW50cyh1bmF1dGhNc2dzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QoYC9mYXZ1c2VyLyR7dXNlcklkfT9ub2NhY2hlPTFgKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy51c2VyaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZUVsZW1lbnRzKHBhcnRpY2lwYXRlQnRucyk7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhyZWRpcmVjdEJ0bnMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dFbGVtZW50cyhwYXJ0aWNpcGF0ZUJ0bnMpO1xuICAgICAgICAgICAgICAgICAgICBoaWRlRWxlbWVudHMocmVkaXJlY3RCdG5zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGxvYWRUaW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBvcnRFcnJvcihlcnIpIHtcbiAgICAgICAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIG9yaWdpbjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICB1c2VyaWQ6IHVzZXJJZCxcbiAgICAgICAgICAgIGVycm9yVGV4dDogZXJyPy5lcnJvciB8fCBlcnI/LnRleHQgfHwgZXJyPy5tZXNzYWdlIHx8ICdVbmtub3duIGVycm9yJyxcbiAgICAgICAgICAgIHR5cGU6IGVycj8ubmFtZSB8fCAnVW5rbm93bkVycm9yJyxcbiAgICAgICAgICAgIHN0YWNrOiBlcnI/LnN0YWNrIHx8ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vZmF2LXByb20uY29tL2FwaS1jbXMvcmVwb3J0cy9hZGQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVwb3J0RGF0YSlcbiAgICAgICAgfSkuY2F0Y2goY29uc29sZS53YXJuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoKSB7XG4gICAgICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHJhbnNsYXRlXScpXG4gICAgICAgIGlmIChlbGVtcyAmJiBlbGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmKHRyYW5zbGF0ZVN0YXRlKXtcbiAgICAgICAgICAgICAgICBlbGVtcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBlbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2xhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbS5pbm5lckhUTUwgPSBpMThuRGF0YVtrZXldIHx8ICcqLS0tLU5FRUQgVE8gQkUgVFJBTlNMQVRFRC0tLS0qICAga2V5OiAgJyArIGtleTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkxOG5EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRyYW5zbGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJhbnNsYXRpb24gd29ya3MhXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2FsZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgbWFpblBhZ2UuY2xhc3NMaXN0LmFkZCgnZW4nKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoTG9jYWxpemVkQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWZyZXNoTG9jYWxpemVkQ2xhc3MoZWxlbWVudCwgYmFzZUNzc0NsYXNzKSB7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgbGFuZyBvZiBbJ3VrJywgJ2VuJ10pIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShiYXNlQ3NzQ2xhc3MgKyBsYW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYmFzZUNzc0NsYXNzICsgbG9jYWxlKTtcbiAgICB9XG5cbiAgICAvLyBsb2FkVHJhbnNsYXRpb25zKCkudGhlbihpbml0KVxuXG4gICAgLy9hbmltYXRpb25cbiAgICBjb25zdCBpdGVtc1R4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnN0cnVjdGlvbnNfX3R4dC1pdGVtJylcblxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnMpID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgaXRlbXNUeHQuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKVxuICAgICAgICAgICAgICAgICAgICB9LCBpbmRleCAqIDMwMClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIG9icy5kaXNjb25uZWN0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9LCB7XG4gICAgICAgIHRocmVzaG9sZDogMC4yXG4gICAgfSlcblxuICAgIGlmIChpdGVtc1R4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoaXRlbXNUeHRbMF0ucGFyZW50RWxlbWVudClcbiAgICB9XG5cbi8vc2xpZGVyXG4gICAgbGV0IHNsaWRlckluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gICAgbGV0IHN0YXJ0WCA9IDA7XG4gICAgbGV0IGlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICBsZXQgcmVzaXplVGltZW91dDtcblxuICAgIGxldCBzbGlkZXI7XG4gICAgbGV0IGl0ZW1zO1xuICAgIGxldCB0b3RhbEl0ZW1zO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2xpZGVyKCkge1xuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBpbmRleCAtIGN1cnJlbnRJbmRleDtcbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICBsZXQgc2NhbGUgPSAwLjk7XG5cbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBzY2FsZSA9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpc3RhbmNlID09PSAtMSB8fCAoY3VycmVudEluZGV4ID09PSAwICYmIGluZGV4ID09PSB0b3RhbEl0ZW1zIC0gMSkpIHtcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbiA9IC0yMjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgPT09IDEgfHwgKGN1cnJlbnRJbmRleCA9PT0gdG90YWxJdGVtcyAtIDEgJiYgaW5kZXggPT09IDApKSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSAyMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBkaXN0YW5jZSAqIDEwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke25ld1Bvc2l0aW9ufSUpIHNjYWxlKCR7c2NhbGV9KWA7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLnpJbmRleCA9IGluZGV4ID09PSBjdXJyZW50SW5kZXggPyAyIDogMTtcblxuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBpbmRleCA9PT0gY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnbGVmdC1zbGlkZScsIGRpc3RhbmNlID09PSAtMSB8fCAoY3VycmVudEluZGV4ID09PSAwICYmIGluZGV4ID09PSB0b3RhbEl0ZW1zIC0gMSkpO1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdyaWdodC1zbGlkZScsIGRpc3RhbmNlID09PSAxIHx8IChjdXJyZW50SW5kZXggPT09IHRvdGFsSXRlbXMgLSAxICYmIGluZGV4ID09PSAwKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5leHRTbGlkZSgpIHtcbiAgICAgICAgY3VycmVudEluZGV4ID0gKGN1cnJlbnRJbmRleCArIDEpICUgdG90YWxJdGVtcztcbiAgICAgICAgdXBkYXRlU2xpZGVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJldlNsaWRlKCkge1xuICAgICAgICBjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4IC0gMSArIHRvdGFsSXRlbXMpICUgdG90YWxJdGVtcztcbiAgICAgICAgdXBkYXRlU2xpZGVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydChlKSB7XG4gICAgICAgIGlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICBzdGFydFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoZSkge1xuICAgICAgICBpZiAoIWlzRHJhZ2dpbmcpIHJldHVybjtcbiAgICAgICAgY29uc3QgZGVsdGFYID0gZS50b3VjaGVzWzBdLmNsaWVudFggLSBzdGFydFg7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKGRlbHRhWCkgPiA1MCkge1xuICAgICAgICAgICAgaWYgKGRlbHRhWCA+IDApIHtcbiAgICAgICAgICAgICAgICBwcmV2U2xpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZCgpIHtcbiAgICAgICAgaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuYWJsZVNsaWRlcigpIHtcbiAgICAgICAgaWYgKHNsaWRlckluaXRpYWxpemVkKSByZXR1cm47XG5cbiAgICAgICAgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWxsZW5nZV9fY2FyZHMnKTtcbiAgICAgICAgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhbGxlbmdlX19jYXJkcyAuY2FyZCcpO1xuICAgICAgICB0b3RhbEl0ZW1zID0gaXRlbXMubGVuZ3RoO1xuICAgICAgICBpZiAoIXNsaWRlciB8fCBpdGVtcy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgICAgICBjdXJyZW50SW5kZXggPSAwO1xuICAgICAgICB1cGRhdGVTbGlkZXIoKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxlbmdlX19jb250cm9sLWxlZnQnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcmV2U2xpZGUpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbGxlbmdlX19jb250cm9sLXJpZ2h0Jyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dFNsaWRlKTtcblxuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGhhbmRsZVRvdWNoU3RhcnQpO1xuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlVG91Y2hNb3ZlKTtcbiAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgaGFuZGxlVG91Y2hFbmQpO1xuXG4gICAgICAgIHNsaWRlckluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNhYmxlU2xpZGVyKCkge1xuICAgICAgICBpZiAoIXNsaWRlckluaXRpYWxpemVkKSByZXR1cm47XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWxsZW5nZV9fY29udHJvbC1sZWZ0Jyk/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJldlNsaWRlKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYWxsZW5nZV9fY29udHJvbC1yaWdodCcpPy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIG5leHRTbGlkZSk7XG5cbiAgICAgICAgc2xpZGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVUb3VjaFN0YXJ0KTtcbiAgICAgICAgc2xpZGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZVRvdWNoTW92ZSk7XG4gICAgICAgIHNsaWRlci5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGhhbmRsZVRvdWNoRW5kKTtcblxuICAgICAgICAvLyDQodC60LjQtNCw0ZTQvNC+INGB0YLQuNC70ZYg0YLQsCDQutC70LDRgdC4XG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgICAgICAgICAgaXRlbS5zdHlsZS56SW5kZXggPSAnJztcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJywgJ2xlZnQtc2xpZGUnLCAncmlnaHQtc2xpZGUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2xpZGVySW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja1NsaWRlckFjdGl2YXRpb24oKSB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDYwMSkge1xuICAgICAgICAgICAgZW5hYmxlU2xpZGVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaXNhYmxlU2xpZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja1NsaWRlckFjdGl2YXRpb24oKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dChyZXNpemVUaW1lb3V0KTtcbiAgICAgICAgcmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY2hlY2tTbGlkZXJBY3RpdmF0aW9uKCk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfSk7XG5cbn0pKCk7XG5cblxuIl19
