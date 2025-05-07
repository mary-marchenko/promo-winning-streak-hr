(function () {
    const apiURL = 'https://fav-prom.com/api_your_promo'

    const getActiveWeek = (promoStartDate, weekDuration) => {
        const currentDate = new Date();
        let weekDates = [];

        const Day = 24 * 60 * 60 * 1000;
        const Week = weekDuration * Day;

        const formatDate = (date) =>
            `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1).toString().padStart(2, "0")}`;

        const calculateWeekPeriod = (weekIndex) => {
            const baseStart = promoStartDate.getTime();
            const start = new Date(baseStart + weekIndex * Week);
            let end = new Date(start.getTime() + (weekDuration * Day - 1));
            return { start, end };
        };

        let activeWeekIndex = null;

        // Перевірка поточного тижня
        for (let i = 0; i < 10; i++) { // Обмежуємо 10 тижнями (якщо потрібно більше, просто змініть лічильник)
            const { start, end } = calculateWeekPeriod(i);
            if (currentDate >= start && currentDate <= end) {
                activeWeekIndex = i + 1;
                break;
            }
        }

        return activeWeekIndex;
    };

    const promoStartDate = new Date("2025-05-05T00:00:00");
    const weekDuration = 10;

    const activeWeek = getActiveWeek(promoStartDate, weekDuration) || 1;


    const mainPage = document.querySelector(".fav-page"),
        unauthMsgs = document.querySelectorAll('.unauth-msg'),
        participateBtns = document.querySelectorAll('.part-btn'),
        redirectBtns = document.querySelectorAll('.btn-join'),
        loader = document.querySelector(".spinner-overlay")

    const ukLeng = document.querySelector('#ukLeng');
    const enLeng = document.querySelector('#enLeng');

    const toggleClasses = (elements, className) => elements.forEach(el => el.classList.toggle(`${className}`));
    const toggleTranslates = (elements, dataAttr) => elements.forEach(el => {
        el.setAttribute('data-translate', `${dataAttr}`)
        el.innerHTML = i18nData[dataAttr] || '*----NEED TO BE TRANSLATED----*   key:  ' + dataAttr;
        el.removeAttribute('data-translate');
    });

    let loaderBtn = false

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

                reportError(err);

                document.querySelector('.fav-page').style.display = 'none';
                if (window.location.href.startsWith("https://www.favbet.hr/")) {
                    window.location.href = '/promocije/promocija/stub/';
                } else {
                    window.location.href = '/promos/promo/stub/';
                }

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
        return fetch(`${apiURL}/new-translates/${locale}`).then(res => res.json())
            .then(json => {
                i18nData = json;
                translate();

                var mutationObserver = new MutationObserver(function (mutations) {
                    const shouldSkip = mutations.every(mutation => {
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
        refreshLocalizedClass(mainPage);
    }

    function refreshLocalizedClass(element) {
        if (!element) {
            return;
        }
        for (const lang of ['uk', 'en']) {
            element.classList.remove(lang);
        }
        element.classList.add(locale);
    }

    function renderUsers(week) {
        request(`/users/${week}`)
            .then(data => {
                const users = data;
                populateUsersTable(users, userId, week);
            });
    }

    function populateUsersTable(users, currentUserId, week) {
        resultsTable.innerHTML = '';
        resultsTableOther.innerHTML = '';
        if (!users?.length) return;
        const currentUser = users.find(user => user.userid === currentUserId);
        const topUsers = users.slice(0, 10);
        const isTopCurrentUser = currentUser && topUsers.some(user => user.userid === currentUserId);
        topUsers.forEach(user => {
            displayUser(user, user.userid === currentUserId, resultsTable, topUsers, isTopCurrentUser, week);
        });
        if (!isTopCurrentUser && currentUser) {
            displayUser(currentUser, true, resultsTableOther, users, false, week);
        }
    }

    function displayUser(user, isCurrentUser, table, users, isTopCurrentUser, week) {
        const renderRow = (userData, options = {}) => {
            const { highlight = false, neighbor = false } = options;
            const userRow = document.createElement('div');
            userRow.classList.add('table__row');

            const userPlace = users.indexOf(userData) + 1;
            const prizeKey = debug ? null : getPrizeTranslationKey(userPlace, week);

            if (userPlace <= 3) {
                userRow.classList.add(`place${userPlace}`);
            }

            if (highlight) {
                userRow.classList.add('_your');
            } else if (neighbor) {
                userRow.classList.add('_neighbor');
            }

            userRow.innerHTML = `
            <div class="table__row-item">
                ${userPlace < 10 ? '0' + userPlace : userPlace}
            </div>
            <div class="table__row-item">
                ${highlight ? userData.userid : maskUserId(userData.userid)}
            </div>
            <div class="table__row-item">
                ${userData.points}
            </div>
            <div class="table__row-item">
                ${prizeKey ? translateKey(prizeKey) : ' - '}
            </div>
        `;

            table.append(userRow);
        };
        if (isCurrentUser && !isTopCurrentUser) {
            const index = users.indexOf(user);
            if (users[index - 1]) {
                renderRow(users[index - 1], { neighbor: true });
            }
            renderRow(user, { highlight: true });
            if (users[index + 1]) {
                renderRow(users[index + 1], { neighbor: true });
            }
        } else {
            renderRow(user);
        }
    }

    function translateKey(key, defaultValue) {
        if (!key) {
            return;
        }
        let needKey = debug ? key : `*----NEED TO BE TRANSLATED----* key: ${key}`

        defaultValue =  needKey || key;
        return i18nData[key] || defaultValue;
    }

    function maskUserId(userId) {
        return "**" + userId.toString().slice(2);
    }

    function getPrizeTranslationKey(place, week) {
        if (place <= 3) return `prize_${week}-${place}`;
        if (place <= 10) return `prize_${week}-4-10`;
        if (place <= 25) return `prize_${week}-11-25`;
        if (place <= 50) return `prize_${week}-26-50`;
        if (place <= 75) return `prize_${week}-51-75`;
        if (place <= 100) return `prize_${week}-76-100`;
        if (place <= 125) return `prize_${week}-101-125`;
        if (place <= 150) return `prize_${week}-126-150`;
        if (place <= 175) return `prize_${week}-151-175`;
        if (place <= 200) return `prize_${week}-176-200`;
    }

    function participate() {
        if (!userId) {
            return;
        }
        const params = { userid: userId };
        fetch(apiURL + '/user/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(params)
        }).then(res => res.json())
            .then(res => {
                loaderBtn = true
                toggleClasses(participateBtns, "loader")
                toggleTranslates(participateBtns, "loader")
                setTimeout(() =>{
                    toggleTranslates(participateBtns, "loader_ready")
                    toggleClasses(participateBtns, "done")
                    toggleClasses(participateBtns, "loader")
                }, 500)
                setTimeout(()=>{
                    checkUserAuth()
                }, 1000)

            });
    }

    // loadTranslations().then(init) запуск ініту сторінки

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

    // TEST
    document.querySelector('.dark-btn').addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });
    const lngBtn = document.querySelector(".lng-btn")

    lngBtn.addEventListener("click", () => {
        if (sessionStorage.getItem("locale")) {
            sessionStorage.removeItem("locale");
        } else {
            sessionStorage.setItem("locale", "en");
        }
        window.location.reload();
    });

    const authBtn = document.querySelector(".auth-btn")
    authBtn.addEventListener("click", () =>{
        if(userId){
            sessionStorage.removeItem("userId")
        }else{
            sessionStorage.setItem("userId", "18908465")
        }
        window.location.reload()
    });


    document.addEventListener("DOMContentLoaded", () => {
        document.querySelector(".menu-btn")?.addEventListener("click", () => {
            document.querySelector(".menu-test")?.classList.toggle("hide");
        });
    });

    userId = sessionStorage.getItem("userId") ?? null

    document.querySelector('.success-btn').addEventListener('click', () => {
        document.querySelectorAll('.card').forEach(card => {
            const bg = card.querySelector('.card__bg');
            const successBlock = card.querySelector('.card__success');

            bg.classList.remove('success', 'inProgress', 'fail', 'locked');

            bg.classList.add('success');

            successBlock.classList.remove('hide');
        });
    });

    document.querySelector('.inProgress-btn').addEventListener('click', () => {
        document.querySelectorAll('.card').forEach(card => {
            const bg = card.querySelector('.card__bg');
            const successBlock = card.querySelector('.card__success');

            if (bg.classList.contains('success') || bg.classList.contains('inProgress') || bg.classList.contains('fail') || bg.classList.contains('locked')) {
                bg.classList.remove('success', 'inProgress', 'fail', 'locked');

                bg.classList.add('inProgress');

                if (!successBlock.classList.contains('hide')) {
                    successBlock.classList.add('hide');
                }
            }
        });
    });

    document.querySelector('.fail-btn').addEventListener('click', () => {
        document.querySelectorAll('.card').forEach(card => {
            const bg = card.querySelector('.card__bg');
            const successBlock = card.querySelector('.card__success');

            if (bg.classList.contains('success') || bg.classList.contains('inProgress') || bg.classList.contains('fail') || bg.classList.contains('locked')) {
                bg.classList.remove('success', 'inProgress', 'fail', 'locked');

                bg.classList.add('fail');

                if (!successBlock.classList.contains('hide')) {
                    successBlock.classList.add('hide');
                }
            }
        });
    });

    document.querySelector('.locked-btn').addEventListener('click', () => {
        document.querySelectorAll('.card').forEach(card => {
            const bg = card.querySelector('.card__bg');
            const successBlock = card.querySelector('.card__success');

            if (bg.classList.contains('success') || bg.classList.contains('inProgress') || bg.classList.contains('fail') || bg.classList.contains('locked')) {
                bg.classList.remove('success', 'inProgress', 'fail', 'locked');

                bg.classList.add('locked');

                if (!successBlock.classList.contains('hide')) {
                    successBlock.classList.add('hide');
                }
            }
        });
    });

    document.querySelector('.progressBar-btn').addEventListener('click', () => {
        document.querySelectorAll('.progressBar__item, .challenge__prize-item, .challenge__bonus-item').forEach(el => {
            el.classList.toggle('active');
        });
    });

    document.querySelector('.withoutBonus-btn').addEventListener('click', () => {
        document.querySelectorAll('.challenge__bonus').forEach(el => {
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


