import { defineStore } from "pinia"
import { computed, ref } from "vue"
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

    //单选功能
    const singleCheck=(skuId,selected)=>{
        //通过skuID找到要修改的那一项，然后把它的selected修改为传过来的selected
        const item=cartList.value.find(item=>item.skuId===skuId)
        item.selected=selected
    }

    //计算属性
    // 1.总的数量 所有项的count之和
    const allCount=computed(()=>{
        return cartList.value.reduce((a,c)=>a+c.count,0)
    })
    // 2. 总价 所有项的count*price之和
    const allPrice=computed(()=>{
        return cartList.value.reduce((a,c)=>a+c.count*c.price,0)
    })

    // 是否全选
    const isAll=computed(()=>{
        return cartList.value.every((item)=>{
            return item.selected
        })
    })

    //全选功能
    const selectAll=(selected)=>{
        cartList.value.forEach(item=>item.selected=selected)
    }

    // 已选择数量
    const selectedCount=computed(()=>{
        return cartList.value.filter(item=>item.selected).reduce((a,c)=>a+c.count,0)
    })
    // 已选择商品加钱合计
    const selectedPrice=computed(()=>{
        return cartList.value.filter(item=>item.selected).reduce((a,c)=>a+c.count*c.price,0)
    })

    return{
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleCheck,
        isAll,
        selectAll,
        selectedCount,
        selectedPrice
    }
},{
    persist:true
})