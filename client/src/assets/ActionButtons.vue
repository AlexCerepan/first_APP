<template>
  <SettingBar></SettingBar>
  <div id="buttonPack">
    <ul>
      <li>
        <a href=""><h1>Events</h1></a>
      </li>
      <li>
        <a href=""><h1>E-List</h1></a>
      </li>
      <li>
        <a href=""><h1>Tasks</h1></a>
      </li>
      <li>
        <a href=""><h1>T-Done</h1></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Action Buttons",
  methods: {},
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#buttonPack {
  position: absolute;
  top: 47%;
  left: 48%;
  transform: translate(-50%, -50%);
  display: flexbox;
}
#buttonPack ul li {
  padding-top: 10px;
  list-style: none;
  margin: 0;
}

#buttonPack ul li a {
  color: #e2ddd5;
  text-decoration: none;
}

#buttonPack ul li a h1 {
  font-size: 4em;
}
</style>
