<template>
    <a-layout-header :class="[headerTheme, 'admin-header']">
        <div :class="['admin-header-wide', layout, pageWidth]">
            <router-link v-if="isMobile || layout === 'head'" to="/" :class="['logo', isMobile ? null : 'pc', headerTheme]">
                <img width="32" src="@/assets/images/logo.png" />
                <h1>{{systemName}}</h1>
            </router-link>
            <a-icon v-if="layout !== 'head' && !isMobile" class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="toggleCollapse" />
            <header-breadcrumb v-if="!isMobile" class="admin-header-mid" />
            <div :class="['admin-header-right', headerTheme]">
                <header-notice class="header-item" />
                <screen-full class="header-item" />
                <header-language class="header-item" />
                <header-avatar class="header-item" />
            </div>
        </div>
    </a-layout-header>
</template>
<script>
import HeaderNotice from './HeaderNotice'
import HeaderAvatar from './HeaderAvatar'
import HeaderLanguage from './HeaderLanguage'
import HeaderBreadcrumb from './HeaderBreadcrumb'
import ScreenFull from '@/components/screenFull'
import { mapState } from 'vuex'
export default {
    name: 'AdminHeader',
    components: { HeaderBreadcrumb,ScreenFull,HeaderAvatar, HeaderNotice,HeaderLanguage },
    props: ['collapsed'],
    data () {
        return {}
    },
    computed: {
        ...mapState('setting', ['theme', 'isMobile', 'layout', 'systemName', 'pageWidth']),
        headerTheme () {
            if (this.layout == 'side' && this.theme.mode == 'dark' && !this.isMobile) {
                return 'light'
            }
            return this.theme.mode
        }
    },
    methods: {
        toggleCollapse () {
            this.$emit('toggleCollapse')
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
        background: @base-bg-color;
        .head-menu {
            height: 64px;
            box-shadow: none;
            line-height: 64px;
            vertical-align: middle;
        }
        &.dark {
            color: white;
            background: @header-bg-color-dark;
        }
        &.night {
            .head-menu {
                background: @base-bg-color;
            }
        }
        .admin-header-wide {
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
            .trigger {
                font-size: 20px;
                cursor: pointer;
                transition: color 0.3s;
                &:hover {
                    color: @primary-color;
                }
            }
            .admin-header-mid{
                flex: 1 1 auto;
                margin-left: 30px;
            }
            .admin-header-right {
                float: right;
                display: flex;
                color: inherit;
                .header-item {
                    height: 100%;
                    color: inherit;
                    padding: 0 12px;
                    cursor: pointer;
                    align-self: center;
                    a {
                        color: inherit;
                        i {
                            font-size: 18px;
                        }
                    }
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