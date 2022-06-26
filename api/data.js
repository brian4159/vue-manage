import axios from "./axios";


export const getData = ()=>{
    return axios.request({
        url:'/home/getData'
    })
}
export const getUser= (params)=>{
    return axios.request({
        url:'/user/getUser',
        method:'get',
        params
   })
}
export  const getMenu = (param)=>{
    return axios.request({
                url:'/permission/getMenu',
                method:'post',
                data:param
            })
}