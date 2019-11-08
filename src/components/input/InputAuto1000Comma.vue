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

import { getCanConvertNumber } from '@/utils/numberUtils'
import { addCommaForMoney } from '@/utils/stringUtils'

export default {
  mixins: [
    inputMixin
  ],
  computed: {
    input: {
      get() {
        const validText = this.getValidText( this.value );

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

<style scoped>
  .test {
    border: 1px solid green;
  }
</style>

<style>
  .test2 {
    padding: 10px;
  }
</style>