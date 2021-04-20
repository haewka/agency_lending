'use strict';
const contactButton = document.querySelector('.organisation__button'),
    modalWindow = document.querySelector('.modal-window'),
    exitBtn = document.querySelector('.modal-window-exit-btn'),
    modalBg = document.querySelector('.modal-window-bg');

function showModalWindow() {
    contactButton.addEventListener('click', () => {
        if (modalWindow.classList.contains('hidden') && modalBg.classList.contains('hidden')) {
            modalWindow.classList.remove('hidden');
            modalWindow.classList.add('visible');
            modalBg.classList.remove('hidden');
            modalBg.classList.add('visible');
            document.body.style.overflow = 'hidden';
        } else {
            modalWindow.classList.add('visible');
            modalBg.classList.add('visible');
        }
    });
}
showModalWindow();

function hideModalWindow() {
    exitBtn.addEventListener('click', () => {
        if(modalWindow.classList.contains('visible') && modalBg.classList.contains('visible')) {
            modalWindow.classList.remove('visible');
            modalWindow.classList.add('hidden');
            modalBg.classList.remove('visible');
            modalBg.classList.add('hidden');
            document.body.style.overflow = '';
        } else {
            modalWindow.classList.add('hidden');
            modalBg.classList.add('hidden');
        }
    });
}
hideModalWindow();

const navHome = document.querySelector('.nav__block_content_button_item-home'),
    navPortfolio = document.querySelector('.nav__block_content_button_item-portfolio'),
    navAbout = document.querySelector('.nav__block_content_button_item-about'),
    navContact = document.querySelector('.nav__block_content_button_item-contact');

function scrollOnNav() {
    navHome.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
    navPortfolio.addEventListener('click',() => {
        window.scrollTo(0, 1300);
    });
    navAbout.addEventListener('click',() => {
        window.scrollTo(0, 2400);
    });
    navContact.addEventListener('click',() => {
        window.scrollTo(0, 3850);
    })
}
scrollOnNav();

/* const productsTitleAll = document.querySelector('.feature__items_title-title-all'),
    productsTitlePrint = document.querySelector('.feature__items_title-title-print'),
    productsTitleWeb = document.querySelector('.feature__items_title-title-web'),
    productsTitleUser = document.querySelector('.feature__items_title-title-user'),
    productsTitleMock = document.querySelector('.feature__items_title-title-mock'),
    productsItemAll = document.querySelector('.feature__items_content-all'),
    productsItemPrint = document.querySelector('.feature__items_content-print'),
    productsItemWeb = document.querySelector('.feature__items_content-web'),
    productsItemUser = document.querySelector('.feature__items_content-user'),
    productsItemMock = document.querySelector('.feature__items_content-mock'); */

/* function productsItems(title) {
    if(title.classList.contains('feature__items_titles-title-active')) {
        
    }
} */

const productsTitle = document.querySelectorAll('.feature__items_titles-title'),
    productsItem = document.querySelectorAll('.feature__items_content');

productsTitle.forEach((i) => {
    console.log(i);
});

