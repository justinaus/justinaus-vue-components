// import Vue from 'vue'
import Banner from './components/Banner.vue'
import Input from './components/Input.vue'

const components = [
  Banner,
  Input
]

export {
  Banner,
  Input
}

export const Plugin = {
  install: function(Vue) {
    // Vue.component('fragment', component)
    components.forEach( component => {
      Vue.component( component.name, component );
    } );
  }
}

export default {
  Plugin,
  Banner,
  Input
};