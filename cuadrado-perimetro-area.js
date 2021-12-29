
  function obtenerdatos(){
    const input = document.getElementById("ladocuadrado"); //obtiene los datos con getelementbyid
    const valor = input.value; //guarda ese dato en una variable
  
  
    var resultado = document.getElementById("resultado").innerHTML; //obtiene y guarda los datos del div resultado
    

    var perimetroCuadradoResultado = perimetroCuadrado(valor);

    var resultadoArea = areaCuadrado(valor);

    document.getElementById("resultado").innerHTML = "<b>El perímetro del cuadrado es = "+ perimetroCuadradoResultado + "<br />" +
    "El area del cuadrado es  = " + resultadoArea + " cm<sup>2</sup>";
    
    //rellena ese dato con el valor
    
  }
  
    function perimetroCuadrado(lado) {

    var resultado1 = BigInt(lado * 4).toString()  //transforma en string un numero alto para que no se vea con exponencial
    console.log(resultado1);
    return resultado1;

  }
  
  function areaCuadrado(lado) {
    var resultado2 = BigInt(lado * lado).toString() //transforma en string un numero alto para que no se vea con exponencial
    console.log(resultado2)
    return resultado2;
  }