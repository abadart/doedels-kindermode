// Mobile nav

const mobileNavToggle = document.getElementById('toggleMainNav');

const openNavigation = () => {
    mobileNavToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
};

const closeNavigation = () => {
    mobileNavToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
};

const toggleNavigation = () => {
    const open = mobileNavToggle.getAttribute('aria-expanded');
    open === 'false' ? openNavigation() : closeNavigation();
};

mobileNavToggle.addEventListener('click', toggleNavigation);

window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
        mobileNavToggle.focus();
        closeNavigation();
    }
});


const setConstentCookie = (cookiepref) => {
    const d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    document.cookie = `cookieconsent=${cookiepref}; expires=${d.toUTCString()}; Secure;`;
}

const fetchCookieModal = async () => {
    const response = await fetch("cookiemodal.html");
    const modalHtml = await response.text();
    const body = document.querySelector("body");
    body.insertAdjacentHTML("afterbegin",modalHtml);

    const cookieModal = await document.getElementById('cookieModal');
    const acceptCookiesBtn = await document.getElementById('acceptCookies');
    const denieCookiesBtn = await document.getElementById('denieCookies');

    acceptCookiesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        setConstentCookie("1");
        loadGA4();
        cookieModal.close();
    });

    denieCookiesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        setConstentCookie("0");
        cookieModal.close();
    });
}

const loadGA4 = async () => {

}

// Check consent
if (document.cookie.indexOf("cookieconsent=") < 0) {
    fetchCookieModal();
} else if (document.cookie.indexOf("cookieconsent=1") >= 0) {
    // loadGA4();
}

// Mailchimp post and validation
const newsLetterForm = document.forms.nlForm;
const formResponseElm = document.querySelector('.newsletter-form-cta');
const mc_c = 'jQuery190045426647972713097_';

newsLetterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    sendFormData(event.target);
});

const sendFormData = async (form) => {
    const formData = new FormData(form);
    const params = new URLSearchParams(formData);
    params.append('c', mc_c + Date.now());
    params.append('_', Date.now());

    const requestUrl = form.action + '&' + params.toString();

    try {
        const response = await fetch(requestUrl, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response){
            formResponseElm.innerHTML = 'Bedankt voor je inschrijving!';
            newsLetterForm.style.display = 'none';
        }

    } catch (error) {
        console.error('Fout:', error);
        formResponseElm.innerHTML = 'Er is een fout opgetreden. Probeer het later opnieuw.';
    }
};
