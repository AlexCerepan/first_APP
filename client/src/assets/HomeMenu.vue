<template>
  <div id="menuContainer">
    <div id="menuItem1" class="menuItem">
      <i class="fa-solid fa-book fa-2x"></i>
      <p>Books</p>
    </div>
    <div id="menuItem2" class="menuItem">
      <i class="fa-solid fa-gears fa-2x"></i>
      <p>Settings</p>
    </div>
    <div id="menuItem3" class="menuItem">
      <i class="fa-solid fa-list-ul fa-2x"></i>
      <p>ToDo</p>
    </div>
    <div id="menuItem4" class="menuItem">
      <i class="fa-solid fa-bullseye fa-2x"></i>
      <p>Goals</p>
    </div>
    <div id="menuItem5" class="menuItem">
      <i class="fa-solid fa-clipboard-check fa-2x"></i>
      <p>Done</p>
    </div>
    <div id="menuItem6" class="menuItem">
      <i class="fa-solid fa-calendar-plus fa-2x"></i>
      <p>Events</p>
    </div>
    <div id="menuItem7" class="menuItem">
      <i class="fa-solid fa-user-group fa-2x"></i>
      <p>Creators</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeMenu",
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200&display=swap");

#menuContainer {
  display: grid;
  justify-items: center;
  align-items: center;
  position: absolute;
  width: 400px;
  height: 400px;
  background-color: #101010;
  left: 48%;
  top: 48%;
  transform: translate(-50%, -50%);
}

.menuItem {
  cursor: pointer;
  box-sizing: border-box;
  text-align: center;
  color: #daa06d;
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #2e2e2e;
}

.menuItem i {
  margin-top: 25px;
}

.menuItem p {
  margin-top: 5px;
  font-family: "Poppins";
}

#menuItem2 {
  animation: movement2 2.3s ease forwards;
}

#menuItem3 {
  animation: movement3 2.3s ease forwards;
}

#menuItem4 {
  animation: movement4 2.3s ease forwards;
}

#menuItem5 {
  animation: movement5 2.3s ease forwards;
}

#menuItem6 {
  animation: movement6 2.3s ease forwards;
}

#menuItem7 {
  animation: movement7 2.3s ease forwards;
}

@keyframes movement2 {
  to {
    transform: translateX(-110px);
  }
}
@keyframes movement3 {
  to {
    transform: translateX(110px);
  }
}
@keyframes movement4 {
  to {
    transform: translate(-55px, -100px);
  }
}
@keyframes movement5 {
  to {
    transform: translate(55px, -100px);
  }
}
@keyframes movement6 {
  to {
    transform: translate(-55px, 100px);
  }
}
@keyframes movement7 {
  to {
    transform: translate(55px, 100px);
  }
}
</style>
