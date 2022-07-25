<template>
  <div id="searchBarContainer">
    <input type="text" placeholder="search Events" @input="searched" />
  </div>
</template>

<script>
export default {
  name: "searchInput",
  methods: {
    searched: function (event) {
      const message = event.target.value;
      this.$emit("newSearch", message);
    },
  },
};
</script>

<style>
#searchBarContainer {
  position: absolute;
  left: 29%;
  top: 10%;
  box-sizing: border-box;
}

#searchBarContainer input {
  border-radius: 60px;
  background-color: white;
  border: none;
  width: 300%;
  height: 40px;
  outline: none;
  padding-left: 20px;
}
</style>
