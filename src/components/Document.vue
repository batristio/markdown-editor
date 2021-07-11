<template>
  <div
    class="Document"
    @click="onClick"
  >
    <div>
      <li>{{ name }}</li>
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
    name: {
      type: String,
      default: ''
    },
    uid: {
      type: String,
      default: null
    },
    content: {
      type: String,
      default: ''
    }
  },

  methods: {
    onDelete () {
      return this.$emit('delete', this.uid)
    },

    onEdit () {
      return this.$emit('edit', this.uid)
    },

    onClick () {
      return this.$emit('click', this.uid)
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
