<template>
  <div id="app">
    <MyHeader v-if="$route.meta.headShow"></MyHeader>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/Myheader'
import MyFooter from './components/Myfooter'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style>
#app {
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  width: 100vw;
}
a {
   text-decoration: none;
 }
</style>
