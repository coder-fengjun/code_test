<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTitle } from '@vueuse/core'

const message = ref('Welcome to About page')
const lastUpdateTime = ref('')

onMounted(() => {
  lastUpdateTime.value = new Date().toLocaleString()
})

useTitle('Vue3 Demo - About')
</script>

<template>
  <div class="about">
    <h1>About Page</h1>
    <p>{{ message }}</p>
    <p class="update-time">Last updated: {{ lastUpdateTime }}</p>
    
    <div class="feature-list">
      <h2>Vue 3 Features Demo</h2>
      <ul>
        <li>Composition API with <code>&lt;script setup&gt;</code></li>
        <li>Lifecycle Hooks (onMounted)</li>
        <li>Reactive References</li>
        <li>VueUse Utilities</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.about {
  padding: 2rem;
  text-align: center;
}

.update-time {
  color: #666;
  font-size: 0.9rem;
  margin-top: 1rem;
}

.feature-list {
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: left;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.feature-list h2 {
  text-align: center;
  color: #42b883;
}

.feature-list ul {
  list-style-type: none;
  padding: 0;
}

.feature-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.feature-list li:last-child {
  border-bottom: none;
}

code {
  background-color: #f4f4f4;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.9em;
}
</style>