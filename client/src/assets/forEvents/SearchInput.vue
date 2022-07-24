<template>
  <div id="searchBarContainer">
    <input type="search" id="search" />
  </div>
</template>
<script>
export default {
  name: "searchInput",
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
