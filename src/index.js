import Banner from './components/Banner.vue'
import Input from './components/input/Input.vue'
import InputAuto1000Comma from './components/input/InputAuto1000Comma.vue'

const components = [
  Banner,
  Input,
  InputAuto1000Comma
]

export {
  Banner,
  Input,
  InputAuto1000Comma
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
  Input,
  InputAuto1000Comma
};