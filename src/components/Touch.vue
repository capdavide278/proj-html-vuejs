<template>
  <section>
    <div id="container">
        <div id="form">
            <h4><font color="#02a2a2">SEND A MESSAGE</font></h4>
            <div>
                <span id="get">Get in</span> <span id="news">Touch</span>
            </div>
            <p>
                We will respond to your message as soon as possible.
            </p>

            <div id="form">
                <form action="/action_page.php">
                    <input type="text" class="text" placeholder="Name">

                    <input type="text" class="text" placeholder="Email">
                <br>
                    <input type="number" class="text" placeholder="Phone">
                    
                    <input type="text" class="text" placeholder="More info" >
                    <select id="select">
                    </select>
                    
                <br>
                    <input type="text" class="message" placeholder="Message">
                <br>
                    <input type="submit" value="SEND" id="btn">
                </form>
            </div>
        </div>

        <div>
            <h2>Example Inc.</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur <br> adipiscinf elit.
            </p>

            <p>
                Praesent diam lacus, dapibus sed imperdiet <br> consectetur.
            </p>

            <ul>
                <li><i><font-awesome-icon icon="phone"/></i>+1 (305) 1234 - 5678</li>
                <li><i><font-awesome-icon icon="envelope"/></i>hello@example.com</li>
                <li><i><font-awesome-icon icon="location" /></i>Main Avenue,987</li>
            </ul>
            <br>
            <br>
            <a href="#"><span class="more">VIEW MAP</span></a>
        </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'MyTouch',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section{
    height: 80vh;
    background-color: #eef4ed;
}

#form{
    margin-top: 80px;
    margin-right: 20px;
    position: relative;
}

h4{
    margin: 20px 0;
}

p{
    margin: 20px 0;
    opacity: 0.5;
}

#container{
    display: flex;
    justify-content: center;
    align-items: center;
}

#news{
    background-color: #05838346;
    padding: 5px 10px;
    border-radius: 5px;
    color: #058283;
    font-size: 35px;
}


.text{
    width: 350px;
    padding:15px 10px;
    border-radius: 5px;
    opacity: 0.7;
    margin-bottom: 15px;
    background-color: #dce2db;
    margin-right: 20px;
    border: none;
}

.message{
    width: 720px;
    height: 150px;
    padding:15px 10px;
    padding-bottom: 120px;
    border-radius: 5px;
    opacity: 0.7;
    margin-bottom: 15px;
    background-color: #dce2db;
    margin-right: 20px;
    border: none;
}

#get{
    font-size: 35px;
    color: #21333e;
}

#btn{
    
    background-color: #058283;
    color: white;
    text-decoration: none;
    padding:10px 30px;
    font-size: 20px;
    border-radius: 5px;
    border: none;
}

li{
    list-style: none;
    color: #058283;
    font-size: 20px;
    margin-top: 30px;
}

i{
 margin-right: 20px;
 background-color: #cce3de;
 padding: 10px;
 border-radius: 50%;
}

.more{
    border: solid 2px #058283;
    padding: 12px;
    border-radius: 5px;
}

a{
    text-decoration: none;
    color: #058283;
}

#select{
    border: none;
    position: absolute;
    right: 40px;
    top: 75px;
    background-color: #dce2db;
    opacity: 0.7;
}
</style>