<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="add">點擊異步加載C組件</button>
    <async-webpack-example  :data-value="currentview"></async-webpack-example>
  </div>
</template>

<script>
export default {
  name: 'goodbye',
  data () {
    return {
      currentview:false,
      msg:'say goodbye to Vue.js App'
    }
  },
  components:
  {
    "async-webpack-example":function(resolve) {
      require(['./c.vue'], resolve);
    }
  },
  mounted:function()
  {

  },
  methods:
  {
      add:function(argument) {
         this.currentview=!this.currentview;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
