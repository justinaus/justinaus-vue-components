const inputMixin = {
  props: {
    value: {
      type: String,
      default: ''
    },
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

export default inputMixin