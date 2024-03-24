import {Fancybox} from "@fancyapps/ui";

window.addEventListener('load', () => {
    const preloader = document.querySelector('#preloader');
    
    if (preloader) {
        preloader.style.display = 'none';
    }
});

Fancybox.bind("[data-fancybox]", {
    height: '100%',
});
