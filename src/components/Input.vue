<template>
  <div>
    <input class="test" v-model="text" @click="onClick" />
  </div>
</template>
<script>
export default {
  name: 'Input',
  data() {
    return {
      text: ''
    }
  },
  methods: {
    onClick() {
      console.log( 'onClick' );
    }
  }
}
</script>

<style scoped>
  .test {
    border: 1px solid red;
  }
</style>