(function(){
  function validEmail(s){return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s)}
  document.getElementById('f').addEventListener('submit', (ev)=>{
    ev.preventDefault();
    const email=document.getElementById('e').value.trim();
    const pass=document.getElementById('p').value;
    let errs=[];
    if(!validEmail(email)) errs.push("Invalid email");
    if(pass.length<6) errs.push("Password too short");
    if(errs.length){ alert(errs.join("\n")); return; }
    console.log("Login OK:", {email});
    alert("Pretend login successful");
  });
})();
