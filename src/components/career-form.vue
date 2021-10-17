<script lang="ts" setup>
import { ref } from 'vue';
import { addJob } from '../services/job.service';
import Select from './select.vue';
import TextInput from './text-input.vue';
import Textarea from './textarea.vue';

const emit = defineEmits<{
  (ev: 'success'): void;
}>();

const title = ref('');
const jobLevel = ref('internship');
const department = ref('');
const summary = ref('');

const titleInput = ref<HTMLInputElement | null>(null);

function handleSubmit() {
  addJob({
    title: title.value,
    level: jobLevel.value,
    department: department.value,
    summary: summary.value,
    headcount: 1,
  }).then(() => {
    emit('success');
    title.value = '';
    jobLevel.value = 'internship';
    department.value = '';
    summary.value = '';
    if (titleInput.value) {
      titleInput.value.focus();
    }
  });
}
</script>
<template>
  <form id="career-form" @submit.prevent="handleSubmit">
    <div
      class="
        bg-white
        overflow-hidden
        shadow
        rounded-lg
        divide-y divide-gray-200
      "
    >
      <div class="px-4 py-5 sm:px-6 text-lg" id="form-title">
        Add Job Posting
      </div>
      <div class="px-4 py-5 sm:p-6">
        <div class="space-y-5">
          <div class="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
            <label
              for="job-title"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >Job Title</label
            >
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <TextInput
                name="job-title"
                id="job-title"
                required
                v-model="title"
                ref="titleInput"
              />
            </div>
          </div>

          <div class="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
            <label
              for="job-level"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >Level</label
            >
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <Select
                id="job-level"
                name="job-level"
                required
                v-model="jobLevel"
              >
                <option value="internship">Internship</option>
                <option value="entry">Entry</option>
                <option value="experienced">Experienced</option>
                <option value="manager">Manager</option>
              </Select>
            </div>
          </div>

          <div class="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
            <label
              for="job-department"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >Department</label
            >
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <TextInput
                name="job-department"
                id="job-department"
                required
                placeholder="e.g. Engineering"
                v-model="department"
              />
            </div>
          </div>

          <div class="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
            <label
              for="job-summary"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >Summary</label
            >
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <Textarea
                id="job-summary"
                name="job-summary"
                rows="4"
                required
                v-model="summary"
              />
            </div>
          </div>

          <div class="lg:grid lg:grid-cols-3 lg:gap-4 lg:items-start">
            <label
              for="headcount"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >Headcount</label
            >
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <div class="relative w-32">
                <button
                  type="button"
                  class="absolute left-0 inset-y-0 px-1.5 text-gray-400"
                  id="headcount-minus-btn"
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
                  class="
                    block
                    w-full
                    px-9
                    text-center
                    shadow-sm
                    sm:text-sm
                    focus:ring-pink-500 focus:border-pink-500
                    border-gray-300
                    rounded-md
                  "
                  value="1"
                  readonly
                />
                <button
                  type="button"
                  class="absolute right-0 inset-y-0 px-1.5 text-gray-400"
                  id="headcount-plus-btn"
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
              <div
                id="headcount-error"
                class="text-red-500 text-xs pt-1 hidden"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 py-4 sm:px-6 flex justify-between">
        <button
          class="
            inline-flex
            justify-center
            py-2
            px-4
            border border-pink-500
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-pink-500
            bg-white
            hover:bg-gray-100
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-pink-500
          "
          type="button"
        >
          CANCEL
        </button>
        <button
          class="
            inline-flex
            justify-center
            py-2
            px-4
            border border-transparent
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-white
            bg-pink-600
            hover:bg-pink-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-pink-500
          "
          type="submit"
        >
          ADD
        </button>
      </div>
    </div>
  </form>
</template>
