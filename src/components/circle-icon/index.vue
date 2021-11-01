<template>
  <span
    class="circle"
    :style="{ 'background-color': isSuccess ? '#4BB543' : '#D04349' }"
  >
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        v-if="isSuccess"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5 13l4 4L19 7"
      />
      <path
        v-if="!isSuccess"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </span>
</template>

<script>
export default {
  name: "CircleIcon",

  props: {
    isSuccess: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.circle {
  width: 38px;
  height: 38px;
  border-radius: 99px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 32px;
}

.circle svg {
  width: 24px;
  height: 24px;
  color: #ffffff;
}
</style>
