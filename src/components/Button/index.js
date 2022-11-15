import Button from './ButtonComponent.vue';

export default {
    install (Vue) {
        Vue.component(Button.name, Button);
    }
}

export { Button }