
// ===================================================
// FLY TO CART (PRESTASHOP 1.4 LECACY)+ CART ACCORDION
// ===================================================

document.addEventListener('DOMContentLoaded', function () {

    let collapse = document.getElementById(
        'cart-summary-product-list'
    );
    let button = document.querySelector(
        '.accordion-button[data-bs-target="#cart-summary-product-list"]'
    );

    if (collapse && button) {
        collapse.classList.remove('show');
        button.classList.add('collapsed');
        button.setAttribute(
            'aria-expanded',
            'false'
        );
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var flyStart = null;
    var openCartAfterUpdate = false;

    // 1. Capture du bouton cliqué AVANT AJAX
    jQuery(document).on(
        'mousedown',
        'button[data-button-action="add-to-cart"]',
        function () {
            var buttonRect = this.getBoundingClientRect();
            flyStart = {
                left: buttonRect.left + (buttonRect.width / 2),
                top: buttonRect.top + (buttonRect.height / 2)
            };
        }
    );

    if (typeof prestashop !== 'undefined') {

        // 2. Mise à jour panier + Fly To Cart
        prestashop.on('updateCart', function () {
            openCartAfterUpdate = true;
            var $cart = jQuery(
                '.blockcart, #_desktop_cart, .header-cart, .shopping_cart, #_desktop_ps_shoppingcart'
            ).first();
            if (!$cart.length || !flyStart) {
                return;
            }

            var cartRect = $cart[0].getBoundingClientRect();

            var $clone = jQuery('<div>', {
                class: 'fly-to-cart'
            }).css({
                position: 'fixed',
                top: flyStart.top + 'px',
                left: flyStart.left + 'px',
                zIndex: 99999,
                pointerEvents: 'none'
            }).appendTo('body');

            // Force le navigateur à appliquer la position de départ
            $clone[0].offsetHeight;

            // Animation vers panier
            $clone.css({
                top: (cartRect.top + 10) + 'px',
                left: (cartRect.left + 10) + 'px',
                width: '30px',
                height: '30px'
            });

            setTimeout(function () {
                $clone.remove();
                flyStart = null;
            }, 1550);
        });

        // 3. Après actualisation panier
        prestashop.on('updatedCart', function () {

            if (!openCartAfterUpdate) {
                return;
            }
            openCartAfterUpdate = false;
            setTimeout(function () {
                var collapse = document.getElementById(
                    'cart-summary-product-list'
                );
                var button = document.querySelector(
                    '.accordion-button[data-bs-target="#cart-summary-product-list"]'
                );

                if (!collapse || !button) {
                    return;
                }

                // OUVERTURE ACCORDEON
                if (typeof bootstrap !== 'undefined') {
                    new bootstrap.Collapse(collapse).show();
                } else {
                    collapse.classList.add('show');
                }
                button.classList.remove('collapsed');
                button.setAttribute(
                    'aria-expanded',
                    'true'
                );
                // FERMETURE APRES 5 SECONDES
                setTimeout(function () {
                    if (typeof bootstrap !== 'undefined') {
                        new bootstrap.Collapse(collapse).hide();
                    } else {
                        collapse.classList.remove('show');
                    }
                    button.classList.add('collapsed');
                    button.setAttribute(
                        'aria-expanded',
                        'false'
                    );
                }, 5000);
            }, 100);
        });
    }
});


// =====================================================
// ADD HOVER THUMBAIL PRODUCT LIST TO DISPLAY ALL IMAGES
// =====================================================

document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('.js-product-miniature').forEach(product => {

        const gallery = product.querySelector('.product-hover-gallery');
        if (!gallery) {
            return;
        }


        const images = gallery.querySelectorAll('.product-hover-slide');
        if (images.length <= 1) {
            return;
        }

        let current = 0;
        let timer = null;
        let firstTimer = null;

        product.addEventListener('mouseenter', function () {
            firstTimer = setTimeout(function () {
                images[current].classList.remove('active');
                current++;
                if (current >= images.length) {
                    current = 0;
                }
                images[current].classList.add('active');
                timer = setInterval(function () {
                    images[current].classList.remove('active');
                    current++;

                    if (current >= images.length) {
                        current = 0;
                    }
                    images[current].classList.add('active');
                }, 1200);
            }, 500);
        });



        product.addEventListener('mouseleave', function () {
            clearTimeout(firstTimer);
            clearInterval(timer);
            images[current].classList.remove('active');
            current = 0;
            images[current].classList.add('active');
        });
    });
});


// ===================================================
// ADD LINK TO DELETTE PRODUCT FROM ACCORDION TOP CART
// ===================================================
document.addEventListener('click', function (e) {
  const remove = e.target.closest('.cart-summary-product__remove');

  if (!remove) {
    return;
  }

  e.preventDefault();

  remove.closest('.cart-summary-product').remove();

  fetch(remove.href, {
    method: 'GET'
  }).then(() => {
    prestashop.emit('updateCart', {
      reason: {
        linkAction: 'delete-from-cart'
      }
    });
  });
});