<template>
    <div class="page-header-index-wide">
        <a-card :bordered="false" :bodyStyle="{ padding: '16px 0', height: '100%' }" :style="{ height: '100%' }">
            <a-tabs default-active-key="1" tab-position="left" size="default">
                <a-tab-pane key="1" :tab="$t('basic.basicSet')">
                    <basic-setting />
                </a-tab-pane>
                <a-tab-pane key="2" :tab="$t('safe.safeSet')">
                    <safe-setting />
                </a-tab-pane>
                <a-tab-pane key="3" :tab="$t('custome.customeSet')">
                    <custom-setting />
                </a-tab-pane>
                <a-tab-pane key="4" :tab="$t('account.accountBind')">
                    <binding />
                </a-tab-pane>
                <a-tab-pane key="5" :tab="$t('message.notification')">
                    <notification />
                </a-tab-pane>
            </a-tabs>
        </a-card>
    </div>
</template>
<script>
import BasicSetting from './BasicSetting'
import SafeSetting from './SafeSetting'
import CustomSetting from './CustomSetting'
import Binding from './Binding'
import Notification from './Notification'
export default {
    components: { BasicSetting,SafeSetting,CustomSetting,Binding,Notification},
    i18n: require('./i18n'),
    data () {
          return {
            mode: 'inline',

            openKeys: [],
            selectedKeys: [],

            // cropper
            preview: {},
            option: {
                img: '/avatar2.jpg',
                info: true,
                size: 1,
                outputType: 'jpeg',
                canScale: false,
                autoCrop: true,
                // 只有自动截图开启 宽度高度才生效
                autoCropWidth: 180,
                autoCropHeight: 180,
                fixedBox: true,
                // 开启宽度和高度比例
                fixed: true,
                fixedNumber: [1, 1]
            },

            pageTitle: ''
        }
    },
    mounted () {
        this.updateMenu()
    },
    methods: {
        onOpenChange (openKeys) {
            this.openKeys = openKeys
        },
        updateMenu () {
            const routes = this.$route.matched.concat()
            this.selectedKeys = [routes.pop().path]
        }
    },
    // watch: {
    //     '$route' (val) {
    //         this.updateMenu()
    //     }
    // }
}
</script>
<style lang="less" scoped>
    .account-settings-info-main {
        width: 100%;
        display: flex;
        height: 100%;
        overflow: auto;
        &.mobile {
            display: block;
            .account-settings-info-left {
                border-right: unset;
                border-bottom: 1px solid #e8e8e8;
                width: 100%;
                height: 50px;
                overflow-x: auto;
                overflow-y: scroll;
            }
            .account-settings-info-right {
                padding: 20px 40px;
            }
        }
        .account-settings-info-left {
            border-right: 1px solid #e8e8e8;
            width: 224px;
        }
        .account-settings-info-right {
            flex: 1 1;
            padding: 8px 40px;
            .account-settings-info-title {
                color: rgba(0, 0, 0, 0.85);
                font-size: 20px;
                font-weight: 500;
                line-height: 28px;
                margin-bottom: 12px;
            }
            .account-settings-info-view {
                padding-top: 12px;
            }
        }
    }
</style>