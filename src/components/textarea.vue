<script lang="ts" setup>
const props = defineProps<{
    modelValue?: string;
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>();
</script>

<template>
    <textarea
        row="2"
        class="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border border-gray-300 rounded-md"
        :value="props.modelValue"
        @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
</template>