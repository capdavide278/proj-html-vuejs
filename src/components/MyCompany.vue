<template>
  <section>
      <div id="container">
        <div id="company">
            <h4><font color="#02a2a2">ABOUT THE NETWORK</font></h4>
            <div id="title">
                <span id="nex">The</span><span>Company</span><br>
            </div>
            <p id="paragrafo">With all of this expertiese and capability comes an unrivalled <br>
            cimmitment to customer service.
            </p>
            <div class="info">
                <div class="number">
                    <span class="internal_number">0</span><span class="percentuale">%</span>
                </div>
                <div class="paragraph">
                    <h2>Leadership</h2>
                    <p class="lorem">lorem ipsum dolor sit amet consecutetur adipiscing elit.</p>
                </div>
            </div>

            <div class="info">
                <div class="number">
                    <span class="internal_number">0</span><span class="percentuale">%</span>
                </div>
                <div class="paragraph">
                    <h2>Leadership</h2>
                    <p class="lorem">lorem ipsum dolor sit amet consecutetur adipiscing elit.</p>
                </div>
            </div>

            <div class="info">
                <div class="number">
                    <span class="internal_number">1</span><span class="percentuale">%</span>
                    <div id="green_block"></div>
                </div>
                <div class="paragraph">
                    <h2>Leadership</h2>
                    <p class="lorem">lorem ipsum dolor sit amet consecutetur adipiscing elit.</p>
                </div>
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
    padding-left: 15%;
    padding-top: 8%;

    .internal_number{
        color: white;
        font-size: 35px;
    }
    p{
        color: white;
    }
}

#nex{
    background-color: #084747;
    padding: 4px;
    color: #01a5a5;
    border-radius: 4px;
    margin-right: 10px;
}

#title{
    margin: 20px 0;
    font-size: 35px;
    color: white;
}

#paragrafo{
    margin: 15px 0;
}

.info{
    color: white;
    margin: 20px 0;
    display: flex;
}

.lorem{
    margin: 10px 0;
}

.number{
    border: solid 7px #232328;
    border-radius: 49%;
    /* padding-top: 5px; */
    padding:  20px;
    position: relative;
}

.paragraph{
    margin-left: 25px;
    margin-top: 20px;
}

.percentuale{
    font-size: 15px;
}

#green_block{
    position: absolute;
    height: 5px;
    width: 7px;
    background-color: #084747;
    right: 73px;
    bottom: 35px;
}
</style>