<template>
  <section>
      <div id="container">
        <div id="company">
            <h6><font color="#02a2a2">ABOUT THE NETWORK</font></h6>
            <span>The</span><span>Company</span><br>
            <p>With all of this expertiese and capability comes an unrivalled <br>
            cimmitment to customer service.
            </p>
            <div class="info" v-for="(element, index) in percentuale" :key="index">
                <h2>{{element.titolo}}</h2>
                <p>{{element.paragrafo}}</p>
            </div>
        </div>

        <div>
            <img src="../assets/img/about-5.jpg" alt="">
        </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'MyCompany',

    data(){
        return{
            percentuale:[
                {
                    titolo:"Leadership",
                    paragrafo:"lorem ipsum dolor sit amet consecutetur adipiscing elit."
                },
                {
                    titolo:"Psychology",
                    paragrafo:"lorem ipsum dolor sit amet consecutetur adipiscing elit."
                },
                {
                    titolo:"Flexibility",
                    paragrafo:"lorem ipsum dolor sit amet consecutetur adipiscing elit."
                },
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#container{
    display: flex;
    width: 100%;
    height: 100vh;
}

img{
    height: 100vh;
}

#company{
    background-color: #111117;
    /* height: 100vh; */
    width: 100%;

    span{
        color: white;
        font-size: 35px;
    }
    p{
        color: white;
    }
}

</style>