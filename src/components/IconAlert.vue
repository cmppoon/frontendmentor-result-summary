<template>
  <div class="text-sm rounded-lg p-2 sm:p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <slot name="icon"></slot>
      </div>
      <div class="ms-4">
        <slot name="category"></slot>
      </div>
      <div class="ml-auto">
        <slot name="score"></slot>
      </div>
    </div>
  </div>
</template>
