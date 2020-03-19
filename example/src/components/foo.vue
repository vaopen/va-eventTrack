<template>
  <div class="hello">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'foo'
})
export default class Foo extends Vue {
  public mounted() {
    this.$buriedpoint.pastpaperAdClose().then((res: any) => {
      console.log(res)
      this.$buriedpoint.pastpaperAdClose({isRecordTime: true}).then((res: any) => console.log(res))
      setTimeout(() => {
        this.$buriedpoint.pastpaperAdClose().then((res: any) => console.log(res))
      }, 3000)
    })
  }
}
</script>
