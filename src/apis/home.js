import httpInstance from "@/utils/http"

export function getHomeBannerApi(){
    return httpInstance({
        url:"/home/banner"
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