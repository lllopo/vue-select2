//Import external dependencies
import $ from 'jquery';
import 'select2/dist/js/select2.full';
import 'select2/dist/css/select2.min.css'

// Import vue component
import component from './Select2.vue';

// Declare install function executed by Vue.use()
export function install(Vue) {
 if (install.installed) return;
 install.installed = true;
 Vue.component('MyComponent', component);
}

// Create module definition for Vue.use()
const plugin = {
 install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
 GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
 GlobalVue = global.Vue;
}
if (GlobalVue) {
 GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default component;
