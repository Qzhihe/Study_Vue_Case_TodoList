<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.isDone" @change="handleStatusChange(todo.id)" />
      <span>{{ todo.desc }}</span>
    </label>
    <button class="btn btn-danger" @click="handleTodoDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo', 'setTodoStatus', 'delTodo'],
  methods: {
    // 处理是否完成
    handleStatusChange(id) {
      this.setTodoStatus(id)
    },
    // 处理删除
    handleTodoDelete(id) {
      this.delTodo(id)
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}

</style>