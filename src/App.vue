<template>
  <router-view></router-view>
</template>
<script setup>
// 当刷新页面时，数据不丢失
// import { useRouter } from 'vue-router';
// import { useStore } from 'vuex';

// const store=useStore()
// const router=useRouter()
// store.commit('addMenu',router)
</script>
<style scoped>
#app{
  height: 100%;
}
</style>
