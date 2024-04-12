var BtnG = document.querySelector('#btnGenerar');

BtnG.addEventListener("click",()=>{
    var cuantos = parseInt(document.querySelector('#cuantos').value);
    var inputs = '';
    for(var i=1;i<=cuantos;i++){
        inputs += '<div class="col-md-3">';
        inputs += '<input type="number" id="n'+i+'" class="form-control" placeholder="numero '+i+'">';
        inputs += '</div>';
    }
    document.getElementById('panel').innerHTML = inputs;
});

var BtnO = document.querySelector('#btnOperar');
BtnO.addEventListener("click", () =>{
    var cuantos = parseInt(document.querySelector('#cuantos').value);
    var op = document.querySelector('#operacion').value;
    var resultado = 0;
    if (op==1) {
        //Suma
        resultado = sumar(cuantos);
    }else if(op ==2){
        //promedio
        resultado = sumar(cuantos)/cuantos;
    }else{
        resultado = multiplicar(cuantos);
    }
    //alert es una ventana que aparece al realizar una accion
    alert("Resultado = " + resultado);
});

function sumar(cuantos){
    var suma = 0;
    for(var i=1;i<=cuantos;i++){
        suma += parseInt(document.getElementById('n'+i).value);
    }
    return suma;
}
function multiplicar(cuantos){
    var multi = 1;
    for(var i=1;i<=cuantos;i++){
        multi = multi * parseInt(document.getElementById('n'+i).value);
    }
    return multi;
}