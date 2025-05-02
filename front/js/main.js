(function () {

    const apiURL = 'https://fav-prom.com/api_your_promo'

    const mainPage = document.querySelector(".fav-page"),
        unauthMsgs = document.querySelectorAll('.unauth-msg'),
        participateBtns = document.querySelectorAll('.part-btn'),
        redirectBtns = document.querySelectorAll('.btn-join'),
        loader = document.querySelector(".spinner-overlay")

    const ukLeng = document.querySelector('#ukLeng');
    const enLeng = document.querySelector('#enLeng');

    let locale = "en"

    if (ukLeng) locale = 'uk';
    if (enLeng) locale = 'en';

    let debug = true

    if (debug) hideLoader()

    let i18nData = {};
    const translateState = true;
    let userId = null;

    const request = function (link, extraOptions) {
        return fetch(apiURL + link, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            ...(extraOptions || {})
        })
            .then(res => {
                if (!res.ok) throw new Error('API error');
                return res.json();
            })
            .catch(err => {
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

    }

    function hideLoader(){
        loader.classList.add("hide")
        document.body.style.overflow = "auto"
        mainPage.classList.remove("loading")
    }

    async function init() {
        let attempts = 0;
        const maxAttempts = 20;
        const attemptInterval = 50;

        function tryDetectUserId() {
            if (window.store) {
                const state = window.store.getState();
                userId = state.auth.isAuthorized && state.auth.id || '';
            } else if (window.g_user_id) {
                userId = window.g_user_id;
            }
        }

        function quickCheckAndRender() {
            checkUserAuth();

        }

        const waitForUserId = new Promise((resolve) => {
            const interval = setInterval(() => {
                tryDetectUserId();
                if (userId || attempts >= maxAttempts) {
                    quickCheckAndRender();
                    clearInterval(interval);
                    resolve();
                }
                attempts++;
            }, attemptInterval);
        });

        await waitForUserId;
    }

    function loadTranslations() {
        return fetch(`${apiURL}/translates/${locale}`).then(res => res.json())
            .then(json => {
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
        const loadTime = 200;

        setTimeout(() => {
            const showElements = (elements) => elements.forEach(el => el.classList.remove('hide'));
            const hideElements = (elements) => elements.forEach(el => el.classList.add('hide'));

            if (!userId) {
                hideElements(participateBtns);
                hideElements(redirectBtns);
                showElements(unauthMsgs);
                hideLoader();
                return Promise.resolve(false);
            }

            hideElements(unauthMsgs);

            return request(`/favuser/${userId}?nocache=1`).then(res => {
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
        const reportData = {
            origin: window.location.href,
            userid: userId,
            errorText: err?.error || err?.text || err?.message || 'Unknown error',
            type: err?.name || 'UnknownError',
            stack: err?.stack || ''
        };

        fetch('https://fav-prom.com/api-cms/reports/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reportData)
        }).catch(console.warn);
    }

    function translate() {
        const elems = document.querySelectorAll('[data-translate]')
        if (elems && elems.length) {
            if(translateState){
                elems.forEach(elem => {
                    const key = elem.getAttribute('data-translate');
                    elem.innerHTML = i18nData[key] || '*----NEED TO BE TRANSLATED----*   key:  ' + key;
                    if (i18nData[key]) {
                        elem.removeAttribute('data-translate');
                    }
                })
            }else{
                console.log("translation works!")
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
        for (const lang of ['uk', 'en']) {
            element.classList.remove(baseCssClass + lang);
        }
        element.classList.add(baseCssClass + locale);
    }

    // loadTranslations().then(init)

    //animation
    const itemsTxt = document.querySelectorAll('.instructions__txt-item')

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                itemsTxt.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible')
                    }, index * 300)
                })
                obs.disconnect()
            }
        })
    }, {
        threshold: 0.2
    })

    if (itemsTxt.length > 0) {
        observer.observe(itemsTxt[0].parentElement)
    }

//slider
    let sliderInitialized = false;
    let currentIndex = 0;
    let startX = 0;
    let isDragging = false;
    let resizeTimeout;

    let slider;
    let items;
    let totalItems;

    function updateSlider() {
        items.forEach((item, index) => {
            const distance = index - currentIndex;
            let newPosition = 0;
            let scale = 0.9;

            if (distance === 0) {
                newPosition = 0;
                scale = 1;
            } else if (distance === -1 || (currentIndex === 0 && index === totalItems - 1)) {
                newPosition = -22;
            } else if (distance === 1 || (currentIndex === totalItems - 1 && index === 0)) {
                newPosition = 22;
            } else {
                newPosition = 0;
            }

            item.style.transform = `translateX(${newPosition}%) scale(${scale})`;
            item.style.zIndex = index === currentIndex ? 2 : 1;

            item.classList.toggle('active', index === currentIndex);
            item.classList.toggle('left-slide', distance === -1 || (currentIndex === 0 && index === totalItems - 1));
            item.classList.toggle('right-slide', distance === 1 || (currentIndex === totalItems - 1 && index === 0));
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
        const deltaX = e.touches[0].clientX - startX;

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
        if (sliderInitialized) return;

        slider = document.querySelector('.challenge__cards');
        items = document.querySelectorAll('.challenge__cards .card');
        totalItems = items.length;
        if (!slider || items.length === 0) return;

        currentIndex = 0;
        updateSlider();

        document.querySelector('.challenge__control-left')?.addEventListener('click', prevSlide);
        document.querySelector('.challenge__control-right')?.addEventListener('click', nextSlide);

        slider.addEventListener('touchstart', handleTouchStart);
        slider.addEventListener('touchmove', handleTouchMove);
        slider.addEventListener('touchend', handleTouchEnd);

        sliderInitialized = true;
    }

    function disableSlider() {
        if (!sliderInitialized) return;

        document.querySelector('.challenge__control-left')?.removeEventListener('click', prevSlide);
        document.querySelector('.challenge__control-right')?.removeEventListener('click', nextSlide);

        slider.removeEventListener('touchstart', handleTouchStart);
        slider.removeEventListener('touchmove', handleTouchMove);
        slider.removeEventListener('touchend', handleTouchEnd);

        // Скидаємо стилі та класи
        items.forEach(item => {
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

    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            checkSliderActivation();
        }, 200);
    });

})();


