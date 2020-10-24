<template>
  <div id="app">
    <router-link to="/home">首页</router-link>
    <router-link to="/test">测试</router-link>
    <router-view></router-view>
    哈哈
    <h2>dfghjk ggl; hehe</h2>
    <test></test>
  </div>
</template>
<script>
// 1 引入组件 import  2 components声明 3使用
import Test from "./views/Test";
export default {
//2 components声明 3使用
  components: {
    Test
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
