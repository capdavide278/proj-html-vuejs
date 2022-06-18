<template>
  <header>
    <!-- inserimento icona orologio -->
    <div>
        <h4><i><font-awesome-icon icon="clock"/></i>Open Hours: Mon - Sat - 9:00-18:00 </h4>
    </div>

    <div>
        <ul>
            <li><i><font-awesome-icon icon="phone"/></i>+1 (305) 1234 - 5678</li>
            <li><i><font-awesome-icon icon="envelope"/></i>hello@example.com</li>
            <li><font-awesome-icon icon="fa-brands fa-facebook-f" /></li> 
            <li><font-awesome-icon icon="fa-brands fa-twitter" /></li>
            <li><font-awesome-icon icon="fa-brands fa-linkedin-in" /></li>
        </ul>
        
    </div>
  </header>
  
</template>

<script>
export default {
  name: 'MyHeader',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header{
    width: 100%;
    position: fixed;
    height: 60px;
    background-color: #21333e;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    i{
        margin-right: 5px;
    }

    li{
        display: inline-block;
        margin: 0 10px;
    }

    img{
        height: 15px;
        background-color: #21333e;
    }
}
</style>