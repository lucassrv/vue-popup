# PopupService for Vue.js

**PopupService** enables dynamic popup creation in Vue.js applications.

## Features

- **Dynamic Popups**: Custom headers, bodies, and actions.
- **Promise-based**: Handle outcomes easily with promises.
- **Custom Buttons**: Tailor button text.

## Installation

```bash
npm install @your-vue-project/popup-service
```

## Usage
```javascript
import PopupService from '@your-vue-project/popup-service';

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

## License
ISC