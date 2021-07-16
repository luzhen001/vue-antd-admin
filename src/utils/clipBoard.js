import Vue from 'vue'
import Clipboard from 'clipboard'
function clipboardSuccess () {
    Vue.prototype.$message.destroy();
    Vue.prototype.$message.success({
        content: '复制成功！',
        duration: 1000
    });
}
function clipboardError () {
    Vue.prototype.$message.destroy();
    Vue.prototype.$message.error({
        content: '复制失败，请稍后再试！',
        duration: 1000
    });
}
export default function handleClipboard (text, event) {
    const clipboard = new Clipboard(event.target, {
        text: () => text
    });
    clipboard.on('success', () => {
        clipboardSuccess();
        clipboard.destroy();
    });
    clipboard.on('error', () => {
        clipboardError();
        clipboard.destroy();
    });
    clipboard.onClick(event);
}