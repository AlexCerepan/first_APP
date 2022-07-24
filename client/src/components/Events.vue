<template>
  <div id="eventsBody">
    <HomeButton></HomeButton>
    <SearchInput></SearchInput>
  </div>
</template>
<script>
import HomeButton from "../assets/HomeButton.vue";
import SearchInput from "../assets/forEvents/SearchInput.vue";
export default {
  name: "Events",
  components: { HomeButton, SearchInput },
};
</script>

<style>
#eventsBody {
  width: 100%;
  height: 100vh;
  background: #101010;
}
</style>
