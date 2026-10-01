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

  <body id="{$page.page_name}" class="{$page.body_classes|classnames} motion-theme">
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

    {* MOTION LAYOUT : column 1 (main footer + nav1) + fixed column 2 (logo, icons, top, right column, footer after) + content column (nav2, content, footer before) *}
    <div class="motion-shell" id="motion-shell">

      {block name='header'}
        <header id="header" class="header motion-header">
          {include file='_partials/header.tpl'}
        </header>
      {/block}


      <div id="motion-content" class="motion-content">

        <main id="wrapper" class="wrapper">

            {capture name="nav_full_width"}{hook h='displayNavFullWidth'}{/capture}
            {if !empty($smarty.capture.nav_full_width)}
              <div class="header-nav-full-width">{$smarty.capture.nav_full_width nofilter}</div>
            {/if}
          
            {capture name="motion_nav_2"}{hook h='displayNav2'}{/capture}
            {include file='_partials/motion-debug.tpl' zone='displayNav2' html=$smarty.capture.motion_nav_2}
            {block name='motion_nav_2'}
              {if !empty($smarty.capture.motion_nav_2)}
                <div class="motion-nav2">
                  {$smarty.capture.motion_nav_2 nofilter}
                </div>
              {/if}
            {/block}


            {hook h='displayWrapperTop'}

            {block name='breadcrumb'}
              {include file='_partials/breadcrumb.tpl'}
            {/block}

            {block name='main_content'}
              {* This is the main content anchor used for accessibility. *}
              <div id="main-content"></div>
            {/block}

            {block name='notifications'}
              {include file='_partials/notifications.tpl'}
            {/block}

            {block name='content_columns'}
              <div class="{block name='container_class'}columns-container container-fluid{/block}">
                {block name='left_column'}
                  {* DisplayLeftColumn : product list pages (rendered by category-header.tpl) and contact page only *}
                  {if $page.page_name === 'contact'}
                    <div id="left-column" class="motion-left-column">
                      {hook h='displayLeftColumn'}
                      {hook h='displayContactLeftColumn'}
                    </div>
                  {/if}
                {/block}

                {block name='content_wrapper'}
                  <div id="center-column" class="center-column page page--full-width">
                    {hook h='displayContentWrapperTop'}
                    {block name='content'}
                      <p>Hello world! This is HTML5 Boilerplate.</p>
                    {/block}
                    {hook h='displayContentWrapperBottom'}
                  </div>
                {/block}
                {block name='right_column'}{/block}
              </div>
            {/block}

            {hook h='displayWrapperBottom'}
        </main>

        {block name='footer'}
          <footer id="footer" class="footer motion-footer">
            {include file='_partials/footer.tpl'}
          </footer>
        {/block}
      </div>
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
