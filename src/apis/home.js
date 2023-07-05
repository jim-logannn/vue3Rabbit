import httpInstance from "@/utils/http"

export function getHomeBannerApi(){
    return httpInstance({
        url:"/home/banner"
    })
}