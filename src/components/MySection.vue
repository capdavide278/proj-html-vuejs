<template>
  <section>
    <div id="title">
      <h6><font color="#3fa6a9">OUR BUSINESS AREA</font></h6>
        <h2>Logistics <br> Services <br></h2>
          <div id="description">
            <span>We are leaders in providing logistics <br>services with a set of cutting edge <br>technologies and a team of experienced <br>and renowned professionals.</span>
          </div>
          <div class="button">
              <a href="#"><span class="light-green">Tradition</span></a>
              <a href="#"><span class="light-green">Quality</span></a>
              <a href="#"><span class="light-green">Security</span></a>
              <br>
              <div class="dark-green">
                <a href="#"><span id="read-more">READ MORE</span></a>
              </div>
          </div>
    </div> 
    
    <div class="bianco" v-for="(element,i) in information" :key="i">
      <img :src="element.img" :alt="element.title">
      <h3><strong>{{element.title}}</strong></h3>
      <p>{{element.description}}</p>
    </div>
  </section>
</template>

<script>

export default {
  name: 'MySection',

  data(){
    return{
      information:[
        {
          img:require("../assets/img/gallery-3.jpg"),
          title:"Technology",
          description:"Focused on developing technology solutions adapted to our client's needs."
        },

        {
          img:require("../assets/img/gallery-5.jpg"),
          title:"Transport",
          description:"We develop operational strategies to improve logistical efficiency."
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section{
  background-color: #eef4ed;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;

  h2{
    font-size: 30px;
    margin-top: 10px;
  }
  #title{
    margin-left: 20%;
  }

  #description{
    margin: 20px 0;
    font-size: 25px;
  }
}

a{
  text-decoration: none;
}

.light-green{
  color: #3fa6a9;
  font-size: 20px;
  margin-right:20px;
  padding: 10px;
  border-radius: 10px;
  background-color: #cce3de;

}

.dark-green{
  padding-top: 60px;
}

#read-more{
  color: white;
  background-color: #058283;
  padding:20px 50px;
  border-radius: 10px;
}

.bianco{
  background-color: white;
  height: 50vh;
  width: 20%;
  border-radius: 10px;
  padding: 25px;
}

p{
  font-size: 25px;
}

h3{
  font-size: 25px;
  margin: 15px 0;
}

img{
  height: 50%;
}
</style>