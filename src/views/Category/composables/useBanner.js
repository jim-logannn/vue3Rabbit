//封装banner轮播图相关的业务代码
import { ref, onMounted } from "vue"
import {getHomeBannerApi} from "@/apis/home.js"
export function useBanner(){
    const bannerData=ref([])
    const getHomeBanner=async()=>{
    const {result:res}=await getHomeBannerApi({
        distributionStie:"2"
    })
    bannerData.value=res
    }
    onMounted(()=>{
        getHomeBanner()
    })
    return{
        bannerData
    }
}