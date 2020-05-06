<template>
  <footer class="footer">
    <p>Copyright &copy; {{ year }} - ReCheck BV</p>
  </footer>
</template>

<script>

export default {
  name: "Footer",
  data() {
    return {
      year: new Date().getUTCFullYear()
    };
  }
};
</script>

<style scoped>
.footer {
  text-align: center;
}

p {
  margin-top: 32px;
}
</style>
