<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import CareerItem from './components/career-item.vue';

function onEdit(title) {
  console.log('handle edit in app', title);
}
</script>

<template>
  <ul class="md:flex-1 space-y-3">
    <li>
      <CareerItem title="Memer" department="UI / UX Design" @edit="onEdit" />
    </li>
    <li>
      <CareerItem
        title="Slack Chatter"
        department="Engineering"
        @edit="onEdit"
      />
    </li>
    <li>
      <CareerItem title="Janitor" department="Health/Welfare" @edit="onEdit" />
    </li>
  </ul>
</template>

<style></style>
