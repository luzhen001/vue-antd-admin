<template>
    <a-dropdown>
        <div class="header-avatar">
            <a-avatar class="avatar" size="small" shape="circle" :src="user.avatar" />
            <span class="name">{{user.name}}</span>
        </div>
        <a-menu class="avatar-menu" slot="overlay">
            <a-menu-item @click="handleUserSet('/account/profile')">
                <a-icon type="user" class="icon_16" />
                <span>个人中心</span>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item @click="handleUserSet('/account/setting')">
                <a-icon type="setting" class="icon_16" />
                <span>个人设置</span>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item @click="logout">
                <a-icon type="poweroff" class="icon_16" />
                <span>退出登录</span>
            </a-menu-item>
        </a-menu>
    </a-dropdown>
</template>
<script>
import { mapGetters } from 'vuex'
import { logout } from '@/services/user'
export default {
    name: 'HeaderAvatar',
    computed: {
        ...mapGetters('account', ['user']),
    },
    methods: {
        handleUserSet(url){
            this.$router.push(url);
        },
        logout () {
            logout()
            this.$router.push('/login')
        }
    }
}
</script>
<style lang="less">
    .header-avatar {
        display: inline-flex;
        .avatar, .name {
            align-self: center;
        }
        .avatar {
            margin-right: 4px;
        }
        .name {
            font-weight: 500;
        }
    }
    .avatar-menu {
        width: 118px;
    }
</style>