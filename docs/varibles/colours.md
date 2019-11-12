---
name: Colors
category: Varibles
---

Key colors used to stay on brand with Ampliences current branding

```colors.html hidden
<div class="colors">
</div>
```

```colors.css
:root {
  --color-primary: #039be5;
  --color-primary-light: #1ab0f9;
  --color-rolling-stone: #808080;
  --color-grey-disabled: #e5e5e5;
  --color-grey-text-disabled: #bfbfbf;
  --color-valid-green: #7ed900;
  --color-error-red: #ff3366;
  --color-default-text: #333333;
  --color-black: #17202c;
  --color-white: #fff
}
```

```colors.js hidden
  const container = document.querySelector('.colors');
  const colors = [
    'color-primary',
    'color-primary-light',
    'color-valid-green',
    'color-error-red',
    'color-rolling-stone',
    'color-grey-disabled',
    'color-grey-text-disabled',
    'color-default-text'
  ]

  container.innerHTML = colors.reduce((acc, color) => {
    const hex = getComputedStyle(container).getPropertyValue(`--${color}`) || '';
    const html = `
      <div class="${color}" style="background-color: var(--${color})">
        <h4>${color} <br> ${hex}</h4>
      </div>
    `
    return `${acc} ${html}`
  }, ``)
```

```colors.css hidden
.colors {
  display: flex;
  flex-wrap: wrap;
}

.color-default-text h4 {
  color: white;
}

.colors div {
  margin: 10px;
  min-width: 20%;
  flex: 1;
  text-align: center;
  position: relative;
}

.colors h4 {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 30%;
    width: 50%;
    margin: -15% 0 0 -25%;;
}

.colors div:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
```
