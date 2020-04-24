<template>
  <div id="translate">
   <form v-on:submit="formsubmit">
   <input type="text" placeholder="请输入翻译内容" v-model="textTotrans"/>
   <select v-model="language">
       <option value="en">英语</option>
       <option value="ru">俄语</option>
       <option value="ko">韩语</option>
       <option value="ja">日语</option>
   </select>
   <input type="submit" value="翻译">
   </form>
  </div>
</template>

<script>
export default {
  name: 'translate',
  data:function(){
      return{
          textTotrans:"",
          language:""
      }
  },
    created:function(){
this.language="en";

  },
  methods:{
      formsubmit:function(e){
       //alert(this.textTotrans)
       //alert(this.language)
       this.$emit("formsubmit",this.textTotrans,this.language);
       e.preventDefault();
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type="text"]{ height: 40px; line-height: 40px; background: #f5f5f5; border: 0px; border-radius: 5px;
padding:0 10px; width: 200px; }
select{ height: 40px; line-height: 40px; background: #f5f5f5; border: 0px; border-radius: 5px; text-align: center; width: 120px; }
input[type="submit"]{
    height: 40px; line-height: 40px; background: #333; color: #fff; border: 0px; border-radius: 5px; text-align: center;
    width: 100px;
}
</style>
