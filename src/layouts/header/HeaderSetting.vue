<template>
    <a-icon type="setting" class="icon_18" @click="setShowSetting(true)"/>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    name:'HeaderSetting',
    methods:{
        ...mapMutations('setting',['setShowSetting'])
    }
}
</script>