<template>
  <div id="app">
    <Banner>
      This is a banner!
    </Banner>
    <Input />
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
import Input from './components/Input.vue'

export default {
  name: 'app',
  components: {
    Banner,
    Input
  }
}
</script>