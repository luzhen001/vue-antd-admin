<template>
    <page-toggle-transition :disabled="animate.disabled" :animate="animate.name" :direction="animate.direction">
        <router-view />
    </page-toggle-transition>
</template>
<script>
import PageToggleTransition from '@/components/Transition'
import { mapState } from 'vuex'
export default {
    name: 'BlankView',
    components: { PageToggleTransition },
    computed: {
        ...mapState('setting', ['multiPage', 'animate'])
    }
}
</script>