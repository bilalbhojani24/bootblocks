const featureSect_a = document.getElementById("featurea").innerHTML;
const featureSect_b = document.getElementById("featureb").innerHTML;
const featureSect_c = document.getElementById("featurec").innerHTML;
const featureSect_d = document.getElementById("featured").innerHTML;
const featureSect_e = document.getElementById("featuree").innerHTML;
const featureSect_f = document.getElementById("featuref").innerHTML;
const featureSect_g = document.getElementById("featureg").innerHTML;


function preview(code_text, blog_name, but_name){
    var code_div = document.createElement('div');
    code_div.classList.add("code_div");
    code_div.innerText = code_text;
    document.getElementById(blog_name).append(code_div);
    document.getElementById(but_name).disabled = true;
    code_div.setAttribute("id", "code_div")
  }
  function copyToClipboard(code_text,but_name){
    const el = document.createElement('textarea');
    el.value = code_text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    document.getElementById(but_name).disabled = false;
    document.getElementById("code_div").remove();
  }

  
  document.getElementById("pre1").addEventListener('click', function(){
      console.log("clicked");
      preview(featureSect_a, "featurea" , "pre1");
  });
  document.getElementById("ctc1").addEventListener('click', function(){
      copyToClipboard(featureSect_a, "pre1");
  });


  document.getElementById("pre2").addEventListener('click', function(){
      console.log("clicked");
      preview(featureSect_b, "featureb" , "pre2");
  });
  document.getElementById("ctc2").addEventListener('click', function(){
      copyToClipboard(featureSect_b, "pre2");
  });


  document.getElementById("pre3").addEventListener('click', function(){
      console.log("clicked");
      preview(featureSect_c, "featurec" , "pre3");
  });
  document.getElementById("ctc3").addEventListener('click', function(){
      copyToClipboard(featureSect_c, "pre3");
  });


  document.getElementById("pre4").addEventListener('click', function(){
      console.log("clicked");
      preview(featureSect_d, "featured" , "pre4");
  });
  document.getElementById("ctc4").addEventListener('click', function(){
      copyToClipboard(featureSect_d, "pre4");
  });

  document.getElementById("pre5").addEventListener('click', function(){
      console.log("clicked");
      preview(featureSect_e, "featuree" , "pre5");
  });
  document.getElementById("ctc5").addEventListener('click', function(){
      copyToClipboard(featureSect_e, "pre5");
  });

  document.getElementById("pre6").addEventListener('click', function(){
      console.log("clicked");
      preview(featureSect_f, "featuref" , "pre6");
  });
  document.getElementById("ctc6").addEventListener('click', function(){
      copyToClipboard(featureSect_f, "pre6");
  });

  document.getElementById("pre7").addEventListener('click', function(){
      console.log("clicked");
      preview(featureSect_g, "featureg" , "pre7");
  });
  document.getElementById("ctc7").addEventListener('click', function(){
      copyToClipboard(featureSect_g, "pre7");
  });
