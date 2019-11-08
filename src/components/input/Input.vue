<template>
  <input class="test test2" 
    v-model="input"
    :type="type" 
    :placeholder="placeholder" 
    :maxLength="maxLength"
    :disabled="isDisabled"
    @focus="onFocus"
    @blur="onBlur"
    ref="input"
    v-on:keyup.13="onKeyUpEnter" />
</template>
<script>
import inputMixin from './inputMixin'

export default {
  mixins: [
    inputMixin
  ],
  computed: {
    input: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("update:value", value);
      }
    }
  },
}
</script>

<style scoped>
  .test {
    border: 1px solid red;
  }
</style>

<style>
  .test2 {
    padding: 10px;
  }
</style>