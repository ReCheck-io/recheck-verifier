<template>
  <header class="header">
    <div class="container">
      <a href="/" class="logo">
        <img src="../assets/recheck.png" class="logoImg" />
        <span>Transaction verifier</span>
      </a>

      <multiselect
        v-model="networkOption"
        label="title"
        track-by="title"
        :options="networkOptions"
        :option-height="100"
        :custom-label="customLabel"
        :show-labels="false"
        :allow-empty="false"
        :max-height="200"
        class="network-selector"
        @select="handleChange($event)"
      >
        <template slot="singleLabel" slot-scope="props">
          <span class="option__desc">
            <span class="option__title"> {{ props.option.title }} </span>
          </span>
        </template>
        <template slot="option" slot-scope="props">
          <div class="option__desc">
            <span class="option__title">{{ props.option.title }}</span>
            <img
              class="option__image"
              :src="props.option.img"
              alt=""
              style="max-height:20px"
            />
          </div>
        </template>
      </multiselect>
    </div>
  </header>
</template>

<script>
import Multiselect from "vue-multiselect";
import { eventBus } from "../main.js";

export default {
  name: "Header",

  components: { Multiselect },

  data() {
    return {
      networkOption: { title: "Avalanch", network: "avax", img: "./avax.svg" },

      networkOptions: [
        { title: "Avalanch", network: "avax", img: "./avax.svg" },
        { title: "Polygon", network: "poly", img: "./poly.svg" },
        { title: "Ethereum", network: "eth", img: "./eth.svg" },
        { title: "Aeternity", network: "ae", img: "./ae.svg" }
      ]
    };
  },

  methods: {
    customLabel: ({ title }) => title,
    handleChange(e) {
      eventBus.$emit("networkChange", e.network);
    },
    toggleClass(newClass) {
      document.querySelector(".toggle-label-ae").classList.toggle(newClass);
      document.querySelector(".toggle-label-eth").classList.toggle(newClass);
      document.querySelector(".toggle-label-poly").classList.toggle(newClass);
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 58px;
  display: flex;
  background-color: #04558a;
}

.container {
  flex: 1 1 100%;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  color: #dee9f1;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logoImg {
  width: 28px;
  height: 28px;
  position: relative;
  margin-right: 12px;
}

.network-selector {
  min-width: 240px;
  max-width: 240px;
  display: block;
  width: 100%;
}

@media (max-width: 768px) {
  .container {
    padding: 0 8px;
  }

  .network-selector {
    min-width: 140px;
    max-width: 140px;
  }
}

@media (max-width: 360px) {
  .header {
    height: 100px;
    display: flex;
    flex-direction: column;
  }

  .header > * {
    align-items: center;
    justify-content: center;
  }

  .header .network-selector {
    min-width: 160px;
  }
}
</style>
