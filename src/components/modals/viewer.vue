<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header"></slot>
      </header>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <footer class="modal-footer">
        <slot name="footer">
          <button type="button" class="btn-close" @click="close">
            CLOSE
          </button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "viewer",

  props: {
    isModalVisible: Boolean
  },

  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
  overflow-wrap: break-word;
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-size: 14px;
  border-radius: 4px;
}

.modal-header,
.modal-footer {
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
}

.modal-header h1,
.modal-header h2,
.modal-header h3 {
  margin: 0;
}

.modal-header svg {
  width: 24px;
  height: 24px;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: center;
  font-size: 12px;
}

.modal-body {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 26px 14px;
}

.modal p {
  font-size: 15px;
  line-height: 1.45;
}

.modal-body p span {
  font-size: 15px;
  font-weight: bold;
}

.btn-close {
  display: flex;
  min-width: 100px;
  justify-content: center;
  outline: 0;
  border: none;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 18px;
  background-color: #04558a;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}

.btn-close:hover {
  background-color: #004774;
}

.downloadbtn {
  position: absolute;
  right: 12px;
  bottom: 12px;
  width: 20%;
  outline: 0;
  border: none;
  font-weight: bold;
  background: #e0e1e2 none;
  padding: 0.5em 0.9em 0.65em 0.9em;
  min-height: 24px;
  background-color: #002b49;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
}

.downloadbtn:hover {
  background-color: #001d31;
}

@media (max-width: 768px) {
  .downloadbtn {
    width: 100%;
  }

  .modal {
    max-height: 90%;
    max-width: 90%;
    overflow: scroll;
  }
}
@media (max-width: 420px) {
  .modal-header .circle {
    width: 32px;
    height: 32px;
    margin-right: 12px;
  }
  .modal-header h2 {
    /* font-weight: 400; */
    font-size: 16px;
  }
}
</style>
