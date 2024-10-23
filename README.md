# A popup service for Vue.js

**vue-popup** enables dynamic popup creation in Vue.js applications.

## Features

- **Dynamic Popups**: Custom headers and bodies.
- **Promise-based**: Handle outcomes easily with promises.
- **Custom Buttons**: Tailor button text.

## Installation

```bash
npm install @your-vue-project/popup-service
```

## Usage
```javascript
PopupService.show({
  header: 'Confirm',
  body: 'Proceed?',
  cancelBtnLabel: 'Nope',
  confirmBtnLabel: 'Yep'
}).then(result => {
    if(result) {
        console.log("yep!")
    } else {
        console.log("nope!")
    }
});
```
You can also set body and headers with HTML

```javascript
    import { h } from 'vue'

    PopupService.show({
        header: h('h1', 'This is the header'),
        body: [
          h('h1', 'This is the body with a list'),
          h('ul', [
            h('li', 'Item 1'),
            h('li', [
              'Item 2',
              h('ul', [
                h('li', 'Subitem 2.1'),
                h('li', 'Subitem 2.2')
              ])
            ]),
            h('li', 'Item 3')
          ])
        ],
    }).then(response => {
        console.log(response)
    })
```

## License
ISC