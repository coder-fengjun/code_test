<script setup lang="ts">
import { useCounterStore } from '../stores/counter'
import { storeToRefs } from 'pinia'
import { useTitle } from '@vueuse/core'

const store = useCounterStore()
const { count, doubleCount } = storeToRefs(store)
const { increment, decrement } = store

useTitle('Vue3 Demo - Counter')
</script>

<template>
  <div class="counter">
    <h1>Counter Page</h1>
    <div class="counter-display">
      <h2>Current Count: {{ count }}</h2>
      <h3>Double Value: {{ doubleCount }}</h3>
      
      <div class="counter-controls">
        <button @click="increment" class="increment">+</button>
        <button @click="decrement" class="decrement">-</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.counter {
  padding: 2rem;
  text-align: center;
}

.counter-display {
  margin-top: 2rem;
  padding: 2rem;
  border: 2px solid #42b883;
  border-radius: 12px;
  background-color: #f8f8f8;
}

.counter-controls {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

button {
  font-size: 1.5rem;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
}

button:hover {
  transform: scale(1.1);
}

.increment {
  background-color: #42b883;
  color: white;
}

.increment:hover {
  background-color: #3aa876;
}

.decrement {
  background-color: #666;
  color: white;
}

.decrement:hover {
  background-color: #555;
}
</style>