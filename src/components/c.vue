<template>
  <div class="hello" v-if="true">

    <h1 v-if="currentview">--------------************————————————————————</h1>
    <button @click="add">點擊異步加載C組件</button>
  </div>
</template>

<script>
export default {
  name: 'goodbye',
  props:["dataValue"],
  data () {
    return {
      msg: 'say goodbye to Vue.js App',
      temp:this.dataValue,
    }
  }, 
  computed:
  {
      'currentview':{

      }
  },
  mounted:function()
  {
    
  },
  methods:
  {
      add:function(argument) {
        debugger
         this.currentview = !this.currentview;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
tyle>
