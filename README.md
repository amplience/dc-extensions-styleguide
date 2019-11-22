# Dynamic Content Extensions Styleguide

### Dev mode:

```bash
    $ npm start
```

### To Build the project

```
    $ npm run build
```

### Example documentaion

Create a css file in /styles/ gulp will process format and allow for importing in .md with `/css/<name>.css`

```
    ---
    name: Layout
    category: Varibles
    ---

    Text about the item

    ```button.html
    <section>
      I'm a section
    </section>
    ```
    ```button:/css/button.css
    ```
```
