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
            <p v-if="file.name" id="file-name-p">
              <span id="file-name-span">
                {{ file.name }}
              </span>
              <span id="file-btn-span">
                <button
                  id="clear-file-btn"
                  v-on:click.stop
                  type="button"
                  @click="clearFileUpload()"
                >
                  <svg
                    width="24"
                    height="24"
                    class="w-6 h-6"
                    fill="#7F8781"
                    stroke="none"
                    stroke-width="1.5"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </span>
            </p>
            <p v-else>
              Click to add file
              <span class="dragFileMsg"> or drag it here</span>
            </p>
          </div>
          <div>
            <div id="add-document-container">
              <label id="enter-documenthash-label">
                Or enter data identifier:
                <input
                  class="docInput"
                  type="text"
                  id="dataId"
                  v-model="dataId"
                  placeholder="Data Identifier"
                />
              </label>
            </div>
            <multiselect
              v-model="actionAttributes"
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
                  <span class="option__small">{{ props.option.desc }}</span>
                </span>
              </template>
              <template slot="option" slot-scope="props">
                <div class="option__desc">
                  <span class="option__title">{{ props.option.title }}</span>
                  <img class="option__image" :src="props.option.img" alt="" />
                </div>
              </template>
            </multiselect>
          </div>
          <div v-if="actionAttributes.actionType">
            <label>
              Enter sender ID:
              <input
                class="senderInput"
                type="text"
                v-model="senderId"
                id="senderId"
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
              actionAttributes.actionType &&
                ![
                  'upload',
                  'register',
                  'sign',
                  'download',
                  'verify',
                  'email'
                ].includes(actionAttributes.actionType)
            "
          >
            <label>
              Enter recipient ID:
              <input
                class="receiverInput"
                type="text"
                v-model="recipientId"
                id="recipientId"
                placeholder="Recipient ID"
              />
              <button
                type="button"
                class="mm-btn"
                @click="initWeb3('recipientId')"
              >
                <img src="../assets/mm.png" alt="" />
              </button>
              <div class="tooltip">Take the account from MetaMask!</div>
            </label>
          </div>
          <div
            v-if="
              actionAttributes.actionType &&
                ['email'].includes(actionAttributes.actionType)
            "
          >
            <label>
              Enter recipient Email:
              <input
                class="receiverInput"
                type="email"
                v-model="recipientId"
                id="recipientId"
                placeholder="Recipient Email"
              />
              <button
                type="button"
                class="mm-btn"
                @click="initWeb3('recipientId')"
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
            !actionAttributes.actionType ||
              (payload === '' && dataId === '') ||
              senderId === '' ||
              (!['upload', 'register', 'sign', 'download', 'verify'].includes(
                actionAttributes.actionType
              ) &&
                recipientId === '')
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
