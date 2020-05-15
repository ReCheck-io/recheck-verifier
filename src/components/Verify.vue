<template>
  <div class="wrap">
    <Timeline />
    <div class="content">
      <div id="container" @dragover.prevent @drop.prevent>
        <form action="">
          <div class="dropbox" @drop="handleFileDrop">
            <img src="../assets/file.svg" alt="" />
            <input
              type="file"
              multiple
              id="file-upload"
              placeholder="upload file"
              @change="handleFileInput"
            />
            <p v-if="file.name">
              {{ file.name }}
            </p>
            <p v-else>
              Click to add file
              <span class="dragFileMsg"> or drag it here</span>
            </p>
          </div>
          <div>
            <!-- <label class="typo__label">Please select action type </label> -->
            <multiselect
              v-model="actionType"
              placeholder="Please select action type"
              label="title"
              track-by="title"
              :options="options"
              :option-height="104"
              :custom-label="customLabel"
              :show-labels="false"
              :allow-empty="false"
              :max-height="200"
            >
              <template slot="singleLabel" slot-scope="props">
                <span class="option__desc">
                  <span class="option__title"> {{ props.option.title }} </span>
                  <!-- <img class="option__image" :src="props.option.img" alt="" /> -->
                  <span class="option__small">{{ props.option.desc }}</span>
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
          <div v-if="actionType.actionType">
            <label>
              Enter sender ID:
              <input
                class="senderInput"
                type="text"
                v-model="senderId"
                placeholder="Sender ID"
              />
              <button
                type="button"
                class="mm-btn"
                @click="initWeb3('senderId')"
              >
                <img src="../assets/mm.png" alt="" />
              </button>
              <div class="tooltip">Take the account from MetaMask!</div>
            </label>
          </div>
          <div
            v-if="
              actionType.actionType &&
                actionType.actionType !== 'upload' &&
                actionType.actionType !== 'register'
            "
          >
            <label
              >Enter receiver ID:
              <input
                class="receiverInput"
                type="text"
                v-model="receiverId"
                placeholder="Receiver ID"
              />
              <button
                type="button"
                class="mm-btn"
                @click="initWeb3('receiverId')"
              >
                <img src="../assets/mm.png" alt="" />
              </button>
              <div class="tooltip">Take the account from MetaMask!</div>
            </label>
          </div>
        </form>
        <button
          type="search"
          class="btn"
          :disabled="
            !actionType.actionType ||
              senderId === '' ||
              (actionType.actionType !== 'upload' &&
                actionType.actionType !== 'register' &&
                receiverId === '') ||
              !file.name
          "
          @click="searchOnChain"
        >
          Verify
        </button>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import verifyMixins from "../mixins";
import Timeline from "./Timeline";
import Footer from "./Footer";
import Multiselect from "vue-multiselect";

export default {
  name: "Verify",
  components: { Timeline, Footer, Multiselect },
  mixins: [verifyMixins]
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
@import url("../styles/styles.css");
</style>
