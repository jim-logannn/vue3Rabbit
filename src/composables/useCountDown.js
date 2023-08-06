import {computed, onUnmounted, ref} from "vue"
import dayjs from "dayjs"
//封装倒计时逻辑函数
export const useCountDown=()=>{
    // 1、响应式的数据
    let timer=null
    const time=ref(0)
    //格式化时间为xx分xx秒
    const formatTime=computed(()=>{
        return dayjs.unix(time.value).format("mm分ss秒")
    })
    // 2、开启倒计时的函数
    const start=(currentTime)=>{
        //开始倒计时的逻辑
        //核心逻辑的编写：每隔1s就减1
        time.value=currentTime
        timer=setInterval(() => {
            time.value--
        }, 1000);
    }
    onUnmounted(()=>{
        timer&&clearInterval(timer)
    })
    //组件销毁时清除定时器
    return {
        formatTime,
        start
    }
}