<template>
<div id="app">
  <Top-line />
  <Bottom-line />
  <Main-img />
  <Services />
</div>
</template>

<script>
import BottomLine from './components/BottomLine.vue'
import MainImg from './components/MainImg.vue'
import Services from './components/Services.vue'
import TopLine from './components/TopLine.vue'
export default {
  components: { TopLine, BottomLine,MainImg, Services },
    name: 'app',

}
</script>

<style>
body{
  margin: 0;
}
#app {
    font-family: "Raleway", Helvetica, Arial, sans-serif;
    -webkit-text-size-adjust: none;
    color: rgb(49, 49, 49)
}
</style>
