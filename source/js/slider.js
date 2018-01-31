'use strict'

var pricesTable = document.querySelector('.prices__table');
var reviews = document.querySelector('.reviews__wrapper');

var btnPrices1 = document.querySelector('#btn-prices-1');
var btnPrices2 = document.querySelector('#btn-prices-2');
var btnPrices3 = document.querySelector('#btn-prices-3');

var btnReviews1 = document.querySelector('#btn-reviews-1');
var btnReviews2 = document.querySelector('#btn-reviews-2');
var btnReviews3= document.querySelector('#btn-reviews-3');

// Слайдер цен

btnPrices1.addEventListener('click', function () {
  reviews.setAttribute('style', 'left: 8%');
});

btnPrices2.addEventListener('click', function () {
  reviews.setAttribute('style', 'left: 8%');
});

btnPrices3.addEventListener('click', function () {
  reviews.setAttribute('style', 'left: 40%');
});

// Слайдер отзывов

btnReviews1.addEventListener('click', function () {
  reviews.removeAttribute('style');
});

btnReviews2.addEventListener('click', function () {
  reviews.setAttribute('style', 'left: -100%');
});

btnReviews3.addEventListener('click', function () {
  reviews.setAttribute('style', 'left: -200%');
});
