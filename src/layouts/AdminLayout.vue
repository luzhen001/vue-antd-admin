<template>
    <a-layout :class="['admin-layout']">
        <drawer v-if="isMobile" v-model="drawerOpen">
            <side-menu :theme="theme.mode" :menuData="menuData" :collapsed="false" :collapsible="false" @menuSelect="onMenuSelect" />
        </drawer>
        <side-menu v-if="!isMobile && showSideBar" :class="[fixedSideBar ? 'fixed-side' : '']" :theme="theme.mode"  :menuData="sideMenuData" :collapsed="collapsed" :collapsible="true" />
        <div v-if="fixedSideBar && !isMobile" :style="`width: ${sideMenuWidth}; min-width: ${sideMenuWidth};max-width: ${sideMenuWidth};`" class="virtual-side"></div>
        <drawer :visible="isShowSetting" placement="right">
            <div slot="handler">
                <a-icon v-show="isShowSetting" class="setting" type="close" @click="setShowSetting(false)" />
            </div>
            <setting />
        </drawer>
        <a-layout class="admin-layout-main">
            <admin-header :class="[{'fixed-tabs': fixedTabs, 'fixed-header': fixedHeader, 'multi-page': multiPage}]" :style="headerStyle" :menuData="headMenuData" :collapsed="collapsed" @toggleCollapse="toggleCollapse" />
            <a-layout-header :class="['virtual-header', {'fixed-tabs' : fixedTabs, 'fixed-header': fixedHeader, 'multi-page': multiPage}]" v-show="fixedHeader"></a-layout-header>
            <a-layout-content class="admin-layout-content" :class="{'no-multipage':!multiPage}" :style="`min-height: ${minHeight}px;`">
                <slot></slot>
            </a-layout-content>
            <a-layout-footer style="padding: 0px">
                <page-footer :link-list="footerLinks" :copyright="copyright" />
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script>
import AdminHeader from './header/AdminHeader'
import PageFooter from './footer/PageFooter'
import Drawer from '../components/tool/Drawer'
import SideMenu from '../components/menu/SideMenu'
import Setting from '../components/Setting'
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
    name: 'AdminLayout',
    components: { Setting, SideMenu, Drawer, PageFooter, AdminHeader },
    data () {
        return {
            minHeight: window.innerHeight - 164,
            collapsed: false,
            drawerOpen: false
        }
    },
    provide () {
        return {
            adminLayout: this
        }
    },
    watch: {
        $route (val) {
            this.setActivated(val)
        },
        layout () {
            this.setActivated(this.$route)
        },
        isMobile (val) {
            if (!val) {
                this.drawerOpen = false
            }
        }
    },
    computed: {
        ...mapState('setting', ['isMobile', 'theme', 'layout', 'footerLinks', 'copyright', 'fixedHeader', 'showSideBar', 'fixedSideBar', 'fixedTabs', 'isShowSetting', 'multiPage']),
        ...mapGetters('setting', ['firstMenu', 'subMenu', 'menuData']),
        sideMenuWidth () {
            if(this.isMobile){
                return this.collapsed ? '0' : '256px';
            }else{
                return this.collapsed ? '80px' : '256px';
            }
        },
        headerStyle () {
            let width = (this.fixedHeader && !this.isMobile && this.showSideBar) ? `calc(100% - ${this.sideMenuWidth})` : '100%'
            let position = this.fixedHeader ? 'fixed' : 'static';
            return `width: ${width}; position: ${position};`;
        },
        headMenuData () {
            const { layout, menuData, firstMenu } = this;
            return layout === 'mix' ? firstMenu : menuData;
        },
        sideMenuData () {
            const { layout, menuData, subMenu } = this;
            return layout === 'mix' ? subMenu : menuData;
        }
    },
    created () {
        this.correctPageMinHeight(this.minHeight - 12);
        this.setActivated(this.$route);
    },
    beforeDestroy () {
        this.correctPageMinHeight(-this.minHeight + 12);
    },
    methods: {
        ...mapMutations('setting', ['setShowSetting','correctPageMinHeight', 'setActivatedFirst']),
        toggleCollapse () {
            this.collapsed = !this.collapsed;
        },
        onMenuSelect () {
            this.toggleCollapse();
        },
        setActivated (route) {
            if (this.layout === 'mix') {
                let matched = route.matched;
                matched = matched.slice(0, matched.length - 1);
                const { firstMenu } = this;
                for (let menu of firstMenu) {
                    if (matched.findIndex(item => item.path === menu.fullPath) !== -1) {
                        this.setActivatedFirst(menu.fullPath);
                        break;
                    }
                }
            }
        }
    }
}
</script>
<style lang="less" scoped>
    .admin-layout {
        .side-menu {
            &.fixed-side {
                position: fixed;
                height: 100vh;
                left: 0;
                top: 0;
            }
        }
        .virtual-side {
            transition: all 0.2s;
        }
        .virtual-header {
            transition: all 0.2s;
            opacity: 0;
            &.fixed-tabs.multi-page:not(.fixed-header) {
                height: 0;
            }
        }
        .admin-layout-main {
            .admin-header {
                top: 0;
                right: 0;
                overflow: hidden;
                transition: all 0.2s;
                &.fixed-tabs.multi-page:not(.fixed-header) {
                    height: 0;
                }
            }
        }
        .admin-layout-content {
            padding: 0 10px 0;
            overflow: hidden;
        }
        .no-multipage{
            padding: 10px 10px 0;
        }
        .setting {
            background-color: @primary-color;
            color: @base-bg-color;
            border-radius: 5px 0 0 5px;
            line-height: 40px;
            font-size: 22px;
            width: 40px;
            height: 40px;
            box-shadow: -2px 0 8px @shadow-color;
        }
    }
</style>