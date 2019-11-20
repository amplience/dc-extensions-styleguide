---
name: Typography
category: Variables
---

Dynamic Content uses Roboto, you can include it in your project like so:
```typography
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700&amp;display=swap">
```

Text color for standard text should be `--color-default-black` / `#333333`.

#### For usages in the form:

- `.ampx-heading`: Should be used for the main header in an extension. 
- `.ampx-subheading-large`: Should be used for the main heading in a sub list or section 
- `.ampx-subheading`: Should be used for a heading in a sub list in a section 
- `.ampx-body`: Should be used for copy. 
- `.ampx-link`: Should be used for external links. 
- `.ampx-label`: Should be used for adding contextual information to an entity. 
- `.ampx-error`: Should be used for adding contextual information to an entity in an error state. 

```typography.html hidden
<h2 class="ampx-heading">.ampx-heading Regular 24px</h2>
<h3 class="ampx-subheading-large">.ampx-subheading-large Medium 20px</h3>
<p class="ampx-subheading">.ampx-subheading Regular 16px</p>
<p class="ampx-body">.ampx-body Regular 13px</p>
<a class="ampx-link">.ampx-link link</a>
<br>
<b>b. bold</b>
<br>
<i>i. italic</i>
<br>
<label class="ampx-label">.ampx-label label</label>
<br>
<label class="ampx-error">.ampx-error label</label>
```

```typography:/css/typography.css
```

#### Here an example of usage:

```typography-examples.html hidden
<h1 class="ampx-heading">Main Section</h1>

<p class="ampx-body">Lorem ipsum dolor sit amet, <b>onsectetur</b> adipiscing elit, sed do <i>eiusmod tempor incididunt ut labore et</i> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<h3 class="ampx-subheading-large">Section</h1>

<h3 class="ampx-subheading">Sub Section</h1>
<p class="ampx-body">Lorem ipsum dolor sit amet, <b>onsectetur</b> adipiscing elit, sed do <i>eiusmod tempor incididunt ut labore et</i> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
<h3 class="ampx-subheading">Sub Section</h1>
<p class="ampx-body">Lorem ipsum dolor sit amet, <b>onsectetur</b> adipiscing elit, sed do <i>eiusmod tempor incididunt ut labore et</i> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

```

```typography-examples:/css/typography.css
```
