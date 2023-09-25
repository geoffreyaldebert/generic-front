<script setup>
import { ref } from "vue";
import { RouterView, useRouter } from "vue-router";
import Navigation from "./components/Navigation.vue";
import config from "@/config";

const router = useRouter();
const query = ref("");

const updateQuery = (q) => {
  query.value = q;
};

const doSearch = () => {
  router.push({ name: "datasets", query: { q: query.value } });
};

const logotext = ref(config.website__rf_title);
const servicetitle = ref(config.website__title);
const logoOperator = ref(config.website__logo_operator);
</script>

<template>
  <DsfrHeader
    :service-title="servicetitle"
    service-description=""
    home-to="/"
    :quick-links="[]"
    :show-search="true"
    @search="doSearch"
    @update:modelValue="updateQuery"
    :logo-text="logotext"
    :operatorImgSrc="logoOperator"
    :operatorImgStyle="{ height: '60px' }"
  />

  <div class="fr-header__body">
    <div class="fr-container width-inherit">
      <Navigation />
      <RouterView />
    </div>
  </div>

  <DsfrFooter class="fr-mt-8w" :mandatory-links="[]"></DsfrFooter>
</template>

<!-- global styles -->
<style lang="scss">
.es__tiles__list {
  list-style-type: none;
}
.justify-end {
  justify-content: flex-end;
}
</style>
