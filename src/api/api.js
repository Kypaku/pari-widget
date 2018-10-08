export default function(){
  
  var getData = function(url){
    
    const _this = this
    
    var request = new Http.Get(url, true)   
    
    return request.start()
    
  }
  
  this.getData = function(){
    return new Promise((resolve) => {
      getData('../data/data.json', resolve).then((response) => {
      
      for(let key in response){
        this[key] = response[key]
      }      
      this.date = new Date(response.date*1000)
      resolve(this)
      
    })
    }).then(res => res)
  }    
}