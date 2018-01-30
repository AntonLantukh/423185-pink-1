'use strict'

var navList = document.querySelector('.main-nav');
var headerToggler = document.querySelector('.page-header__toggler');
var headerPre = document.querySelector('.page-header__pre-menu ');


navList.classList.remove('main-nav--nojs');
headerPre.classList.remove('page-header__pre-menu--nojs');
headerToggler.classList.remove('page-header__toggler--nojs');

headerToggler.addEventListener('click', function() {
    if (navList.classList.contains('main-nav--closed')) {
      navList.classList.remove('main-nav--closed');
      headerPre.classList.remove('page-header__pre-menu--closed');
      headerPre.classList.add('page-header__pre-menu--opened');
    } else {
      navList.classList.add('main-nav--closed');
      navList.classList.remove('main-nav--opened');
      navList.classList.add('main-nav--closed');
      headerPre.classList.remove('page-header__pre-menu--opened');
      headerPre.classList.add('page-header__pre-menu--closed');
    }
  });
