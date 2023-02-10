<template>
{{test}}
  <hr />
  <button @click="lese()">test</button>
</template>


<script>
import { useStore } from 'vuex'
import {computed} from "vue";
export default {
  setup() {
    const store=useStore()
    //const test = computed(()=> store.state.test)


    // expose to template and other options API hooks
    return {
      test: computed(()=> store.state.test),
      lese: () => store.dispatch('test')
    }
  },

  mounted() {
    console.log(this.count) // 0
  }
}
</script>


<style scoped>

</style>