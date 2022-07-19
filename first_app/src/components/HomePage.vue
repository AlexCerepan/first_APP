<template>
  <div>
    <NavBar></NavBar>
    <AnimatedLogo></AnimatedLogo>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "../assets/NavBar.vue";
import AnimatedLogo from "../assets/AnimatedLogo.vue";
export default {
  name: "HomePage",
  components: [NavBar, AnimatedLogo],
  data() {
    return {
      fetch_status: "fetching",
    };
  },
  created() {
    axios({
      method: "get",
      url: "http://localhost:8000/",
      responseType: "stream",
    })
      .then((response) => {
        this.fetch_status = "success";
        console.log(response.data);
      })
      .catch((error) => {
        this.fetch_status = "error";
      });
  },
  components: { NavBar, AnimatedLogo },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
