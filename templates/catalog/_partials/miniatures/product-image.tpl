{**
 * For the full copyright and license information, please view the
 * LICENSE.md file that was distributed with this source code.
 *}
{block name='product_miniature_image'}
	<div class="{$componentName}__image-container thumbnail-container">
		<a href="{$product.url}" class="{$componentName}__image-link outline">
			<div class="product-hover-gallery">
				{foreach from=$product.images item=image key=key name=images}
					<img
					class="{$componentName}__image product-hover-slide {if $key == 0}active{/if}"
					src="{$image.bySize.default_md.url}"
					width="{$image.bySize.default_md.width}"
					height="{$image.bySize.default_md.height}"
					loading="lazy"
					alt="{$image.legend}"
					title="{$image.legend}"
					data-index="{$key}"
					data-full-size-image-url="{$image.bySize.home_default.url}"
					>
				{/foreach}
			</div>
		</a>
	</div>
{/block}