<template>
  <section>
    <div id="container">
        <div>
            <h4><font color="#02a2a2">NEWSLETTER</font></h4>
            <div id="know">
                <span id="news">Know</span> <span> First</span>
            </div>
            <p>Follow closely and receive content about our company <br> and the news of the current market.</p>
        </div>

        <div id="form">
        <form action="/action_page.php">
            <input type="text" class="text" placeholder="Name">
        <br>
            <input type="text" class="text" placeholder="Email">
        <br>
            <input type="submit" value="Subscribe" id="btn">
        </form>
        </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'MyNewsletter',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#container{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 7%;
}

section{
    background-image: url("../assets/img/bg-1.jpg");
    height: 64vh;
    background-size: 100% 700px;
    background-repeat: no-repeat;

    #news{
    background-color: #05838346;
    padding: 5px 10px;
    border-radius: 5px;
    }
    
    p{
        font-size: 25px;
        color: rgba(255, 255, 255, 0.651);
    }
}

#know{
    font-size: 40px;
    color: white;
    margin: 30px 0;
}

.text{
    width: 350px;
    padding:15px 10px;
    border-radius: 10px;
    opacity: 0.7;
    margin-bottom: 15px;
}

#btn{
    
    background-color: #058283;
    color: white;
    text-decoration: none;
    padding:10px 35px;
    font-size: 20px;
    border-radius: 10px;
}

#form{
    margin-left: 60px;
}
</style>