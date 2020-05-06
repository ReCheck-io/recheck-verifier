<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          This is the default title
        </slot>
        <button type="button" class="btn-close" @click="close">
          x
        </button>
      </header>
      <section class="modal-body">
        <slot name="body">
          I'm the default body!
        </slot>
      </section>
      <footer class="modal-footer">
        <slot name="footer">
          <p>ReCheck BV</p>
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
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-wrap: break-word;
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
  font-size: 14px;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header h3 {
  margin: 0;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #002b49;
  justify-content: space-between;
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
  padding: 26px;
}

.btn-close {
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #002b49;
  background: transparent;
}

.btn-green {
  color: white;
  background: #002b49;
  border: 1px solid #002b49;
  border-radius: 2px;
}

.downloadbtn {
  align-self: flex-end;
  width: 30%;
  outline: 0;
  border: none;
  font-weight: bold;
  background: #e0e1e2 none;
  padding: 0.65em 0.9em 0.65em;
  min-height: 24px;
  background-color: #002b49;
  color: #fff;
  cursor: pointer;
  border-radius: 0.5rem;
}

@media (max-width: 768px) {
  .downloadbtn {
    width: 100%;
  }

  .modal {
    height: 90%;
    width: 90%;
  }
}
</style>
