<script lang="ts" setup>
import Accordion from './accordion.vue';
import { ref } from "vue";

const expandedIndex = ref(-1);

</script>

<template>
    <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h1
            class="text-center text-6xl font-extrabold text-gray-900 sm:text-4xl mb-12"
        >Frequently asked questions</h1>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
            <Accordion
                title="What's the best thing about Switzerland?"
                :open="expandedIndex === 0"
                @toggle="expandedIndex = expandedIndex === 0 ? -1 : 0"
            >
                <p class="text-base text-gray-500">
                    I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                </p>
            </Accordion>
            <Accordion
                title="How can I get refund?"
                :open="expandedIndex === 1"
                @toggle="expandedIndex = expandedIndex === 1 ? -1 : 1"
            >
                <p class="text-base text-gray-500">We do not give refund, so try at your risk.</p>
                <p class="text-base text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
                    facere hic sed nemo porro error libero corrupti voluptas assumenda
                    nesciunt fugiat rem, aut, rerum quaerat eum accusamus adipisci. Culpa,
                    modi amet est nobis odio eveniet! Quisquam ipsum alias molestiae
                    ipsam.
                </p>
            </Accordion>
            <Accordion
                title="Can I become a millionaire by learning JavaScript?"
                :open="expandedIndex === 2"
                @toggle="expandedIndex = expandedIndex === 2 ? -1 : 2"
            >
                <p class="text-base text-gray-500">
                    The only thing that can surely make you a millionaire is by having one
                    as your parents. Everything else can't ensure that.
                </p>
            </Accordion>
        </dl>
    </div>
</template>