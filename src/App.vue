<template>
  <div id="app">
    <div class="container">
      <Input
        :value.sync="text"
        @onEnterKey="onEnterKey" />
      <InputAuto1000Comma
        :value.sync="text"
        @onEnterKey="onEnterKey" />
    </div>
  </div>
</template>

<script>
// import Banner from './components/Banner.vue'
import Input from './components/input/Input.vue'
import InputAuto1000Comma from './components/input/InputAuto1000Comma.vue'

import './App.css'

export default {
  name: 'app',
  components: {
    // Banner,
    Input,
    InputAuto1000Comma
  },
  data() {
    return {
      text: 'abc',
    }
  },
  methods: {
    onEnterKey() {
      console.log( this.text );
    }
  }
}
</script>

<style scoped>
  .container {
    width: 500px;
  }
</style>