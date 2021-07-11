<template>
  <MainTemplate />
</template>

<script>
import MainTemplate from './components/MainTemplate.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',

  components: {
    MainTemplate
  },

  created () {
      this.loadDocuments()
  },

  methods: {
    ...mapActions([
      'loadDocuments'
    ])
  }
}
</script>

<style lang="scss">

</style>
