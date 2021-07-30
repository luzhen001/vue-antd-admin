<template>
    <a-layout-sider :theme="sideTheme" :class="['side-menu', isMobile ? null : 'shadow']" width="256px" :collapsible="collapsible" v-model="collapsed" :trigger="null">
        <div :class="['logo', theme]">
            <router-link to="/dashboard/workplace">
                <img src="@/assets/images/logo.png" />
                <h1>{{systemName}}</h1>
            </router-link>
        </div>
        <i-menu :theme="theme" :collapsed="collapsed" :options="menuData" @select="onSelect" class="menu beauty-scroll" />
    </a-layout-sider>
</template>
<script>
import IMenu from './menu'
import { mapState } from 'vuex'
export default {
    name: 'SideMenu',
    components: { IMenu },
    props: {
        collapsible: {
            type: Boolean,
            required: false,
            default: false
        },
        collapsed: {
            type: Boolean,
            required: false,
            default: false
        },
        menuData: {
            type: Array,
            required: true
        },
        theme: {
            type: String,
            required: false,
            default: 'dark'
        }
    },
    computed: {
        sideTheme () {
            return this.theme == 'light' ? this.theme : 'dark'
        },
        ...mapState('setting', ['isMobile', 'systemName'])
    },
    methods: {
        onSelect (obj) {
            this.$emit('menuSelect', obj)
        }
    }
}
</script>
<style lang="less" scoped>
    .shadow {
        box-shadow: 2px 0 6px rgba(0, 21, 41, .35);
    }
    .side-menu {
        z-index: 10;
        overflow: hidden;
        min-height: 100vh;
        .logo {
            height: 64px;
            line-height: 64px;
            padding-left: 24px;
            position: relative;
            -webkit-transition: all .3s;
            transition: all .3s;
            overflow: hidden;
            border-bottom: 1px solid #000;
            &.light {
                background-color: #fff;
                h1 {
                    color: @primary-color;
                }
            }
            h1 {
                color: @menu-dark-highlight-color;
                font-size: 18px;
                margin: 0 0 0 12px;
                display: inline-block;
                vertical-align: middle;
            }
            img {
                width: 30px;
                vertical-align: middle;
            }
        }
    }
    .menu{
        padding: 0;
        overflow-y: auto;
        height: calc(100vh - 64px);
        /deep/.ant-menu-submenu-selected {
            color: @primary-color !important;
        }
        /deep/.ant-menu-item .anticon,
        /deep/.ant-menu-submenu-title .anticon {
            font-size: 17px;
        }
    }
</style>