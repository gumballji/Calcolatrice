const areaQuadrato = document.getElementById('areaQuadrato');
const volumeCubo = document.getElementById('volumeCubo');
const areaRettangolo = document.getElementById('areaRettangolo');
const volumeParal = document.getElementById('volumeParal');
const areaTriaIso = document.getElementById('areaTriaIso');
const areaTriEqui = document.getElementById('areaTriEqui');
const ipotenusa = document.getElementById('ipotenusa');

const risultato = document.getElementById('risultato');


areaQuadrato.addEventListener("click", () => {
  try {
    let side = window.prompt("Inserire la misura del lato");
    side = Number(side);
    let area = Math.pow(side, 2);
    risultato.innerHTML = area;
    if (isNaN(side)) {
      risultato.innerHTML = "Non è un numero, riprova";
    }
    if (side == "") {
      risultato.innerHTML = "Non hai inserito nulla, riprova";
    }
  } catch (error) {
    console.log(error);
  }
});
volumeCubo.addEventListener("click", () => {
  try {
    let side = window.prompt("Inserire la misura del primo lato");
    side = Number(side);
    let volume = Math.pow(side, 3);
    risultato.innerHTML = volume;
    if (isNaN(side)) {
      risultato.innerHTML = "Non è un numero, riprova";
    }
    if (side == "") {
      risultato.innerHTML = "Non hai inserito nulla, riprova";
    }
  } catch (error) {
    console.log(error);
  }
});
areaRettangolo.addEventListener("click", () => {
  try {
    let side1 = window.prompt("Inserire la misura del primo lato");
    side1 = Number(side1);

    let side2 = window.prompt("Inserire la misura del secondo lato");
    side2 = Number(side2);

    let area = side1 * side2;
    risultato.innerHTML = area;

    if (isNaN(side1)) {
      risultato.innerHTML = "Non è un numero, riprova";
    }
    if (side1 == "") {
      risultato.innerHTML = "Non hai inserito nulla, riprova";
    }

    if (isNaN(side2)) {
      risultato.innerHTML = "Non è un numero, riprova";
    }
    if (side2 == "") {
      risultato.innerHTML = "Non hai inserito nulla, riprova";
    }
  } catch (error) {
    console.log(error);
  }
});
volumeParal.addEventListener("click", () => {
  try {
    let side1 = window.prompt("Inserire la misura del primo lato");
    side1 = Number(side1);

    let side2 = window.prompt("Inserire la misura del secondo lato");
    side2 = Number(side2);

    let side3 = window.prompt("Inserire la misura del terzo lato");
    side3 = Number(side3);

    let volume = side1 * side2 * side3;
    risultato.innerHTML = volume;

    if (isNaN(side1)) {
      risultato.innerHTML = "Non è un numero, riprova";
    }
    if (side1 == "") {
      risultato.innerHTML = "Non hai inserito nulla, riprova";
    }

    if (isNaN(side2)) {
      risultato.innerHTML = "Non è un numero, riprova";
    }
    if (side2 == "") {
      risultato.innerHTML = "Non hai inserito nulla, riprova";
    }

    if (isNaN(side3)) {
      risultato.innerHTML = "Non è un numero, riprova";
    }
    if (side3 == "") {
      risultato.innerHTML = "Non hai inserito nulla, riprova";
    }
  } catch (error) {
    console.log(error);
  }
});
areaTriaIso.addEventListener("click", () => {
  try {
    let side1 = window.prompt("Inserire la misura del primo lato");
    side1 = Number(side1);

    let side2 = window.prompt("Inserire la misura del secondo lato");
    side2 = Number(side2);

    let area = (side1 * side2) / 2;
    risultato.innerHTML = area;

    if (isNaN(side1)) {
      risultato.innerHTML = "Non è un numero, riprova";
    }
    if (side1 == "") {
      risultato.innerHTML = "Non hai inserito nulla, riprova";
    }

    if (isNaN(side2)) {
      risultato.innerHTML = "Non è un numero, riprova";
    }
    if (side2 == "") {
      risultato.innerHTML = "Non hai inserito nulla, riprova";
    }
  } catch (error) {
    console.log(error);
  }
});
areaTriEqui.addEventListener("click", () => {
  try {
    let side = window.prompt("Inserire la misura del primo lato");
    side = Number(side);

    let area = (Math.sqrt(3) / 4) * Math.pow(side, 2);
    risultato.innerHTML = area;

    if (isNaN(side)) {
      risultato.innerHTML = "Non è un numero, riprova";
    }
    if (side == "") {
      risultato.innerHTML = "Non hai inserito nulla, riprova";
    }
  } catch (error) {
    console.log(error);
  }
});
ipotenusa.addEventListener("click", () => {
  try {
    let side1 = window.prompt("Inserire la misura del primo lato");
    side1 = Number(side1);

    let side2 = window.prompt("Inserire la misura del secondo lato");
    side2 = Number(side2);

    let ipotenusa = Math.sqrt(side1 * side1 + side2 * side2);
    risultato.innerHTML = ipotenusa;

    if (isNaN(side1)) {
      risultato.innerHTML = "Non è un numero, riprova";
    }
    if (side1 == "") {
      risultato.innerHTML = "Non hai inserito nulla, riprova";
    }

    if (isNaN(side2)) {
      risultato.innerHTML = "Non è un numero, riprova";
    }
    if (side2 == "") {
      risultato.innerHTML = "Non hai inserito nulla, riprova";
    }
  } catch (error) {
    console.log(error);
  }
});