<script lang="ts" setup>
const props = defineProps<{
    title: string;
    open: boolean;
}>();

const emit = defineEmits<{
    (e: 'toggle'): void;
}>();

</script>

<template>
    <div class="pt-6">
        <dt class="text-lg">
            <button
                type="button"
                class="flex w-full items-center justify-between text-gray-400 focus:outline-none focus:ring focus:ring-offset-4"
                aria-controls="faq-0"
                aria-expanded="false"
                @click="emit('toggle')"
            >
                <span class="font-medium text-gray-900">{{ props.title }}</span>
                <span class="ml-6 h-7 flex items-center">
                    <svg
                        class="h-6 w-6 transform"
                        :class="props.open ? 'rotate-180' : 'rotate-0'"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </span>
            </button>
        </dt>
        <dd class="mt-2 pr-12" id="faq-0">
            <slot v-if="props.open" />
        </dd>
    </div>
</template>