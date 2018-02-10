'use strict'

var navList = document.querySelector('.main-nav');
var headerToggler = document.querySelector('.page-header__toggler');
var logoContainer = document.querySelector('.page-header__logo-container');
var pageHeader = document.querySelector('.page-header');
var iconBurger= document.querySelector('.page-header__burger');
var iconCross = document.querySelector('.page-header__cross');

navList.classList.remove('main-nav--nojs');
pageHeader.classList.remove('page-header--nojs');
headerToggler.classList.remove('page-header__toggler--nojs');

headerToggler.addEventListener('click', function() {
    if (navList.classList.contains('main-nav--closed')) {
      navList.classList.remove('main-nav--closed');
      logoContainer.classList.remove('page-header__logo-container--closed');
      logoContainer.classList.add('page-header__logo-container--opened');
      pageHeader.classList.add('page-header--static');
      iconBurger.classList.add('page-header__toggler--icon-change');
      iconCross.classList.remove('page-header__toggler--icon-change');
    } else {
      navList.classList.add('main-nav--closed');
      navList.classList.remove('main-nav--opened');
      logoContainer.classList.remove('page-header__logo-container--opened');
      logoContainer.classList.add('page-header__logo-container--closed');
      pageHeader.classList.remove('page-header--static');
      iconBurger.classList.remove('page-header__toggler--icon-change');
      iconCross.classList.add('page-header__toggler--icon-change');
    }
  });
