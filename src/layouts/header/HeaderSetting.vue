<template>
    <div class="icon_wrap">
        <a-icon type="setting" class="icon_18" @click="setShowSetting(true)"/>
    </div>
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