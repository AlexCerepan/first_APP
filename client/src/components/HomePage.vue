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
  left: 43%;
  top: 29%;
  transform: translate(-50%, -50%);
  color: white;
  font-family: "DM Sans";
}

#citation span {
  font-size: 2em;
}

@media screen and (max-width: 375px) {
  #citation {
    top: 26%;
    left: 40%;
  }

  #citation span {
    font-size: 1.5em;
  }
}

@media screen and (min-width: 425px) and (max-width: 768px) {
  #citation {
    top: 20%;
    left: 40%;
  }
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  #citation {
    top: 26%;
    left: 40%;
  }
}

@media screen and (min-width: 1025px) and (max-width: 1440px) {
  #citation {
    top: 26%;
    left: 38%;
  }
}
</style>
