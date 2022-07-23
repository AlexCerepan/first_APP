<template>
  <div id="homeBodyHomePage">
    <div id="citation">
      <span class="citationText">"If you work, it will work."</span>
      <p>22. 7. 2022 by Me</p>
    </div>
    <homeMenu></homeMenu>
  </div>
</template>

<script>
import homeMenu from "@/assets/HomeMenu.vue";
export default {
  name: "HomePage",
  components: { homeMenu },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200&display=swap");

* {
  margin: 0;
  padding: 0;
}
#homeBodyHomePage {
  width: 100%;
  height: 100vh;
  background: #101010;
}

#citation {
  z-index: 3;
  position: absolute;
  left: 35%;
  top: 23%;
  transform: translate(-50%, -50);
  color: white;
  font-family: "Roboto";
}

#citation span {
  font-size: 2em;
}
</style>
