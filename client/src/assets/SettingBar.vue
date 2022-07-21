<template>
  <div id="toggler" @click="toggle()">
    <i class="fa-solid fa-bars fa-4x" id="settingIcon"></i>
  </div>
  <div id="theMenu" ref="clickedOn">
    <ul>
      <li><a href="#">something</a></li>
      <li><a href="#">something</a></li>
      <li><a href="#">something</a></li>
      <li><a href="#">something</a></li>
      <li><a href="#">something</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SettingBar",
  methods: {
    async toggle() {
      this.$refs.clickedOn.classList.toggle("active");
    },
  },
};
</script>

<style>
#toggler {
  position: absolute;
  left: 2%;
  top: 3%;
  color: #e5b35b;
  z-index: 3;
}

#togglet i {
  font-size: 5em;
  cursor: pointer;
}

#theMenu {
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  top: 0;
  left: -100%;
  z-index: 1;
  transition: 1s;
  background: #e2ddd5;
}

#theMenu ul {
  padding: 0;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

#theMenu ul li {
  list-style: none;
}

#theMenu ul li a {
  padding: 10px;
  display: inline-block;
  font-size: 4em;
  text-decoration: none;
  color: #3d8e91;
}
#theMenu.active {
  left: 0;
  overflow: auto;
}
</style>
