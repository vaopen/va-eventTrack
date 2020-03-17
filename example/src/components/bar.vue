<template>
  <div class="hello">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'bar'
})
export default class Bar extends Vue {
  public mounted() {
    this.$buriedpoint.pastpaperAdClose().then((e: any) => console.log(e)).catch((e: any) => console.error(e))
    this.$buriedpoint.pastpaperAdClose({start: true})
    setTimeout(() => {
      this.$buriedpoint.pastpaperAdClose({endTime: Date.now()})
    }, 3000)
  }
}
</script>
