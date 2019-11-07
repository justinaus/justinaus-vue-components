<template>
  <div>
    <input class="test" 
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
export default {
  props: {
    value: String,
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    isDisabled: {
      type: Boolean,
      default: false
    },
    maxLength: Number,
    isFocusOnMount: {
      type: Boolean,
      default: false
    },
  },
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
  mounted() {
    if( this.isFocusOnMount ) {
      this.$refs.input.focus();
    }
  },
  methods: {
    blur() {
      // 외부에서 호출 될 메서드.
      this.$refs.input.blur();
    },
    onFocus( e ) {
      this.$emit("onFocus", e);
    },
    onBlur( e ) {
      this.$emit("onBlur", e);
    },
    onKeyUpEnter( e ) {
      this.blur();

      this.$emit("onEnterKey", e);
    }
  },
}
</script>

<style scoped>
  .test {
    border: 1px solid red;
  }
</style>