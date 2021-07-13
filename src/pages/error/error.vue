<template>
    <div class="error_wrap" :style="`min-height: ${minHeight}`" >
        <div class="img">
            <img :src="config[type].img" />
        </div>
        <div class="content">
            <h1>{{config[type].title}}</h1>
            <div class="desc">{{config[type].desc}}</div>
            <div class="action">
                <a-button type="primary" @click="handleBack('homePage')">返回首页</a-button>
                <a-button type="primary" @click="handleBack('prevPage')">返回上一页</a-button>
            </div>
        </div>
    </div>
</template>
<script>
import svg403 from '@/assets/images/403.svg'
import svg404 from '@/assets/images/404.svg'
import svg500 from '@/assets/images/500.svg'
import { mapState } from 'vuex'
export default {
    name: 'Error',
    props: ['type'],
    data () {
        return {
            config: {
                403: {
                    img: svg403,
                    title: '403',
                    desc: '抱歉，你无权访问该页面'
                },
                404: {
                    img: svg404,
                    title: '404',
                    desc: '抱歉，你访问的页面不存在或仍在开发中'
                },
                500: {
                    img: svg500,
                    title: '500',
                    desc: '抱歉，服务器出错了'
                }
            }
        }
    },
    computed: {
        ...mapState('setting', ['pageMinHeight']),
        minHeight () {
            return this.pageMinHeight ? this.pageMinHeight + 'px' : '100vh'
        }
    },
    methods: {
        handleBack (routeType) {
            if(routeType==='homePage'){
                this.$router.push('/dashboard/workplace');
            }else if(routeType==='prevPage'){
                this.$router.back();
            }else{
                return;
            }
            this.$emit('backHome', this.type);
        }
    }
}
</script>
<style lang="less" scoped>
    .error_wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: @base-bg-color;
        .img {
            padding-right: 52px;
            zoom: 1;
            img {
                max-width: 430px;
            }
        }
        .content {
            h1 {
                color: #434e59;
                font-size: 72px;
                font-weight: 600;
                line-height: 72px;
                margin-bottom: 24px;
            }
            .desc {
                color: @text-color-second;
                font-size: 20px;
                line-height: 28px;
                margin-bottom: 36px;
            }
            .action{
                display: flex;
                min-width: 300px;
                justify-content: space-between;
            }
        }
    }
</style>