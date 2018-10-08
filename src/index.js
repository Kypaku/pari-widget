import Vue from 'vue'
import Api from './api/api.js'

const app = new Vue({
  el: '#app_el',
  data:{
    tournament: '',
    date: '',
    firstTeam: '',
    secondTeam: '',
    firstScore: 0,
    secondScore: 0,
    k: 0,
    url: ''
  },
  methods:{
    increase: function(prop){
      this[prop] < 8 ? this[prop]++ : null
      this.k = api.coefficients[`${this.firstScore}:${this.secondScore}`]
    },
    decrease: function(prop){
      this[prop] ? this[prop]-- : null
      this.k = api.coefficients[`${this.firstScore}:${this.secondScore}`]
    }
  },
  computed:{
    formatDate: function(){
      if(this.date){
        let date = this.date
        return `${date.getDate()} ${date.toLocaleString('ru', { month:'long' })} ${date.getFullYear()}, ${date.toLocaleString('ru', { hour: 'numeric', minute:'numeric' })}`
      }
    }
  },
  mounted:function(){
    app_el.classList.remove('loading-vue')
  }
})


const api = new Api()
api.getData().then((res) =>{
  app.tournament = res.tournament
  app.date = res.date
  app.firstTeam = res.firstTeam
  app.secondTeam = res.secondTeam
  app.k = res.coefficients["0:0"]
  app.url = res.url    
  app_el.classList.remove('loading-api')
})
