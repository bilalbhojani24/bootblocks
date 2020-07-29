const cta_a = document.getElementById("ctaa").innerHTML;
const cta_b = document.getElementById("ctab").innerHTML;
const cta_c = document.getElementById("ctac").innerHTML;
const cta_d = document.getElementById("ctad").innerHTML;

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
      preview(cta_a, "ctaa" , "pre1");
  });
  document.getElementById("ctc1").addEventListener('click', function(){
      copyToClipboard(cta_a, "pre1");
  });


  document.getElementById("pre2").addEventListener('click', function(){
      console.log("clicked");
      preview(cta_b, "ctab" , "pre2");
  });
  document.getElementById("ctc2").addEventListener('click', function(){
      copyToClipboard(cta_b, "pre2");
  });


  document.getElementById("pre3").addEventListener('click', function(){
      console.log("clicked");
      preview(cta_c, "ctac" , "pre3");
  });
  document.getElementById("ctc3").addEventListener('click', function(){
      copyToClipboard(cta_c, "pre3");
  });


  document.getElementById("pre4").addEventListener('click', function(){
      console.log("clicked");
      preview(cta_d, "ctad" , "pre4");
  });
  document.getElementById("ctc4").addEventListener('click', function(){
      copyToClipboard(cta_d, "pre4");
  });
