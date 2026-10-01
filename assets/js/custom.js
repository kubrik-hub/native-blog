/* 
=====================
MOTION THEME - STYLES
=====================
*/
@font-face {
  font-display: swap;
  font-family: Overpass;
  font-style: normal;
  font-weight: 100;
  src: url(../fonts/Overpass-Regular.woff2) format("woff2"),
    url(../fonts/Overpass-Regular.woff2) format("woff2");
}
:root {
  --bs-gray-light: #e2e2df;
  --bs-gray-300: #dee2e6;
  --bs-gray-500: #adb5bd;
  --bs-primary: #a2aeb9;
  --bs-very-small-font-size: 0.65rem;
  --bs-small-font-size: 0.7rem;
  --bs-small-medium-font-size: 0.8rem;
  --bs-body-font-size: 0.85rem;
  --bs-links-font-size: 0.95rem;
  --bs-body-color: #212529;
  --bs-body-bg: #fff;
  --bs-white-color: #fff;
  --bs-black-font-color: #000;
  --bs-white-font-color: #fff;
  --bs-emphasis-color: #000;
  --bs-secondary-color: rgba(33, 37, 41, 0.75);
  --bs-tertiary-bg: #f8f9fa;
  --bs-link-hover-color: #a2aeb9;
  --bs-border-color: #dee2e6;
  --bs-btn-bg: #000;
  --bs-btn-border-color: #000;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-border-color: #a2aeb9;
  --bs-btn-hover-bg: #a2aeb9;
  --bs-border-main-radius: 0.3rem;
  --motion-sidebar-w: clamp(240px, 19.5vw, 375px);
  --motion-panel-w: clamp(230px, 15.3vw, 294px);
  --motion-panel-bg: #000;
  --motion-speed: 0.35s;
  --motion-bar-h: 64px;
}
.btn-primary {
  --bs-btn-color: #fff;
  --bs-btn-bg: #000;
  --bs-btn-border-color: #000;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #a2aeb9;
  --bs-btn-hover-border-color: #a2aeb9;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #a2aeb9;
  --bs-btn-active-border-color: #a2aeb9;
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #a2aeb9;
  --bs-btn-disabled-border-color: #a2aeb9;
}
body.motion-theme {
  overflow-x: hidden;
}
.motion-shell {
  position: relative;
  min-height: 100vh;
}

