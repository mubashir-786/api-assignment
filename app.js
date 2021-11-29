


var table = document.getElementById("tab")
var result
function apiData(){

    
    
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(data){
        return data.json()
    })
    .then(function(result){
          
       
     

looping(result)
    })
    

}
var i

//loop page 1
function looping(result){


    for( i = 0 ; i < 10; i++){
        var tr = document.createElement("tr")

        //User Id Append into table 
        // var td = document.createElement("td")
        // var num = document.createTextNode(result[i].userId)
        // td.appendChild(num)
        // tr.appendChild(td)
       

        //Id Append into table
        var td1 = document.createElement("td")
        var idd = document.createTextNode(result[i].id)
        td1.appendChild(idd)
        tr.appendChild(td1)

        //title append into table
        var td2 = document.createElement("td")
        var tit = document.createTextNode(result[i].title)
        td2.appendChild(tit)
        tr.appendChild(td2)

        //body append into table
        var td3 = document.createElement("td")
        var bdy = document.createTextNode(result[i].body)
        td3.appendChild(bdy)
        tr.appendChild(td3)

        // create button & assign id and append into table
        var td4 = document.createElement("td")
        var cmtBtn = document.createElement("button")
        cmtBtn.type = "button"
        cmtBtn.innerText = "View Comments"
        cmtBtn.className = "btn btn-lg btn-primary"
        cmtBtn.onclick = coment(i, result)
       
        
        td4.appendChild(cmtBtn)
        tr.appendChild(td4)


        
        
        



        
        
        table.appendChild(tr)
       
    }
    



}

   

apiData()


function coment(i, result){
    return function(){
        
        fetch("https://jsonplaceholder.typicode.com/comments?postId=" + result[i].id)
         .then(function(comment){
                return comment.json()
         })
         .then(function(res){
             console.log(res)
             commentb(res)
         })
         // pta nh kia ha ye lekin button k liye bootstrap se ye use kia h 
         $(document).ready(function(){
            $(".btn").click(function(){
                $("#myModal").modal('show');
            });
        });
      
    }
    

    

}
function commentb(res){
    var doo = document.getElementById("apicom")
    doo.innerText= ""
    for(var a = 0 ; a<res.length; a++){
          var txt = document.createTextNode(res[a].body)
          var paras = document.createElement("p")
          paras.appendChild(txt)
          doo.appendChild(paras)

          
    }
    console.log(a)
}

function looping2(){

    
    
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(data){
        return data.json()
    })
    .then(function(result){
          
       
     

loopi2(result)
    })
    

}


//loop page 2
function loopi2(result){
      table.innerText = ""

    for( i = i ; i < 20 ; i++){
        var tr = document.createElement("tr")

        //User Id Append into table 
        // var td = document.createElement("td")
        // var num = document.createTextNode(result[i].userId)
        // td.appendChild(num)
        // tr.appendChild(td)
       

        //Id Append into table
        var td1 = document.createElement("td")
        var idd = document.createTextNode(result[i].id)
        td1.appendChild(idd)
        tr.appendChild(td1)

        //title append into table
        var td2 = document.createElement("td")
        var tit = document.createTextNode(result[i].title)
        td2.appendChild(tit)
        tr.appendChild(td2)

        //body append into table
        var td3 = document.createElement("td")
        var bdy = document.createTextNode(result[i].body)
        td3.appendChild(bdy)
        tr.appendChild(td3)

        // create button & assign id and append into table
        var td4 = document.createElement("td")
        var cmtBtn = document.createElement("button")
        cmtBtn.type = "button"
        cmtBtn.innerText = "View Comments"
        cmtBtn.className = "btn btn-lg btn-primary"
        cmtBtn.onclick = coment(i, result)
       
        
        td4.appendChild(cmtBtn)
        tr.appendChild(td4)


        
        
        



        
        
        table.appendChild(tr)
       
    }
    



}

