import httpInstance from "@/utils/http.js"

/*
params: {
	orderState:0,
  page:1,
  pageSize:2
}
*/
export const getUserOrder = (params) => {
    return httpInstance({
      url:'/member/order',
      method:'GET',
      params
    })
  }