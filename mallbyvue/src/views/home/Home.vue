<template>
<div id="home">
  <nav-bar><slot slot="center">购物街</slot></nav-bar>
</div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"
export default {
  name: "Home",
  components: {
    NavBar
  }
}
</script>

<style>

</style>