function looping3(){

    
    
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(data){
        return data.json()
    })
    .then(function(result){
          
       
     

loopi3(result)
    })
    

}


//loop page 3
function loopi3(result){
      table.innerText = ""

    for( i = i ; i < 30 ; i++){
        var tr = document.createElement("tr")

        //User Id Append into table 
        // var td = document.createElement("td")
        // var num = document.createTextNode(result[i].userId)
        // td.appendChild(num)
        // tr.appendChild(td)
       

        //Id Append into table
        var td1 = document.createElement("td")
        var idd = document.createTextNode(result[i].id)
        td1.appendChild(idd)
        tr.appendChild(td1)

        //title append into table
        var td2 = document.createElement("td")
        var tit = document.createTextNode(result[i].title)
        td2.appendChild(tit)
        tr.appendChild(td2)

        //body append into table
        var td3 = document.createElement("td")
        var bdy = document.createTextNode(result[i].body)
        td3.appendChild(bdy)
        tr.appendChild(td3)

        // create button & assign id and append into table
        var td4 = document.createElement("td")
        var cmtBtn = document.createElement("button")
        cmtBtn.type = "button"
        cmtBtn.innerText = "View Comments"
        cmtBtn.className = "btn btn-lg btn-primary"
        cmtBtn.onclick = coment(i, result)
       
        
        td4.appendChild(cmtBtn)
        tr.appendChild(td4)


        
        
        



        
        
        table.appendChild(tr)
       
    }
    



}

function looping4(){

    
    
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(data){
        return data.json()
    })
    .then(function(result){
          
       
     

loopi4(result)
    })
    

}

//loop page 4
function loopi4(result){
    table.innerText = ""

  for( i = i ; i < 40 ; i++){
      var tr = document.createElement("tr")

      //User Id Append into table 
      // var td = document.createElement("td")
      // var num = document.createTextNode(result[i].userId)
      // td.appendChild(num)
      // tr.appendChild(td)
     

      //Id Append into table
      var td1 = document.createElement("td")
      var idd = document.createTextNode(result[i].id)
      td1.appendChild(idd)
      tr.appendChild(td1)

      //title append into table
      var td2 = document.createElement("td")
      var tit = document.createTextNode(result[i].title)
      td2.appendChild(tit)
      tr.appendChild(td2)

      //body append into table
      var td3 = document.createElement("td")
      var bdy = document.createTextNode(result[i].body)
      td3.appendChild(bdy)
      tr.appendChild(td3)

      // create button & assign id and append into table
      var td4 = document.createElement("td")
      var cmtBtn = document.createElement("button")
      cmtBtn.type = "button"
      cmtBtn.innerText = "View Comments"
      cmtBtn.className = "btn btn-lg btn-primary"
      cmtBtn.onclick = coment(i, result)
     
      
      td4.appendChild(cmtBtn)
      tr.appendChild(td4)


      
      
      



      
      
      table.appendChild(tr)
     
  }
  



}
function looping5(){

    
    
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(data){
        return data.json()
    })
    .then(function(result){
          
       
     

loopi5(result)
    })
    

}

//loop page 5
function loopi5(result){
    table.innerText = ""

  for( i = i ; i < 50 ; i++){
      var tr = document.createElement("tr")

      //User Id Append into table 
      // var td = document.createElement("td")
      // var num = document.createTextNode(result[i].userId)
      // td.appendChild(num)
      // tr.appendChild(td)
     

      //Id Append into table
      var td1 = document.createElement("td")
      var idd = document.createTextNode(result[i].id)
      td1.appendChild(idd)
      tr.appendChild(td1)

      //title append into table
      var td2 = document.createElement("td")
      var tit = document.createTextNode(result[i].title)
      td2.appendChild(tit)
      tr.appendChild(td2)

      //body append into table
      var td3 = document.createElement("td")
      var bdy = document.createTextNode(result[i].body)
      td3.appendChild(bdy)
      tr.appendChild(td3)

      // create button & assign id and append into table
      var td4 = document.createElement("td")
      var cmtBtn = document.createElement("button")
      cmtBtn.type = "button"
      cmtBtn.innerText = "View Comments"
      cmtBtn.className = "btn btn-lg btn-primary"
      cmtBtn.onclick = coment(i, result)
     
      
      td4.appendChild(cmtBtn)
      tr.appendChild(td4)


      
      
      



      
      
      table.appendChild(tr)
     
  }
  



}


