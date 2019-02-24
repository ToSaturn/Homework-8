

var request = new XMLHttpRequest();
    request.open('GET', './data.json');
    request.onload=br;

    request.send();
    request.onreadystatechange = ()=>{if(request.status==200 && request.readyState == 4){console.log(request.responseText)}}
  
  function br(){  var hr = JSON.parse(this.responseText);

    document.getElementById('q1').src=hr.img_1;
    document.getElementById('q2').src=hr.img_2;
    document.getElementById('q3').src=hr.img_3;
    document.getElementById('q4').src=hr.img_4;
    document.getElementById('q5').src=hr.img_5;
    document.getElementById('q6').src=hr.img_6;
  }
//  let prom = Promise.resolve();
//  request.forEach(function(img){
//      prom = prom
//      .then(()=>httpGet(img))
//      .then((result)=>
//  })
