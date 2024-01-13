<script setup>
import IconAlert from "./IconAlert.vue";
import ScoreComponent from "./ScoreComponent.vue";
import IconMemory from "./icons/IconMemory.vue";
import IconReaction from "./icons/IconReaction.vue";
import IconVerbal from "./icons/IconVerbal.vue";
import IconVisual from "./icons/IconVisual.vue";
</script>
<template>
  <div
    class="bg-white border shadow-xl px-8 -translate-y-4 sm:translate-y-0 sm:-translate-x-2 sm:rounded-2xl"
  >
    <div class="flex flex-col justify-start gap-y-2 sm:gap-y-6 py-8">
      <h2 class="font-bold text-lg sm:text-xl text-darkgrayblue">Summary</h2>

      <div class="flex flex-col gap-y-2 sm:gap-y-4">
        <IconAlert class="text-lightred bg-lightred/10">
          <template #icon>
            <IconReaction />
          </template>
          <template #category>
            <h3 class="text-base font-bold">Reaction</h3>
          </template>
          <template #score>
            <ScoreComponent score="80"></ScoreComponent>
          </template>
        </IconAlert>

        <IconAlert class="bg-orangeyyellow/10 text-orangeyyellow">
          <template #icon>
            <IconMemory />
          </template>
          <template #category>
            <h3 class="text-base font-bold">Memory</h3>
          </template>
          <template #score>
            <ScoreComponent score="92"></ScoreComponent>
          </template>
        </IconAlert>

        <IconAlert class="bg-greenteal/10 text-greenteal">
          <template #icon>
            <IconVerbal />
          </template>
          <template #category>
            <h3 class="text-base font-bold">Verbal</h3>
          </template>
          <template #score>
            <ScoreComponent score="61"></ScoreComponent>
          </template>
        </IconAlert>

        <IconAlert class="bg-cobaltblue/10 text-cobaltblue">
          <template #icon>
            <IconVisual />
          </template>
          <template #category>
            <h3 class="text-base font-bold">Visual</h3>
          </template>
          <template #score>
            <ScoreComponent score="72"></ScoreComponent>
          </template>
        </IconAlert>
      </div>
      <button
        class="rounded-full bg-darkgrayblue text-base text-white p-2 sm:p-4 mt-2 hover:bg-gradient-to-b hover:from-lightslateblue hover:to-lightroyalblue"
      >
        Continue
      </button>
    </div>
  </div>
</template>