/* ---------- 1. Column 1 : main footer + displayNav1 (always visible on desktop) ---------- */
.motion-panel {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: var(--motion-panel-w);
  background: var(--motion-panel-bg);
  color: var(--bs-white-font-color);
  display: flex;
  flex-direction: column;
  z-index: 1030;
  transform: translateX(-100%);
  visibility: hidden;
  transition: transform var(--motion-speed) ease,
    visibility 0s linear var(--motion-speed);
}
.motion-panel__scroll {
  flex: 1 1 auto;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

/* No scrollbar anywhere inside the left column (the theme sets its own on the cart list with #header selectors) */
#header .motion-panel *::-webkit-scrollbar,
.motion-panel__scroll::-webkit-scrollbar {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}
body.motion-panel-open .motion-panel {
  transform: translateX(0);
  visibility: visible;
  transition: transform var(--motion-speed) ease;
}
/* Etat fermé : le panneau n'existe pas dans la composition */
body:not(.motion-panel-open) .motion-panel {
  pointer-events: none;
}

/* Quand fermé, la colonne 2 rejoint le bord gauche */
body:not(.motion-panel-open) .motion-sidebar {
  left: 0;
}

body:not(.motion-panel-open) .motion-content {
  margin-left: var(--motion-sidebar-w);
}
body.motion-panel-open .motion-sidebar {
  left: var(--motion-panel-w);
}

body.motion-panel-open .motion-content {
  margin-left: calc(var(--motion-panel-w) + var(--motion-sidebar-w));
}
.motion-panel a,
.motion-panel .dropdown-item,
.motion-panel .btn-link,
.motion-panel .dropdown-toggle {
  color: var(--bs-white-font-color);
}
.motion-panel a:hover {
  color: var(--bs-primary);
}
.motion-panel__close {
  display: none;
  align-self: flex-end;
  background: transparent;
  border: 0;
  color: var(--bs-white-font-color);
  padding: 0.75rem;
  line-height: 1;
}
.motion-panel__close .material-icons {
  font-size: 2rem;
}
.motion-panel__body {
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 1.25rem 1.25rem 1rem;
}
.motion-panel__body ul,
.motion-panel__bottom ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.motion-panel__body a,
.motion-panel__bottom a {
  display: block;
  padding: 0.8rem 0;
  text-transform: uppercase;
}
.motion-panel__bottom {
  flex: 0 0 auto;
  padding: 0.75rem 1.5rem 2rem;
}
.motion-panel__bottom:empty {
  display: none;
}

/* ---------- 2. Column 2 : fixed ---------- */
.motion-sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: var(--motion-panel-w);
  width: var(--motion-sidebar-w);
  padding: 1.25rem 1.5rem 1rem;
  z-index: 1030;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.motion-sidebar__scroll {
  flex: 1 1 auto;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

/* No scrollbar anywhere inside the left column (the theme sets its own on the cart list with #header selectors) */
#header .motion-sidebar *::-webkit-scrollbar,
.motion-sidebar__scroll::-webkit-scrollbar {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}
#header .motion-sidebar,
#header .motion-sidebar * {
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
}
.motion-sidebar__bottom {
  flex: 0 0 auto;
  padding: 0.75rem 1.5rem 1rem;
}
.motion-sidebar__bottom:not(:has(*)) {
  display: none;
}

/* displayRightColumn : under displayTop, full width of the column */
.motion-sidebar__right {
  margin-top: 2rem;
}
.motion-sidebar__bottom .copyright {
  padding: 0.5rem 0 0;
  font-size: var(--bs-small-font-size);
}
.motion-sidebar__footer-after {
  justify-content: center;
  text-align: center;
}

.motion-sidebar__logo {
  display: flex;
  justify-content: center;
  margin: 4rem 0 2rem;
}
.motion-sidebar__h1 {
  font-size: unset;
}
.motion-sidebar__logo .logo {
  max-width: 100%;
  height: auto;
}

/* Icons row : every module on displayTop is a direct flex child of #motion-top */
.motion-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem 1rem;
}
.motion-mod,
.ps-shoppingcart,
.ps-customersignin,
.blockcart {
  display: contents !important;
}

.motion-icon {
  position: relative;
  background: transparent;
  border: 0;
  padding: 0.25rem;
  color: var(--bs-body-color);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  cursor: pointer;
}
.motion-icon:hover,
.motion-icon:focus-visible {
  color: var(--bs-primary);
}
.motion-icon__badge {
  position: absolute;
  top: -0.15rem;
  right: -0.35rem;
  min-width: 1.1rem;
  height: 1.1rem;
  background: var(--bs-primary);
  color: var(--bs-white-font-color);
  font-size: var(--bs-very-small-font-size);
  line-height: 1.2rem;
  text-align: center;
  padding: 0 0.2rem;
}
/* desktop :  */
@media (min-width: 992px) {
  body.motion-menu-collapsed .motion-mod--menu {
    display: none !important;
  }
  .login,
  .register-form,
  #contact .container-fluid .page--full-width {
    width: 50%;
  }
  #contact .container-fluid {
    display: flex;
    column-gap: 2.5rem;
  }
}

/* menu icon <-> X (tablet / mobile off-canvas panel) */
.motion-icon--menu .motion-icon__close {
  display: none;
}
body.motion-panel-open .motion-icon--menu .motion-icon__open {
  display: none;
}
body.motion-panel-open .motion-icon--menu .motion-icon__close {
  display: inline-block;
}

/* Unrolled panels (search / cart / account) : full width under the icons */
.motion-collapse {
  order: 10;
  flex: 0 0 100%;
  width: 100%;
  text-align: left;
}
.motion-collapse > * {
  margin-top: 0.75rem;
}
.motion-collapse__empty {
  margin: 0.75rem 0 0;
  text-align: center;
  color: var(--bs-secondary-color);
}

