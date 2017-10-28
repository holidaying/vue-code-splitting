<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <component :is="currentview"></component>
     <button @click="add">點擊異步加載C組件</button>
    <!-- <a href="/goodbye">跳转到saygoodbye</a> -->
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      currentview:"",
      msg: 'Welcome to Your Vue.js App'
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
         this.currentview="async-webpack-example";
      }
  },
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
