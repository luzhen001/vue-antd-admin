<template>
    <div class="header-screen">
        <a-icon @click="toggleScreen" class="icon_18" :type="isFullScreen ? 'fullscreen-exit' : 'fullscreen'" />
    </div>
</template>
<script>
import screenfull from 'screenfull'
import {mapMutations} from 'vuex'
export default {
    name: 'screenFull',
    data () {
        return {
            isFullScreen: false
        }
    },
    mounted () {
        this.initScreenFull();
    },
    beforeDestroy () {
        this.destroyScreenFull();
    },
    methods: {
        ...mapMutations('setting',['setFullScreen']),
        toggleScreen () {
            if (!screenfull.isEnabled) {
                this.$message.warn('对不起，您的浏览器不支持全屏模式！');
                return false;
            }
            screenfull.toggle();
            this.setFullScreen(!this.isFullScreen)
        },
        changeScreenFull () {
            this.isFullScreen = screenfull.isFullscreen;
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