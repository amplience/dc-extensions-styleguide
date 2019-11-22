---
name: Colors
category: Variables
---

Dynamic Content follows a blue color scheme `#039be5` with bright green & pink for validation colors.
Text, backgrounds and figures within the app use a range of black and greys. Colors used within the app are shown below. We have included some CSS variables for you to use in your own projects.

- `--color-primary`: primarily be used for call to actions, and grabbing attention for an action.
- `--color-primary-light`: normally used to accent the primary color in cases such as hover actions.
- `--color-valid-green`: used to denote that an action has been successful or an item is valid.
- `--color-error-red`: used mostly to indicate that items are invalid or that an action has failed


### Usage is as follows:
```
:root {
  --color-primary: #039be5;
}

.example-class {
  background-color: var(--color-primary);
}

```

```colors.html hidden
<div class="colors">
</div>
```

```colors.css
:root {
  --color-primary: #039be5;
  --font-family: 'Roboto', sans-serif;
  --color-primary-light: #1ab0f9;
  --color-rolling-stone: #808080;
  --color-grey-disabled: #e5e5e5;
  --color-grey-background: #f5f5f5;
  --color-black-background: rgba(33,33,33,0.6);
  --color-grey-text-disabled: #bfbfbf;
  --color-valid-green: #7ed900;
  --color-error-red: #ff3366;
  --color-default-text: #333333;
  --color-black: #17202c;
  --color-white: #fff;
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
    'color-default-text',
    'color-black'
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

.color-default-text, .color-black h4 {
  color: white;
}

.colors div {
  margin: 10px;
  min-width: 18%;
  flex: 1;
  text-align: center;
  position: relative;
}

.colors h4 {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 75%;
    transform: translate(-50%, -50%);
    margin: 0;
}

.colors div:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

@media (max-width: 1000px) {
  .colors div {
    min-width: 15%;   
    font-size: 14px;
  }
}
@media (max-width: 800px) {
  .colors div {
    min-width: 15%;   
  }
}

@media (max-width: 700px) {
  .colors div {
    width: 35%;   
    min-width: 35%;
    font-size: 12px;
  }
}
```
