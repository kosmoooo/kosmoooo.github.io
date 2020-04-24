<template>
  <div class="transOut">
   <p>{{transR}}</p>
  </div>
</template>

<script>
export default {
  name: 'transOut',
  props:[
      "transR"
  ],
//   watch: {
//       transR: function (val) {       
//        console.log(val);   // 接收父组件的值
//       }
//     },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{ line-height: 50px; color: rgb(30, 155, 92); }
p span{ background: rgb(237, 253, 245); padding:10px 30px;}
</style>