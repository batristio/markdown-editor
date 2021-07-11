<template>
  <div class="Document">
    <div>
      <li>{{ name }}</li>
    </div>

    <button @click="deleteDocument">
      Delete
    </button>

    <button @click="editDocument">
      Edit
    </button>
  </div>
</template>

<script>
export default {
  name: 'Document',

  props: {
    name: {
      type: String,
      default: ''
    },
    uid: {
      type: String,
      default: null
    }
  },

  methods: {
    deleteDocument () {
      return this.$emit('delete', this.uid)
    },

    editDocument () {
      return this.$emit('edit', this.uid)
    }
  }
}
</script>

<style lang="scss" scoped>
.Document {
  display: block;
  padding: 5px;
}
</style>
