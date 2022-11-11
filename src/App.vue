<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 将方法传递给子组件，借此收到子组件传来的数据 -->
        <TodoHeader @setNewTodo="setNewTodo"></TodoHeader>
        <TodoList :todoList="todoList" :setTodoStatus="setTodoStatus" :delTodo="delTodo"></TodoList>
        <TodoFooter :todoList="todoList" @setAllTodosDone="setAllTodosDone" @clearAllDone="clearAllDone"></TodoFooter>
      </div>
    </div>
  </div>
</template>

<script>
// 导入组件
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

export default {
  name: 'App',
  // 注册组件
  components: {TodoHeader, TodoList, TodoFooter},
  data() {
    return {
      todoList: JSON.parse(localStorage.getItem('todoList')) || []
    }
  },
  methods: {
    setNewTodo(newTodo) {
      this.todoList.unshift(newTodo)
    },
    setTodoStatus(todoId) {
      this.todoList.forEach(todo => {
        if(todo.id === todoId) {
          todo.isDone = !todo.isDone
        }
      })
    },
    delTodo(todoId) {
      this.todoList = this.todoList.filter(todo => todo.id !== todoId)
    },
    setAllTodosDone(val) {
      this.todoList.forEach(todo => todo.isDone = val)
    },
    clearAllDone() {
      this.todoList = this.todoList.filter(todo => !todo.isDone)
    }
  },
  watch: {
    todoList: {
      deep: true,
      handler(newTodoList) {
        localStorage.setItem('todoList', JSON.stringify(newTodoList))
      }
    }
  }
}
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
