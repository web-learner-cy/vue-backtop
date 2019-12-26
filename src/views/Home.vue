<template>
  <div class="home">
    <el-scrollbar wrapStyle="overflow-x: hidden;" style="height:100%;">
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
      <HelloWorld msg="test backtop" />
      <HelloWorld msg="test backtop1" />
    </el-scrollbar>
    <backtop-render target=".el-scrollbar__wrap" :bottom="100" :right="100">
      <div>UP</div>
    </backtop-render>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import backtop from "@/components/Backtop.vue";
import backtopRender from "@/components/Backtop-render";

export default {
  name: "home",
  components: {
    HelloWorld,
    // backtop,
    backtopRender
  }
};
</script>
<style lang="scss">
.home {
  height: 100%;
}
</style>
