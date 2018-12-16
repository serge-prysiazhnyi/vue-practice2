Vue.component('logo',{
template:`
  <div>
  <slot name="urlLogo"></slot>
  </div>
`
})
Vue.component('social',{
  props:['roster','onSocilalClick'],
  template:`
  <ul>
    <li v-for="item in roster" v-on:click="onSocilalClick(item)">
      {{item}}
    </li>
  </ul>
  `
})
Vue.component('popup', {
  props: ['onOk','close','getSocial','listOpen'],
  template: `
  <div class="popup">
    <slot></slot>
    <slot name="ul" v-if="listOpen"></slot>
    <button class="close-btn" v-on:click="close"><i class="fas fa-window-close"></i></button>
    <button class="ok-btn" v-on:click="onOk">OK</button>
  </div>`
})

var app=new Vue({
  el:'#app',
  data:{
    list:["facebook","youtube","instagram"],
    url:`https://image.freepik.com/free-icon/apple-logo_318-40184.jpg`,
    isPopUpShow: false,
    currentSocial: '',
    listOpen: true,
    list2: ['l1','l2','l3']
  }, 
  methods: {
    onOk: function(){
      console.log("onOk");
    },
    close(){
      this.isPopUpShow = false;
    },
    showPopUp(){
      this.isPopUpShow = true;
    },
    onSocilalClick(value){
      this.currentSocial = value;
      this.showPopUp();
    },
    getSocial(){
      return this.currentSocial;
    }
  }
})