/* search */
.motion-collapse--search .ps-searchbar {
  margin: 0;
}
.motion-collapse--search .ps-searchbar__form {
  display: block;
  padding: 0;
}
.motion-collapse--search .ps-searchbar__input {
  width: 100%;
  padding: 0.5rem 2.25rem 0.5rem 0.75rem;
  border: 1px solid var(--bs-border-color);
}
.motion-collapse--search header form i.ps-searchbar__magnifier,
.motion-collapse--search .ps-searchbar__magnifier {
  display: block;
  left: auto;
  right: 0.6rem;
}
.motion-collapse--search .ps-searchbar__dropdown {
  position: static;
  width: 100%;
  max-width: none;
  margin-top: 0.25rem;
  border-radius: 0;
}
.motion-collapse--search .ps-searchbar__clear {
  right: 2rem;
}

/* cart : native accordion, but in the flow of the column */
.motion-collapse--cart .cart-summary__products-accordion,
#header .motion-collapse--cart .cart-summary__products-accordion {
  position: static;
  width: 100%;
  display: flex;
  padding: 1rem 0;
}

/* the cart list grows freely: the whole column scrolls instead of an inner scrollbar */
#header .motion-collapse--cart .cart-summary__products-accordion .show {
  width: 100%;
  height: auto !important;
  max-height: none !important;
  overflow: visible !important;
}
#header
  .motion-collapse--cart
  .cart-summary__products-accordion
  .accordion-button {
  width: 100%;
}
#header .motion-collapse--cart .cart-summary__products-accordion h4 {
  margin: 0;
}
.ps-shoppingcart .top_shoppingcart_indicator_to_checkout {
  position: absolute;
  right: 16.31%;
  width: 0.3rem;
  height: 1.3rem;
  z-index: 100;
  color: var(--bs-white-color);
}
.fly-to-cart {
  width: 30px;
  height: 30px;
  position: fixed;
  z-index: 99999;
  pointer-events: none;
  object-fit: cover;
  background-image: url("../img-dist/fly-to-cart.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  transition: all 1.5s linear;
}
#header .cart-summary__products-accordion {
  position: absolute;
  top: 18%;
  left: 84%;
  padding: 1rem;
  flex-direction: column;
  background: var(--bs-gray-light);
  border-top: 2px dashed var(--bs-white-color);
  border-bottom: 2px dashed var(--bs-white-color);
}
#header .cart-summary__products-accordion #top_shoppingcart_link_to_checkout {
  display: inline-block;
  width: 100%;
  padding: 1rem 0 0;
  border-top: 1px dashed var(--bs-white-color);
  text-align: center;
  font-size: var(--bs-small-medium-font-size);
  text-transform: uppercase;
  color: var(--bs-black-font-color);
}
#header
  .cart-summary__products-accordion
  #top_shoppingcart_link_to_checkout
  span,
#header .cart-summary__products-accordion #top_shoppingcart_link_to_checkout i {
  color: var(--bs-black-font-color);
  transition: var(--bs-transition-default);
}
#header
  .cart-summary__products-accordion
  #top_shoppingcart_link_to_checkout:hover
  span,
#header
  .cart-summary__products-accordion
  #top_shoppingcart_link_to_checkout:hover
  i {
  color: var(--bs-link-hover-color) !important;
}
#header .cart-summary__products-accordion .show {
  width: 13.1rem;
  height: 15rem;
  height: auto;
  max-height: 28rem;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: #888 transparent;
  line-height: normal;
  transition: max-height 0.3s ease;
}
#header .cart-summary__products-accordion .show::-webkit-scrollbar {
  width: 8px;
}
#header .cart-summary__products-accordion .show::-webkit-scrollbar-track {
  background: transparent;
}
#header .cart-summary__products-accordion .show::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}
#header .cart-summary__products-accordion .show::-webkit-scrollbar-thumb:hover {
  background: #555;
}
#header .cart-summary__products-accordion .cart-summary-product__content-right {
  display: none;
}
#header .cart-summary__products-accordion .cart-summary__products-list {
  padding: 1rem;
  gap: 0;
}
#header .cart-summary__products-accordion .accordion-header {
  padding: 0 1rem;
}
#header .cart-summary__products-accordion span {
  font-size: var(--bs-small-medium-font-size);
}
#header
  .cart-summary__products-accordion
  .cart-summary__products-list
  .cart-summary-product {
  flex-wrap: nowrap;
}
#header
  .cart-summary__products-accordion
  .cart-summary__products-list
  .cart-summary-product__img {
  width: 2rem;
  height: 2rem;
}
#header
  .cart-summary__products-accordion
  .cart-summary__products-list
  .cart-summary-product__content-left {
  flex-grow: 0;
  font-size: var(--bs-small-medium-font-size);
}
#header
  .cart-summary__products-accordion
  .cart-summary__products-list
  .cart-summary-product__content-left
  a:hover {
  color: var(--bs-white-color);
}
#cart-summary__products-accordion:not(:has(.cart-summary-product)) {
  display: none !important;
}

