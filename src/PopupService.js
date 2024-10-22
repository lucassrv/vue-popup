// PopupService.js
import { createApp, h, provide } from 'vue';
import Popup from './Popup.vue';

const PopupService = {
  show({
    header,
    body,
    cancelBtnLabel = "Cancel",
    confirmBtnLabel = "Confirm",
  }) {
    const container = document.createElement('div');
    document.body.appendChild(container);

    let closePopup = null;

    const app = createApp({
      render() {
        return h(Popup, {
          isOpen: true,
          header,
          body,
          cancelBtnLabel,
          confirmBtnLabel,
          onCancel: () => {
            closePopup(false);
          },
          onConfirm: () => {
            closePopup(true);
          },
        });
      },
      setup() {
        provide('closePopup', (result) => {
          closePopup = (resolveWith) => {
            resolveWith(result);
            app.unmount(container);
            document.body.removeChild(container);
          };
        });
      }
    });

    app.mount(container);

    return new Promise((resolve) => {
      closePopup = (result) => {
        resolve(result);
        app.unmount(container);
        if (document.body.contains(container)) {
          document.body.removeChild(container);
        }
      };
    });
  }
};

export default PopupService;