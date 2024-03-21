// Mobile nav

const mobileNavToggle = document.getElementById('toggleMainNav');

function openNavigation() {
    mobileNavToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
}

function closeNavigation() {
    mobileNavToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
}

function toggleNavigation() {
    const open = mobileNavToggle.getAttribute('aria-expanded');
    open === 'false' ? openNavigation() : closeNavigation();
}

mobileNavToggle.addEventListener('click', toggleNavigation);

window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
        mobileNavToggle.focus();
        closeNavigation();
    }
});

// Mailchimp post and validation
const newsLetterForm = document.getElementById('');

// Example POST method implementation:
async function postFormData() {

    const url = "https://doedelskindermode.us7.list-manage.com/subscribe/post-json?u=d9195e5285b008d78540931c4&id=13304b5a94&f_id=000bd9e4f0&c=jQuery190021296043349292648_1710357131636&EMAIL=almer1%40almerbadart.nl&FNAME=Almer&LNAME=Badart&b_d9195e5285b008d78540931c4_13304b5a94=&subscribe=Subscribe&_=1710357131637";

    // Default options are marked with *
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        // body: JSON.stringify(postData), // body data type must match "Content-Type" header
    });
    return response // parses JSON response into native JavaScript objects
}

// postFormData().then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
// });
