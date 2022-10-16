import Vue from 'vue';

import Button from './Button.vue';

export default {
    install (Vue) {
        Vue.component(Button.name, Button);
    }
}

export { Button }