<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import CareerForm from '../components/career-form.vue';
import CareerItem from '../components/career-item.vue';
import { getJobs } from '../services/job.service';

const isLoading = ref(true);
const page = ref(1);
const jobs = ref<
  Array<{
    title: string;
    department: string;
    _id: string;
  }>
>([]);

const loadJobs = (signal?: AbortSignal) => {
  getJobs(page.value, signal).then((res) => {
    jobs.value = res;
    isLoading.value = false;
  });
};

watchEffect((onInvalidate) => {
  const ac = new AbortController();
  loadJobs(ac.signal);
  onInvalidate(() => {
    ac.abort();
  });
});

function onEdit(title: string) {
  console.log('handle edit in app', title);
}
</script>

<template>
  <div class="grid md:grid-cols-2 gap-4 p-4">
    <CareerForm @success="loadJobs" />
    <div>
      <div class="flex justify-between">
        <button @click="page -= 1" type="button" :disabled="page <= 1">
          Prev
        </button>
        <button @click="page += 1" type="button">Next</button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <ul v-else class="md:flex-1 space-y-3">
        <li v-for="job in jobs" :key="job._id">
          <CareerItem
            :title="job.title"
            :department="job.department"
            @edit="onEdit"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
