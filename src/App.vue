<script setup>
import YourResult from "./components/YourResult.vue";
import ResultBreakdown from "./components/ResultBreakdown.vue";
</script>

<template>
  <main class="h-full flex justify-center items-center">
    <div class="grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2 max-w-2xl">
      <YourResult />
      <ResultBreakdown />
    </div>
  </main>
</template>
