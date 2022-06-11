function consultaClima(){
  let ciudad = document.getElementById("ciudad").value;
  const options = {
    method: "GET"
  };
  
  // Petición HTTP
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=96ddeac7568d65fa1431f5838aa93523`, options)
    .then(response => {return response.text()})
    .then(data => {
      let infoClima = JSON.parse(data);
      let nuevoClima = ((parseInt(infoClima.main.temp)) - 273.15) .toFixed(2);
     console.log(data);
    document.getElementById("grados").innerHTML ="La temperatura actual de su ciudad es de "+ nuevoClima +" C°" ;
    

      
    }).catch((err)=>{console.log, "info error: " , err});
}