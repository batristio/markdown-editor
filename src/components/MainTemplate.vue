<template>
  <div class="Main">
    <DocumentNavigation />
    <Editor />
  </div>
</template>

<script>
import DocumentNavigation from './DocumentNavigation.vue'
import Editor from './Editor.vue'

export default {
  name: 'LearnerDetails',

  components: {
    DocumentNavigation,
    Editor
  }
}
</script>

<style lang="scss" scoped>
.Main {
  display: block;
  width: 100%;
}
</style>
