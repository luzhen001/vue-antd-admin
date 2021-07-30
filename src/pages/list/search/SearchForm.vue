<template>
    <a-card :bordered="false" class="search-form">
        <a-form :form="form">
            <div class="form-row">
                <div class="label">
                    <span>所属类目</span>
                </div>
                <div class="content">
                    <a-form-item>
                        <tag-select>
                            <tag-select-option>类目一</tag-select-option>
                            <tag-select-option>类目二</tag-select-option>
                            <tag-select-option>类目三</tag-select-option>
                            <tag-select-option>类目四</tag-select-option>
                            <tag-select-option>类目五</tag-select-option>
                            <tag-select-option>类目六</tag-select-option>
                            <tag-select-option>类目七</tag-select-option>
                            <tag-select-option>类目八</tag-select-option>
                            <tag-select-option>类目九</tag-select-option>
                            <tag-select-option>类目十</tag-select-option>
                            <tag-select-option>类目十一</tag-select-option>
                            <tag-select-option>类目十二</tag-select-option>
                            <tag-select-option>类目十三</tag-select-option>
                            <tag-select-option>类目十四</tag-select-option>
                            <tag-select-option>类目十五</tag-select-option>
                            <tag-select-option>类目十六</tag-select-option>
                        </tag-select>
                    </a-form-item>
                </div>
            </div>
            <div class="form-row" style="padding-bottom:15px">
                <div class="label">
                    <span>owner</span>
                </div>
                <div class="content">
                    <a-form-item>
                        <a-select mode="multiple" style="max-width: 286px" v-decorator="['owner', {initialValue: ['1', '2']}]">
                            <a-select-option value="3">我自己</a-select-option>
                            <a-select-option value="1">吴家豪</a-select-option>
                            <a-select-option value="2">周星星</a-select-option>
                            <a-select-option value="4">李宁</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a @click="lookMyself">只看自己的</a>
                </div>
            </div>
            <div class="form-row">
                <div class="label">
                    <span>其他选项</span>
                </div>
                <div class="content">
                    <a-row>
                        <a-col :span="8">
                            <a-form-item label="活跃用户" :labelCol="{span: 6}" :wrapperCol="{span: 12}">
                                <a-select placeholder="不限">
                                    <a-select-option value="1">周星星</a-select-option>
                                    <a-select-option value="1">周星星</a-select-option>
                                    <a-select-option value="1">周星星</a-select-option>
                                </a-select>
                            </a-form-item>
                        </a-col>
                        <a-col :span="8">
                            <a-form-item label="好评度" :labelCol="{span: 6}" :wrapperCol="{span: 12}">
                                <a-select placeholder="不限">
                                    <a-select-option value="1">优秀</a-select-option>
                                    <a-select-option value="2">良好</a-select-option>
                                    <a-select-option value="3">差</a-select-option>
                                </a-select>
                            </a-form-item>
                        </a-col>
                    </a-row>
                </div>
            </div>
        </a-form>
    </a-card>
</template>
<script>
import TagSelect from '../../../components/tool/TagSelect'
const TagSelectOption = TagSelect.Option
export default {
    name: 'SearchForm',
    components: { TagSelectOption, TagSelect },
    data () {
        return {
            form: this.$form.createForm(this)
        }
    },
    methods: {
        lookMyself () {
            this.form.setFieldsValue({
                owner: '3'
            })
        }
    }
}
</script>
<style lang="less" scoped>
    .search-form {
        margin-bottom: 24px;
        .form-row {
            display: flex;
            border-bottom: 1px dashed @border-color-base;
            margin-bottom: 16px;
            .label {
                color: @title-color;
                font-size: 14px;
                margin-right: 24px;
                flex: 0 0 auto;
                text-align: right;
                & > span {
                    display: inline-block;
                    height: 39px;
                    line-height: 39px;
                    &:after {
                        content: "：";
                    }
                }
            }
            .content {
                flex: 1 1 0;
                :global {
                    .ant-form-item:last-child {
                        margin-right: 0;
                    }
                    .ant-form-item {
                        margin-bottom: 0px;
                    }
                }
            }
        }
    }
</style>