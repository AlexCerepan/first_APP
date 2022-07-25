<template>
  <div id="eventsBody">
    <HomeButton></HomeButton>
    <SearchInput @newSearch="show"></SearchInput>
    {{ logWrite }}
  </div>
</template>
<script>
import HomeButton from "../assets/HomeButton.vue";
import SearchInput from "../assets/forEvents/SearchInput.vue";
export default {
  name: "Events",
  data() {
    return {
      input: "",
    };
  },
  components: { HomeButton, SearchInput },
  methods: {
    show: function (showMessage) {
      console.log(showMessage);
    },
  },
};
</script>

<style>
#eventsBody {
  width: 100%;
  height: 100vh;
  background: #101010;
}
</style>