/* account links */
.motion-account-links {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.motion-account-links p {
  font-weight: 600;
  font-style: italic;
}
.motion-account-links p span {
  font-weight: normal;
}

.motion-account-links .dropdown-item {
  display: block;
  color: var(--bs-body-color);
  white-space: normal;
  text-transform: uppercase;
  font-size: var(--bs-small-medium-font-size);
}
.motion-account-links .dropdown-item i {
  display: none;
}
.motion-account-links .dropdown-item:hover {
  color: var(--bs-primary);
  background: transparent;
}
.motion-account-links .dropdown-divider {
  margin: 0.25rem 0;
}

/* modules hooked on displayTop (accordion built by motion JS) */
.motion-top > .motion-acc,
.motion-top > [data-motion-acc-source] {
  order: 20;
  flex: 0 0 100%;
  width: 100%;
  text-align: left;
}
.motion-acc .accordion-button {
  display: block;
  padding: 0;
  background: transparent;
  box-shadow: none;
  text-transform: uppercase;
  font-size: var(--bs-small-medium-font-size);
  font-weight: 600;
}
.motion-acc .accordion-button:not(.collapsed) {
  color: var(--bs-primary);
}
.motion-acc__body {
  padding: 0.25rem 0 1rem;
}
.motion-acc .accordion-button:after {
  display: none;
}

/* main menu accordion */
.motion-mod--menu {
  display: block !important;
  order: 30;
  flex: 0 0 100%;
  width: 100%;
  margin-top: 2rem;
}
.motion-menu__list {
  list-style: none;
  margin: 0.5rem 0 0 0;
  padding: 0;
}
.motion-menu__row {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.motion-menu__link {
  display: block;
  flex: 1 1 auto;
  text-transform: uppercase;
  font-size: var(--bs-small-medium-font-size);
  font-weight: 600;
}
.motion-menu__collapse {
  padding: 0 0 1rem 0;
}
.motion-menu__link:hover,
.motion-menu__item.current > .motion-menu__row > .motion-menu__link {
  color: var(--bs-primary);
}

/* whole row = accordion button (native .accordion-button chevron, no icon element) */
.motion-menu .accordion-button.motion-menu__toggle,
.motion-menu .accordion-button.motion-menu__toggle:not(.collapsed) {
  width: 100%;
  justify-content: center;
  padding: 0 0.5rem;
  background: transparent;
  box-shadow: none;
  border-radius: 0;
  text-align: center;
}
.motion-menu .accordion-button.motion-menu__toggle:not(.collapsed) {
  color: var(--bs-primary);
}
.motion-menu__link--all {
  display: block;
  padding: 0.3rem 1.5rem;
  font-size: 0.8rem;
  font-style: italic;
  color: var(--bs-secondary-color);
}
.motion-menu__list--level-2 .motion-menu__link {
  font-weight: 400;
  color: var(--bs-secondary-color);
}
.motion-menu__list--level-3 .motion-menu__link {
  font-size: 0.8rem;
}

/* Footer-type modules (ps_linklist, ps_contactinfo...) hooked in the black panel or the left column:
   they must use the full width of the column, stacked, instead of the col-md-6 / col-lg-3 footer grid */
.motion-sidebar .footer-block,
.motion-panel .footer-block,
#motion-panel section {
  width: 100%;
  max-width: 100%;
  flex: 0 0 100%;
  margin: 0 0 1rem;
  text-align: center;
}
.motion-panel .footer-block {
  text-align: left;
}
.motion-sidebar .footer-block__title,
.motion-panel .footer-block__title,
.motion-panel .h1 {
  font-size: var(--bs-links-font-size);
  text-transform: uppercase;
}
.motion-panel p {
  text-align: left;
}
/* theme.css hides every ".footer__main .footer__main-top .footer-block__title" from 1400px (its own footer
   shows only the links on wide screens). The panel reuses the same markup, so its titles must stay visible. */
.motion-panel .footer__main .footer__main-top .footer-block__title,
.motion-sidebar .footer__main .footer__main-top .footer-block__title {
  display: flex;
  margin-block-end: 0;
}
.motion-panel .footer-block__title {
  color: var(--bs-white-font-color);
}
.motion-sidebar .footer-block__list li,
.motion-panel .footer-block__list li {
  display: block;
}
.motion-sidebar .footer-block__content.collapse,
.motion-panel .footer-block__content.collapse {
  display: block;
}
.motion-sidebar .footer-block__title--toggle .stretched-link,
.motion-panel .footer-block__title--toggle .stretched-link {
  display: none;
}

/* Generic hardening : ANY module can be hooked in the black panel or the left column by the merchant.
   Modules are written for wide areas (containers, bootstrap grid, fixed widths) : inside these two narrow
   columns everything is stacked on the full width and never overflows. */
.motion-sidebar__scroll,
.motion-panel__body,
.motion-panel__bottom {
  overflow-wrap: anywhere;
}
.motion-sidebar .container,
.motion-sidebar .container-fluid,
.motion-panel .container,
.motion-panel .container-fluid {
  max-width: 100%;
  width: 100%;
  padding-inline: 0;
  text-align: left;
}
.motion-sidebar .row,
.motion-panel .row {
  margin-inline: 0;
  --bs-gutter-x: 0;
}
.motion-sidebar .row > *,
.motion-panel .row > *,
.motion-sidebar [class*="col-"],
.motion-panel [class*="col-"] {
  flex: 0 0 100%;
  width: 100%;
  max-width: 100%;
  padding-inline: 0;
}
.motion-sidebar img,
.motion-sidebar video,
.motion-sidebar iframe,
.motion-sidebar svg,
.motion-panel img,
.motion-panel video,
.motion-panel iframe {
  max-width: 100%;
  height: auto;
}
.motion-sidebar table,
.motion-panel table {
  display: block;
  max-width: 100%;
  overflow-x: auto;
}
.motion-sidebar input,
.motion-sidebar select,
.motion-sidebar textarea,
.motion-panel input,
.motion-panel select,
.motion-panel textarea {
  max-width: 100%;
}
.motion-panel .form-control {
  color: #000;
}

/* Selects in the black panel (currency, language, or any module select) : transparent, light, like the mockup
   ("EUR v" / "FRANCAIS v"). The theme sets fixed 2.5rem / white / dark-text selects for the old header. */
#motion-panel #_desktop_ps_currencyselector,
#motion-panel #_desktop_ps_languageselector {
  display: block;
  width: 100%;
}
#motion-panel select,
#motion-panel .form-select,
#motion-panel #_desktop_ps_currencyselector select,
#motion-panel #_desktop_ps_languageselector select {
  --bs-form-select-bg-img: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3E%3C/svg%3E");
  width: auto;
  min-width: 5rem;
  height: auto;
  min-height: 0;
  padding: 0.6rem 1.75rem 0.6rem 0;
  background-color: transparent;
  background-position: right 0.25rem center;
  color: var(--bs-white-font-color);
  border: 0;
  border-radius: 0;
  box-shadow: none;
  text-transform: uppercase;
  line-height: 1.4;
  cursor: pointer;
  font-size: var(--bs-body-font-size);
}
#motion-panel select option {
  color: var(--bs-emphasis-color);
  background: var(--bs-white-font-color);
  text-transform: none;
}
.motion-panel__body > *,
.motion-panel__bottom > * {
  max-width: 100%;
}

