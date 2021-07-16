<template>
    <div class="set-wrap">
        <setting />
    </div>
</template>
<script>
import Setting from '@/components/setting/Setting'
export default {
    name:'CustomSetting',
    components:{
        Setting
    },
}
</script>
<style lang="less" scoped>
    .set-wrap{
        width: 50%;
        .side-setting{
            padding:  0 12px;
        }
    }
</style>