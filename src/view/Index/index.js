import Vue from 'vue'
import App from './Index.vue'
import share from '../../module/share'

new Vue({
  el: 'body',
  components: {
    App
  }
})

console.log(share(1, 3))
