<template>
  <section>
    <div id="presentation">
        <h4><font color="#02a2a2">OUR EDITORIAL CONTENT</font></h4>
        <div class="center">
            <span>Latest</span><span id="news">News</span><br>
        </div>
        <div class="description">
            <span>Every week we publish content about what is the best in the business world.</span>
            <a href="#">SEE ALL</a>
        </div>
    </div>

    <div id="container">
        <ul>
            <li v-for="(element, index) in news" :key="index">
                <img :src="element.img" :alt="element.descrizione">
                <div id="scuro"></div>
                <div id="scritta">{{element.descrizione}}</div>
            </li>
        </ul>
    </div>
  </section>
</template>

<script>

export default {
  name: 'MyNews',

    data(){
        return{
            news:[
                {
                    img:require('../assets/img/news-1.jpg'),
                    descrizione:'Increasing creativity is possible for everyone'
                },

                {
                    img:require('../assets/img/news-2.jpg'),
                    descrizione:'Because market research is part of the business plan'
                },

                {
                    img:require('../assets/img/news-3.jpg'),
                    descrizione:'working from home is now a trend'
                },
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section{
    height: 80vh;
}


#presentation{
    margin-left: 26%;
    margin-top: 50px;

    h4{
        margin: 15px 0;
    }
}

.description{
    margin-top: 50px;
}

a{
    
    background-color: #058283;
    color: white;
    text-decoration: none;
    padding:15px 30px;
    margin-left: 250px;
    font-size: 20px;
    border-radius: 10px;
}

.center{
    padding-top: 10px;
    font-size: 30px;
}

#news{
    margin-left: 10px;
    color: #058283;
    background-color: #daeced;
    padding: 5px 10px;
    border-radius: 5px;
}

ul{
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
}

li{
    list-style: none;
    display: inline-block;
    margin-left: 20px;
    position: relative;
}

img{
    height: 300px;
    width: 100%;
    border-radius: 5px;
}

#scritta{
    color: white;
    position: absolute;
    bottom: 20px;
    text-align: center;
    font-size: 25px;
    padding: 20px;
}

#scuro{
    position: absolute;
    background-color: black;
    height: 300px;
    width: 100%;
    bottom: 4px;
    opacity: 0.3;
}
</style>