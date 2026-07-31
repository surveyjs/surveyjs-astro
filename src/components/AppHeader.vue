<script setup lang="ts">
defineProps<{
  currentPath?: string
}>()

const links = [
  { href: '/survey', label: 'Form Library' },
  { href: '/creator', label: 'Survey Creator' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/tabulator', label: 'Results Table' },
  { href: '/pdf-export', label: 'PDF Generator' },
]
</script>

<template>
  <header class="app-header">
    <a href="/" class="brand">
      <img src="/favicon.ico" width="28" height="28" alt="" />
      SurveyJS + Astro
    </a>
    <nav>
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        :class="{ active: currentPath === link.href }"
      >
        {{ link.label }}
      </a>
    </nav>
  </header>
</template>

<style scoped>
nav a.active {
  text-decoration: underline;
}
</style>
