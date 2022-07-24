<template>
  <div class="buttonContainer">
    <router-link :to="{ name: 'home' }"
      ><i class="fa-solid fa-angle-left fa-1x"></i
    ></router-link>
  </div>
</template>
<script>
export default {
  name: "HomeButton",
};
</script>
<style>
.buttonContainer {
  position: absolute;
  left: 5%;
  top: 2%;
}

.buttonContainer i {
  color: white;
}

@media screen and (max-width: 425px) {
  .buttonContainer {
    position: absolute;
    left: 5%;
    top: 2%;
  }
}

@media screen and (min-width: 426px) and (max-width: 1024px) {
  .buttonContainer {
    position: absolute;
    left: 3%;
  }
}

@media screen and (min-width: 1025px) and (max-width: 2560px) {
  .buttonContainer {
    position: absolute;
    left: 2%;
  }
}
</style>
