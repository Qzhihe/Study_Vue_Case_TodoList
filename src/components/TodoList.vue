<template>
  <ul class="todo-main">
    <TodoItem v-for="todo in todoList" :key="todo.id" :todo="todo" :setTodoStatus="setTodoStatus" :delTodo="delTodo"></TodoItem>
  </ul>
</template>

<script>
import TodoItem from './TodoItem'

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  props: ['todoList', 'setTodoStatus', 'delTodo']
}
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>