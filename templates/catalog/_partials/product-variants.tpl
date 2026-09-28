{**
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *}

{if isset($groups) && $groups}
  <div class="product__variants js-product-variants">
    {foreach from=$groups key=id_attribute_group item=group}
      {if !empty($group.attributes)}
        {assign var=groupId value="group_{$id_attribute_group}_{$product.id}"}
        {assign var=legendId value="legend_{$id_attribute_group}_{$product.id}"}
        <fieldset class="product-variant">
          <legend class="form-label product-variant__legend" id="{$legendId}">
            {$group.name}
          </legend>
          <span class="selected-value product-variant__selected" aria-hidden="true">
            {l s=': ' d='Shop.Theme.Catalog'}
            {foreach from=$group.attributes key=id_attribute item=group_attribute}
              {if $group_attribute.selected}
                {$group_attribute.name}
              {/if}
            {/foreach}
          </span>
          <div class="product-variant__attributes">
            {if $group.group_type == 'select'}
              <div
                id="{$groupId}"
                class="product-variant__buttons"
                role="radiogroup"
                aria-labelledby="{$legendId}"
              >
                {foreach from=$group.attributes key=id_attribute item=group_attribute}
                  {assign var=inputId value="input_{$id_attribute_group}_{$id_attribute}_{$product.id}"}
                  <input
                    class="variant-button__input"
                    type="radio"
                    id="{$inputId}"
                    name="group[{$id_attribute_group}]"
                    value="{$id_attribute}"
                    data-product-attribute="{$id_attribute_group}"
                    {if $group_attribute.selected}
                      checked="checked"
                    {/if}
                  >
                  <label
                    class="variant-button__label"
                    for="{$inputId}"
                    data-value="{$id_attribute}"
                  >
                    {$group_attribute.name}
                  </label>
                {/foreach}
              </div>
            {elseif $group.group_type == 'color'}
              <div
                id="{$groupId}"
                class="product-variant__colors"
                role="radiogroup"
                aria-labelledby="{$legendId}"
              >
                {foreach from=$group.attributes key=id_attribute item=group_attribute}
                  {assign var=inputId value="input_{$id_attribute_group}_{$id_attribute}_{$product.id}"}
                  {assign var=labelId value="label_{$id_attribute_group}_{$id_attribute}_{$product.id}"}
                  <div class="product-variant__color input-color">
                    <input
                      class="input-color__input"
                      type="radio"
                      id="{$inputId}"
                      name="group[{$id_attribute_group}]"
                      value="{$id_attribute}"
                      data-product-attribute="{$id_attribute_group}"
                      aria-labelledby="{$labelId}"
                      {if $group_attribute.selected}
                        checked="checked"
                      {/if}
                    >
                    <label
                      class="input-color__label"
                      for="{$inputId}"
                    >
                      <span
                        id="{$labelId}"
                        {if $group_attribute.texture}
                          class="color texture"
                          style="background-image:url({$group_attribute.texture})"
                        {elseif $group_attribute.html_color_code}
                          class="color"
                          style="background-color:{$group_attribute.html_color_code}"
                        {/if}
                      >
                        <span class="visually-hidden">
                          {$group.group_name} - {$group_attribute.name}
                        </span>
                      </span>
                    </label>
                  </div>
                {/foreach}
              </div>
            {elseif $group.group_type == 'radio'}
              <div
                id="{$groupId}"
                class="product-variant__radios"
                role="radiogroup"
                aria-labelledby="{$legendId}"
              >
                {foreach from=$group.attributes key=id_attribute item=group_attribute}
                  {assign var=inputId value="input_{$id_attribute_group}_{$id_attribute}_{$product.id}"}
                  <div class="product-variant__radio form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      id="{$inputId}"
                      name="group[{$id_attribute_group}]"
                      value="{$id_attribute}"
                      data-product-attribute="{$id_attribute_group}"
                      {if $group_attribute.selected}
                        checked="checked"
                      {/if}
                    >
                    <label for="{$inputId}">
                      <span class="form-check-label">
                        {$group_attribute.name}
                      </span>
                    </label>
                  </div>
                {/foreach}
              </div>
            {/if}
          </div>
        </fieldset>
      {/if}
    {/foreach}
  </div>
{/if}