<template>
  <div id="app">
    <Header/>
    <Main/>
    <MySection/>
    <MyCompany/>
    <MyLogo/>
    <MyNews/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import MySection from './components/MySection.vue'
import MyCompany from './components/MyCompany.vue'
import MyLogo from './components/Loghi.vue'
import MyNews from './components/News.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
    MySection,
    MyCompany,
    MyLogo,
    MyNews

    
  }
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
