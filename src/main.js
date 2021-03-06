import Vue from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faLocation} from '@fortawesome/free-solid-svg-icons'
import {faCopyright} from '@fortawesome/free-solid-svg-icons'
import {faAmbulance} from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faClock)
library.add(faPhone)
library.add(faEnvelope)
library.add(fab)
library.add(faLocation)
library.add(faCopyright)
library.add(faAmbulance)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
