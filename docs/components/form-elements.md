---
name: Inputs
category: Components
---
If you want to include some inputs in your custom extension you can follow our styling by having a solid border and visual cues in color

```input-default.html
<div class="ampx-input__container">
  <label class="ampx-input__label">Default input</label>
  <input class="ampx-input" type="text"/>
  <label class="ampx-input__description">description</label>
</div>

<div class="ampx-input__container" error>
  <label class="ampx-input__label">Input with error</label>
  <input class="ampx-input" type="text"/>
  <label class="ampx-input__description">description</label>
</div>

<div class="ampx-input__container" disabled>
  <label class="ampx-input__label">Input disabled</label>
  <input class="ampx-input" type="text" disabled/>
  <label class="ampx-input__description">description</label>
</div>
```
```input-default:/css/inputs.css

```
