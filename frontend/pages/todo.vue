<script setup lang="ts">
import type { Todo } from '@/models/todo.model'
import { useWelcomeServer } from '~/apis/welcome'

const welcomeServer = useWelcomeServer()

const todoList = ref<Todo[]>([])
function fetchTodoList(): void {
  welcomeServer.request().getTodoList().then(res => todoList.value = res)
}
fetchTodoList()

const todoContent = ref<string>('')
function addTodo(): void {
  if (!todoContent.value)
    return
  welcomeServer.request().addNewTodo(todoContent.value).then(() => {
    todoContent.value = ''
    fetchTodoList()
  }).finally(() => {
    todoContent.value = ''
    fetchTodoList()
  })
}

function deleteTodo(id: number): void {
  welcomeServer.request().deleteTodo(id).then(() => {
    fetchTodoList()
  }).finally(() => fetchTodoList())
}
</script>

<template>
  <div>
    <div text-4xl>
      <div i-carbon-campsite inline-block />
    </div>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Simple todo base on Naily RPC
      </a>
    </p>

    <div py-4 />

    <div flex flex-col justify-center items-center>
      <ol v-if="todoList.length" relative left-1>
        <div v-for="(item, index) in todoList" :key="index" flex gap-x-2>
          <div flex items-center gap-x-4>
            <div>{{ index + 1 }}.</div>
            <li w="250px" p="x-4 y-2" border="~ rounded gray-200 dark:gray-700">
              <div text-left text-size-lg overflow-x-overlay>
                {{ item.content }}
              </div>
              <div text-size-3 op-70 flex flex-col items-start>
                <div>id: {{ item.id }}</div>
                <div>create Time: {{ new Date(item.createdAt).toLocaleString() }}</div>
              </div>
            </li>
            <button icon-btn @click="deleteTodo(item.id)">
              <div i-carbon-trash-can />
            </button>
          </div>
        </div>
      </ol>
      <div v-else op-70>
        No todo items
      </div>
      <TheInput v-model="todoContent" mt-4 placeholder="Add your content..." />
      <div>
        <button m-3 text-sm btn @click="addTodo">
          Add
        </button>
      </div>
    </div>

    <div py-1 />
  </div>
</template>
