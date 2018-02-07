'use strict'

var navList = document.querySelector('.main-nav');
var headerToggler = document.querySelector('.page-header__toggler');
var logoContainer = document.querySelector('.page-header__logo-container');
var pageHeader = document.querySelector('.page-header');

navList.classList.remove('main-nav--nojs');
logoContainer.classList.remove('page-header__logo-container--nojs');
headerToggler.classList.remove('page-header__toggler--nojs');

headerToggler.addEventListener('click', function() {
    if (navList.classList.contains('main-nav--closed')) {
      navList.classList.remove('main-nav--closed');
      logoContainer.classList.remove('page-header__logo-container--closed');
      logoContainer.classList.add('page-header__logo-container--opened');
      pageHeader.classList.add('page-header--static');
    } else {
      navList.classList.add('main-nav--closed');
      navList.classList.remove('main-nav--opened');
      logoContainer.classList.remove('page-header__logo-container--opened');
      logoContainer.classList.add('page-header__logo-container--closed');
      pageHeader.classList.remove('page-header--static');
    }
  });
