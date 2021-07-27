<template>
    <div class="login_wrap" :style="'background:url('+loginBg+') no-repeat center center / cover'">
        <div class="content">
            <div class="header">
                <img src="@/assets/images/logo.png" alt="logo" />
                <span>{{systemName}}</span>
            </div>
            <div class="login">
                <a-form @submit="onSubmit" :form="form">
                    <a-tabs size="large" :tabBarStyle="{textAlign: 'center'}" style="padding: 0 2px;">
                        <a-tab-pane tab="账户密码登录" key="1">
                            <a-alert type="error" :closable="true" v-show="error" :message="error" showIcon style="margin-bottom: 24px;" />
                            <a-form-item>
                                <a-input autocomplete="autocomplete" size="large" placeholder="admin" v-decorator="['name', {rules: [{ required: false, message: '请输入账户名', whitespace: true}]}]">
                                    <a-icon slot="prefix" type="user" />
                                </a-input>
                            </a-form-item>
                            <a-form-item>
                                <a-input size="large" placeholder="888888" autocomplete="autocomplete" type="password" v-decorator="['password', {rules: [{ required: false, message: '请输入密码', whitespace: true}]}]">
                                    <a-icon slot="prefix" type="lock" />
                                </a-input>
                            </a-form-item>
                        </a-tab-pane>
                        <a-tab-pane tab="手机号登录" key="2">
                            <a-form-item>
                                <a-input size="large" placeholder="mobile number">
                                    <a-icon slot="prefix" type="mobile" />
                                </a-input>
                            </a-form-item>
                            <a-form-item>
                                <a-row :gutter="8" style="margin: 0 -4px">
                                    <a-col :span="16">
                                        <a-input size="large" placeholder="captcha">
                                            <a-icon slot="prefix" type="mail" />
                                        </a-input>
                                    </a-col>
                                    <a-col :span="8" style="padding-left: 4px">
                                        <a-button style="width: 100%" class="captcha-button" size="large">获取验证码</a-button>
                                    </a-col>
                                </a-row>
                            </a-form-item>
                        </a-tab-pane>
                    </a-tabs>
                    <div class="login_info">
                        <a-checkbox :checked="true">自动登录</a-checkbox>
                        <router-link to="/forgetPwd">忘记密码</router-link>
                    </div>
                    <a-form-item>
                        <a-button :loading="logging" class="login_btn" size="large" htmlType="submit" type="primary">登录</a-button>
                    </a-form-item>
                </a-form>
            </div>
        </div>
        <page-footer :link-list="footerLinks" :copyright="copyright"></page-footer>
    </div>
</template>
<script>
import PageFooter from '@/layouts/footer/PageFooter'
import { login, getRoutesConfig } from '@/services/user'
import { setAuthorization } from '@/utils/request'
import { loadRoutes } from '@/utils/routerUtil'
import { mapMutations, mapState } from 'vuex'
import loginBg from '@/assets/images/login_bg.svg'
export default {
    name: 'Login',
    components: { PageFooter },
    data () {
        return {
            loginBg: loginBg,
            logging: false,
            error: '',
            form: this.$form.createForm(this)
        }
    },
    computed: {
        systemName () {
            return this.$store.state.setting.systemName
        },
        ...mapState('setting', ['footerLinks', 'copyright'])
    },
    methods: {
        ...mapMutations('account', ['setUser', 'setPermissions', 'setRoles']),
        onSubmit (e) {
            e.preventDefault();
            this.form.validateFields((err) => {
                if (!err) {
                    this.logging = true;
                    const name = this.form.getFieldValue('name') || 'admin';
                    const password = this.form.getFieldValue('password') || '888888';
                    login(name, password).then(this.afterLogin);
                }
            })
        },
        afterLogin (res) {
            this.logging = false;
            const loginRes = res.data;
            if (loginRes.code >= 0) {
                const { user, permissions, roles } = loginRes.data;
                this.setUser(user);
                this.setPermissions(permissions);
                this.setRoles(roles);
                setAuthorization({ token: loginRes.data.token, expireAt: new Date(loginRes.data.expireAt) });
                // 获取路由配置
                getRoutesConfig().then(result => {
                    const routesConfig = result.data.data;
                    loadRoutes(routesConfig);
                    this.$router.push('/dashboard/workplace');
                    this.$message.success(loginRes.message, 3);
                })
            } else {
                this.error = loginRes.message;
            }
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
                .login_info{
                    display: flex;
                    justify-content: space-between;
                }
                .login_btn{
                    width: 100%;
                    margin-top: 30px;
                }
            }
        }
    }
</style>