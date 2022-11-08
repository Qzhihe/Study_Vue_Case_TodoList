<template>
  <div class="todo-footer" v-show="total">
    <label>
      <input type="checkbox" v-model="allDone"/>
    </label>
    <span>
      <span>已完成{{doneCount}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clear">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'TodoFooter',
  props: ['todoList', 'setAllTodosDone', 'clearAllDone'],
  computed: {
    total() {
      return this.todoList.length
    },
    doneCount() {
      return this.todoList.reduce((pre, todo) => pre + (todo.isDone ? 1 : 0), 0)
    },
    allDone: {
      get() {
        return this.doneCount === this.total && this.total > 0
      },
      set(val) {
        this.setAllTodosDone(val)
      }
    }
  },
  methods: {
    clear() {
      this.clearAllDone()
    }
  }
}
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>