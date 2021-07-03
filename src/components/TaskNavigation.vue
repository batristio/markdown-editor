<template>
  <div class="TaskNavigation">
    "task navigation"

    <div>
        <button
          @click="addTask()"
        >
          Add new task
        </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TaskNavigation',

  methods: {
    addTask () {
      const a = 'Adding a task'
      console.log(a)
    }
  }
}
</script>

<style lang="scss" scoped>
.TaskNavigation {
  background-color: green;
  display: inline-block;
  width: 20%;
}
</style>
