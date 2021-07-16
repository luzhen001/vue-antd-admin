<template>
    <div class="account-settings-info-view">
        <a-row :gutter="16" type="flex" justify="center">
            <a-col :md="24" :lg="16">
                <a-form layout="horizontal">
                    <a-form-item label="昵称">
                        <a-input placeholder="请输入个人昵称" />
                    </a-form-item>
                    <a-form-item label="手机">
                        <a-input placeholder="请输入个人手机号码" />
                    </a-form-item>
                    <a-form-item label="性别" default-value="女">
                        <a-radio-group default-value="女">
                            <a-radio value="男">男</a-radio>
                            <a-radio value="女">女</a-radio>
                            <a-radio value="保密">保密</a-radio>
                        </a-radio-group>
                    </a-form-item>
                    <a-form-item label="邮箱" :required="false">
                        <a-input placeholder="请输入个人邮箱" />
                    </a-form-item>
                    <a-form-item label="地址" :required="false">
                        <a-input placeholder="请输入个人地址" />
                    </a-form-item>
                    <a-form-item label="简介">
                        <a-textarea rows="4" placeholder="请输入个人简介" />
                    </a-form-item>
                    <a-form-item>
                        <a-button type="primary">更新</a-button>
                    </a-form-item>
                </a-form>
            </a-col>
            <a-col :order="1" :md="24" :lg="8" :style="{ minHeight: '180px' }">
                <div class="ant-upload-preview" @click="$refs.modal.edit(1)">
                    <a-icon type="cloud-upload-o" class="upload-icon" />
                    <div class="mask">
                        <a-icon type="plus" />
                    </div>
                    <img :src="option.img" />
                </div>
            </a-col>
        </a-row>
        <avatar-modal ref="modal" @ok="setavatar" />
    </div>
</template>
<script>
import AvatarModal from './AvatarModal'
import avatar from '@/assets/images/avatar.jpg'
export default {
    components: {
        AvatarModal
    },
    data () {
        return {
            value:'女',
            option: {
                img: avatar,
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
            }
        }
    },
    methods: {
        setavatar (url) {
            this.option.img = url
        }
    }
}
</script>
<style lang="less" scoped>
    .ant-form-item{
        display: flex;
        /deep/.ant-form-item-control-wrapper{
            flex: 1;
        }
    }
    .avatar-upload-wrapper {
        height: 200px;
        width: 100%;
    }
    .ant-upload-preview {
        position: relative;
        margin: 0 auto;
        width: 100%;
        max-width: 180px;
        border-radius: 50%;
        box-shadow: 0 0 4px #ccc;
        .upload-icon {
            position: absolute;
            top: 0;
            right: 10px;
            font-size: 1.4rem;
            padding: 0.5rem;
            background: rgba(222, 221, 221, 0.7);
            border-radius: 50%;
            border: 1px solid rgba(0, 0, 0, 0.2);
        }
        .mask {
            opacity: 0;
            position: absolute;
            background: rgba(0, 0, 0, 0.4);
            cursor: pointer;
            transition: opacity 0.4s;
            &:hover {
                opacity: 1;
            }
            i {
                font-size: 2rem;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-left: -1rem;
                margin-top: -1rem;
                color: #d6d6d6;
            }
        }
        img,
        .mask {
            width: 100%;
            max-width: 180px;
            height: 100%;
            border-radius: 50%;
            overflow: hidden;
        }
    }
</style>