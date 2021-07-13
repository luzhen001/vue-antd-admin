<template>
    <a-dropdown class="header-lang">
        <div>
            <a-icon type="global" />
        </div>
        <a-menu @click="val => setLang(val.key)" :selected-keys="[lang]" slot="overlay">
            <a-menu-item v-for="lang in langList" :key="lang.key">{{lang.key.toLowerCase() + ' ' + lang.name}}</a-menu-item>
        </a-menu>
    </a-dropdown>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name:'HeaderLanguage',
    data () {
        return {
            langList: [
                { key: 'CN', name: '简体中文', alias: '简体' },
                { key: 'HK', name: '繁體中文', alias: '繁體' },
                { key: 'US', name: 'English', alias: 'English' }
            ]
        }
    },
    computed:{
        ...mapState('setting', ['lang']),
    },
    methods:{
        ...mapMutations('setting', ['setLang'])
    }
}
</script>