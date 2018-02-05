'use strict'

var pricesTable = document.querySelector('.prices__table');
var reviews = document.querySelector('.reviews__wrapper');

var btnPrices1 = document.querySelector('#btn-prices-1');
var btnPrices2 = document.querySelector('#btn-prices-2');
var btnPrices3 = document.querySelector('#btn-prices-3');

var btnReviews1 = document.querySelector('#btn-reviews-1');
var btnReviews2 = document.querySelector('#btn-reviews-2');
var btnReviews3= document.querySelector('#btn-reviews-3');

var btnReviewsArrow1 = document.querySelector('#btn-arrow-1');
var btnReviewsArrow2 = document.querySelector('#btn-arrow-2');

// Слайдер цен

btnPrices1.addEventListener('click', function () {
  pricesTable.setAttribute('style', 'left: 7%');
});

btnPrices2.addEventListener('click', function () {
  pricesTable.removeAttribute('style');
});

btnPrices3.addEventListener('click', function () {
  pricesTable.setAttribute('style', 'left: -166%');
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

// Слайдер отзывов для десктопа

btnReviewsArrow1.addEventListener('click', function () {
  reviews.removeAttribute('style', 'left: 0.3%');
});

btnReviewsArrow2.addEventListener('click', function () {
  reviews.setAttribute('style', 'left: -158.9%');
});
