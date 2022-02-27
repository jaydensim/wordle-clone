<script setup></script>

<template>
  <teleport to="body">
    <section class="modal">
      <div class="std-modal">
        <div class="inner">
          <slot />
        </div>
      </div>
    </section>
  </teleport>
</template>

<style scoped>
section.modal {
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background: #f3f6f92e;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
div.std-modal {
  display: flex;
  justify-content: center;
  background-color: #fff;
  border: 2px solid #f3f6f9;
  border-radius: 8px;
  max-width: calc(100vw - 50px);
  width: 500px;
  animation: scale-in 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: 0px 0.5px 0.6px hsl(210deg 10% 60% / 0.34),
    0px 2.9px 3.3px -0.4px hsl(210deg 10% 60% / 0.34),
    0px 5.3px 6px -0.7px hsl(210deg 10% 60% / 0.34),
    0px 8.7px 9.8px -1.1px hsl(210deg 10% 60% / 0.34),
    0px 14px 15.8px -1.4px hsl(210deg 10% 60% / 0.34),
    0px 21.8px 24.5px -1.8px hsl(210deg 10% 60% / 0.34),
    0px 33.2px 37.4px -2.1px hsl(210deg 10% 60% / 0.34),
    0px 48.9px 55px -2.5px hsl(210deg 10% 60% / 0.34);
  max-height: calc(100% - 50px);
  overflow-y: auto;
}

.inner {
  width: 100%;
  margin: 1rem 1rem 1.5rem 1rem;
}

@keyframes scale-in {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
