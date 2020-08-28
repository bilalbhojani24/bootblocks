const bannerSec_a = document.getElementById("bannera").innerHTML;
const bannerSec_b = document.getElementById("bannerb").innerHTML;
const bannerSec_c = document.getElementById("bannerc").innerHTML;
const bannerSec_d = document.getElementById("bannerd").innerHTML;
const bannerSec_e = document.getElementById("bannere").innerHTML;
const bannerSec_f = document.getElementById("bannerf").innerHTML;
const copy = document.getElementById("copy");

function preview(code_text, blog_name, but_name){
    var code_div = document.createElement('div');
    code_div.classList.add("code_div");
    code_div.innerText = code_text;
    document.getElementById(blog_name).append(code_div);
    document.getElementById(but_name).disabled = true;
    code_div.setAttribute("id", "code_div");
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
      preview(bannerSec_a, "bannera" , "pre1");
  });
  document.getElementById("ctc1").addEventListener('click', function(){
      copyToClipboard(bannerSec_a, "pre1");
  });


  document.getElementById("pre2").addEventListener('click', function(){
      console.log("clicked");
      preview(bannerSec_b, "bannerb" , "pre2");
  });
  document.getElementById("ctc2").addEventListener('click', function(){
      copyToClipboard(bannerSec_b, "pre2");
  });


  document.getElementById("pre3").addEventListener('click', function(){
      console.log("clicked");
      preview(bannerSec_c, "bannerc" , "pre3");
  });
  document.getElementById("ctc3").addEventListener('click', function(){
      copyToClipboard(bannerSec_c, "pre3");
  });


  document.getElementById("pre4").addEventListener('click', function(){
      console.log("clicked");
      preview(bannerSec_d, "bannerd" , "pre4");
  });
  document.getElementById("ctc4").addEventListener('click', function(){
      copyToClipboard(bannerSec_d, "pre4");
  });

  document.getElementById("pre5").addEventListener('click', function(){
      console.log("clicked");
      preview(bannerSec_e, "bannere" , "pre5");
  });
  document.getElementById("ctc5").addEventListener('click', function(){
      copyToClipboard(bannerSec_e, "pre5");
  });

  document.getElementById("pre6").addEventListener('click', function(){
      console.log("clicked");
      preview(bannerSec_f, "bannerf" , "pre6");
  });
  document.getElementById("ctc6").addEventListener('click', function(){
      copyToClipboard(bannerSec_f, "pre6");
  });
