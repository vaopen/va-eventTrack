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
    this.$eventTrack.pastpaperAdClose({isRecordTime: true}).then((res: any) => console.log(res))
    setTimeout(() => {
      this.$eventTrack.pastpaperAdClose().then((res: any) => console.log(res))
    }, 3000)
  }
}
</script>
