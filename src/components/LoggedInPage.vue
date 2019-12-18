<template>
    <div>
        <p>You're logged in! Welcome</p>
        <ul v-if="todo" data-cy-todo-list>
            <li>
                {{ todo.title }} -
                {{ `${todo.completed ? 'was completed' : 'was not completed'}` }}
            </li>
        </ul>
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data () {
      return {
        todo: null
      }
    },
    created () {
      axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(data => this.todo = data.data)
    }
  }
</script>