<template>
  <div id="homeBody">
    <SettingBar></SettingBar>
    <ActionButtons></ActionButtons>
  </div>
</template>

<script>
import ActionButtons from "../assets/ActionButtons.vue";
import SettingBar from "@/assets/SettingBar.vue";
export default {
  name: "HomePage",
  components: { ActionButtons, SettingBar },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#homeBody {
  width: 100%;
  height: 100vh;
  background-color: #3d8e91;
}
</style>
