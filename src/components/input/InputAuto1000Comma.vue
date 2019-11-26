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

import { changeTo1000comma } from 'jodash'

export default {
  name: 'InputAuto1000Comma',
  mixins: [
    inputMixin
  ],
  computed: {
    input: {
      get() {
        const validText = changeTo1000comma( this.value );

        if( validText !== this.value ) {
          this.$emit("update:value", validText );
        }
        
        if( this.maxLength && this.value.length > this.maxLength ) {
          this.$emit("update:value", this.value.slice( 0, this.maxLength ));
        }

        return this.value;
      },
      set(value) {
        this.$emit("update:value", value);
      }
    }
  },
}
</script>