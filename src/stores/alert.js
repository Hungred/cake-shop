import { defineStore } from 'pinia';

const noop = () => {};

export const useAlert = defineStore('alert', {
  state: () => ({
    visible: false,
    title: '',
    content: '',
    type: '', //'success' | 'error' | 'warning' | 'confirm'
    confirmText: '',
    cancelText: '',
    onConfirm: noop,
    onCancel: noop,
  }),
  actions: {
    show(payload) {
      this.title = payload.title;
      this.content = payload.content;
      this.type = payload.type;
      this.confirmText = payload.confirmText ?? '';
      this.cancelText = payload.cancelText ?? '';
      this.onConfirm = payload.onConfirm ?? noop;
      this.onCancel = payload.onCancel ?? noop;
      this.visible = true;
    },
    close() {
      this.visible = false;
      this.onConfirm = noop;
      this.onCancel = noop;
    },
  },
});
