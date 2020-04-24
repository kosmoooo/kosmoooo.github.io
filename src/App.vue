<template>
  <div id="app">
    <h1>ONLINE TRANSLATE</h1>
    <h5>{{disc}}</h5>
    <router-view @formsubmit="transtxt(arguments)"></router-view>
    <router-view :transR="transR" name="transR"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

  data:function(){
    return{
  transR:"",
  disc:"超级简单的翻译"
    }
  },
  methods:{
    transtxt:function(val){ 
      this.txt = val[0];
	    this.lang = val[1];  
     //alert(this.txt)
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200424T051130Z.5a8319929cb07b00.50c2a336ab464aeb40875f8c75d095dab34528d6&lang='+this.lang+'&text='+this.txt)
.then((response)=>{
 // console.log(response.body.text[0])//text是接口中数值
 this.transR =  response.body.text[0]
})
}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{color:rgb(30, 155, 92);margin-bottom: 10px;}
h5{ margin-top: 10px;margin-bottom: 50px; }
</style>