/* ---------- 3. Column 3 : content ---------- */
.motion-content {
  margin-left: calc(var(--motion-panel-w) + var(--motion-sidebar-w));
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.motion-content .wrapper {
  flex: 1 1 auto;
}
.header-nav-full-width {
  padding: 1rem;
  background: var(--bs-tertiary-bg);
}
.motion-content .container,
.motion-content .container-md,
.motion-content .container-lg,
.motion-content .container-xl,
.motion-content .container-xxl {
  max-width: none;
}
.motion-nav2 {
  padding: 0.75rem 1rem;
}
.motion-footer {
  margin-top: auto;
}
/* displayFooterBefore : bottom of the content column */
.motion-footer-before {
  padding: 1rem;
}

.motion-overlay {
  display: none;
}

/* ---------- Mobile / tablet : column 2 becomes a top bar, column 1 is an off-canvas panel ----------
   - the top bar only holds the logo + icons (menu / search / account / cart) and has its own background
   - the main menu, the displayTop accordions and displayRightColumn are moved by motion JS into the
     off-canvas panel (#motion-panel, white background + default theme colours on mobile / tablet),
     displayFooterAfter + copyright at the end of the content */
@media (max-width: 991.98px) {
  :root {
    --motion-sidebar-w: 1rem;
    --motion-panel-w: 1rem;
    --motion-panel-m-w: min(85vw, 340px);
  }
  body.motion-panel-open {
    overflow: hidden;
  }

  /* off-canvas panel : real width on mobile (the desktop variable is 0px here) and above the overlay */
  .motion-panel {
    width: var(--motion-panel-m-w);
    max-width: 100vw;
    z-index: 1045;
    height: 100vh;
    height: 100dvh;
    bottom: auto;
    box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.35);
  }
  .motion-panel__close {
    display: block;
  }
  .motion-panel__body {
    padding-top: 0;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain;
  }
  .motion-panel__bottom {
    padding-bottom: max(1rem, env(safe-area-inset-bottom, 0px));
  }

  /* top bar : solid background so the page never shows through */
  .motion-sidebar {
    top: 0;
    bottom: auto;
    left: 0;
    right: 0;
    width: 100%;
    padding: 0;
    max-height: 100vh;
    max-height: 100dvh;
    background: var(--bs-body-bg);
    border-bottom: 1px solid var(--bs-border-color);
    text-align: left;
  }
  .motion-sidebar__scroll {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0 0.25rem;
    min-height: var(--motion-bar-h);
    max-height: 100vh;
    max-height: 100dvh;
    padding: 0.25rem 1rem;
    overscroll-behavior: contain;
  }
  .motion-sidebar__logo {
    margin: 0;
    flex: 1 1 auto;
    min-width: 0;
    justify-content: flex-start;
  }
  .motion-sidebar__logo .logo {
    max-height: 2.5rem;
    width: auto;
  }
  .motion-top {
    display: contents;
  }
  .motion-icon {
    min-width: 2.75rem;
    min-height: 2.75rem;
  }
  .motion-collapse {
    text-align: left;
    padding-bottom: 0.75rem;
  }

  /* content : pushed under the bar */
  .motion-content {
    margin-left: 0;
    padding-top: var(--motion-bar-h);
  }

  /* displayFooterAfter + copyright : moved after the content */
  .motion-content > .motion-sidebar__bottom {
    padding: 1.5rem 1rem;
    text-align: center;
    border-top: 1px solid var(--bs-border-color);
  }

  .motion-overlay {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1040;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--motion-speed);
  }
  body.motion-panel-open .motion-overlay {
    opacity: 1;
    pointer-events: auto;
  }

  /* ----- off-canvas panel : white background + default theme colours ----- */
  .motion-panel {
    background: var(--bs-body-bg);
    color: var(--bs-body-color);
  }
  .motion-panel a,
  .motion-panel .dropdown-item,
  .motion-panel .btn-link,
  .motion-panel .dropdown-toggle {
    color: var(--bs-black-font-color);
  }
  .motion-panel a:hover,
  .motion-panel .dropdown-item:hover,
  .motion-panel .btn-link:hover {
    color: var(--bs-link-hover-color, var(--bs-primary));
  }
  .motion-panel__close {
    color: var(--bs-body-color);
  }
  .motion-panel .footer-block__title,
  .motion-panel .footer-block a,
  .motion-panel .h1 {
    font-size: var(--bs-small-medium-font-size);
    color: var(--bs-black-font-color);
    padding: 0;
    font-weight: 600;
  }
  .motion-panel .footer-block a {
    font-weight: normal;
  }

  .motion-panel .footer-block a:hover {
    color: var(--bs-link-hover-color, var(--bs-primary));
  }
  /* selects (currency / language / any module) : dark text + dark chevron on white */
  #motion-panel select,
  #motion-panel .form-select,
  #motion-panel #_desktop_ps_currencyselector select,
  #motion-panel #_desktop_ps_languageselector select {
    --bs-form-select-bg-img: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23212529' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3E%3C/svg%3E");
    color: var(--bs-body-color);
  }

  /* blocks moved into the panel (main menu, displayTop modules, displayRightColumn) */
  .motion-panel__mobile {
    margin: 0 0 1.5rem;
    padding: 0 0 1rem;
    text-align: left;
  }
  .motion-panel__mobile:empty {
    display: none;
  }
  .motion-panel .motion-mod--menu {
    margin-top: 0;
  }
  .motion-panel .motion-menu__link,
  .motion-panel .motion-menu .accordion-button.motion-menu__toggle {
    color: var(--bs-black-font-color);
    text-align: left;
    justify-content: flex-start;
    padding: 0.2rem 0;
  }
  /* submenu toggle : label on the left, chevron on the right */
  .motion-panel .motion-menu .accordion-button.motion-menu__toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 0.25rem;
  }
  .motion-panel .motion-menu__link:hover,
  .motion-panel
    .motion-menu__item.current
    > .motion-menu__row
    > .motion-menu__link,
  .motion-panel
    .motion-menu
    .accordion-button.motion-menu__toggle:not(.collapsed) {
    color: var(--bs-primary);
  }
  .motion-panel .motion-menu__list--level-2 .motion-menu__link,
  .motion-panel .motion-menu__list--level-3 .motion-menu__link {
    color: var(--bs-secondary-color);
    padding: 0 0 0 1rem;
  }
  .motion-panel .motion-menu__list--level-2 .motion-menu__link:hover,
  .motion-panel .motion-menu__list--level-3 .motion-menu__link:hover {
    color: var(--bs-primary);
  }
  .motion-panel .motion-menu__row {
    justify-content: flex-start;
  }
  .motion-panel .motion-acc .accordion-button {
    padding-left: 0;
    color: var(--bs-body-color);
    text-align: left;
  }
  .motion-panel .motion-acc__body,
  .motion-panel .motion-sidebar__right {
    color: var(--bs-body-color);
  }
  .motion-panel .motion-acc .accordion-button:not(.collapsed) {
    color: var(--bs-primary);
  }
  .motion-panel .motion-sidebar__right {
    margin-top: 1.5rem;
    width: 100%;
    text-align: left;
  }
}

