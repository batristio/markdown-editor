<template>
  <div
    class="Document"
    @click="onClick"
  >
    <div>
      <li>{{ document.name }}</li>
    </div>

    <button @click="onDelete">
      Delete
    </button>

    <button @click="onEdit">
      Edit
    </button>
  </div>
</template>

<script>
export default {
  name: 'Document',

  props: {
    document: {
      type: Object,
      default: null
    }
  },

  methods: {
    onDelete () {
      return this.$emit('delete', this.document.uid)
    },

    onEdit () {
      return this.$emit('edit', this.document.uid)
    },

    onClick () {
      return this.$emit('click', this.document.uid)
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
