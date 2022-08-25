const btn = document.querySelector('#btn');
btn.addEventListener('click',calcularVelocidad);

function calcularVelocidad(){
   const input = document.getElementsByTagName('input')
   let resultado1 = document.querySelector('#result1');
   let resultado2 = document.querySelector('#result2');
   let resultado3 = document.querySelector('#result3');

   let values = [];
   let result = [];
   for (let i = 0; i < input.length; i++) {
      values.push(input[i].value);
   }
   for (let i = 0; i < values.length; i++) {
      result.push((1/(values[i]/60)).toFixed(2));
   }
   resultado1.innerHTML = `La velocidad en km/hr es: ${result[0]}km/hr`;
   resultado2.innerHTML = `La velocidad en km/hr es: ${result[1]}km/hr`;
   resultado3.innerHTML = `La velocidad en km/hr es: ${result[2]}km/hr`;
}


