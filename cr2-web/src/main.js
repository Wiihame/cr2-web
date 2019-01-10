import Vue from 'vue'
import App from './App.vue'
import { Button, Table, Row, Col, Avatar, Card, Icon, Upload } from 'iview'
import 'iview/dist/styles/iview.css'
Vue.component('Button', Button)
Vue.component('Table', Table)
Vue.component('Row', Row)
Vue.component('Col', Col)
Vue.component('Avatar', Avatar)
Vue.component('Card', Card)
Vue.component('Icon', Icon)
Vue.component('Upload', Upload)

new Vue({
    el: '#app',
    render: h => h(App)
});