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
            <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAAD19fXIyMhLS0uGhoby8vKrq6vLy8s0NDSOjo4gICBDQ0Pa2tqWlpbv7+8bGxuenp7n5+e2trbBwcHS0tI9PT17e3tmZmYRERErKyu5ublOTk5GRkZwcHB/f39bW1sjk9JOAAADAUlEQVR4nO3d61LiQBRFYRCUOygg4sgo7/+UY1HzY6waLidp9tnpWusBrP4qkYak0+n1MlsPNtO3/Xz23r/Sr1HqOBv1sJ3Or7n+7TF7wLEWy5Du1Cp70Le3mj6Hed+Ns8d9a9thE953g+yR39ao0eHrjvClMa8bwo+rc0K3hevfrXz+wlFLn7vw6dAa6C18be/zFrY/Q82FreaILginZYC+wlJAW+GyFNBVuCkGNBUWmSachauCQE/hrnZhuU8ZU+G6KNBR2Pbnkr1wWxZoKJzVLiw415sKSx9CO+GgNNBOuK9d+FAc6CYs/jljJyx/kroJywPNhIvqhWWuHzoL36oXNr0L2h3hHYD912zUj+4hzDb9qPCv+1Neh7DxZDH5fPx/S7O1Js2EX16H6WJNhMeH7FFHaiD8zB5zrPi17l32kKOFhYvsEUeLrpw5ZA84XPRbW/dWj0aFnTtJw8Kn7AGHiwqzxxsPIUL/ECL0DyFC/xAi9A8hQv8QIvQPIUL/EHZEuBicaxx9DGF89k/9LeOi+GoSVLRrp7+BqgX2+3M18B4r1y6nPlHHcqF6X4zy67ivpT6GeqH6o0YvFAP1wln1wmP1QvmSIrnwpXrhpnqhfCMsuXBdvVC+5EYtfFcD5cJJ9cJj9UL9xpBqoXzClwu31Qv1TyqohfonStRCOVAtfK5emLCYXyzcVy+cVi9MeCBDLNRP+Gphwt01sTDhEVKxUA8UCxMmfLEw4+k9rfCreuGyeqH8grdcmPHmB61QfsG7p16pkAC8x3Zl55Pf/z1VdvvVy+kvJZ76OAzPVRho+JqgsOHiyj3DB73j/6PZI46GEKF/CBH6hxChfwgR+ocQoX8IEfqHEKF/CBH6hxChfwgR+ocQoX8IEfqHEKF/CBH6hxChfwgR+ocQoX8IEfqHEKF/CBH6hxChfwgR+ocQoX8IEfqHEKF/CBH6hxChfwgR+ocQoX8IEfqHEKF/CBH6hxChf/ULe5MgUP+CyrZFN93PeDFAy8aRTcuH933z3x8FEEXUpgCI9gAAAABJRU5ErkJggg==" alt=""></li>
            <li><img src="data:image/png;base64,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" alt=""></li> 
            <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEUAAAD///+Hh4fs7Ozm5uadnZ2Ojo6EhIR5eXmrq6uTk5Ph4eGIiIikpKR8fHzw8PD5+fnIyMjPz8/V1dW2tra+vr5sbGxQUFAWFhYxMTEpKSnCwsJlZWWlpaU/Pz9JSUkgICA4ODhYWFhycnIlJSVAQECBfPBeAAAD1klEQVR4nO2da1vCMAxGqTBhVETGxQuggvr//6KiIOguyWhC1j3v+UxdzjPWdmmCnQ4AAAAAAAAAAAAAAAAAAAAAAAAAALDi/S2d+F6357N08GQdjAJD707xN9YBCZO6PIl1UIIs7goEnRu/WAcmxajQb8ebdWgyzEsFnbu1Dk6CokfwyMo6vHAWlYLOPVgHGEzxJHNkYh1gKNXf0R331iEGQgq6zDrEMPq0oXu1DjKIjGHYtw4yCGqe2RH1XLNhCLqxdZQhrDiGzjrKEG5ZhjEv+pyp1LlH6zADGLAMX63DDGDLMrSOMoRHjuCddZRBjBmGcW/blgzDoXWQQbwxDCPPLLb9S9rpDEnD6BNu1FyztA4wmPtqwbiXih+SSsPYcxjfVKVqFtbByVB+F7fWoUmxLZ5uslfrwARJ8ukM35obuKc//eM3b5vfN6tknk2n2STtb6xDAQAAAAAAQI3nwXA2mXrvv/a+y3X/2ToeWT6Sae79zPVmF8gh3I8SgvyYFTXm+t+Ax1F5Ri/Trp27Kb30gfyY8kq/Pd0/H38hyiHuUtUj2KszDKuzc1/0Tj78NCGv4NysYYZknvzEkLzfe/RKknUN3z310V+81lm6qiGv1OPAID5DXqXHkXVjDK95hrxCj1PmcRnWvYM7NA661AzrPYMHFO6iliGryqMA+SYPLcPumYbyp11KhlUdDrWv10BDz6u1KmYahSGnEKkU4ZeNcwzp95EghEsHGmgoPJ+eY0iPCaT9hqPWG4o+iecY1t9S10WyKbCZhpJrYjMNJSs+G2oouGBcwtDP0yRZzzynBekwJCLD5cnLwnbGHvYei2Eu2Ut3dP4gl5ZSNex+5AdveLtyuRyxpmFJhXiPM7ZXPPZChswcU2nOhXUXTQ153VLljZmsHI5Y5aCaYTc/7hfyaMcJ9uaqGVYeQzBWRrGpRsuwelNCd3nIdR8rGVLvP/RfEJtMlQz/n3P/hz42FeuvVjKkLstYcJptSD5ET7Sh1AuUzopPT/X0qi9Va65jSBcD0Q+iVM+cjiF9XXrRl9rUqBgycmX07l3qEErFsGrHtoc+u5F6Q1QxZKzWG/K6UhtTK8OH1hvS+zYYahqS8yAMYQhDGMKQNCTHwLDxhmS1CQxhaG7IrIKGIQxhCEMYwhCGMIShqWGdHlIYwhCGMIQhDGEIw6Ya1vrlDxjCEIYwhCEMW2pI/vYTDGFobriGYfSGZB8oDGEIQ3VDsucchjAUNTznN2gvY3glZHg77hLkx6TEmDHnx1eoy45b8Y/rAQAAAAAAAAAAAAAAAAAAAAAAAADi4ROq8EbESHvjyAAAAABJRU5ErkJggg==" alt=""></li>
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