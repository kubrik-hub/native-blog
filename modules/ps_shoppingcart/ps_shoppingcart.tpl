{**
 * For the full copyright and license information, please view the
 * LICENSE.md file that was distributed with this source code.
 *}

<div id="_desktop_ps_shoppingcart" class="d-none d-md-flex">
  <div class="ps-shoppingcart">
    <div class="header-block d-flex align-items-center blockcart cart-preview {if $cart.products_count> 0}header-block--active{else}inactive{/if}" data-refresh-url="{$refresh_url}">
      {if $cart.products_count> 0}
        <a class="header-block__action-btn pe-md-0" rel="nofollow" href="{$cart_url}" aria-label="{l s='(%d products)' d='Shop.Theme.Checkout' sprintf=[$cart.products_count]}">
      {else}
        <span class="header-block__action-btn pe-md-0">
      {/if}
      <i class="material-icons header-block__icon" aria-hidden="true">&#xe54c;</i>
      {if $cart.products_count> 0}
        <i class="material-icons top_shoppingcart_indicator_to_checkout d-none d-md-flex" aria-hidden="true">&#xe5df;</i>
        <span class="header-block__numberproduct_mobile d-md-none d-flex">
          {l s='%d' d='Shop.Theme.Checkout' sprintf=[$cart.products_count]}
        </span>
      {/if}
      {if $cart.products_count> 0}
        </a>
      {else}
        </span>
      {/if}
      {if $cart.products_count> 0}
        <div class="cart-summary__products-accordion accordion accordion-flush accordion--small d-none d-md-block" id="cart-summary__products-accordion">
          <div class="accordion-header">
            <button     
                class="accordion-button collapsed"
                type="button"
                data-bs-target="#cart-summary-product-list"
                data-bs-toggle="collapse"
                aria-expanded="false">
                {l s='%d products' d='Shop.Theme.Checkout' sprintf=[$cart.products_count]} - {$cart.subtotals.products.value}
            </button>
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
          <a class="pe-md-0" id="top_shoppingcart_link_to_checkout" rel="nofollow" href="{$cart_url}" aria-label="{l s='(%d products)' d='Shop.Theme.Checkout' sprintf=[$cart.products_count]}"><i class="material-icons header-block__icon" aria-hidden="true">&#xe941;</i><span>{l s='Proceed to checkout' d='Shop.Theme.Catalog'}</span>
          </a>
        </div>
      {/if}
    </div>
  </div>
</div>
