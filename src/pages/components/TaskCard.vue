<template>
    <div style="display: flex">
        <div class="task-group">
            <div class="task-head">
                <span>ToDo</span>
                <span>{{count}}</span>
                <a-icon class="add" type="plus" draggable="true" />
            </div>
            <div class="task-content">
                <draggable :options="dragOptions">
                    <a-card class="task-item" type="inner" :key="index" v-for="(item, index) in todoList" >{{item}}</a-card>
                </draggable>
            </div>
        </div>
        <div class="task-group">
            <div class="task-head">
                <span>In Progress</span>
                <span>{{count}}</span>
                <a-icon class="add" type="plus" draggable="true" />
            </div>
            <div class="task-content">
                <draggable :options="dragOptions">
                    <a-card class="task-item" type="inner" :key="index" v-for="(item, index) in inproList" >{{item}}</a-card>
                </draggable>
            </div>
        </div>
        <div class="task-group">
            <div class="task-head">
                <span>Done</span>
                <span>{{count}}</span>
                <a-icon class="add" type="plus" draggable="true" />
            </div>
            <div class="task-content">
                <draggable :options="dragOptions">
                    <a-card class="task-item" type="inner" :key="index" v-for="(item, index) in doneList" >{{item}}</a-card>
                </draggable>
            </div>
        </div>
    </div>
</template>
<script>
import Draggable from 'vuedraggable'
export default {
    name: 'TaskCard',
    components: {Draggable },
    data () {
        return {
            todoList:['任务一', '任务二', '任务三', '任务四', '任务五', '任务六'],
            inproList:['任务七', '任务八', '任务九', '任务十', '任务十一', '任务十二'],
            doneList:['任务十三', '任务十四', '任务十五', '任务十六', '任务十七', '任务十八'],
            dragOptions: {
                sort: true,
                scroll: true,
                scrollSpeed: 2,
                animation: 150,
                ghostClass: 'dragable-ghost',
                chosenClass: 'dragable-chose',
                dragClass: 'dragable-drag',
                group:'task'
            }
        }
    },
    computed: {
        count () {
            return 1;
        }
    }
}
</script>
<style lang="less" scoped>
    .task-group {
        width: 33.33%;
        margin: 0 48px;
        padding: 8px 8px;
        border-radius: 6px;
        border: 1px solid @shadow-color;
        background-color: @background-color-light;
        .task-head {
            margin-bottom: 10px;
            span {
                margin: 0 8px;
                padding: 2px 6px 2px 0;
                background-color: @base-bg-color;
            }
            .anticon  {
                font-size: 18px;
                font-weight: bold;
                cursor: pointer;
                float: right;
            }
        }
        .task-item {
            margin-bottom: 16px;
            box-shadow: 0 1px 1px @shadow-color;
            border-radius: 6px;
            & :hover {
                cursor: move;
                box-shadow: 0 1px 2px @shadow-color;
                border-radius: 6px;
            }
        }
    }
    .dragable-ghost {
        border: 1px dashed red;
        opacity: 1;
    }
    .dragable-chose {
        border: 1px dashed red;
        opacity: 0.8;
    }
    .dragable-drag {
        border: 1px dashed red;
        opacity: 1;
    }
</style>
