import Vue from 'vue'
import App from './Index.vue'
import add from '../../module/module'

new Vue({
  el: 'body',
  components: {
    App
  }
})

console.log(add(1, 3))

require.ensure([], () => {
  var a = require('../../module/async').default
  console.log(a)
}, 'async')
