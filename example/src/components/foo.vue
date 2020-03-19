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
    this.$eventTrack.pastpaperAdClose().then((res: any) => console.log(res))
  }
}
</script>
