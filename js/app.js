var Calculadora = (function(){


  myObject = document.getElementsByClassName("tecla")
  botones = Array.prototype.slice.call(myObject)

  num_pant = 0;
  ini_num = 1;
  ope = 0;
  num_espr = 0;
  suma = 0;
  sum = 0;
  suma_n = 0;
  resta = 0;
  res = 0;
  resta_n = 0;
  multi = 0;
  mult = 0;
  multi_n = 0;
  divi = 0;
  div = 0;
  divi_n = 0;
  negativo = 0;
  positivo = 0;
  neg = 1;
  signo = 0;
  largo = 0;
  largo_sum_n = 0;
  punt = 0;
  num_punt = 0;
  num_pun = 0;
  x = 0;
  y = 0;

  // El método splice permite sacar del array botones la tecla que corresponde a la raíz cuadrada, de esta manera podemos obviarla totalmente
  botones.splice(2,1);

  for (var i = 0; i < botones.length; i++) {
    botones[i].onclick = numero;
  }

 // Cambia el tamaño de las letras al presionar y soltar, para que se vea el efecto desde el primer click se ubican antes de las demás funciones
  document.getElementById("punto").addEventListener("mousedown", function(){
    document.getElementById("punto").setAttribute("style","transform:scale(0.95,0.95)")
  })
  document.getElementById("punto").addEventListener("mouseup", function(){
    document.getElementById("punto").setAttribute("style","transform:scale(1,1)")
  })

  document.getElementById("mas").addEventListener("mousedown", function(){
    document.getElementById("mas").setAttribute("style","transform:scale(0.95,0.95)")
  })
  document.getElementById("mas").addEventListener("mouseup", function(){
    document.getElementById("mas").setAttribute("style","transform:scale(1,1)")
  })

   document.getElementById("menos").addEventListener("mousedown", function(){
     document.getElementById("menos").setAttribute("style","transform:scale(0.95,0.95)")
   })
   document.getElementById("menos").addEventListener("mouseup", function(){
     document.getElementById("menos").setAttribute("style","transform:scale(1,1)")
   })

   document.getElementById("por").addEventListener("mousedown", function(){
     document.getElementById("por").setAttribute("style","transform:scale(0.95,0.95)")
   })
   document.getElementById("por").addEventListener("mouseup", function(){
     document.getElementById("por").setAttribute("style","transform:scale(1,1)")
   })

   document.getElementById("dividido").addEventListener("mousedown", function(){
     document.getElementById("dividido").setAttribute("style","transform:scale(0.95,0.95)")
   })
   document.getElementById("dividido").addEventListener("mouseup", function(){
     document.getElementById("dividido").setAttribute("style","transform:scale(1,1)")
   })

   document.getElementById("sign").addEventListener("mousedown", function(){
     document.getElementById("sign").setAttribute("style","transform:scale(0.95,0.95)")
   })
   document.getElementById("sign").addEventListener("mouseup", function(){
     document.getElementById("sign").setAttribute("style","transform:scale(1,1)")
   })

   document.getElementById("on").addEventListener("mousedown", function(){
     document.getElementById("on").setAttribute("style","transform:scale(0.95,0.95)")
   })
   document.getElementById("on").addEventListener("mouseup", function(){
     document.getElementById("on").setAttribute("style","transform:scale(1,1)")
   })

   document.getElementById("1").addEventListener("mousedown", function(){
     document.getElementById("1").setAttribute("style","transform:scale(0.95,0.95)")
   })
   document.getElementById("1").addEventListener("mouseup", function(){
     document.getElementById("1").setAttribute("style","transform:scale(1,1)")
   })
   document.getElementById("2").addEventListener("mousedown", function(){
     document.getElementById("2").setAttribute("style","transform:scale(0.95,0.95)")
   })
   document.getElementById("2").addEventListener("mouseup", function(){
     document.getElementById("2").setAttribute("style","transform:scale(1,1)")
   })
   document.getElementById("3").addEventListener("mousedown", function(){
     document.getElementById("3").setAttribute("style","transform:scale(0.95,0.95)")
   })
   document.getElementById("3").addEventListener("mouseup", function(){
     document.getElementById("3").setAttribute("style","transform:scale(1,1)")
   })
   document.getElementById("4").addEventListener("mousedown", function(){
     document.getElementById("4").setAttribute("style","transform:scale(0.95,0.95)")
   })
   document.getElementById("4").addEventListener("mouseup", function(){
     document.getElementById("4").setAttribute("style","transform:scale(1,1)")
   })
   document.getElementById("5").addEventListener("mousedown", function(){
     document.getElementById("5").setAttribute("style","transform:scale(0.95,0.95)")
   })
   document.getElementById("5").addEventListener("mouseup", function(){
     document.getElementById("5").setAttribute("style","transform:scale(1,1)")
   })
   document.getElementById("6").addEventListener("mousedown", function(){
     document.getElementById("6").setAttribute("style","transform:scale(0.95,0.95)")
   })
   document.getElementById("6").addEventListener("mouseup", function(){
     document.getElementById("6").setAttribute("style","transform:scale(1,1)")
   })
   document.getElementById("7").addEventListener("mousedown", function(){
     document.getElementById("7").setAttribute("style","transform:scale(0.95,0.95)")
   })
   document.getElementById("7").addEventListener("mouseup", function(){
     document.getElementById("7").setAttribute("style","transform:scale(1,1)")
   })
   document.getElementById("8").addEventListener("mousedown", function(){
     document.getElementById("8").setAttribute("style","transform:scale(0.95,0.95)")
   })
   document.getElementById("8").addEventListener("mouseup", function(){
     document.getElementById("8").setAttribute("style","transform:scale(1,1)")
   })
   document.getElementById("9").addEventListener("mousedown", function(){
     document.getElementById("9").setAttribute("style","transform:scale(0.95,0.95)")
   })
   document.getElementById("9").addEventListener("mouseup", function(){
     document.getElementById("9").setAttribute("style","transform:scale(1,1)")
   })
   document.getElementById("0").addEventListener("mousedown", function(){
     document.getElementById("0").setAttribute("style","transform:scale(0.95,0.95)")
   })
   document.getElementById("0").addEventListener("mouseup", function(){
     document.getElementById("0").setAttribute("style","transform:scale(1,1)")
   })

// la funcion numero(num), permite mostrar en la pantalla de la Calculadora los numeros que van siendo cliqueados. Valida la presencia del punto, números negativos y la extensión máxima de 8 dígitos
function numero(num){
   var pantalla = document.getElementById("display");
   if (num_pant===0) {
     if (punt===1) {
       num_pant = pantalla.innerHTML = num_punt += this.getAttribute("id");
     }
       num_pant = pantalla.innerHTML = this.getAttribute("id");
   }else {
     if (num_pant!=0 || ini_num==1){
       pantalla.innerHTML = num_pant += this.getAttribute("id");
       if (signo===1) {
         pantalla.innerHTML = negativo += this.getAttribute("id");
       }
       if (punt===1) {
         num_pant = pantalla.innerHTML = num_punt += this.getAttribute("id");
       }
     }else {
       pantalla.innerHTML += num;
       num_pant += num;
         if (signo===1) {
           pantalla.innerHTML += num;
           negativo += num;
         }
     }
    ini_num = 0;
   }
    document.getElementById("igual").onclick = igual;
      document.getElementById("igual").addEventListener("mousedown", function(){
        document.getElementById("igual").setAttribute("style","transform:scale(0.95,0.95)")
      })
      document.getElementById("igual").addEventListener("mouseup", function(){
        document.getElementById("igual").setAttribute("style","transform:scale(1,1)")
      })

     largo = num_pant.length
     if (largo>8) {
       pantalla.innerHTML = num_pant.substring(0, 8)
     }
 }

// Al llamado del elemento "punto" con el evento click, la función valida si en pantalla hay un 0 o un número diferente a este
   document.getElementById("punto").onclick = function(){
     if (num_pant===0) {
       display.innerHTML = num_punt = num_pant += '.';
       punt = 1;
     }
     cadena = num_pant.indexOf(".")

     if (num_pant!=0 && document.getElementById("punto").onclick) {
       display.innerHTML = num_pun = num_pant += '.';
     }
   }

// Al llamado del elemento "mas" con el evento click, la función valida si es la primera suma o si hace parte de una secuencia de operaciones. Al final detecta el llamado al elemento "igual" y este llama a su vez a la función igual(). Los elementos "menos", "por" y "dividido" funcionan de la misma manera
 document.getElementById("mas").onclick = function(){
   display.innerHTML = "";
   ope=1
   if (ope===1){
       if (suma!=0) {
         num_espr = sum;
         num_pant = 0;
         suma = 0
         numero;
       }else{
         if (resta!=0) {
           num_espr = res;
           num_pant=0;
           resta = 0;
           numero;
         }else{
           if (multi!=0) {
             num_espr = mult;
             num_pant=0;
             multi = 0;
             numero;
           }else{
             if (div!=0) {
               num_espr = div;
               num_pant=0;
               divi = 0;
               numero;
             }else{
               num_espr = num_pant;
               num_pant=0;
               numero;
               }
             }
            }
           }
          }

   document.getElementById("igual").onclick = igual;
 }

 document.getElementById("menos").onclick = function(){
   display.innerHTML = "";
   ope=2
   if (ope===2){
     if (suma!=0) {
       num_espr = sum;
       num_pant=0;
       suma = 0
       numero;
     }else{
       if (resta!=0) {
         num_espr = res;
         num_pant=0;
         resta = 0;
         numero;
       }else{
         if (multi!=0) {
           num_espr = mult;
           num_pant=0;
           multi = 0;
           numero;
         }else{
           if (divi!=0) {
             num_espr = div;
             num_pant=0;
             divi = 0;
             numero;
           }else{
             num_espr = num_pant;
             num_pant=0;
             numero;
           }
           }
          }
         }
        }

   document.getElementById("igual").onclick = igual;
 }

 document.getElementById("por").onclick = function(){
  display.innerHTML = "";
   ope=3
   if (ope===3){
     if (suma!=0) {
       num_espr = sum;
       num_pant=0;
       suma = 0
       numero;
     }else{
       if (resta!=0) {
         num_espr = res;
         num_pant=0;
         resta = 0;
         numero;
       }else{
         if (multi!=0) {
           num_espr = mult;
           num_pant=0;
           multi = 0;
           numero;
         }else{
           if (divi!=0) {
             num_espr = div;
             num_pant=0;
             divi = 0;
             numero;
           }else{
             num_espr = num_pant;
             num_pant=0;
             numero;
             }
           }
          }
         }
        }

   document.getElementById("igual").onclick = igual;
 }

 document.getElementById("dividido").onclick = function(){
   display.innerHTML = "";
   ope=4
   if (ope===4){
     if (suma!=0) {
       num_espr = sum;
       num_pant=0;
       suma = 0
       numero;
     }else{
       if (resta!=0) {
         num_espr = res;
         num_pant=0;
         resta = 0;
         numero;
       }else{
         if (multi!=0) {
           num_espr = mult;
           num_pant=0;
           multi = 0;
           numero;
         }else{
           if (divi!=0) {
             num_espr = div;
             num_pant=0;
             divi = 0;
             numero;
           }else{
             num_espr = num_pant;
             num_pant=0;
             numero;
             }
           }
          }
         }
        }

   document.getElementById("igual").onclick = igual;
 }

// Al llamado del elemento "sign" con el evento click, valida si al momento del click el número que esta en pantalla es positivo o negativo
  document.getElementById("sign").onclick = function(){
    if (neg===1){
      negativo = -(num_pant);
      display.innerHTML = negativo;
      num_pant = negativo
      neg=0
      signo=1;
    }else{
      if (neg===0) {
      positivo = -(negativo);
      display.innerHTML = positivo
      neg=1;
      }
    }
  }


// La función igual() permite realizar las operaciones básicas, validando si los operandos son positivos y/o negativos para realizar correctamente las operaciones
 function igual(){
   if (num_pant===0) {
     display.innerHTML = 0;
   }
   if (num_pant!=0) {
     display.innerHTML = num_pant;
   }

   x = Math.sign(num_espr)
   y = Math.sign(num_pant)

   if (ope===1){
     if (x===-1) {
       suma = parseFloat(num_pant) + negativo
       sum = suma.toString();
     }else{
       if (y===-1) {
         suma = parseFloat(num_espr) + negativo
         sum = suma.toString();
       }
     }

     suma = parseFloat(num_espr) + parseFloat(num_pant)
     sum = suma.toString();

     if (suma!= 0 && document.getElementById("igual").onclick) {
       num_espr = suma;
       suma_n = num_espr + parseFloat(num_pant)
       display.innerHTML = suma_n;
     }

     var largo_sum = sum.length
       if (largo_sum>8) {
         display.innerHTML = sum.substring(0, 8)
       }else{
       display.innerHTML = suma;
       }

   }else{
     if (ope===2){
       if (x===-1) {
         resta = negativo - parseFloat(num_pant)
         res = resta.toString();
       }else{
         if (y===-1) {
           resta = parseFloat(num_espr) - negativo
           res = resta.toString();
         }
       }

       resta = parseFloat(num_espr) - parseFloat(num_pant)
       res = resta.toString();

       if (resta!= 0 && document.getElementById("igual").onclick) {
         num_espr = resta;
         resta_n = num_espr + parseFloat(num_pant)
         display.innerHTML = resta_n;
       }

       var largo_rest = res.length
         if (largo_rest>8) {
           display.innerHTML = res.substring(0, 8)
         }else{
         display.innerHTML = resta;
         }
     }else{
       if (ope===3){
         multi = parseFloat(num_espr) * parseFloat(num_pant);
         mult = multi.toString();

         if (multi!= 0 && document.getElementById("igual").onclick) {
           num_espr = multi;
           multi_n = num_espr + parseFloat(num_pant)
           display.innerHTML = multi_n;
         }

         var largo_mult = mult.length
           if (largo_mult>8) {
             display.innerHTML = mult.substring(0, 8)
           }else{
           display.innerHTML = multi;
           }
       }else{
         if (ope===4){
           divi = parseFloat(num_espr) / parseFloat(num_pant);
           div = divi.toString();

           if (divi!= 0 && document.getElementById("igual").onclick) {
             num_espr = divi;
             divi_n = num_espr + parseFloat(num_pant)
             display.innerHTML = divi_n;
           }

           var largo_div = div.length
             if (largo_div>8) {
               display.innerHTML = div.substring(0, 8)
             }else{
             display.innerHTML = divi;
             }
         }
       }
     }
   }
 }

// Al llamado del elemento "on" con el evento click, se reinician todas las variables utlizadas (a sus valores iniciales) y aparece en pantalla el "0"
  document.getElementById("on").onclick = function(){
    display.innerHTML = 0;
    num_pant = 0;
    ini_num = 1;
    ope = 0;
    num_espr = 0;
    suma = 0;
    sum = 0;
    suma_n = 0;
    resta = 0;
    res = 0;
    resta_n = 0;
    multi = 0;
    mult = 0;
    multi_n = 0;
    divi = 0;
    div = 0;
    divi_n = 0;
    negativo = 0;
    positivo = 0;
    neg = 1;
    signo = 0;
    largo = 0;
    largo_sum_n = 0;
    punt = 0;
    num_punt = 0;
    num_pun = 0;
    x = 0;
    y = 0;
  }

})();
