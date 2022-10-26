<template>
  <el-header>
    <div class="l-content">
      <!-- 图标的展示 -->
      <el-button size="samll" plain @click="handleCollapse">
        <el-icon :size="20">
          <Menu />
        </el-icon>
      </el-button>
      <el-breadcrumb separator="/" class="bread">
        <!-- 首页一定存在，所以直接写死 -->
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item :to="current.path" v-if="current">{{current.label}}</el-breadcrumb-item>
  </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
            <img class="user" :src="getImgSrc('user')" alt=""/>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click="handleLoginOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
import { computed } from '@vue/reactivity';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import {useStore} from 'vuex'
export default defineComponent({
    setup(){
      let store=useStore()
        // const imgSrc=require("../assets/images/1.jpg")
        const getImgSrc=(user)=>{
            return new URL(`../assets/images/1.jpg`,import.meta.url).href;
        };

        // 折叠侧边栏
        // 调用vuex中的mutations方法
        let handleCollapse = () =>{
          store.commit('updateIsCollapse');
        }

        // 计算属性
        const current = computed(()=>{
          return store.state.currentMenu
        });
        // 退出登录
        const router=useRouter();
        const handleLoginOut=()=>{
          store.commit('cleanMenu');
          router.push({
            name:'login',
          })
        }
    return{
        getImgSrc,
        handleCollapse,
        current,
        handleLoginOut
    }
}
})

</script>


<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: #333;
}
.r-content .user{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.l-content{
  display: flex;
  align-items: center;
}
.l-content h3{
  color: #fff;
}
.l-content .el-button{
  margin-right: 20px;
}

.bread /deep/ span{
  color:#fff !important;
  cursor: pointer !important; 
}
</style>
