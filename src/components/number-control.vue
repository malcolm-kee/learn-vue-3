<script lang="ts" setup>
import { ref, computed } from "vue";

const val = ref(1);

const error = computed(() => val.value < 1 ? 'Must be at least 1' : '')

</script>
<template>
    <div>
        <div class="inline-block w-32 relative">
            <button
                type="button"
                class="absolute left-0 inset-y-0 px-1.5 text-gray-400"
                id="headcount-minus-btn"
                @click="val -= 1"
            >
                <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 12H4"
                    />
                </svg>
            </button>
            <input
                type="text"
                name="headcount"
                id="headcount"
                required
                class="block w-full px-9 text-center shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md"
                v-model.number="val"
            />
            <button
                type="button"
                class="absolute right-0 inset-y-0 px-1.5 text-gray-400"
                id="headcount-plus-btn"
                @click="val += 1"
            >
                <svg
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
            </button>
        </div>
        <div v-if="error" class="text-red-500 text-xs pt-1">{{ error }}</div>
    </div>
</template>