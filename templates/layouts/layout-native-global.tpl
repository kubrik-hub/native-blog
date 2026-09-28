{**
 * For the full copyright and license information, please view the
 * LICENSE.md file that was distributed with this source code.
 *}
{include file='_partials/helpers.tpl'}

<!doctype html>
<html lang="{$language.locale}">
  <head>
    {block name='head'}
      {include file='_partials/head.tpl'}
    {/block}
  </head>

  <body id="{$page.page_name}" class="{$page.body_classes|classnames} native-global-layout">
    {block name='top_content'}
      <div id="back-to-top"></div>
    {/block}

    {block name='skip_to_main_content'}
      <a class="visually-hidden-focusable btn btn-primary skip-link" href="#main-content">{l s='Skip to main content' d='Shop.Theme.Global'}</a>
    {/block}

    {block name='hook_after_body_opening_tag'}
      {hook h='displayAfterBodyOpeningTag'}
    {/block}

    {block name='product_activation'}
      {include file='catalog/_partials/product-activation.tpl'}
    {/block}

    <div class="native-global-layout__page">
      <aside class="native-global-layout__left">
        <div class="native-global-layout__left-content">
          <div class="native-global-layout__top">
            {hook h='displayTop'}
          </div>

          <div class="native-global-layout__right-column">
            {hook h='displayRightColumn'}
          </div>
        </div>

        {capture name='footer_before'}{hook h='displayFooterBefore'}{/capture}
        {capture name='footer_main_bottom'}{hook h='displayFooterAfter'}{/capture}

        <div class="native-global-layout__left-footer">
          {if $smarty.capture.footer_before}
            {$smarty.capture.footer_before nofilter}
          {/if}
          {if $smarty.capture.footer_main_bottom}
            {$smarty.capture.footer_main_bottom nofilter}
          {/if}
        </div>
      </aside>

      <main id="wrapper" class="native-global-layout__main wrapper">
        {hook h='displayWrapperTop'}

        {block name='main_content'}
          <div id="main-content"></div>
        {/block}

        {block name='notifications'}
          {include file='_partials/notifications.tpl'}
        {/block}

        <div class="native-global-layout__nav">
          <div class="native-global-layout__nav-item native-global-layout__nav-item--left">
            {hook h='displayNav1'}
          </div>
          <div class="native-global-layout__nav-item native-global-layout__nav-item--right">
            {hook h='displayNav2'}
          </div>
        </div>

        {block name='content_columns'}
          <div class="native-global-layout__content">
            {block name='left_column'}
              {if in_array($page.page_name, ['category', 'best-sales', 'new-products', 'prices-drop', 'manufacturer', 'supplier', 'search', 'contact'])}
                <aside id="left-column" class="native-global-layout__left-column">
                  {if $page.page_name === 'product'}
                    {hook h='displayLeftColumnProduct'}
                  {else}
                    {hook h='displayLeftColumn'}
                  {/if}
                </aside>
              {/if}
            {/block}

            {block name='content_wrapper'}
              <div id="center-column" class="center-column page native-global-layout__center">
                {hook h='displayContentWrapperTop'}
                {block name='content'}
                  <p>Hello world! This is HTML5 Boilerplate.</p>
                {/block}
                {hook h='displayContentWrapperBottom'}
              </div>
            {/block}
          </div>
        {/block}

        {hook h='displayWrapperBottom'}

        {capture name='footer_main_top'}{hook h='displayFooter'}{/capture}
        {capture name='footer_main_bottom'}{hook h='displayFooterAfter'}{/capture}

        <footer id="footer" class="native-global-layout__footer">
          {if $smarty.capture.footer_main_top}
            <div class="native-global-layout__footer-top">
              {$smarty.capture.footer_main_top nofilter}
            </div>
          {/if}
          {if $smarty.capture.footer_main_bottom}
            <div class="native-global-layout__footer-bottom">
              {$smarty.capture.footer_main_bottom nofilter}
            </div>
          {/if}
        </footer>
      </main>
    </div>

    {block name='javascript_bottom'}
      {include file='_partials/javascript.tpl' javascript=$javascript.bottom}
    {/block}

    {block name='bottom_elements'}
      {include file='components/page-loader.tpl'}
      {include file='components/toast-container.tpl'}
      {include file='components/password-policy-template.tpl'}
    {/block}

    {block name='hook_before_body_closing_tag'}
      {hook h='displayBeforeBodyClosingTag'}
    {/block}

    {block name='modal_container'}
      <div data-ps-target="modal-container">
        {capture name="modal_content"}{hook h='displayModalContent'}{/capture}
        {if $smarty.capture.modal_content}
          {$smarty.capture.modal_content nofilter}
        {/if}
      </div>
    {/block}

    {block name='back_to_top'}
      <a class="visually-hidden-focusable btn btn-primary back-to-top-link" href="#back-to-top">{l s='Back to top' d='Shop.Theme.Global'}</a>
    {/block}
  </body>
</html>
