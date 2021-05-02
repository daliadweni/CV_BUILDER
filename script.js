function lire(){
var nom;
    var post;
    var tel;
    var adr;
    var mail;
    var dataskil1;
    var skil1;
     var dataskil2;
    var skil2;
     var dataskil3;
    var skil3;
     var dataskil4;
    var skil4;
     var dataskil5;
    var skil5;
    var link;
    var des;
var d11;
var d21;
 var f11;
 var f21 ;
 var d31 ;
var f31;
 var ns11;
 var ns21 ;
 var ns31;
var ps11 ;
var ps21 ;
 var ps31;
    var ed11;
var ed21;
 var ef11;
 var ef21 ;
 var ed31 ;
var ef31;
 var ens11;
 var ens21 ;
 var ens31;
var eps11 ;
var eps21 ;
 var eps31;
Swal.mixin({
  
  confirmButtonText: 'Suivant &rarr;',
  showCancelButton: false,
  progressSteps: ['1', '2', '3','4','5','6','7']
}).queue([
  {
      
 title: 'Détails personnels',
  html: '<label>Nom et Prenom :</label> <input required id="n" placeholder="SVP Votre Nom et Prenom" class="swal2-input"><label>Titre du profil : </label> <input id="a"  placeholder="SVP Votre Titre du profil" class="swal2-input"><label>Num de téléphone:</label><input id="b" type="number" placeholder="SVP Votre Nom et Prenom" class="swal2-input"><label>Adresse :</label> <input id="ca" placeholder="SVP Votre Adresse" class="swal2-input"><label>Adresse e-mail :</label> <input id="f" type="email" placeholder="SVP Votre E-Mail" class="swal2-input">',

        preConfirm: function(value)
                {
                    post= document.getElementById("a").value;
                    tel= document.getElementById("b").value;
                    nom= document.getElementById("n").value;
                    adr= document.getElementById("ca").value;
                    mail= document.getElementById("f").value;

                    
                    
                    
                }
      
  },
     
    {
    title: 'Compétences',
    
        html:  
    '<input placeholder="Compétence" id="s1" class="swal2-input" size="30" ><label>Niveau</label> <input  id="swal-input1" type="range"><input id="s2" class="swal2-input" placeholder="Compétence" size="30" ><label>Niveau</label> <input id="swal-input2" type="range"><input id="s3" class="swal2-input" placeholder="Compétence" size="30" ><label>Niveau</label> <input id="swal-input3" type="range"><input class="swal2-input" id="s4" placeholder="Compétence" size="30" ><label>Niveau</label> <input id="swal-input4" type="range"><input id="s5" class="swal2-input" placeholder="Compétence" size="30" ><label>Niveau</label> <input id="swal-input5" type="range">',

        preConfirm: function(value)
                {
                    dataskil1=document.getElementById("swal-input1").value;
                    skill1= document.getElementById("s1").value;
                    dataskil2=document.getElementById("swal-input2").value;
                    skill2= document.getElementById("s2").value;
                    dataskil3=document.getElementById("swal-input3").value;
                    skill3= document.getElementById("s3").value;
                    dataskil4=document.getElementById("swal-input4").value;
                    skill4= document.getElementById("s4").value;
                    dataskil5=document.getElementById("swal-input5").value;
                    skill5= document.getElementById("s5").value;
                    
                },
         
      
  },
    {
  title: 'Select image',
  html: '<input type="file" class="swal2-input accept="image/*" onchange="openFile(event)"><br>',
  

},{
    title: 'Linkedin',
    
  input: 'text',
  inputLabel: 'ID Linkedin',
  showCancelButton: true,
  inputValidator: (value) => {
    if (!value) {
      return 'SVP donner lid de votre Compte!'
    }}
        , preConfirm: function(value)
                {
                    link=value;
                }, 
  },
    {
    title: 'Description',
input: 'textarea',
  inputLabel: 'Votre Description :',
  inputPlaceholder: 'Description....',    
      inputValidator: (value) => {
    if (!value) {
      return 'Descrption ... :p !'
    }
  },
        preConfirm: function(value)
                {
                    
                    des= value;
                },
    }, {
            
title: 'Expérience professionnelle',
    html:  
'<input type="number" id="d1" class="swal2-input" placeholder="Debut..."><input id="f1" type="number" class="swal2-input " placeholder="Fin..."><label>Employeur:</label> <input class="swal2-input" placeholder="Nom De Societe" id="ns1" ><label>Poste:</label><input class="swal2-input" placeholder="Votre Poste ...." id="ps1" ><hr> <input type="number" id="d2" class="swal2-input" placeholder="Debut..."><input id="f2" type="number" class="swal2-input " placeholder="Fin..."><label>Employeur:</label> <input class="swal2-input" placeholder="Nom De Societe" id="ns2" ><label>Poste:</label><input class="swal2-input" placeholder="Votre Poste ...." id="ps2" ><hr><input type="number" id="d3" class="swal2-input" placeholder="Debut..."><input id="f3" type="number" class="swal2-input " placeholder="Fin..."><label>Employeur:</label> <input class="swal2-input" placeholder="Nom De Societe" id="ns3" ><label>Poste:</label><input class="swal2-input" placeholder="Votre Poste ...." id="ps3" >',
   preConfirm: function(value)
                {
                    d11 = document.getElementById("d1").value; 
                    d21 = document.getElementById("d2").value; 
                    f11 = document.getElementById("f1").value; 
                   f21 = document.getElementById("f2").value; 
                     d31 = document.getElementById("d3").value;
                    f31 = document.getElementById("f3").value; 
                   ns11 = document.getElementById("ns1").value; 
                    ns21 = document.getElementById("ns2").value; 
                    ns31 = document.getElementById("ns3").value; 
                    ps11 = document.getElementById("ps1").value;
                   ps21 = document.getElementById("ps2").value;  
                     ps31 = document.getElementById("ps3").value;  
                },
         
         
      
  },{
   title: 'Formation',
    html:  
'<input type="number" id="ed1" class="swal2-input" placeholder="Debut..."><input id="ef1" type="number" class="swal2-input " placeholder="Fin..."><label>Formation:</label> <input class="swal2-input" placeholder="Nom De Societe" id="ens1" ><label>Etablissement:</label><input class="swal2-input" placeholder="Votre Poste ...." id="eps1" ><hr> <input type="number" id="ed2" class="swal2-input" placeholder="Debut..."><input id="ef2" type="number" class="swal2-input " placeholder="Fin..."><label>Formation:</label> <input class="swal2-input" placeholder="Nom De Societe" id="ens2" ><label>Etablissement:</label><input class="swal2-input" placeholder="Votre Poste ...." id="eps2" ><hr><input type="number" id="ed3" class="swal2-input" placeholder="Debut..."><input id="ef3" type="number" class="swal2-input " placeholder="Fin..."><label>Formation:</label> <input class="swal2-input" placeholder="Nom De Societe" id="ens3" ><label>Etablissement:</label><input class="swal2-input" placeholder="Votre Poste ...." id="eps3" >',
   preConfirm: function(value)
                {
                    ed11 = document.getElementById("ed1").value; 
                    ed21 = document.getElementById("ed2").value; 
                    ef11 = document.getElementById("ef1").value; 
                   ef21 = document.getElementById("ef2").value; 
                     ed31 = document.getElementById("ed3").value;
                    ef31 = document.getElementById("ef3").value; 
                   ens11 = document.getElementById("ens1").value; 
                    ens21 = document.getElementById("ens2").value; 
                    ens31 = document.getElementById("ens3").value; 
                    eps11 = document.getElementById("eps1").value;
                   eps21 = document.getElementById("eps2").value;  
                     eps31 = document.getElementById("eps3").value;  
                },
         
    },
    
]).then((result) => {
    var donnee=[];
  if (result.value) {
donnee.push(result.value);
      Swal.fire({
      title: 'Mabrouk, All done!',
    icon: "success",
      confirmButtonText: 'Lovely!'
    })
  }
     
    document.getElementById("nom").innerHTML=nom;
    document.getElementById("post").innerHTML=post;
if (tel.length==0){
    document.getElementById("phonei").style.visibility="hidden";
}else {
      document.getElementById("phone").innerHTML=tel;

}
    if (adr.length==0){
    document.getElementById("lieuxi").style.visibility="hidden";
}else {
      document.getElementById("lieux").innerHTML=adr;

}
     if (mail.length==0){
    document.getElementById("maili").style.visibility="hidden";
}else {
      document.getElementById("mail").innerHTML=mail;

}
    
   if(skill1.length==0){
          document.getElementById("nskill1i").style.visibility="hidden";

      }
   else{
       document.getElementById("skill1").innerHTML=skill1;
    document.getElementById("nskill1").style.width = dataskil1+"%";
        document.getElementById("pskill1").innerHTML=dataskil1+"%";
      }
       if(skill2.length==0){
          document.getElementById("nskill2i").style.visibility="hidden";

      }
   else{
          
document.getElementById("skill2").innerHTML=skill2;
document.getElementById("nskill2").style.width = dataskil2+"%";
document.getElementById("pskill2").innerHTML=dataskil2+"%";
      }
    if(skill3.length==0){
          document.getElementById("nskill3i").style.visibility="hidden";

      }
   else{
          
document.getElementById("skill3").innerHTML=skill3;
document.getElementById("nskill3").style.width = dataskil3+"%";
document.getElementById("pskill3").innerHTML=dataskil3+"%";
      }
  if(skill4.length==0){
          document.getElementById("nskill4i").style.visibility="hidden";

      }
   else{
          
document.getElementById("skill4").innerHTML=skill4;
document.getElementById("nskill4").style.width = dataskil4+"%";
document.getElementById("pskill4").innerHTML=dataskil4+"%";
      }
      if(skill5.length==0){
          document.getElementById("nskill5i").style.visibility="hidden";

      }
   else{
          
document.getElementById("skill5").innerHTML=skill5;
document.getElementById("nskill5").style.width = dataskil5+"%";
document.getElementById("pskill5").innerHTML=dataskil5+"%";
      }




    document.getElementById("link").innerHTML=link;
    document.getElementById("description").innerHTML=des;
    
    
    
    
    if(d11.length==0){
                  document.getElementById("ex1").style.visibility="hidden";

    }else
       { document.getElementById("periode1").innerHTML=d11+"-"+f11;
        document.getElementById("noms1").innerHTML=ns11;
        document.getElementById("poste1").innerHTML=ps11;}
     if(d21.length==0){
                  document.getElementById("ex2").style.visibility="hidden";

    }else
      { document.getElementById("periode2").innerHTML=d21+"-"+f21;
        document.getElementById("noms2").innerHTML=ns21;
        document.getElementById("poste2").innerHTML=ps21;}
     if(d31.length==0){
                  document.getElementById("ex3").style.visibility="hidden";

    }else
   { document.getElementById("periode3").innerHTML=d31+"-"+f31;
        document.getElementById("noms3").innerHTML=ns31;
        document.getElementById("poste3").innerHTML=ps31;}
    
    if(ed11.length==0){
                          document.getElementById("forma1").style.visibility="hidden";

    }else{
     document.getElementById("periodee1").innerHTML=ed11+"-"+ef11;
        document.getElementById("nomse1").innerHTML=ens11;
        document.getElementById("postee1").innerHTML=eps11;
    }
      if(ed21.length==0){
                          document.getElementById("forma2").style.visibility="hidden";

    }else{
document.getElementById("periodee2").innerHTML=ed21+"-"+ef21;
        document.getElementById("nomse2").innerHTML=ens21;
        document.getElementById("postee2").innerHTML=eps21;}
      if(ed31.length==0){
                          document.getElementById("forma3").style.visibility="hidden";

    }else{
    document.getElementById("periodee3").innerHTML=ed31+"-"+ef31;
        document.getElementById("nomse3").innerHTML=ens31;
        document.getElementById("postee3").innerHTML=eps31;
    }
        return nom;

})
}
 var openFile = function(file) {
    var input = file.target;

    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('output');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };


  function PrintDiv() 
   {  
       var divContents = document.getElementById("cv").innerHTML;  
       var printWindow = window.open('', '', 'height=400,width=300');  
       printWindow.document.write('<script src=\"https://kit.fontawesome.com/b99e675b6e.js\"></script>');  
       printWindow.document.write('<link rel=\"stylesheet\" href=\"style2.css\" type=\"text/css\"/>');  
       printWindow.document.write(divContents);  
    
       printWindow.document.close();  
       setTimeout(function(){printWindow.print();},2000);
    }  
        
  