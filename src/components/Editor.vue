<template>
  <div class="Editor">
    "editor"
    {{ currentDocument }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Editor',
  
  computed: {
    ...mapGetters([
      'currentDocument'
    ])
  }
}

</script>

<style lang="scss" scoped>
.Editor {
  background-color: red;
  display: inline-block;
  width: 80%;
}
</style>
