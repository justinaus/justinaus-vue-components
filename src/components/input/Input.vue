<template>
  <div class="inputContainer">
    <input
      v-model="input"
      :type="type" 
      :placeholder="placeholder" 
      :maxLength="maxLength"
      :disabled="isDisabled"
      @focus="onFocus"
      @blur="onBlur"
      ref="input"
      v-on:keyup.13="onKeyUpEnter" />
  </div>
</template>
<script>
import inputMixin from './inputMixin'

export default {
  name: 'Input',
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

<style>
.inputContainer {
  width: 100%;
}
.inputContainer input {
  padding: 10px;
  width: 100%;
}
</style>