<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{
  modelValue?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const input = ref<HTMLInputElement>();

defineExpose({
  focus() {
    if (input.value) {
      input.value.focus();
    }
  },
});
</script>

<template>
  <input
    type="text"
    class="
      block
      w-full
      shadow-sm
      sm:text-sm
      focus:ring-pink-500 focus:border-pink-500
      border-gray-300
      rounded-md
    "
    :value="props.modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    ref="input"
  />
</template>
