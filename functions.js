/*Modals */
$(document).ready(function() {             
    $('#loginModal').modal('show');
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
});
/*Boton de registro */
var signupBtn = document.getElementById('signupFrm');
    signupBtn.addEventListener('click', function() {
        var signupModal = new bootstrap.Modal(document.getElementById('signupModal'), {});
        signupModal.show();
});

$(document).ready(function() {
  $('#btn-cerrar-modal').on('click', function() {
      $('#modal-registro').modal('hide');
  });
});


/*Uso de api registro */
// Obtener los datos de todos los países utilizando la API

// Obtener lista de provincias
fetch("https://apis.datos.gob.ar/georef/api/provincias")
  .then(response => response.json())
  .then(data => {
    const provincias = data.provincias;
    const selectProvincia = document.getElementById("provincia");
    for (let i = 0; i < provincias.length; i++) {
      const option = document.createElement("option");
      option.text = provincias[i].nombre;
      option.value = provincias[i].id;
      selectProvincia.add(option);
    }
  });

// Cargar localidades al seleccionar una provincia
document.getElementById('provincia').addEventListener('change', event => {
  const provinciaId = event.target.value;
  if (provinciaId) {
    fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${provinciaId}&campos=id,nombre&max=5000`)
      .then(response => response.json())
      .then(data => {
        const localidades = data.localidades;
        const selectLocalidad = document.getElementById("localidades");
        selectLocalidad.innerHTML = "<option value=''>Selecciona una localidad</option>";
        for (let i = 0; i < localidades.length; i++) {
          const option = document.createElement("option");
          option.text = localidades[i].nombre;
          option.value = localidades[i].id;
          selectLocalidad.add(option);
        }
      });
  }
});

//Searchbar
const cardiologos = [
  {
    nombre: "Omar Varela",
    zona: "norte",
    cobertura: "osde",
  },
  {
    nombre: "Camila Garcia",
    zona: "este",
    cobertura: "osde",
  },

  {
    nombre: "Norberto Martinez",
    zona: "oeste",
    cobertura: "osde",
  },

  {
    nombre: "Samuel Gonzalez",
    zona: "sur",
    cobertura: "osde",
  },
  
  {
    nombre: "Eduardo Alvarez",
    zona: "este",
    cobertura: "pami",
  },
  {
    nombre: "Eduardo Lopez",
    zona: "oeste",
    cobertura: "pami",
  },

  {
    nombre: "David Sanchez",
    zona: "norte",
    cobertura: "pami",
  },
  {
    nombre: "Ricardo Aster",
    zona: "sur",
    cobertura: "ioma",
  },
  {
    nombre: "Camila Lopez",
    zona: "norte",
    cobertura: "ioma",
  },
  {
    nombre: "Ricardo Martinez",
    zona: "oeste",
    cobertura: "ioma",
  },

];

const odontologos = [
  {
    nombre: "Juan Sebastian Schefer",
    zona: "norte",
    cobertura: "osde",
  },
  {
    nombre: "Salvador Brunetti",
    zona: "oeste",
    cobertura: "osde",
  },
  {
    nombre: "Nina Alvarez",
    zona: "este",
    cobertura: "osde",
  },
  {
    nombre: "Elian Allister",
    zona: "sur",
    cobertura: "osde",
  },
];

const psiquiatras = [
  {
    nombre: "Hernan Flores",
    zona: "norte",
    cobertura: "osde",
  },
  {
    nombre: "Juana Negretti",
    zona: "oeste",
    cobertura: "osde",
  },
  {
    nombre: "Nahuel Vazquez",
    zona: "este",
    cobertura: "pami",
  },
  {
    nombre: "Luca Nadotti",
    zona: "sur",
    cobertura: "ioma",
  },
];


function eleccionCliente(){

const opcionMedico = document.getElementById("tipoMedico");
const medicoElegido = opcionMedico.value;

const opcionZona = document.getElementById("tipoZona");
const zonaElegida = opcionZona.value;

const opcionCobertura = document.getElementById("tipoCoberturaMedica");
const coberturaElegida = opcionCobertura.value;



if (medicoElegido === "cardiologia") {
const research1 = cardiologos
.filter(objeto => objeto.zona === zonaElegida)
.filter(objeto => objeto.cobertura === coberturaElegida)


const contenidoDiv = document.getElementById("respuestaResearch");
respuestaResearch.innerHTML = "";
const parrafo = document.createElement("p");  
parrafo.textContent = "Hemos realizado la busqueda en nuestra base de datos, esta es la respuesta: ";
contenidoDiv.appendChild(parrafo);

// Creamos la lista con los medicos

const listaMedicos = document.getElementById("listaMedicos");
listaMedicos.innerHTML = "";

const liNombre = document.createElement("li");
liNombre.textContent = "Medico: " + research1[0].nombre;
listaMedicos.appendChild(liNombre);

const liCobertura = document.createElement("li");
liCobertura.textContent = "Cobertura: " + research1[0].cobertura;
listaMedicos.appendChild(liCobertura);

const liZona = document.createElement("li");
liZona.textContent = "Zona: " + research1[0].zona;
listaMedicos.appendChild(liZona);

}

else if (medicoElegido === "psiquiatria") {
const research2 = psiquiatras
.filter(objeto => objeto.zona === zonaElegida)
.filter(objeto => objeto.cobertura === coberturaElegida)
//  console.log(research2);

const contenidoDiv = document.getElementById("respuestaResearch");
respuestaResearch.innerHTML = "";
const parrafo = document.createElement("p");  
parrafo.textContent = "Hemos realizado la busqueda en nuestra base de datos, esta es la respuesta: ";
contenidoDiv.appendChild(parrafo);

// Creamos la lista con los medicos

const listaMedicos = document.getElementById("listaMedicos");
listaMedicos.innerHTML = "";

const liNombre = document.createElement("li");
liNombre.textContent = "Medico: " + research2[0].nombre;
listaMedicos.appendChild(liNombre);

const liCobertura = document.createElement("li");
liCobertura.textContent = "Cobertura: " + research2[0].cobertura;
listaMedicos.appendChild(liCobertura);

const liZona = document.createElement("li");
liZona.textContent = "Zona: " + research2[0].zona;
listaMedicos.appendChild(liZona);

}


  
else if (medicoElegido === "odontologia") {
const research3 = odontologos
.filter(objeto => objeto.zona === zonaElegida)
.filter(objeto => objeto.cobertura === coberturaElegida)
//  console.log(research3);

const contenidoDiv = document.getElementById("respuestaResearch");
respuestaResearch.innerHTML = "";
const parrafo = document.createElement("p");  
parrafo.textContent = "Hemos realizado la busqueda en nuestra base de datos, esta es la respuesta: ";
contenidoDiv.appendChild(parrafo);

// Creamos la lista con los medicos

const listaMedicos = document.getElementById("listaMedicos");
listaMedicos.innerHTML = "";


const liNombre = document.createElement("li");
liNombre.textContent = "Medico: " + research3[0].nombre;
listaMedicos.appendChild(liNombre);

const liCobertura = document.createElement("li");
liCobertura.textContent = "Cobertura: " + research3[0].cobertura;
listaMedicos.appendChild(liCobertura);

const liZona = document.createElement("li");
liZona.textContent = "Zona: " + research3[0].zona;
listaMedicos.appendChild(liZona);
}

}

//Validacion de formularios

(() => {
  'use strict'

 
  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

