import httpInstance from "@/utils/http";

export function getDetail(id){
    return httpInstance({
        url:"/goods",
        params:{
            id
        }
    })
}