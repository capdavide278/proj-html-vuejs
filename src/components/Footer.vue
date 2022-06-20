<template>
    <footer>
        <div id="container">
            <div id="contacts">
                <span id="nex">NEX</span>
                <span id="gen">GEN</span>
                <br>
                <br>
                <p>A Functional HTML Template <br> for Corporate & Business.</p>
                <ul>
                    <li><i><font-awesome-icon icon="phone"/></i>+1 (305) 1234 - 5678</li>
                    <li><i><font-awesome-icon icon="envelope"/></i>hello@example.com</li>
                    <li><i><font-awesome-icon icon="location" /></i>Main Avenue,987</li>
                </ul>
                <a href="#"><span class="more">GET IN TOUCH</span></a>
            </div>

            <div class="information">
                <h2><strong> About </strong></h2>
                <ul>
                    <li id="info" v-for="(element, index) in informazioni" :key="index">
                        {{element}}
                    </li>
                </ul>
            </div>

            <div class="transport">
                <h2><strong> Transport </strong></h2>
                <ul>
                    <li id="info" v-for="(element, i) in trasporti" :key="i">
                        {{element}}
                    </li>
                </ul>
            </div>

            <div class="support">
                <h2><strong> Support </strong></h2>
                <ul>
                    <li id="info" v-for="(element, j) in supporto" :key="j">
                        {{element}}
                    </li>
                </ul>
            </div>
        </div>

        <section id="end">
            <div id="price">
                <p>
                    Enjoy the low price. We are tracking any intention of piracy.
                </p>
            </div>

            <div id="copyright">
                <p>
                    <i><font-awesome-icon icon="copyright" /></i> 2020 NEXGEN is proudly powered by <font color="#02a2a2">Codings</font>.
                </p>
            </div>
        </section>
    </footer>
  
</template>

<script>
export default {
  name: 'MyFooter',

    data(){
        return{
            informazioni:[
                "The Company","Institutional","Social & Events","Innovation","Enviroment","Technology"
            ],

            trasporti:[
                "Industrialized","Chemicals","Packaged Liquids","Construction","Laminated Wood","And others"
            ],

            supporto:[
                "Respondability","Terms od Use","About Cookies","Privacy Policy","Accessibility","Information"
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    footer{
        background-image: url("../assets/img/bg-10.jpg");
        height: 100vh;
    }

    #container{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 15%;
    }

    #contacts{
        color: white;
    }
    
    #nex{
        background-color: #3b6160;
        padding: 10px;
        color: #01a5a5;
        border-radius: 15px;
    }

    li{
        list-style: none;
        margin: 25px 0;
    }

    a{
        text-decoration: none;
        color: white;
    }
    .more{
        border: solid 2px #058283;
        padding: 12px;
        border-radius: 10px;
    /*     margin-left: 20px; */
    }

    #info{
        margin: 10px 0;
    }

    h2{
        color: white;
        margin-bottom: 30px;
    }

    .information, .transport, .support{
        color: white;
        margin: 0 30px;
        background-color: #52505021;
        padding: 50px;
        border-radius: 10px;
    }

    #end{
        background-color: #0d0d11;
        height: 70px;
        margin-top: 255px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        color: white;
        font-size: 15px;
    }

    #copyright{
        margin-left: 260px;
        margin-bottom: 10px;
    }

    #price{
        margin-bottom: 10px;
        margin-right: 20px;
    }
</style>