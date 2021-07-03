<template>
  <div>
    <FileNavigation/>
    <Editor/>
  </div>
</template>

<script>
import FileNavigation from './FileNavigation.vue'
import Editor from './Editor.vue'

export default {
  name: 'LearnerDetails',

  components: {
    FileNavigation,
    Editor
  }
}
</script>
