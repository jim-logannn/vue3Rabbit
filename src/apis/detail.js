import httpInstance from "@/utils/http";

export function getDetail(id){
    return httpInstance({
        url:"/goods",
        params:{
            id
        }
    })
}

export function getHotGoodsAPI({id,type,limit=3}){
    return httpInstance({
        url:"/goods/hot",
        id,
        type,
        limit
    })
}