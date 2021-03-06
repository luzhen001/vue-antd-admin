<template>
    <a-layout-header :class="[headerTheme, 'admin-header']">
        <div :class="['admin-header-wide', layout, pageWidth]">
            <router-link v-if="isMobile || layout === 'head'" to="/" :class="['logo', isMobile ? null : 'pc', headerTheme]">
                <img width="32" src="@/assets/images/logo.png" />
            </router-link>
            <div class="admin-header-left">
                <a-icon v-if="layout !== 'head' && !isMobile" class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="toggleCollapse" />
            </div>
            <header-breadcrumb v-if="!isMobile" class="admin-header-mid" />
            <div :class="['admin-header-right', headerTheme]">
                <a-tooltip placement="bottom" title="消息">
                    <header-notice class="header-item" />
                </a-tooltip>
                <a-tooltip placement="bottom" :title="isFullScreen ? '退出全屏' : '全屏'">
                    <screen-full class="header-item" />
                </a-tooltip>
                <a-tooltip placement="bottom" title="设置">
                    <header-setting class="header-item" />
                </a-tooltip>
                <header-language class="header-item" />
                <header-avatar class="header-item" />
            </div>
        </div>
    </a-layout-header>
</template>
<script>
import HeaderBreadcrumb from './HeaderBreadcrumb'
import HeaderNotice from './HeaderNotice'
import ScreenFull from '@/components/ScreenFull'
import HeaderSetting from './HeaderSetting'
import HeaderLanguage from './HeaderLanguage'
import HeaderAvatar from './HeaderAvatar'
import { mapState } from 'vuex'
export default {
    name: 'AdminHeader',
    components: { HeaderBreadcrumb, HeaderNotice, ScreenFull, HeaderSetting, HeaderLanguage, HeaderAvatar },
    props: ['collapsed'],
    data () {
        return {}
    },
    computed: {
        ...mapState('setting', ['theme', 'isMobile', 'isFullScreen', 'layout', 'systemName', 'pageWidth','showSideBar']),
        headerTheme () {
            if (this.layout == 'side' && this.theme.mode == 'dark' && !this.isMobile) {
                return 'dark';
            }
            return this.theme.mode;
        }
    },
    methods: {
        toggleCollapse () {
            if(!this.showSideBar){
                this.$message.destroy();
                this.$message.warning('菜单栏已隐藏，暂无法点击！');
                return;
            }
            this.$emit('toggleCollapse');
        }
    }
}
</script>
<style lang="less" scoped>
    .admin-header {
        z-index: 2;
        padding: 0 12px;
        position: relative;
        box-shadow: @shadow-down;
        .head-menu {
            height: 64px;
            box-shadow: none;
            line-height: 64px;
            vertical-align: middle;
        }
        &.dark {
            color: @menu-dark-highlight-color;
        }
        &.light {
            color: #666;
            background: @base-bg-color;
        }
        &.night {
            .head-menu {
                background: @base-bg-color;
            }
        }
        .admin-header-wide {
            height: inherit;
            &.head.fixed {
                max-width: 1400px;
                margin: auto;
                padding-left: 0;
            }
            &.side {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .logo {
                height: 64px;
                line-height: 58px;
                vertical-align: top;
                display: inline-block;
                cursor: pointer;
                font-size: 16px;
                color: inherit;
                img {
                    vertical-align: middle;
                }
                h1 {
                    color: inherit;
                    font-size: 14px;
                    display: inline-block;
                }
            }
            .admin-header-left {
                height: inherit;
                display: flex;
                align-items: center;
                .trigger {
                    font-size: 20px;
                    cursor: pointer;
                    transition: color 0.3s;
                    &:hover {
                        color: @primary-color;
                    }
                }
            }
            .admin-header-mid {
                color: inherit;
                flex: 1 1 auto;
                opacity: 0.8;
                margin-left: 30px;
            }
            .admin-header-right {
                height: 100%;
                float: right;
                display: flex;
                color: inherit;
                .header-item {
                    height: inherit;
                    color: inherit;
                    padding: 0 12px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                }
                each(@theme-list, {
                        &.@{value} .header-item {
                            &:hover {
                                @class: ~'hover-bg-color-@{value}';
                                background-color: @@class;
                            }
                        }
                    }
                )
            }
        }
    }
</style>