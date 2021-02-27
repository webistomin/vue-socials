<template>
  <section class="base-canvas">
    <div class="base-canvas__box">
      <div class="base-canvas__holder">
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BaseCanvas',
};
</script>

<style lang="css">
.base-canvas {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.base-canvas__box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%
}

.base-canvas__holder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 240px;
  border-radius: 10px;
  background: #ebf5fc;
  box-shadow: -2px -2px 5px rgb(255 255 255), 3px 3px 5px rgba(0, 0, 0, 0.1);
}
</style>
