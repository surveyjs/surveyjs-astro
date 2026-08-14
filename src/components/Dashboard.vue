<script setup lang="ts">
import { onBeforeUnmount, onMounted, shallowRef } from 'vue'
import { Model } from 'survey-core'
import { Dashboard } from 'survey-analytics'
import { data, json } from '../../data/dashboard_data.js'
import 'survey-analytics/survey.analytics.css'

const panelEl = shallowRef<HTMLElement | null>(null)
let dashboard: Dashboard | null = null

onMounted(() => {
  const survey = new Model(json)
  dashboard = new Dashboard({
    questions: survey.getAllQuestions(),
    data,
  })
  if (panelEl.value) {
    dashboard.render(panelEl.value)
  }
})

onBeforeUnmount(() => {
  dashboard?.clear()
  dashboard = null
})
</script>

<template>
  <div ref="panelEl" class="dashboard-wrap" />
</template>
