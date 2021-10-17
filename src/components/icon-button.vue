<script setup lang="ts">
const props = defineProps<{
    title: string;
}>();

const emit = defineEmits(['click'])
</script>

<template>
    <button
        type="button"
        @click="emit('click')"
        class="p-1 rounded-full hover:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:ring focus:ring-pink-500 focus:ring-opacity-30 transition duration-150 ease-in-out"
        :title="props.title"
    >
        <slot></slot>
    </button>
</template>