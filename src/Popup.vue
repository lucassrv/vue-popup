<!-- Modal.vue -->
<template>
    <transition name="modal">
      <div class="modal-mask" v-if="isOpen">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header"></slot>
            </div>
            <div class="modal-body">
                <slot name="body"></slot>
            </div>
            <div class="modal-footer">
              <button v-if="cancelBtnLabel" class="modal-button" @click="cancel">{{ cancelBtnLabel }}</button>
              <button v-if="confirmBtnLabel" class="modal-button" @click="confirm">{{ confirmBtnLabel }}</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
</template>

<script>
  export default {
    name: 'Modal',
    props: {
        header: String,
        body: String,
        onCancel: Function,
        cancelBtnLabel: String,
        onConfirm: Function,
        confirmBtnLabel: String,
    },
    data() {
      return {
        isOpen: true,
      };
    },
    methods: {
      cancel() {
        this.isOpen = false;
        this.onCancel();
      },
      confirm() {
        this.isOpen = false;
        this.onConfirm();
      },
    },
  };
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: var(--bs-modal-zindex);
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}

.modal-container {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  padding: 20px;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding: 5px 10px;
  border-bottom: 1px solid #e9ecef;

}

.modal-body {
  margin: 20px 10px;
  position: relative;
  flex: 1 1 auto;
  padding: var(--bs-modal-padding);
}

.modal-footer {
  padding-top: 5px;
  border-top: 1px solid #e9ecef;
  text-align: right;
  position: relative;
  top: 50%;
}

.modal-enter-active, .modal-leave-active {
  transition: opacity .5s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;
}

.modal-button {
  cursor: pointer;
  border: 1px solid #e9ecef;
  border-radius: 2px;
  background-color: #ffffff;
  margin: 10px;
  padding: 10px;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}
</style>