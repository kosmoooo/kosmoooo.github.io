import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import translate from '@/components/translate'
import transOut from '@/components/transOut'
Vue.use(Router)


export default new Router({
    routes: [{
        path: '/',
        name: 'translate',
        components: {
            default: translate,
            'transR': transOut,
        }
    }]
})