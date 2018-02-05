'use strict'

var navList = document.querySelector('.main-nav');
var headerToggler = document.querySelector('.page-header__toggler');
var logoContainer = document.querySelector('.page-header__logo-container');

navList.classList.remove('main-nav--nojs');
logoContainer.classList.remove('page-header__logo-container--nojs');
headerToggler.classList.remove('page-header__toggler--nojs');

headerToggler.addEventListener('click', function() {
    if (navList.classList.contains('main-nav--closed')) {
      navList.classList.remove('main-nav--closed');
      logoContainer.classList.remove('page-header__logo-container--closed');
      logoContainer.classList.add('page-header__logo-container--opened');
    } else {
      navList.classList.add('main-nav--closed');
      navList.classList.remove('main-nav--opened');
      navList.classList.add('main-nav--closed');
      logoContainer.classList.remove('page-header__logo-container--opened');
      logoContainer.classList.add('page-header__logo-container--closed');
    }
  });
