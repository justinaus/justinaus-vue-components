<template>
  <div id="app">
    <!-- <Banner>
      This is a banner!
    </Banner> -->
    <Input
      :value.sync="text"
      @onEnterKey="onEnterKey" />
  </div>
</template>

<script>
// import Banner from './components/Banner.vue'
import Input from './components/Input.vue'

export default {
  name: 'app',
  components: {
    // Banner,
    Input
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