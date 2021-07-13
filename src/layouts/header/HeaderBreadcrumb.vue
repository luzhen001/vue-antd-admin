<template>
    <a-breadcrumb>
        <a-breadcrumb-item :key="index" v-for="(item, index) in breadcrumb">
            {{item}}
        </a-breadcrumb-item>
    </a-breadcrumb>
</template>
<script>
import { getI18nKey } from '@/utils/routerUtil'
export default {
    name:'HeaderBreadcrumb',
    data () {
        return {
            page: {}
        }
    },
    watch: {
        $route () {
            this.page = this.$route.meta.page
        }
    },
    created () {
        this.page = this.$route.meta.page
    },
    computed:{
        breadcrumb () {
            let page = this.page
            let breadcrumb = page && page.breadcrumb
            if (breadcrumb) {
                let i18nBreadcrumb = []
                breadcrumb.forEach(item => {
                    i18nBreadcrumb.push(this.$t(item))
                })
                return i18nBreadcrumb
            } else {
                return this.getRouteBreadcrumb()
            }
        }
    },
    methods:{
        getRouteBreadcrumb () {
            let routes = this.$route.matched
            const path = this.$route.path
            let breadcrumb = []
            routes.filter(item => path.includes(item.path))
                .forEach(route => {
                    const path = route.path.length === 0 ? '/home' : route.path
                    breadcrumb.push(this.$t(getI18nKey(path)))
                })
            let pageTitle = this.page && this.page.title
            if (this.customTitle || pageTitle) {
                breadcrumb[breadcrumb.length - 1] = this.customTitle || pageTitle
            }
            return breadcrumb
        }
    }
}
</script>
<style lang="less" >
.ant-breadcrumb>span{
    opacity: .7;
}
.ant-breadcrumb>span:last-child{
    opacity: 1;
}
.dark{
    .ant-breadcrumb-separator{
        color: inherit;
    }
    .ant-breadcrumb>span:last-child{
        color: inherit;
    }
}
</style>