<template>
  <div class="click" @click="toggle">
    <div id="toggle" ref="toggled"></div>
    <div id="poss" ref="sideBar">
      <div id="parent">
        <div class="nav-container">
          <div class="navigation">
            <ul>
              <li class="item">
                <a href="#">
                  <span class="text">Home</span>
                  <span class="icon"><i class="fa-solid fa-house"></i></span>
                </a>
              </li>
              <li class="item">
                <a href="#">
                  <span class="text">Events</span>
                  <span class="icon"
                    ><i class="fa-solid fa-cake-candles"></i
                  ></span>
                </a>
              </li>
              <li class="item">
                <a href="#">
                  <span class="text">Todos</span>
                  <span class="icon"
                    ><i class="fa-solid fa-circle-check"></i>
                  </span>
                </a>
              </li>
              <li class="item">
                <a href="#">
                  <span class="text">Plan</span>
                  <span class="icon"
                    ><i class="fa-solid fa-calendar-days"></i
                  ></span>
                </a>
              </li>
              <li class="item">
                <a href="#">
                  <span class="text">Log In</span>
                  <span class="icon"
                    ><i class="fa-solid fa-image-portrait"></i
                  ></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  methods: {
    async toggle() {
      this.$refs.toggled.classList.toggle("active");
      this.$refs.sideBar.classList.toggle("active");
      console.log(this.$refs);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Smooch&display=swap");

#parent {
  width: 100px;
  height: 100vh;
}

#poss {
  position: fixed;
  float: right;
  width: 100px;
  height: 100vh;
  right: -300px;
  transition: 0.5s;
}

#poss.active {
  right: 0px;
}

template {
  padding: 0;
  margin: o;
  box-sizing: border-box;
}
#toggle {
  z-index: 2;
  float: right;
  position: fixed;
  top: 20px;
  right: 30px;
  width: 40px;
  height: 40px;
  background-color: #ffe135;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

#toggle::before {
  content: "";
  position: absolute;
  width: 25px;
  height: 4px;
  background: white;
  transform: translateY(-5px);
  transition: 0.2s;
}

#toggle::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 4px;
  background: white;
  transform: translateY(5px);
  transition: 0.2s;
}

#toggle.active::before {
  transform: translateY(0px) rotate(45deg);
}

#toggle.active::after {
  transform: translateY(0px) rotate(-45deg);
}

.nav-container {
  position: fixed;
  z-index: 1;
  display: flex;
  align-items: center;
  background-color: black;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.navigation {
  position: relative;
  min-height: 100vh;
  right: 0;
  overflow-x: hidden;
}

.navigation ul {
  padding: 0;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  width: 100px;
  transition: 0.5s;
}

.navigation ul li {
  position: relative;
  list-style: none;
  z-index: 1;
  width: 100px;
  height: 70px;
}

.navigation ul li a {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  font-family: Robo;
}

.navigation ul li a .icon {
  position: relative;
  display: block;
  font-size: 1.5em;
  transition: 0.5s;
  color: #ffe135;
}

.navigation ul li:hover a .icon {
  transform: translateX(-30px);
}

.navigation ul li a .text {
  position: absolute;
  color: #ffe135;
  font-weight: 400;
  font-size: 0.75em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  opacity: 0;
  transform: translateX(20px);
}

.navigation ul li:hover a .text {
  opacity: 1;
  transform: translateX(10px);
}
</style>
