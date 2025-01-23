<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
import { storeToRefs } from 'pinia'
import { useTitle } from '@vueuse/core'

const store = useCounterStore()
const { count, doubleCount } = storeToRefs(store)
const { increment, decrement } = store

useTitle('Vue3 Demo - Home')
</script>

<template>
  <div class="home">
    <h1>Vue 3 Demo Home</h1>
    <div class="counter-section">
      <h2>Pinia Store Demo</h2>
      <p>Count: {{ count }}</p>
      <p>Double Count: {{ doubleCount }}</p>
      <div class="buttons">
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  padding: 2rem;
  text-align: center;
}

.counter-section {
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.buttons {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #42b883;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #3aa876;
}
</style>