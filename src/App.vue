<template>
  <div id="app">
    <page-header></page-header>
    <router-view />
    <page-footer></page-footer>
  </div>
</template>
<script>
import PageHeader from '@/components/Layout/Header.vue';
import PageFooter from '@/components/Layout/Footer.vue';

export default {
  name: 'app',
  components: {
    PageHeader,
    PageFooter,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss">
@import "@/assets/stylesheets/main.scss";
</style>
