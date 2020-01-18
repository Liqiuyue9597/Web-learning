<template>
  <div>
    <div class="topbar bg-black py-2 pb-3 px-5 d-flex ai-center">
      <img src="../assets/image/logo.png" height="33" />
      <div class="flex-1 px-3">
        <div class="text-white fs-lg">王者荣耀</div>
        <div class="text-gray-1 fs-xxs pt-1">团队成就更多</div>
      </div>
      <button type="button" class="btn bg-primary">立即下载</button>
    </div>
    <div class="bg-primary py-4">
      <div class="nav d-flex jc-around text-white fs-lg">
        <div class="nav-item active">
          <router-link class="nav-link" tag="div" to="/">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">赛事中心</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'main',
}
</script>

<style>
</style>