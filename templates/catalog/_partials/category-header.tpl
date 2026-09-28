{**
 * For the full copyright and license information, please view the
 * LICENSE.md file that was distributed with this source code.
 *}
<div id="js-product-list-header"  class="{if !empty($category.cover.bySize.category_cover.url)}category_with_cover{/if}" style="background:url({$category.cover.bySize.category_cover.url}) no-repeat center center">
  {if $listing.pagination.items_shown_from == 1}
    <div class="category__header">
      {include file='components/page-title-section.tpl' title=$category.name}

      {if $category.description}
        <div class="category__description rich-text">{$category.description nofilter}</div>
      {/if}
      {* include file='catalog/_partials/subcategories.tpl' subcategories=$subcategories|default:[] *}
    </div>
  {/if}
</div>
{hook h='displayLeftColumn'}
