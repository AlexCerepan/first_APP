<template>
  <div>
    <NavBar></NavBar>
    <h1>Home page</h1>
    <p class="lead">{{ fetch_status }}</p>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "../assets/NavBar.vue";
export default {
  name: "HomePage",
  components: [NavBar],
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
  components: { NavBar },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
