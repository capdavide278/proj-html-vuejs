<template>
    <main>
        <section id="jumbo">
            <div id="scuro">
                <div id="space">
                    <span id="nex">NEX</span>
                    <span id="gen">GEN</span>
                </div>
                <ul>
                    <li v-for="(element, i) in links" :key="i">
                    <a id="sfondo" href="#">{{element.text}}</a>
                    </li>
                </ul>
            </div>

            <div id="vuoto">
                <div id="linea"></div>
                <h2 id="main-title">Logistics <br> that goes <br> futher.</h2>
                <div id="subtitle">
                    <span>For 20 years working with the most<br>innovative in the field of trasportation.</span>
                </div>
                <div class="button">
                    <a href="#"><span class="get">GET IN TOUCH</span></a>
                    <a href="#"><span class="more">READ MORE</span></a>
                </div>
            </div>
        </section>
    </main>
  
</template>

<script>

export default {
  name: 'MyMain',
  components :{
   
  },

  data(){
    return{
        links:[
            {
                text:"HOME"
            },
            {
                text:"SERVICES"
            },
            {
                text:"SKILLS"
            },
                {
                text:"PARTNERS"
            },
            {
                text:"BLOG"
            },
            {
                text:"GET IN TOUCH"
            },
        ]
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#jumbo{
    background-image: url('../assets/img/jumbo.jpg');
    height: 90vh;
    background-repeat:no-repeat;
    position: relative;
    z-index: -1;
}

main{
    padding-top: 60px;
}

#nex{
    background-color: #3b6160;
    padding: 10px;
    color: #01a5a5;
    border-radius: 15px;
}
#gen{
    margin-top: 10px;
    color: white;
}
#space{
    margin-top: 25px;
    margin-right: 10%;
    position: relative;
}

#scuro{
    position: absolute;
    background-color: black;
    height: 90vh;
    width: 100%;
    opacity: 0.4;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

ul{
    list-style: none;
    margin-top: 25px;
    margin-left: 100px;
    li{
        display: inline-block;
        margin: 0 30px;
    }

}

#sfondo{
    text-decoration: none;
    color: white;
    background-color: #058283;
    padding: 15px;
    border-radius: 15px;
    
}

#main-title{
    padding-top: 10%;
    margin-left: 70%;
    color: white;
    position: relative;
    z-index: 10;
    font-size: 50px;
}

#subtitle{
    font-size: 25px;
    color: white;
    margin-left: 70%;
    position: relative;
    z-index: 10;
    opacity: 0.6;
}

.button{
    padding-top: 5%;
    margin-left: 70%;
    color: white;
    position: relative;
    z-index: 10;
}

.get{
    background-color: #058283;
    padding: 15px;
    border-radius: 10px;
}

.more{
    border: solid 2px #058283;
    padding: 12px;
    border-radius: 10px;
    margin-left: 20px;
}

a{
    color: white;
    text-decoration: none;
}

#vuoto{
    position: relative;
}

#linea{
    background-color: #058283;
    width: 220px;
    height: 20px;
    position: absolute;
    right: 350px;
    top: 220px;
}
</style>