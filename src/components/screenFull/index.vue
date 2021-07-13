<template>
    <div class="header-screen">
        <a-icon @click="toggleScreen" class="action" :type="isFullscreen ? 'fullscreen-exit' : 'fullscreen'" />
    </div>
</template>
<script>
import screenfull from 'screenfull'
export default {
    name: 'screenFull',
    data () {
        return {
            isFullscreen: false
        }
    },
    mounted () {
        this.initScreenFull();
    },
    beforeDestroy () {
        this.destroyScreenFull();
    },
    methods: {
        toggleScreen () {
            if (!screenfull.isEnabled) {
                this.$message.warn('对不起，您的浏览器不支持全屏模式！');
                return false;
            }
            screenfull.toggle();
        },
        changeScreenFull () {
            this.isFullscreen = screenfull.isFullscreen;
        },
        initScreenFull () {
            if (screenfull.isEnabled) {
                screenfull.on('change', this.changeScreenFull);
            }
        },
        destroyScreenFull () {
            if (screenfull.isEnabled) {
                screenfull.off('change', this.changeScreenFull);
            }
        }
    }
}
</script>