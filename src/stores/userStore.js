import { defineStore } from "pinia";
import { loginAPI } from "@/apis/user.js"
import { ref } from "vue";
import {useCartStroe} from "./cartStore"
import {mergeCartAPI} from "@/apis/cart"

export const useUserStore=defineStore("user",()=>{
    const cartStore=useCartStroe()
    // 1、定义管理用户数据的state
    const userInfo=ref({})
    // 2、定义获取接口的数据的action函数
    const getUserInfo=async({account,password})=>{
        const res=await loginAPI({account,password})
        userInfo.value=res.result
        //合并购物车的操作
        await mergeCartAPI(cartStore.cartList.map((item)=>{
            return {
                skuId:item.skuId,
                selected:item.selected,
                count:item.count
            }
        }))
        cartStore.updateNewList()
    }

    // 退出时清除用户数据
    const clearUserInfo=()=>{
        userInfo.value={}
        cartStore.clearCart()
    }
    // 3、以对象的格式把state和action return
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},{
    persist:true
})