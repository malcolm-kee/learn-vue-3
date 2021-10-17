<script lang="ts" setup>
const props = defineProps<{
    modelValue?: string;
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>();
</script>
<template>
    <select
        class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md"
        :value="props.modelValue"
        @input="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
        <slot />
    </select>
</template>