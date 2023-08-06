import httpInstance from "@/utils/http";

export const getCheckoutAPI=()=>{
    return httpInstance({
        url:"/member/order/pre"
    })
}

//创建订单

export const createOrderAPI=(data)=>{
    return httpInstance({
        url:"/member/order",
        method:"POST",
        data
    })
}