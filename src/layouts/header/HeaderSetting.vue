<template>
    <div class="icon_wrap">
        <a-icon type="setting" class="icon_18" @click="setSetting(true)"/>
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