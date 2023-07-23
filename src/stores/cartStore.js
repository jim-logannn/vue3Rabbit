import { defineStore } from "pinia"
import { ref } from "vue"
export const useCartStroe=defineStore("cart",()=>{
    //定义state
    const cartList=ref([])
    //定义action
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
    //删除购物车
    const delCart=(skuId)=>{
        // 思路：
        // 1.找到要删除项的下标值 - splace
        // 2.使用数组的过滤方法 - filter
        const idx=cartList.value.findIndex((item)=>{return skuId===item.skuId})
        cartList.value.splice(idx,1)
    }
    return{
        cartList,
        addCart,
        delCart
    }
},{
    persist:true
})