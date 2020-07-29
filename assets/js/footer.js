const footer_a = document.getElementById("footera").innerHTML;
const footer_b = document.getElementById("footerb").innerHTML;
const footer_c = document.getElementById("footerc").innerHTML;
const footer_d = document.getElementById("footerd").innerHTML;
const footer_e = document.getElementById("footere").innerHTML;


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
      preview(footer_a, "footera" , "pre1");
  });
  document.getElementById("ctc1").addEventListener('click', function(){
      copyToClipboard(footer_a, "pre1");
  });


  document.getElementById("pre2").addEventListener('click', function(){
      console.log("clicked");
      preview(footer_b, "footerb" , "pre2");
  });
  document.getElementById("ctc2").addEventListener('click', function(){
      copyToClipboard(footer_b, "pre2");
  });


  document.getElementById("pre3").addEventListener('click', function(){
      console.log("clicked");
      preview(footer_c, "footerc" , "pre3");
  });
  document.getElementById("ctc3").addEventListener('click', function(){
      copyToClipboard(footer_c, "pre3");
  });


  document.getElementById("pre4").addEventListener('click', function(){
      console.log("clicked");
      preview(footer_d, "footerd" , "pre4");
  });
  document.getElementById("ctc4").addEventListener('click', function(){
      copyToClipboard(footer_d, "pre4");
  });

  document.getElementById("pre5").addEventListener('click', function(){
      console.log("clicked");
      preview(footer_e, "footere" , "pre5");
  });
  document.getElementById("ctc5").addEventListener('click', function(){
      copyToClipboard(footer_e, "pre5");
  });
