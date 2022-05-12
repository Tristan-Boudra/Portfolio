<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>

<style>
html {
  overflow-x: hidden;
  scroll-behavior: smooth;
}

#app {
  font-family: Nunito, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all .5s ease;
}

.slide-right-enter-from {
  position: absolute;
  transform: translateX(-100%);
}

.slide-right-enter-to {
  position: absolute;
  transform: translateX(0%);
}

.slide-right-leave-from {
  position: absolute;
  transform: translateX(0%);
}

.slide-right-leave-to {
  position: absolute;
  transform: translateX(100%);
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all .5s ease;
}

.slide-left-enter-from {
  position: absolute;
  transform: translateX(100%);
}

.slide-left-enter-to {
  position: absolute;
  transform: translateY(-100%);
}

.slide-left-leave-from{
  position: absolute;
  transform: translateX(-100%);
}

.slide-left-leave-to {
  position: absolute;
  transform: translateX(-100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from{
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}
</style>
