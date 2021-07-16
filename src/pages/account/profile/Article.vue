<template>
    <a-list size="large" rowKey="id" :loading="loading" itemLayout="vertical" :dataSource="data">
        <a-list-item :key="item.id" slot="renderItem" slot-scope="item">
            <h2>{{ item.title }}</h2>
            <div class="tag">
                <a-tag>Ant Design</a-tag>
                <a-tag>设计语言</a-tag>
                <a-tag>蚂蚁金服</a-tag>
            </div>
            <div class="desc">{{item.description}}</div>
            <div class="extra">
                <a-avatar :src="item.avatar" size="small" />
                <a :href="item.href">{{ item.owner }}</a> 发布在
                <a :href="item.href">{{ item.href }}</a>
                <em>{{item.updatedAt}}</em>
            </div>
            <div class="icon">
                <span><a-icon type="star-o" />{{item.star}}</span>
                <span><a-icon type="like-o" />{{item.like}}</span>
                <span><a-icon type="message" />{{item.message}}</span>
            </div>
        </a-list-item>
        <div slot="footer" v-if="data.length > 0" style="text-align: center; margin-top: 16px;">
            <a-button @click="loadMore" :loading="loadingMore">加载更多</a-button>
        </div>
    </a-list>
</template>
<script>
import { request, METHOD } from '@/utils/request'
export default {
    name: 'Article',
    data () {
        return {
            loading: true,
            loadingMore: false,
            data: []
        }
    },
    mounted () {
        this.getList()
    },
    methods: {
        getList () {
            request('/list/article',METHOD.GET).then(res => {
                console.log('res', res)
                this.data = res.data;
                this.loading = false
            })
        },
        loadMore () {
            this.loadingMore = true
            request('/list/article',METHOD.GET).then(res => {
                this.data = this.data.concat(res.data)
            }).finally(() => {
                this.loadingMore = false
            })
        }
    }
}
</script>
<style lang="less" scoped>
.desc {
    max-width: 820px;
    line-height: 22px;
    margin-top: 16px;
}
.extra {
    margin-top: 16px;
    color: @text-color-secondary;
    line-height: 22px;
    & /deep/ .ant-avatar {
        position: relative;
        top: 1px;
        width: 20px;
        height: 20px;
        margin-right: 8px;
        vertical-align: top;
    }
    & > em {
        margin-left: 16px;
        color: @disabled-color;
        font-style: normal;
    }
}
.icon{
    margin-top: 16px;
    span{
        margin-right: 20px;
        .anticon{
            margin-right: 6px;
        }
    }
}
</style>