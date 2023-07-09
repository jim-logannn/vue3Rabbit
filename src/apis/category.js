import httpInstance from "@/utils/http";

export function getCategoryApi(id){
    return httpInstance({
        url:"/category",
        params:{
            id
        }
    })
}

//二级分类列表数据
export const getCategoryFilterApi=(id)=>{
    return  httpInstance({
        url:"/category/sub/filter",
        params:{
            id
        }
    })
}