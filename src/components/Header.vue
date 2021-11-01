<template>
  <header class="header">
    <div class="container">
      <a href="/" class="logo">
        <img src="../assets/recheck.png" class="logoImg" />
        <span>Transaction verifier</span>
      </a>
      <label class="toggle">
        <input
          type="checkbox"
          name="networkToggle"
          class="toggle-checkbox"
          checked
          @change="
            handleChange($event);
            toggleClass('right-active');
          "
        />
        <div class="toggle-switch">
          <span class="toggle-label-ae">AETERNITY</span>
          <span class="toggle-label-eth right-active">ETHEREUM</span>
          <span class="toggle-label-media">
            <img src="../assets/ae.svg" class="aeLogo" />
          </span>
          <span class="toggle-label-media">
            <img src="../assets/eth.svg" class="ethLogo" />
          </span>
        </div>
      </label>
    </div>
  </header>
</template>

<script>
import { eventBus } from "../main.js";

export default {
  name: "Header",

  methods: {
    handleChange(e) {
      eventBus.$emit("networkChange", e.target.checked);
    },
    toggleClass(newClass) {
      document.querySelector(".toggle-label-ae").classList.toggle(newClass);
      document.querySelector(".toggle-label-eth").classList.toggle(newClass);
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 50px;
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

.toggle {
  cursor: pointer;
  display: inline-block;
}
.toggle-switch {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 9px;
  background-color: rgba(204, 204, 204, 0.842);
  border-radius: 16px;
  width: 180px;
  height: 32px;
  position: relative;
  vertical-align: middle;
  transition: background-color 0.25s;
}
.toggle-switch:before,
.toggle-switch:after {
  content: "";
}
.toggle-switch:before {
  display: block;
  background: #57b440;
  border-radius: 12px;
  box-shadow: 0 0 0 1px rgba(0, 89, 145, 0.9);
  width: 85px;
  height: 24px;
  position: absolute;
  top: 4px;
  left: 4px;
  transition: left 0.6s;
}

.toggle-checkbox:checked + .toggle-switch:before {
  left: 90px;
}

.toggle-checkbox {
  position: absolute;
  visibility: hidden;
}

.toggle-label-ae,
.toggle-label-eth {
  color: rgb(85, 81, 81);
  position: relative;
  font-weight: 600;
  font-size: 12px;
  opacity: 0.6;
  transition: opacity 0.6s ease-in-out;
}

.toggle-label-ae {
  padding-right: 10px;
}

.right-active {
  opacity: 1;
  color: white;
  position: relative;
  font-weight: 600;
  font-size: 12px;
  transition: opacity 0.6s ease-in-out;
}

.toggle-label-media {
  display: none;
}

@media (max-width: 768px) {
  .container {
    padding: 0 8px;
  }

  .toggle-label-media {
    display: inline-block;
    color: white;
    margin: 0 7px;
    position: relative;
    font-weight: bold;
    font-size: 12px;
  }

  .ethLogo {
    width: 22px;
    height: auto;
    position: relative;
    top: 1px;
  }

  .aeLogo {
    width: 24px;
    height: auto;
    position: relative;
    top: 1px;
    left: -5px;
  }

  .toggle-switch {
    width: 100px;
    height: 32px;
  }

  .toggle-switch:before {
    width: 45px;
  }

  .toggle-checkbox:checked + .toggle-switch:before {
    left: 50px;
  }
}
</style>
