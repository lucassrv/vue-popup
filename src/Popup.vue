<!-- Modal.vue -->
<template>
    <transition name="modal">
      <div class="modal-mask" v-if="isOpen">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <button @click="cancel" class="close">x</button>
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
    mounted() {
      document.addEventListener("keydown", this.hitEscape);
    },
    beforeDestroy() {
      document.removeEventListener("keydown", this.hitEscape);
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
      hitEscape(event) {
        if (event.key === "Escape" || event.keyCode === 27) {
            this.cancel();
        }
      },
    },
  };
</script>
