import httpInstance from "@/utils/http"

export function getHomeBannerApi(params={}){
    //默认为1 商品为2
    const {distributionStie="1"}=params
    return httpInstance({
        url:"/home/banner",
        params:{
            distributionStie
        }
    })
}

export function getHomeNewApi(){
    return httpInstance({
        url:"/home/new"
    })
}

export function getHotAPI(){
    return httpInstance({
        url:"/home/hot"
    })
}

export function getProductApi(){
    return httpInstance({
        url:"/home/goods"
    })
}