function looping6(){

    
    
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(data){
        return data.json()
    })
    .then(function(result){
          
       
     

loopi6(result)
    })
    

}


//loop page 6
function loopi6(result){
      table.innerText = ""

    for( i = i ; i < 60 ; i++){
        var tr = document.createElement("tr")

        //User Id Append into table 
        // var td = document.createElement("td")
        // var num = document.createTextNode(result[i].userId)
        // td.appendChild(num)
        // tr.appendChild(td)
       

        //Id Append into table
        var td1 = document.createElement("td")
        var idd = document.createTextNode(result[i].id)
        td1.appendChild(idd)
        tr.appendChild(td1)

        //title append into table
        var td2 = document.createElement("td")
        var tit = document.createTextNode(result[i].title)
        td2.appendChild(tit)
        tr.appendChild(td2)

        //body append into table
        var td3 = document.createElement("td")
        var bdy = document.createTextNode(result[i].body)
        td3.appendChild(bdy)
        tr.appendChild(td3)

        // create button & assign id and append into table
        var td4 = document.createElement("td")
        var cmtBtn = document.createElement("button")
        cmtBtn.type = "button"
        cmtBtn.innerText = "View Comments"
        cmtBtn.className = "btn btn-lg btn-primary"
        cmtBtn.onclick = coment(i, result)
       
        
        td4.appendChild(cmtBtn)
        tr.appendChild(td4)


        
        
        



        
        
        table.appendChild(tr)
       
    }
    



}

function looping7(){

    
    
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(data){
        return data.json()
    })
    .then(function(result){
          
       
     

loopi7(result)
    })
    

}

//loop page 7
function loopi7(result){
    table.innerText = ""

  for( i = i ; i < 70 ; i++){
      var tr = document.createElement("tr")

      //User Id Append into table 
      // var td = document.createElement("td")
      // var num = document.createTextNode(result[i].userId)
      // td.appendChild(num)
      // tr.appendChild(td)
     

      //Id Append into table
      var td1 = document.createElement("td")
      var idd = document.createTextNode(result[i].id)
      td1.appendChild(idd)
      tr.appendChild(td1)

      //title append into table
      var td2 = document.createElement("td")
      var tit = document.createTextNode(result[i].title)
      td2.appendChild(tit)
      tr.appendChild(td2)

      //body append into table
      var td3 = document.createElement("td")
      var bdy = document.createTextNode(result[i].body)
      td3.appendChild(bdy)
      tr.appendChild(td3)

      // create button & assign id and append into table
      var td4 = document.createElement("td")
      var cmtBtn = document.createElement("button")
      cmtBtn.type = "button"
      cmtBtn.innerText = "View Comments"
      cmtBtn.className = "btn btn-lg btn-primary"
      cmtBtn.onclick = coment(i, result)
     
      
      td4.appendChild(cmtBtn)
      tr.appendChild(td4)


      
      
      



      
      
      table.appendChild(tr)
     
  }
  



}
function looping8(){

    
    
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(data){
        return data.json()
    })
    .then(function(result){
          
       
     

loopi8(result)
    })
    

}

