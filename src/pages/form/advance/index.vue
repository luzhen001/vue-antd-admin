<template>
    <div>
        <a-card class="card" :title="$t('repository')" :bordered="false">
            <repository-form ref="repository" :showSubmit="false" />
        </a-card>
        <a-card class="card" :title="$t('task')" :bordered="false">
            <task-form ref="task" :showSubmit="false" />
        </a-card>
        <a-card :title="$t('user')" :bordered="false">
            <user-form />
        </a-card>
        <div class="foot_bar">
            <a-button type="primary" @click="validate" :loading="loading" style="float: right">{{$t("submit")}}</a-button>
        </div>
    </div>
</template>
<script>
import RepositoryForm from "./RepositoryForm";
import TaskForm from "./TaskForm";
import UserForm from "./UserForm";
export default {
    name: "AdvancedForm",
    components: { UserForm, TaskForm, RepositoryForm },
    i18n: require("./i18n"),
    data () {
        return {
            loading: false,
        };
    },
    methods: {
        validate () {
            this.$refs.repository.form.validateFields((err, values) => {
                if (!err) {
                    console.log("Received values of form: ", values);
                }
            })
            this.$refs.task.form.validateFields((err, values) => {
                if (!err) {
                    console.log("Received values of form: ", values);
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
    .card {
        margin-bottom: 12px;
    }
    .foot_bar{
        position: fixed;
        width: 100%;
        bottom: 0;
        right: 0;
        box-shadow: 0 -1px 2px @shadow-color;
        background: @base-bg-color;
        border-top: 1px solid @border-color-split;
        padding: 12px 24px;
        z-index: 9;
    }
</style>