@media (prefers-reduced-motion: reduce) {
  .motion-panel {
    transition: none;
  }
}

/* ---------- motion-sidebar+motion-panel if display sepcials, news arrivals, best sales, featured products ---------- */
#motion-right-column .products,
#motion-panel .products {
  grid-template-columns: repeat(1, minmax(0, 1fr));
  text-align: left;
  row-gap: 0.5rem;
}
#motion-right-column .products .product-miniature__bottom,
#motion-panel .products .product-miniature__bottom {
  padding: 0.2rem 0 0;
}
#motion-right-column .products,
#motion-right-column .products a {
  font-size: var(--bs-small-medium-font-size);
}
#motion-panel .module-products .section-title {
  font-size: var(--bs-links-font-size);
  text-transform: uppercase;
}
#motion-panel .products,
#motion-panel .products a,
#motion-panel .products .product-miniature__price {
  font-size: var(--bs-small-medium-font-size);
  color: var(--bs-white-color);
}
#motion-panel .module-products .module-products__buttons a {
  color: var(--bs-white-color);
  font-size: var(--bs-small-font-size);
}
#motion-panel .module-products .module-products__buttons i {
  color: var(--bs-white-color);
}
#motion-panel .module-products .hidden_productlist_action {
  width: fit-content;
  left: 30%;
}