//loop page 8
function loopi8(result){
    table.innerText = ""

  for( i = i ; i < 80 ; i++){
      var tr = document.createElement("tr")

      //User Id Append into table 
      // var td = document.createElement("td")
      // var num = document.createTextNode(result[i].userId)
      // td.appendChild(num)
      // tr.appendChild(td)
     

      //Id Append into table
      var td1 = document.createElement("td")
      var idd = document.createTextNode(result[i].id)
      td1.appendChild(idd)
      tr.appendChild(td1)

      //title append into table
      var td2 = document.createElement("td")
      var tit = document.createTextNode(result[i].title)
      td2.appendChild(tit)
      tr.appendChild(td2)

      //body append into table
      var td3 = document.createElement("td")
      var bdy = document.createTextNode(result[i].body)
      td3.appendChild(bdy)
      tr.appendChild(td3)

      // create button & assign id and append into table
      var td4 = document.createElement("td")
      var cmtBtn = document.createElement("button")
      cmtBtn.type = "button"
      cmtBtn.innerText = "View Comments"
      cmtBtn.className = "btn btn-lg btn-primary"
      cmtBtn.onclick = coment(i, result)
     
      
      td4.appendChild(cmtBtn)
      tr.appendChild(td4)


      
      
      



      
      
      table.appendChild(tr)
     
  }
  



}
function looping9(){

    
    
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(data){
        return data.json()
    })
    .then(function(result){
          
       
     

loopi9(result)
    })
    

}

//loop page 9
function loopi9(result){
    table.innerText = ""

  for( i = i ; i < 90 ; i++){
      var tr = document.createElement("tr")

      //User Id Append into table 
      // var td = document.createElement("td")
      // var num = document.createTextNode(result[i].userId)
      // td.appendChild(num)
      // tr.appendChild(td)
     

      //Id Append into table
      var td1 = document.createElement("td")
      var idd = document.createTextNode(result[i].id)
      td1.appendChild(idd)
      tr.appendChild(td1)

      //title append into table
      var td2 = document.createElement("td")
      var tit = document.createTextNode(result[i].title)
      td2.appendChild(tit)
      tr.appendChild(td2)

      //body append into table
      var td3 = document.createElement("td")
      var bdy = document.createTextNode(result[i].body)
      td3.appendChild(bdy)
      tr.appendChild(td3)

      // create button & assign id and append into table
      var td4 = document.createElement("td")
      var cmtBtn = document.createElement("button")
      cmtBtn.type = "button"
      cmtBtn.innerText = "View Comments"
      cmtBtn.className = "btn btn-lg btn-primary"
      cmtBtn.onclick = coment(i, result)
     
      
      td4.appendChild(cmtBtn)
      tr.appendChild(td4)


      
      
      



      
      
      table.appendChild(tr)
     
  }
  



}
function looping10(){

    
    
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(data){
        return data.json()
    })
    .then(function(result){
          
       
     

loopi10(result)
    })
    

}

//loop page 8
function loopi10(result){
    table.innerText = ""

  for( i = i ; i < 100 ; i++){
      var tr = document.createElement("tr")

      //User Id Append into table 
      // var td = document.createElement("td")
      // var num = document.createTextNode(result[i].userId)
      // td.appendChild(num)
      // tr.appendChild(td)
     

      //Id Append into table
      var td1 = document.createElement("td")
      var idd = document.createTextNode(result[i].id)
      td1.appendChild(idd)
      tr.appendChild(td1)

      //title append into table
      var td2 = document.createElement("td")
      var tit = document.createTextNode(result[i].title)
      td2.appendChild(tit)
      tr.appendChild(td2)

      //body append into table
      var td3 = document.createElement("td")
      var bdy = document.createTextNode(result[i].body)
      td3.appendChild(bdy)
      tr.appendChild(td3)

      // create button & assign id and append into table
      var td4 = document.createElement("td")
      var cmtBtn = document.createElement("button")
      cmtBtn.type = "button"
      cmtBtn.innerText = "View Comments"
      cmtBtn.className = "btn btn-lg btn-primary"
      cmtBtn.onclick = coment(i, result)
     
      
      td4.appendChild(cmtBtn)
      tr.appendChild(td4)
      
      table.appendChild(tr)
     
  }
  



}