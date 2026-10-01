{**
 * MOTION THEME - header (3-column layout)
 *
 *  1. Column 1 (narrow, fixed)  : displayFooter (main footer) + displayNav1
 *                                 (off-canvas panel opened by the menu icon on tablet / mobile)
 *  2. Column 2 (fixed)          : logo, icons (menu / search / account / cart), displayTop, main menu,
 *                                 displayRightColumn, displayFooterAfter + copyright fixed at its bottom
 *  3. Column 3 (content)        : displayNav2 at the top, page content, displayFooterBefore at the bottom
 *                                 (see layouts/layout-both-columns.tpl and _partials/footer.tpl)
 *}
{capture name="motion_banner"}{hook h='displayBanner'}{/capture}
{if !empty($smarty.capture.motion_banner)}
  <div class="header-banner motion-banner">{$smarty.capture.motion_banner nofilter}</div>
{/if}

{* ============ 1. COLUMN 1 : main footer (scrolling) + displayNav1 (fixed at the bottom) ============ *}
<div id="motion-panel" class="motion-panel" aria-label="{l s='Main menu' d='Shop.Theme.Global'}" tabindex="-1">
  <div class="motion-panel__scroll">
    <button type="button" class="motion-panel__close js-motion-panel-toggle" aria-label="{l s='Close' d='Shop.Theme.Global'}">
      <i class="material-icons" aria-hidden="true">&#xE5CD;</i>
    </button>

    <div class="motion-panel__body">
      {capture name="motion_footer_main"}{hook h='displayFooter'}{/capture}
      {include file='_partials/motion-debug.tpl' zone='displayFooter' html=$smarty.capture.motion_footer_main}
      {if $smarty.capture.motion_footer_main|trim !== ''}
        <div class="footer footer__main motion-panel__footer-main">
          <div class="footer__main-top row">
            {$smarty.capture.motion_footer_main nofilter}
          </div>
        </div>
      {/if}
    </div>
  </div>
  {capture name="motion_nav_1"}{hook h='displayNav1'}{/capture}
  {include file='_partials/motion-debug.tpl' zone='displayNav1' html=$smarty.capture.motion_nav_1}
  {* displayNav1 : fixed at the very bottom of the panel (outside the scrolling body) *}
  {if $smarty.capture.motion_nav_1|trim !== ''}
    <div class="motion-panel__bottom">
      {$smarty.capture.motion_nav_1 nofilter}
    </div>
  {/if}
</div>

{* ============ 2. COLUMN 2 : logo, icons, displayTop, displayRightColumn, footer after + copyright ============ *}
<div id="motion-sidebar" class="motion-sidebar">
  <div class="motion-sidebar__scroll">
    <div class="motion-sidebar__logo">
      {if $shop.logo_details}
        {if $page.page_name == 'index'}<h1 class="motion-sidebar__h1 mb-0">{/if}
          {renderLogo}
        {if $page.page_name == 'index'}</h1>{/if}
      {/if}
    </div>

    {* Icons row + accordions. Modules hooked on displayTop (search, cart, account, main menu and any
       other module) are direct children of this flex container. *}
    {capture name="motion_top"}{hook h='displayTop'}{/capture}
    {include file='_partials/motion-debug.tpl' zone='displayTop' html=$smarty.capture.motion_top}
    <div id="motion-top" class="motion-top">
      <button
        type="button"
        class="motion-icon motion-icon--menu js-motion-panel-toggle"
        aria-controls="motion-panel"
        aria-expanded="false"
        aria-label="{l s='Open mobile menu' d='Shop.Theme.Menu'}"
      >
        <i class="material-icons motion-icon__open" aria-hidden="true">&#xE5D2;</i>
        <i class="material-icons motion-icon__close" aria-hidden="true">&#xE5CD;</i>
      </button>

      {$smarty.capture.motion_top nofilter}
    </div>

    {capture name="motion_right_column"}{hook h='displayRightColumn'}{/capture}
    {include file='_partials/motion-debug.tpl' zone='displayRightColumn' html=$smarty.capture.motion_right_column}
    {if $smarty.capture.motion_right_column|trim !== ''}
      <div id="motion-right-column" class="motion-sidebar__right">
        {$smarty.capture.motion_right_column nofilter}
      </div>
    {/if}
  </div>

  <div class="motion-sidebar__bottom">
    {capture name="motion_footer_after"}{hook h='displayFooterAfter'}{/capture}
    {include file='_partials/motion-debug.tpl' zone='displayFooterAfter' html=$smarty.capture.motion_footer_after}
    {if !empty($smarty.capture.motion_footer_after)}
      <div class="motion-sidebar__footer-after footer__main-bottom">
        {$smarty.capture.motion_footer_after nofilter}
      </div>
    {/if}
    {include file='_partials/copyright.tpl'}
  </div>
</div>

<div class="motion-overlay js-motion-overlay"></div>