/* ---------- Product page ---------- */
body#product .breadcrumb__wrapper {
  display: none;
}
body#product #breadcrumb_on_ProductPage .breadcrumb__wrapper {
  background-color: var(--bs-body-bg);
  display: block;
}
body#product #breadcrumb_on_ProductPage .breadcrumb__wrapper .breadcrumb {
  padding-top: 0;
}

/* ---------- Motion Blog ---------- */
section#nativeblogprestashop-home h2 {
  margin: 0 0 0.5rem 0;
}
.blog-miniature__title {
  margin: 0.5em 0 0 0;
  font-size: calc(var(--bs-body-font-size) * 1.3);
}
.nativeblogprestashop .page-header {
  margin: 0;
}
#nativeblogprestashop-category .page-header,
#nativeblogprestashop-home .page-title-section {
  margin: 0 0 1rem 0;
}
.nativeblogprestashop .product-miniature__description {
  margin: 0.5rem 0;
}
.nativeblogprestashop .nativeblogprestashop-article__meta,
.nativeblogprestashop .product-miniature__review-count {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.2rem;
  font-size: var(--bs-small-medium-font-size);
}
.nativeblogprestashop .product-miniature__author .rounded-circle {
  height: 2.5rem;
  width: 2.5rem;
}
.nativeblogprestashop .product-miniature__reviews {
  display: flex;
  align-items: center;
  margin: 0 0 0 2.5rem;
}
.bg-nativeblogprestashop_tags
  .nativeblogprestashop-article__tags
  .bg-secondary {
  background: var(--bs-gray-300);
}
.nativeblogprestashop .nativeblogprestashop-list .wishlist-button-add {
  display: none;
}
.nativeblogprestashop .nativeblogprestashop-article__meta {
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: 0.75rem;
  font-size: var(--bs-small-medium-font-size);
}
#nativeblogprestashop-article .nativeblogprestashop-article__meta {
  margin: 2rem 0;
}
#nativeblogprestashop-article .product-comments-wrapper {
  margin: 2rem 0 0 0;
}
.nativeblogprestashop-article__meta-avatar {
  flex: 0 0 2.5rem;
  width: 2.5rem;
  height: 2.5rem;
}
.nativeblogprestashop-article__meta-avatar img {
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  object-fit: cover;
}
.nativeblogprestashop-article__meta-details {
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.nativeblogprestashop-article__meta-line {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  align-items: baseline;
}
.nativeblogprestashop-article__meta-label {
  font-weight: 600;
}
.nativeblogprestashop-article__tags {
  display: flex;
  gap: 1rem;
}
#nativeblogprestashop-article .nativeblogprestashop-article__tags span {
  background-color: var(--bs-gray-500);
}
#product-comments-list-header {
  margin: 0 0 1rem 0;
}
#product-comments-list-header h2 {
  margin-block-end: 0;
}
.nativeblogprestashop
  .nativeblogprestashop-article__meta-details
  .product-miniature__reviews {
  margin: 0;
}
.nativeblogprestashop .comment__top {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
}
.nativeblogprestashop .product-comment-list-item {
  display: flex;
  gap: 2rem;
}

/* ===================================================
   MOTION - PrestaShop 9.1 accessibility / dark mode layer
   =================================================== */

.motion-skip-link {
  position: fixed;
  left: 1rem;
  top: -100px;
  z-index: 9999;
}

.motion-skip-link:focus {
  top: 1rem;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bs-body-bg: #111;
    --bs-body-color: #f5f5f5;
    --bs-tertiary-bg: #1d1d1d;
    --bs-border-color: #444;
  }
}

[data-bs-theme="dark"] {
  --bs-body-bg: #111;
  --bs-body-color: #f5f5f5;
  --bs-tertiary-bg: #1d1d1d;
  --bs-border-color: #444;
}
