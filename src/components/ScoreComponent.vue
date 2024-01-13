<script setup>
defineProps({
  score: String,
});
</script>

<template>
  <h3 class="text-base text-darkgrayblue/50">
    <span class="font-extrabold text-darkgrayblue">{{ score }}</span> / 100
  </h3>
</template>
