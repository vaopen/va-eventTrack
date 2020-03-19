<template>
  <div id="app">
    <router-link to="/">foo</router-link>
    /
    <router-link to="/bar?id=25&name=zhangsan">bar</router-link>
    <button @click="gotoBar">button bar</button>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class App extends Vue {
  public gotoBar() {
    this.$router.push({name: 'Bar', query: {id: '35', name: 'wangwu'}, params: {age: '18', sex: '男'}})
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
