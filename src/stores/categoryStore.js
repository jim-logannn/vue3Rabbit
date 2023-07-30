import { ref } from 'vue'
import { defineStore } from 'pinia'
import {getCategoryAPI} from "@/apis/layout.js"

export const useCategoryStore = defineStore('category', () => {
    //导航列表的数据管理
    // stage导航列表数据
    const categoryList=ref([])
    // action获取导航数据的方法
    const getCateGory=async()=>{
      const {result:res}=await getCategoryAPI()
      console.log(res);
      categoryList.value=res
    }
    return{
        categoryList,
        getCateGory
    }
})
