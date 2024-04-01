// Mobile nav

const mobileNavToggle = document.getElementById('toggleMainNav');

const openNavigation = () => {
    mobileNavToggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('nav-open');
}

const closeNavigation = () => {
    mobileNavToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
}

const toggleNavigation = () => {
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
const newsLetterForm = document.forms.nlForm;
const mc_c = "jQuery19003303681766368718_";

newsLetterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    sendFormData(event.target);
});


const sendFormData = async (form) => {
    
    const formData = new FormData(form);
    const params = new URLSearchParams(formData);
    params.append("c",mc_c+Date.now());
    params.append("_",Date.now());

    const requestUrl = form.action+"&"+params.toString();

    // const response = await fetch(requestUrl, {
    //     method: 'GET',
    //     mode: 'no-cors',
    //     cache: 'no-cache',
    //     credentials: 'same-origin',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     redirect: 'follow', 
    //     referrerPolicy: 'no-referrer',
    // });
    
    // return response;
}


