document.getElementById("botaoaoAbrir").addEventListener("click", function ( ) {
   const resuktado = document.getElementById("resultado");
   resultado.innerHTML = "" 
}

// Luz Branca misteriosa
resultado.style.backgound = "radial-gradient(circle, white, transparent)";

    setTimeout(() => {
    const sorteio = Math.random() <0.5 ? "vivo" : "morto";
    const imagem = document.createElement("img");
    imagem.src = sorteio === "vivo" ? "gato-vivo.png" : "gato-morto.png";
    imagem.alt = "Resultado do experimento";
    imagem.style.width = "180px";
    resultado.style.background = "none";
    resultado.appendchild(imagem);
}, 1000); // 1 segundo de suspense
});