<template>
  <div class="hello" style="width:100%;height:100%sa">
    <el-button type="primary" @click="generate">生成</el-button>
    <transition name="fade">
      <page v-if="showpage"></page>
    </transition>  
  </div>
</template>

<script>
import page from './page'

export default {
  name: 'HelloWorld',
  data () {
    return {
      loading: false,
      fullscreenLoading: false,
      showpage:false
    }
  },
  components:{
    page
  },
  methods:{
    generate() {
      const loading = this.$loading({
        lock: true,
        text: '正在为您生成方案',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close()
        this.showpage = true
      }, 3000);
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
.el-loading-spinner i {
  font-size: 30px !important
}
.fade-enter-active, .fade-leave-active {
  opacity: 1;
  transition: all 0.5s ease 
}      
.fade-enter, .fade-leave-active{
  opacity: 0 
}
  
</style>
