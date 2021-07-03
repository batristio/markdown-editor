<template>
  <div class="Main">
    <TaskNavigation/>
    <Editor/>
  </div>
</template>

<script>
import TaskNavigation from './TaskNavigation.vue'
import Editor from './Editor.vue'

export default {
  name: 'LearnerDetails',

  components: {
    TaskNavigation,
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
