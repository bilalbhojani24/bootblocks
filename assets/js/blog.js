const blogSect_a = document.getElementById("bloga").innerHTML;
const blogSect_b = document.getElementById("blogb").innerHTML;
const blogSect_c = document.getElementById("blogc").innerHTML;
const blogSect_d = document.getElementById("blogd").innerHTML;

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
      preview(blogSect_a, "bloga" , "pre1");
  });
  document.getElementById("ctc1").addEventListener('click', function(){
      copyToClipboard(blogSect_a, "pre1");
  });


  document.getElementById("pre2").addEventListener('click', function(){
      console.log("clicked");
      preview(blogSect_b, "blogb" , "pre2");
  });
  document.getElementById("ctc2").addEventListener('click', function(){
      copyToClipboard(blogSect_b, "pre2");
  });


  document.getElementById("pre3").addEventListener('click', function(){
      console.log("clicked");
      preview(blogSect_c, "blogc" , "pre3");
  });
  document.getElementById("ctc3").addEventListener('click', function(){
      copyToClipboard(blogSect_c, "pre3");
  });


  document.getElementById("pre4").addEventListener('click', function(){
      console.log("clicked");
      preview(blogSect_d, "blogd" , "pre4");
  });
  document.getElementById("ctc4").addEventListener('click', function(){
      copyToClipboard(blogSect_d, "pre4");
  });
