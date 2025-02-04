'use strict';
let openMenu = false;
let menuBtn = document.querySelector('.check-icon'),
  menuBtnIcon = document.querySelector('.check-icon i'),
  navLink = document.querySelector('.nav-link'),
  colorBody = function (e) {
    document.querySelector('body').style.color = e;
  },
  backgroundColorBody = function (e) {
    document.querySelector('body').style.backgroundColor = e;
  },
  strokeLogo = function (e) {
    document.querySelector('.logo').style.WebkitTextStroke = e;
  },
  strokeBtn = function (e) {
    document.querySelector('.btn').style.WebkitTextStroke = e;
  },
  transitionBody = function (e) {
    document.querySelector('body').style.transition = e;
  },
  displayLight = function (e) {
    document.querySelector('.light').style.display = e;
  },
  displayDark = function (e) {
    document.querySelector('.dark').style.display = e;
  },
  outlineBtn = function (e) {
    document.querySelector('.btn').style.outline = e;
  },
  menuBtnIconColor = function (e) {
    menuBtnIcon.style.color = e;
  },
  navLinkBackground = function (e) {
    navLink.style.backgroundColor = e;
  };

const openAndCloseMenu = function () {
  menuBtn.addEventListener('click', function () {
    menuBtnIcon.classList.contains('fa-bars')
      ? ((navLink.style.right = '0'),
        (menuBtn.style.transform = 'initial'),
        (menuBtn.style.transition = 'initial'),
        (menuBtnIcon.classList = 'fa fa-times'),
        (menuBtnIcon.style.zIndex = '5'),
        (menuBtnIcon.style.position = 'fixed'),
        (menuBtnIcon.style.top = '7px'),
        (openMenu = true),
        (menuBtnIcon.style.right = '173px'))
      : ((navLink.style.right = '-1000px'),
        (menuBtnIcon.classList = 'fa fa-bars'),
        (menuBtnIcon.style.zIndex = 'initial'),
        (menuBtnIcon.style.position = 'initial'),
        (menuBtnIcon.style.top = 'initial'),
        (menuBtnIcon.style.right = 'initial')),
      (openMenu = false);
  });
};

document.querySelector('.light').addEventListener('click', function () {
  displayLight('none'),
    displayDark('block'),
    backgroundColorBody('white'),
    colorBody('black'),
    menuBtnIconColor('black'),
    navLinkBackground('white');
  let e = document.querySelectorAll('.link');
  for (let t = 0; t < e.length; t++) e[t].style.color = 'black';
  let t = document.querySelectorAll('.color');
  for (let e = 0; e < t.length; e++) t[e].style.WebkitTextStroke = '1px #000';
  strokeLogo('1px #000'),
    strokeBtn('1px #000'),
    outlineBtn('3px solid #000'),
    transitionBody('all 250ms ease 80ms');
  let o = document.querySelector('.img-wrapper');
  window.getComputedStyle(o, '::before'),
    o.style.setProperty('--beforeBorderBlock', '10px dotted #000');
  let n = document.querySelector('.img-wrapper');
  window.getComputedStyle(n, '::before'),
    n.style.setProperty('--beforeBorderInline', '10px dotted #000');
  let l = document.querySelector('.card');
  window.getComputedStyle(l, '::after'), l.style.setProperty('--card', 'white');
  let r = document.querySelector('.card2');
  window.getComputedStyle(r, '::after'), r.style.setProperty('--card', 'white');
  let c = document.querySelector('.card3');
  window.getComputedStyle(c, '::after'), c.style.setProperty('--card', 'white');
}),
  document.querySelector('.dark').addEventListener('click', function () {
    displayDark('none'),
      displayLight('block'),
      backgroundColorBody('var(--black)'),
      colorBody('white'),
      menuBtnIconColor('white'),
      navLinkBackground('var(--black)');
    let e = document.querySelectorAll('.link');
    for (let t = 0; t < e.length; t++) e[t].style.color = 'white';
    let t = document.querySelectorAll('.color');
    for (let e = 0; e < t.length; e++) t[e].style.WebkitTextStroke = 'initial';
    strokeLogo('initial'),
      strokeBtn('initial'),
      outlineBtn('initial'),
      transitionBody('all 250ms ease 80ms');
    let o = document.querySelector('.img-wrapper');
    window.getComputedStyle(o, '::before'),
      o.style.setProperty('--beforeBorderBlock', '10px dotted #fee42f');
    let n = document.querySelector('.img-wrapper');
    window.getComputedStyle(n, '::before'),
      n.style.setProperty('--beforeBorderInline', '10px dotted #fee42f');
    let l = document.querySelector('.card');
    window.getComputedStyle(l, '::after'),
      l.style.setProperty('--card', '#111827');
    let r = document.querySelector('.card2');
    window.getComputedStyle(r, '::after'),
      r.style.setProperty('--card', '#111827');
    let c = document.querySelector('.card3');
    window.getComputedStyle(c, '::after'),
      c.style.setProperty('--card', '#111827');
  });
const modal = document.querySelector('.modal'),
  modalCss = document.querySelector('.modal-css'),
  modalJs = document.querySelector('.modal-js'),
  overlay = document.querySelector('.overlay'),
  closeModalHtml = document.querySelector('.close-html'),
  closeModalCss = document.querySelector('.close-css'),
  closeModalJs = document.querySelector('.close-js'),
  btn1 = document.querySelector('.btn-1'),
  btn2 = document.querySelector('.btn-2'),
  btn3 = document.querySelector('.btn-3'),
  openModalHtml = function () {
    modal.classList.toggle('hidden'), overlay.classList.toggle('hidden');
  },
  openModalCss = function () {
    modalCss.classList.toggle('hidden'), overlay.classList.toggle('hidden');
  },
  openModalJs = function () {
    modalJs.classList.toggle('hidden'), overlay.classList.toggle('hidden');
  };
btn1.addEventListener('click', openModalHtml),
  btn2.addEventListener('click', openModalCss),
  btn3.addEventListener('click', openModalJs);
const closeHtml = function () {
    modal.classList.toggle('hidden'), overlay.classList.toggle('hidden');
  },
  closeCss = function () {
    modalCss.classList.toggle('hidden'), overlay.classList.toggle('hidden');
  },
  closeJs = function () {
    modalJs.classList.toggle('hidden'), overlay.classList.toggle('hidden');
  };
closeModalHtml.addEventListener('click', closeHtml),
  closeModalCss.addEventListener('click', closeCss),
  closeModalJs.addEventListener('click', closeJs),
  openAndCloseMenu();
