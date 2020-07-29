const contentSect_a = document.getElementById("contenta").innerHTML;
const contentSect_b = document.getElementById("contentb").innerHTML;
const contentSect_c = document.getElementById("contentc").innerHTML;
const contentSect_d = document.getElementById("contentd").innerHTML;
const contentSect_e = document.getElementById("contente").innerHTML;
const contentSect_f = document.getElementById("contentf").innerHTML;
const contentSect_g = document.getElementById("contente").innerHTML;
const contentSect_h = document.getElementById("contentf").innerHTML;

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
      preview(contentSect_a, "contenta" , "pre1");
  });
  document.getElementById("ctc1").addEventListener('click', function(){
      copyToClipboard(contentSect_a, "pre1");
  });


  document.getElementById("pre2").addEventListener('click', function(){
      console.log("clicked");
      preview(contentSect_b, "contentb" , "pre2");
  });
  document.getElementById("ctc2").addEventListener('click', function(){
      copyToClipboard(contentSect_b, "pre2");
  });


  document.getElementById("pre3").addEventListener('click', function(){
      console.log("clicked");
      preview(contentSect_c, "contentc" , "pre3");
  });
  document.getElementById("ctc3").addEventListener('click', function(){
      copyToClipboard(contentSect_c, "pre3");
  });


  document.getElementById("pre4").addEventListener('click', function(){
      console.log("clicked");
      preview(contentSect_d, "contentd" , "pre4");
  });
  document.getElementById("ctc4").addEventListener('click', function(){
      copyToClipboard(contentSect_d, "pre4");
  });

  document.getElementById("pre5").addEventListener('click', function(){
      console.log("clicked");
      preview(contentSect_e, "contente" , "pre5");
  });
  document.getElementById("ctc5").addEventListener('click', function(){
      copyToClipboard(contentSect_e, "pre5");
  });

  document.getElementById("pre6").addEventListener('click', function(){
      console.log("clicked");
      preview(contentSect_f, "contentf" , "pre6");
  });
  document.getElementById("ctc6").addEventListener('click', function(){
      copyToClipboard(contentSect_f, "pre6");
  });

  document.getElementById("pre7").addEventListener('click', function(){
      console.log("clicked");
      preview(contentSect_g, "contentg" , "pre7");
  });
  document.getElementById("ctc7").addEventListener('click', function(){
      copyToClipboard(contentSect_g, "pre7");
  });

  document.getElementById("pre8").addEventListener('click', function(){
      console.log("clicked");
      preview(contentSect_h, "contenth" , "pre8");
  });
  document.getElementById("ctc8").addEventListener('click', function(){
      copyToClipboard(contentSect_h, "pre8");
  });
