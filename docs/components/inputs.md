---
name: Inputs
category: Components
---
If you want to include some inputs in your custom extension you can follow our styling by having a solid border and visual cues in color


#### States:
- `.ampx-input__container` Default: displays focus.
- `.ampx-input__container .ampx-input__container--error` Error: denotes error with border and description text.
- `.ampx-input__container .ampx-input__container--disabled` Disabled: can't input data and is slightly less visible.


A input requires a title but a description is optional. Can be used with `[type=text]` and `[type=number]`.

```input-default.html
<div class="ampx-input__container">
  <label class="ampx-input__label">Default number input</label>
  <input class="ampx-input" type="number"/>
  <label class="ampx-input__description">description</label>
</div>

<div class="ampx-input__container ampx-input__container--disabled">
  <label class="ampx-input__label">Input disabled</label>
  <input class="ampx-input" type="text"/>
  <label class="ampx-input__description">description</label>
</div>

<div class="ampx-input__container ampx-input__container--error">
  <label class="ampx-input__label">Input with error</label>
  <input class="ampx-input" type="text"/>
  <label class="ampx-input__description">description</label>
</div>
```
```input-default:/css/inputs.css

```
