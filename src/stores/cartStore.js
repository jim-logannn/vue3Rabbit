import { defineStore } from "pinia"
import { ref } from "vue"
export const useCartStroe=defineStore("cart",()=>{
    const cartList=ref([])
    const addCart=(goods)=>{
        //添加购物车操作
        //已经添加过：count+1
        // 没有添加过：直接pass
        // 思路：通过匹配传递过来的商品对象中的skuId能不能再cartList中找到，找到了就是添加过了
        const item=cartList.value.find((item)=>{return goods.skuId===item.skuId})
        if(item){
            //找到了
            item.count++
        }else{
            cartList.value.push(goods)
        }
    }
    return{
        cartList,
        addCart
    }
},{
    persist:true
})