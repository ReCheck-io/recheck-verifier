<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header"></slot>
      </header>
      <section class="modal-body">
        <slot name="body"></slot>
      </section>
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
  background-color: rgba(0, 0, 0, 0.719);
  z-index: 999;
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
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-size: 14px;
  border-radius: 8px;
}

.modal-header,
.modal-footer {
  padding: 12px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
}

.svg_result {
  margin: 0;
  padding: 0;
  justify-content: center;
  /* box-shadow: 0 2px 1px rgba(0, 0, 0, 0.1); */
}

.result_svg {
  flex: 1 1 20%;
  align-items: flex-end;
}

.result_title {
  flex: 1 1 60%;
  text-align: center;
}

.result_blank {
  flex: 1 1 20%;
}

h2 {
  margin-left: auto;
  margin-right: auto;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: center;
  padding: 0;
  font-size: 12px;
}

.modal-body {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 26px 0;
}

.modal p {
  display: flex;
}

.modal-text {
  width: 80%;
}

.modal-info {
  font-weight: bold;
  width: 20%;
  padding-left: 3%;
}

.btn-close {
  width: 20%;
  display: flex;
  justify-content: center;
  margin: 12px 0;
  outline: 0;
  border: none;
  font-size: 14px;
  font-weight: bold;
  padding: 0.65em 2em;
  background-color: #04558a;
  border: 1px solid rgba(0, 40, 65, 0.9);
  color: white;
  cursor: pointer;
  border-radius: 8px;
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
  border-radius: 0.5rem;
}
.downloadbtn:hover {
  background-color: #001d31;
}

@media (max-width: 768px) {
  .downloadbtn {
    width: 100%;
  }

  .modal {
    height: 90%;
    width: 90%;
    overflow: scroll;
  }
}
</style>
