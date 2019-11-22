---
name: Inputs
category: Components
---
If your extension includes input controls, then you can follow our styling by specifying a solid border and by using color to indicate:

- an invalid value has been entered
- the item is disabled and cannot be used to input data
 
#### States:
- `.ampx-input__container` Default: displays focus.
- `.ampx-input__container .ampx-input__container--error` Error: indicates an error by setting the border color and showing error text
- `.ampx-input__container .ampx-input__container--disabled` Disabled: makes the item slightly less visible to indicate that it is disabled and cannot be used to input data

An input item requires a title but the description is optional. It can be used with `[type=text]` and `[type=number]`.

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
