Vue.component('logo',{
template:`
  <slot name="urlLogo"></slot>
  
`
})
Vue.component('social',{
  props:['roster'],
  template:`
  <ul>
    <li v-for="item in roster">
      {{item}}
    </li>
  </ul>
  `
})
var app=new Vue({
  el:'.container',
  data:{
    list:["facebook","youtube","instagram"],
    url:`<i class="fab fa-pied-piper-alt"></i>`
  },

})