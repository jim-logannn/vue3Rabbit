import httpInstance from "@/utils/http";

export const getCheckoutAPI=()=>{
    return httpInstance({
        url:"/member/order/pre"
    })
}