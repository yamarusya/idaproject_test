<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

#app {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h3{
  font-size: 20px;
}
h3{
  font-size: 28px;
}
.newclass{
  opacity: 1;
  box-shadow: none !important;
  img, h3, span{
    animation: removing 2.1s ease-in-out forwards;
  }
}

@keyframes removing {
  0% {
    display: block;
    opacity: 1;
    background: transparent;
  }

  1% {
    display: block;
    opacity: 1;
  }

  100% {
    display: none;
    opacity: 0;
  }
}
</style>
