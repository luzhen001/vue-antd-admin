<template>
    <div>
        <div v-for="i in colors" :key="i" :style="`height:200px;margin-bottom:30px;background:${i}`"></div>
        <back-top-up />
    </div>
</template>
<script>
import BackTopUp from '@/components/BackTop'
export default {
    name:'backTop',
    components:{
        BackTopUp
    },
    data(){
        return{
            colors: ['#f5222d', '#fa541c', '#fadb14', '#3eaf7c', '#13c2c2', '#1890ff', '#722ed1', '#eb2f96']
        }
    }
}
</script>