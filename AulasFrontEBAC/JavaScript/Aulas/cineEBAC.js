function algoritimo(){
    const titulo = document.getElementById("titulo").value;
    const duracao = document.getElementById("duracao").value;

    const horas = Math.floor(duracao/60); //Math.floor arredonda a divisão para baixo
    const  minutos = duracao - horas * 60;

    document.getElementById("tituloSaida").textContent = titulo.toUpperCase();
    document.getElementById("duracaoSaida").textContent = horas + "horas(s) e" + minutos + "minutos";
}

