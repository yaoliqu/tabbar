<template>
    <tab-bar>
      <tab-bar-item path="/home" >
            <img slot="item-icon" src="../assets/img/tabbar/one.svg" alt="">
            <img slot="item-icon-active" src="../assets/img/tabbar/one-active.svg" alt="">
            <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <img slot="item-icon" src="../assets/img/tabbar/two.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/two-active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/car" activeColor="blue">
        <img slot="item-icon" src="../assets/img/tabbar/three.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/three-active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
       <tab-bar-item path="/profile" activeColor="blue">
        <img slot="item-icon" src="../assets/img/tabbar/four.svg" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/four-active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'
export default {
  name: 'Maintabbar',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>
</style>
