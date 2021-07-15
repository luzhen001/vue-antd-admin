<template>
    <div class="side-setting">
        <setting-item :title="$t('theme.title')" class="set_item">
            <img-checkbox-group @change="values => setTheme({...theme, mode: values[0]})" :default-values="[theme.mode]">
                <img-checkbox :title="$t('theme.dark')" :img="darkStyle" value="dark" />
                <img-checkbox :title="$t('theme.light')" :img="lightStyle" value="light" />
                <img-checkbox :title="$t('theme.night')" :img="nightStyle" value="night" />
            </img-checkbox-group>
        </setting-item>
        <a-divider />
        <setting-item :title="$t('theme.color')" class="set_item">
            <color-checkbox-group @change="(values, colors) => setTheme({...theme, color: colors[0]})" :defaultValues="[palettes.indexOf(theme.color)]" :multiple="false">
                <color-checkbox v-for="(color, index) in palettes" :key="index" :color="color" :value="index" />
            </color-checkbox-group>
        </setting-item>
        <a-divider />
        <setting-item :title="$t('navigate.layout')">
            <a-list :split="false">
                <a-list-item>
                    {{$t('navigate.content.title')}}
                    <a-select :getPopupContainer="getPopupContainer" :value="pageWidth" @change="setPageWidth" class="select-item" size="small" slot="actions">
                        <a-select-option value="fluid">{{$t('navigate.content.fluid')}}</a-select-option>
                        <a-select-option value="fixed">{{$t('navigate.content.fixed')}}</a-select-option>
                    </a-select>
                </a-list-item>
                <a-list-item>
                    {{$t('navigate.fixedHeader')}}
                    <a-switch :checked="fixedHeader" slot="actions" @change="setFixedHeader" />
                </a-list-item>
                <a-list-item>
                    {{$t('navigate.showSidebar')}}
                    <a-switch :checked="showSideBar" slot="actions" @change="setShowSideBar" />
                </a-list-item>
                <a-list-item>
                    {{$t('navigate.fixedSideBar')}}
                    <a-switch :checked="fixedSideBar" slot="actions" @change="setFixedSideBar" />
                </a-list-item>
                <a-list-item>
                    {{$t('other.multiPages')}}
                    <a-switch :checked="multiPage" slot="actions" @change="setMultiPage" />
                </a-list-item>
            </a-list>
        </setting-item>
        <a-divider />  <setting-item :title="$t('animate.title')">
            <a-list :split="false">
                <a-list-item>
                    {{$t('animate.disable')}}
                    <a-switch :checked="animate.disabled" slot="actions" @change="val => setAnimate({...animate, disabled: val})" />
                </a-list-item>
                <a-list-item>
                    {{$t('animate.effect')}}
                    <a-select :value="animate.name" :getPopupContainer="getPopupContainer" @change="val => setAnimate({...animate, name: val})" class="select-item" size="small" slot="actions">
                        <a-select-option :key="index" :value="item.name" v-for="(item, index) in animates">{{item.alias}}</a-select-option>
                    </a-select>
                </a-list-item>
                <a-list-item>
                    {{$t('animate.direction')}}
                    <a-select :value="animate.direction" :getPopupContainer="getPopupContainer" @change="val => setAnimate({...animate, direction: val})" class="select-item" size="small" slot="actions">
                        <a-select-option :key="index" :value="item" v-for="(item, index) in directions">{{item}}</a-select-option>
                    </a-select>
                </a-list-item>
            </a-list>
        </setting-item>
        <a-divider />
        <setting-item :title="$t('other.title')">
            <a-list :split="false">
                <a-list-item>
                    {{$t('other.weekMode')}}
                    <a-switch :checked="weekMode" slot="actions" @change="setWeekMode" />
                </a-list-item>
                
            </a-list>
        </setting-item>
        <setting-item class="set_item">
            <a-button @click="saveSetting" type="primary" icon="save">{{$t('save')}}</a-button>
            <a-button @click="resetSetting" type="dashed" icon="redo" style="float: right">{{$t('reset')}}</a-button>
        </setting-item>
    </div>
</template>
<script>
import SettingItem from './SettingItem'
import { ColorCheckbox, ImgCheckbox } from '@/components/checkbox'
import { mapState, mapMutations } from 'vuex'
import { setting } from '@/config/default'
import sysConfig from '@/config/config'
import fastEqual from 'fast-deep-equal'
import deepMerge from 'deepmerge'
import darkStyle from '@/assets/images/set_dark_style.svg'
import lightStyle from '@/assets/images/set_light_style.svg'
import nightStyle from '@/assets/images/set_night_style.svg'
const ColorCheckboxGroup = ColorCheckbox.Group
const ImgCheckboxGroup = ImgCheckbox.Group
export default {
    name: 'Setting',
    i18n: require('./i18n'),
    components: { ImgCheckboxGroup, ImgCheckbox, ColorCheckboxGroup, ColorCheckbox, SettingItem },
    data () {
        return {
            darkStyle,
            lightStyle,
            nightStyle
        }
    },
    computed: {
        directions () {
            return this.animates.find(item => item.name == this.animate.name).directions
        },
        ...mapState('setting', [
            'theme',
            'layout',
            'animate',
            'animates',
            'palettes',
            'multiPage',
            'weekMode',
            'fixedHeader',
            'showSideBar',
            'fixedSideBar',
            'pageWidth'
        ])
    },
    watch: {
        'animate.name': function (val) {
            this.setAnimate({ name: val, direction: this.directions[0] })
        }
    },
    methods: {
        ...mapMutations('setting', [
            'setTheme',
            'setMultiPage',
            'setWeekMode',
            'setFixedSideBar',
            'setShowSideBar',
            'setFixedHeader',
            'setAnimate',
            'setSetting',
            'setPageWidth'
        ]),
        getPopupContainer () {
            return this.$el.parentNode;
        },
        saveSetting () {
            this.$message.destroy();
            const closeMessage = this.$message.loading('正在保存到本地，请稍后...', 0);
            const config = this.extractConfig(true);
            if(config.isShowSetting){
                config.isShowSetting = false;
            }
            localStorage.setItem(process.env.VUE_APP_SETTING_KEY, JSON.stringify(config));
            setTimeout(closeMessage, 1500);
            setTimeout(() => {
                this.setSetting(false);
            }, 1000);
        },
        resetSetting () {
            this.$confirm({
                title: '重置主题会刷新页面，当前页面内容不会保留，确认重置？',
                centered:true,
                onOk () {
                    localStorage.removeItem(process.env.VUE_APP_SETTING_KEY);
                    window.location.reload();
                    setTimeout(() => {
                        this.setSetting(false);
                    }, 1000);
                }
            })
        },
        //提取配置
        extractConfig (local = false) {
            let config = {};
            let mySetting = this.$store.state.setting;
            let dftSetting = local ? deepMerge(setting, sysConfig) : setting;
            Object.keys(mySetting).forEach(key => {
                const dftValue = dftSetting[key];
                const myValue = mySetting[key];
                if (dftValue != undefined && !fastEqual(dftValue, myValue)) {
                    config[key] = myValue;
                }
            })
            return config
        }
    }
}
</script>
<style lang="less" scoped>
    .side-setting {
        min-height: 100%;
        padding: 24px;
        font-size: 14px;
        line-height: 1.5;
        word-wrap: break-word;
        background-color: @base-bg-color;
        .flex {
            display: flex;
        }
        .set_item{
            padding: 0 0 10px;
        }
        .select-item {
            width: 80px;
        }
        .ant-divider-horizontal{
            margin: 10px 0 15px;
        }
    }
</style>