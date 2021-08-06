<template>
    <div class="login_wrap" :style="'background:url('+loginBg+') no-repeat center center / cover'">
        <div class="content">
            <div class="header">
                <img src="@/assets/images/logo.png" alt="logo" />
                <span>{{systemName}}</span>
            </div>
            <div class="login">
                <a-form>
                    <a-tabs size="large" :tabBarStyle="{textAlign: 'center'}" style="padding: 0 2px;">
                        <a-tab-pane tab="忘记密码" key="1">
                            <a-form-item>
                                <a-input size="large" placeholder="请输入手机号码">
                                    <a-icon slot="prefix" type="mobile" class="icon_16" />
                                </a-input>
                            </a-form-item>
                            <a-form-item>
                                <a-row :gutter="8" style="margin: 0 -4px">
                                    <a-col :span="16">
                                        <a-input size="large" placeholder="请输入验证码">
                                            <a-icon slot="prefix" type="mail" class="icon_16" />
                                        </a-input>
                                    </a-col>
                                    <a-col :span="8" style="padding-left: 4px">
                                        <a-button style="width: 100%" class="captcha-button" size="large">获取验证码</a-button>
                                    </a-col>
                                </a-row>
                            </a-form-item>
                            <a-form-item>
                                <a-input size="large" placeholder="请输入密码" autocomplete="autocomplete" type="password" v-decorator="['password', {rules: [{ required: false, message: '请输入密码', whitespace: true}]}]">
                                    <a-icon slot="prefix" type="lock" class="icon_16" />
                                </a-input>
                            </a-form-item>
                            <a-form-item>
                                <a-input size="large" placeholder="请输入确认密码" autocomplete="autocomplete" type="password" v-decorator="['password', {rules: [{ required: false, message: '请输入确认密码', whitespace: true}]}]">
                                    <a-icon slot="prefix" type="lock" class="icon_16" />
                                </a-input>
                            </a-form-item>
                            <a-form-item style="margin-top: 34px">
                                <a-button style="width: 40%;" size="large" type="primary">修改密码</a-button>
                                <a-button style="width: 40%;float:right;" size="large" type="default" @click="handleBack">返回登录</a-button>
                            </a-form-item>
                        </a-tab-pane>
                    </a-tabs>
                </a-form>
            </div>
        </div>
        <page-footer :link-list="footerLinks" :copyright="copyright"></page-footer>
    </div>
</template>
<script>
import PageFooter from '@/layouts/footer/PageFooter'
import loginBg from '@/assets/images/login_bg.svg'
import {mapState} from 'vuex'
export default {
    name: 'Login',
    components: { PageFooter },
    data () {
        return {
            loginBg: loginBg
        }
    },
    computed:{
        systemName () {
            return this.$store.state.setting.systemName
        },
        ...mapState('setting', ['footerLinks', 'copyright'])
    },
    methods:{
        handleBack(){
            this.$router.push('/login');
        }
    }
}
</script>
<style lang="less" scoped>
    .login_wrap {
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow: auto;
        background-size: 100%;
        .content {
            padding: 32px 0;
            flex: 1;
            @media (min-width: 768px) {
                padding: 112px 0 24px;
            }
            .header {
                height: 44px;
                display: flex;
                align-items: center;
                justify-content: center;
                img {
                    height: 44px;
                    margin-right: 16px;
                }
                span {
                    font-size: 33px;
                    font-weight: 600;
                    color: @title-color;
                    font-family: "Myriad Pro", "Helvetica Neue", Arial, Helvetica, sans-serif;
                }
            }
            .login {
                width: 368px;
                margin: 30px auto 0;
                @media screen and (max-width: 576px) {
                    width: 95%;
                }
                @media screen and (max-width: 320px) {
                    .captcha-button {
                        font-size: 14px;
                    }
                }
                /deep/ .ant-tabs-bar{
                    margin: 0 0 30px 0;
                }
            }
        }
    }
</style>