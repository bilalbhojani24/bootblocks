const stats_a = document.getElementById("statistica").innerHTML;
const stats_b = document.getElementById("statisticb").innerHTML;
const stats_c = document.getElementById("statisticc").innerHTML;

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
      preview(stats_a, "statistica" , "pre1");
  });
  document.getElementById("ctc1").addEventListener('click', function(){
      copyToClipboard(stats_a, "pre1");
  });


  document.getElementById("pre2").addEventListener('click', function(){
      console.log("clicked");
      preview(stats_b, "statisticb" , "pre2");
  });
  document.getElementById("ctc2").addEventListener('click', function(){
      copyToClipboard(stats_b, "pre2");
  });


  document.getElementById("pre3").addEventListener('click', function(){
      console.log("clicked");
      preview(stats_c, "statisticc" , "pre3");
  });
  document.getElementById("ctc3").addEventListener('click', function(){
      copyToClipboard(stats_c, "pre3");
  });
