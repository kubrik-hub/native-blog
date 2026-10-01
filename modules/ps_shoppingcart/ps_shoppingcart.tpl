{**
 * For the full copyright and license information, please view the
 * LICENSE.md file that was distributed with this source code.
 *
 * MOTION THEME : cart icon (left column) that unrolls the native cart accordion.
 * The whole .blockcart element is refreshed by ps_shoppingcart.js after each cart update.
 *}
{capture name='motionEmptyLabel'}{l s='There are no more items in your cart' d='Shop.Theme.Checkout'}{/capture}
<div id="motion_ps_shoppingcart" class="motion-mod motion-mod--cart" data-motion-native>
  <div class="ps-shoppingcart">
    <div class="blockcart cart-preview {if $cart.products_count> 0}header-block--active{else}inactive{/if}" data-refresh-url="{$refresh_url}" data-cart-count="{$cart.products_count}">
      <button
        type="button"
        class="motion-icon motion-icon--cart header-block__action-btn"
        data-bs-toggle="collapse"
        data-bs-target="#motion-cart-panel"
        aria-expanded="false"
        aria-controls="motion-cart-panel"
        aria-label="{l s='(%d products)' d='Shop.Theme.Checkout' sprintf=[$cart.products_count]}"
      >
        <i class="material-icons header-block__icon" aria-hidden="true">&#xe54c;</i>
        {if $cart.products_count> 0}
          <span class="motion-icon__badge header-block__numberproduct_mobile">{$cart.products_count}</span>
        {/if}
      </button>

      <div class="collapse motion-collapse motion-collapse--cart" id="motion-cart-panel" data-bs-parent="#motion-top" data-empty-label="{$smarty.capture.motionEmptyLabel|escape:'html':'UTF-8'}">
        {if $cart.products_count> 0}
          <div class="cart-summary__products-accordion accordion accordion-flush accordion--small" id="cart-summary__products-accordion">
            <div class="accordion-header">
              <h4>
                  {l s='%d products' d='Shop.Theme.Checkout' sprintf=[$cart.products_count]} - {$cart.subtotals.products.value}
              </h4>
            </div>
            {block name='cart_summary__list'}
              <div class="accordion-collapse collapse show" id="cart-summary-product-list">
                <div class="cart-summary__products-list">
                  {foreach from=$cart.products item=product}
                    {include file='checkout/_partials/cart-summary-product-line.tpl' product=$product}
                  {/foreach}
                </div>
              </div>
            {/block}
            <a class="pe-md-0" id="top_shoppingcart_link_to_checkout" rel="nofollow" href="{$cart_url}" aria-label="{l s='(%d products)' d='Shop.Theme.Checkout' sprintf=[$cart.products_count]}">
            {l s='Proceed to checkout' d='Shop.Theme.Catalog'}</span>
            </a>
          </div>
        {else}
          <p class="motion-collapse__empty">{l s='There are no more items in your cart' d='Shop.Theme.Checkout'}</p>
        {/if}
      </div>
    </div>
  </div>
</div>
