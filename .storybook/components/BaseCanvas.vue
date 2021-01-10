<template>
  <section class="base-canvas">
    <div class="base-canvas__box">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'BaseCanvas',
};
</script>

<style lang="css">
body {
  background-color: #f4f4f4;
}

.base-social {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  padding: 1em 1.2em;
  font-family: system-ui, sans-serif;
  font-weight: 700;
  border-radius: 0.5em;
  box-shadow: -12px -12px 12px 0 rgba(255, 255, 255, 0.6), 12px 12px 12px 0 rgba(0, 0, 0, 0.03);
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
}

.base-social:hover {
  box-shadow: -12px -12px 12px 0 rgba(255, 255, 255, 0.6),
  12px 12px 12px 0 rgba(0, 0, 0, 0.03);
  transform: scale(1.05);
}

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
</style>
