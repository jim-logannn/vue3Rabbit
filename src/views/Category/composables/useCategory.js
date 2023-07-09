//封装分类数据业务相关代码
import {getCategoryApi} from "@/apis/category.js"
import {onBeforeRouteUpdate, useRoute} from "vue-router"
import { ref, onMounted } from "vue"
export function useCategory(){
    const categoryData=ref({})
    const route=useRoute()
    const getCategory=async(id=route.params.id)=>{
        const {result:res}=await getCategoryApi(id)
        categoryData.value=res
        console.log(res);
    }
    onMounted(()=>{
        getCategory()
    })
    // 目标：路由参数变化的时候，可以把分类数据接口重新发送
    onBeforeRouteUpdate((to)=>{
        console.log("路由变化了");
        console.log(to);
        // 存在问题：使用最新的路由参数请求最新的分类数据
        getCategory(to.params.id)
    })
    return{
        categoryData
    }
}