<template>
  <div class="hello">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'HelloWorld'
})
export default class HelloWorld extends Vue {
  public mounted() {
    this.$buriedpoint.pastpaperAdClose().then((e: any) => console.log(e)).catch((e: any) => console.error(e))
    this.$buriedpoint.pastpaperAdClose({start: true})
    setTimeout(() => {
      this.$buriedpoint.pastpaperAdClose({endTime: Date.now()})
    }, 3000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
