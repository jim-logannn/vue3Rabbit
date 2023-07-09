<script setup>
import {getCategoryFilterApi, getSubCategoryAPI} from "@/apis/category"
import { onMounted, ref } from "vue";
import {useRoute} from "vue-router"
import GoodItem from "../Home/components/GoodItem.vue"
const route=useRoute()
const CategoryData=ref([])
const getCategoryFilter=async ()=>{
    const {result:res}=await getCategoryFilterApi(route.params.id)
    CategoryData.value=res
    console.log(res);
}
onMounted(()=>{
    getCategoryFilter()
})

const goodList=ref([])
const reqData=ref({
    categoryId:route.params.id,
    page:1,
    pageSize:20,
    sortField:"publishTime"
})
const getGoodList=async ()=>{
    const {result:res}=await getSubCategoryAPI(reqData.value)
    goodList.value=res.items
}
onMounted(()=>{
    getGoodList()
})

//tab切换回调
const tabChange=()=>{
    console.log(reqData.value.sortField);
    reqData.value.page=1
    getGoodList()
}

//底部加载更多
const disabled=ref(false)
const load=async ()=>{
    reqData.value.page++
    const {result:res}=await getSubCategoryAPI(reqData.value)
    goodList.value=[...goodList.value,...res.items]
    if(res.items.length==0){
        disabled.value=true
    }
}
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${CategoryData.parentId}` }">{{CategoryData.parentName}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{CategoryData.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
         <!-- 商品列表-->
         <GoodItem v-for="item in goodList" :key="item.id" :goods="item"></GoodItem>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>