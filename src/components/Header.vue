<template>
  <header class="header">
    <div class="container">
      <a href="/" class="logo"
        ><img src="../assets/recheck.png" class="logoImg" />Transaction
        Verifier</a
      >
      <!-- 
      <label class="toggle">
        <input
          type="checkbox"
          name="networkToggle"
          class="toggle-checkbox"
          @change="
            handleChange($event);
            toggleClass('right-active');
          "
        />
        <div class="toggle-switch">
          <span class="toggle-label-eth">ETHEREUM</span>
          <span class="toggle-label-ae">AETERNITY</span>
          <span class="toggle-label-media"
            ><img src="../assets/eth.svg" class="ethLogo"
          /></span>
          <span class="toggle-label-media"
            ><img src="../assets/ae.svg" class="aeLogo"
          /></span>
        </div>
      </label> -->
      <div>
        <!-- <label class="typo__label">Please select action type </label>   -->
        <multiselect
          v-model="currentNetwork"
          placeholder="Search..."
          label="title"
          track-by="title"
          :options="options"
          :option-height="104"
          :custom-label="customLabel"
          :show-labels="false"
          :allow-empty="false"
          :max-height="300"
          @input="onChange"
        >
          <template slot="singleLabel" slot-scope="props">
            <span class="option__desc">
              <span class="option__title"> {{ props.option.title }} </span>
              <img class="option__image" :src="props.option.img" alt="" />
            </span>
          </template>
          <template slot="option" slot-scope="props">
            <div class="option__desc">
              <span class="option__title">{{ props.option.title }}</span>
              <img class="option__image" :src="props.option.img" alt="" />
              <!-- <span class="option__small">{{ props.option.desc }}</span> -->
            </div>
          </template>
        </multiselect>
        <!-- <pre class="language-json"><code>{{ value.title  }}</code></pre> -->
      </div>
    </div>
  </header>
</template>

<script>
import { eventBus } from "../main.js";
import Multiselect from "vue-multiselect";

export default {
  name: "Header",
  components: { Multiselect },
  data() {
    return {
      currentNetwork: {
        title: "ethereum",
        desc: "Shared with someone!",
        img: "./eth.svg",
        currentNetwork: "eth"
      },
      options: [
        {
          title: "ethereum",
          desc: "Shared with someone!",
          img: "./eth.svg",
          currentNetwork: "eth"
        },
        {
          title: "aeternity",
          desc: "Uploaded in chain!",
          img: "./ae.svg",
          currentNetwork: "ae"
        }
      ]
    };
  },

  methods: {
    customLabel({ title, desc }) {
      return `${title} – ${desc}`;
    },
    onChange() {
      eventBus.$emit("networkChange", this.currentNetwork.currentNetwork);
      console.log("ssss", this.currentNetwork.currentNetwork);
    },
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

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>
.multiselect {
  width: 150px;
  margin: 0;
}

.header {
  width: 100%;
  height: 50px;
  display: flex;
  /* margin-bottom: 32px; */
  background-color: rgba(0, 89, 145, 0.9);
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
  color: #fff;
  text-decoration: none;
  font-weight: 600;
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
  background: rgba(204, 204, 204, 0.842);
  border-radius: 16px;
  width: 180px;
  height: 32px;
  position: relative;
  vertical-align: middle;
  transition: background 0.25s;
}
.toggle-switch:before,
.toggle-switch:after {
  content: "";
}
.toggle-switch:before {
  display: block;
  background: #89ca02;
  border-radius: 12px;
  box-shadow: 0 0 0 1px rgba(0, 89, 145, 0.9);
  width: 85px;
  height: 24px;
  position: absolute;
  top: 4px;
  left: 4px;
  transition: left 0.6s;
}
/* .toggle:hover .toggle-switch:before {
  background: linear-gradient(to bottom, #fff 0%, #fff 100%);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
} */

.toggle-checkbox:checked + .toggle-switch:before {
  left: 90px;
}

.toggle-checkbox {
  position: absolute;
  visibility: hidden;
}
.toggle-label-eth {
  color: white;
  /* margin: 0 7px; */
  position: relative;
  /* top: 2px; */
  font-weight: 600;
  font-size: 12px;
  opacity: 1;
  transition: opacity 0.6s ease-in-out;
}

.toggle-label-ae {
  color: rgb(85, 81, 81);
  /* margin: 0 7px; */
  position: relative;
  /* top: 2px; */
  padding-left: 12px;
  font-weight: 500;
  font-size: 12px;
  opacity: 0.5;
  transition: opacity 0.6s ease-in-out;
}

.toggle-label-eth.right-active {
  color: rgb(85, 81, 81);
  /* margin: 0 7px; */
  position: relative;
  /* top: 2px; */
  font-weight: 500;
  font-size: 12px;
  opacity: 0.5;
  transition: opacity 0.6s ease-in-out;
}

.toggle-label-ae.right-active {
  color: white;
  /* margin: 0 7px; */
  position: relative;
  /* top: 2px; */
  font-weight: 600;
  font-size: 12px;
  opacity: 1;
  transition: opacity 0.6s ease-in-out;
}

.toggle-label-media {
  display: none;
}

.logoImg {
  position: relative;
  top: 3px;
  width: 24px;
  height: 24px;
  vertical-align: bottom;
}

@media (max-width: 768px) {
  .multiselect {
    width: 130px;
    margin: 8px 0 0 0;
  }

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

  .logoImg {
    position: relative;
    top: 3px;
    width: 20px;
    height: 20px;
  }

  .logo {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-size: 14px;
  }

  .ethLogo {
    width: 22px;
    height: auto;
    position: relative;
    top: 1px;
    left: -4px;
  }

  .aeLogo {
    width: 24px;
    height: auto;
    position: relative;
    top: 1px;
    /* left: 2px; */
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
