const contactSect_a = document.getElementById("contacta").innerHTML;
const contactSect_b = document.getElementById("contactb").innerHTML;
const contactSect_c = document.getElementById("contactc").innerHTML;

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
      preview(contactSect_a, "contacta" , "pre1");
  });
  document.getElementById("ctc1").addEventListener('click', function(){
      copyToClipboard(contactSect_a, "pre1");
  });
  
  document.getElementById("pre2").addEventListener('click', function(){
      console.log("clicked");
      preview(contactSect_b, "contactb" , "pre2");
  });
  document.getElementById("ctc2").addEventListener('click', function(){
      copyToClipboard(contactSect_b, "pre2");
  });
  
  document.getElementById("pre3").addEventListener('click', function(){
      console.log("clicked");
      preview(contactSect_c, "contactc" , "pre3");
  });
  document.getElementById("ctc3").addEventListener('click', function(){
      copyToClipboard(contactSect_c, "pre3");
  });

