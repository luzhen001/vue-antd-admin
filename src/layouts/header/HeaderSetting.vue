<template>
    <div>
        <a-icon type="setting" @click="setSetting(true)"/>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    name:'HeaderSetting',
    methods:{
        ...mapMutations('setting',['setSetting'])
    }
}
</script>