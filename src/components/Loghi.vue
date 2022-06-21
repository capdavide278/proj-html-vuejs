<template>
  <section>
    <div>
        <ul>
            <li v-for="(element, i) in logo" :key="i">
                <img :src="element.img" :alt="element.img">
            </li>
        </ul>
    </div>
  </section>
</template>

<script>

export default {
  name: 'MyLogo',

    data(){
        return{
            logo:[
                {
                    img:require("../assets/img/logo-5.png"),
                },
            
                {
                    img:require("../assets/img/logo-2.png"),
                },

                {
                    img:require("../assets/img/logo-3.png"),
                },

                {
                    img:require("../assets/img/logo-4.png"),
                },

                {
                    img:require("../assets/img/logo-5.png"),
                },
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section{
    height: 30vh;
    background-color: #eef4ed;
    display: flex;
    justify-content: center;
    align-items: center;
}

li{
    display: inline-block;
    margin: 0 60px;
}

img{
    opacity: 0.4;
}
</style>