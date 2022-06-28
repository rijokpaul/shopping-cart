<template>
  <div class="loading-wrapper">
    <div class="loading"></div>
  </div>
</template>
<script>
export default {
  name: "GlobalLoading",
};
</script>
<style scoped lang="scss">
.loading-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 15;
  background: rgba(#000, 0.7);
}
.loading {
  height: 0;
  width: 0;
  padding: 15px;
  border: 2px solid #ccc;
  border-right-color: #888;
  border-radius: 22px;
  animation: rotate 1s infinite linear;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -25px 0 0 -15px;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
