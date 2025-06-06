// Array de imágenes y sus links de Instagram (y preparados para TikTok y X/Twitter)
const imagenes = [
  {
    src: "images/productos/dibujito-todo-bonito-1.jpg",
    insta: "https://www.instagram.com/p/DKWKBFHNSZD/",
    // tiktok: "",
    // twitter: ""
  },
  {
    src: "images/productos/dibujito-todo-bonito-2.jpg",
    insta: "https://www.instagram.com/p/DH3VrIFveem/",
    // tiktok: "",
    // twitter: ""
  },
  {
    src: "images/productos/dibujito-todo-bonito-3.jpg",
    insta: "https://www.instagram.com/p/DHvnURkPmJ3/",
    // tiktok: "",
    // twitter: ""
  },
];

// Mostrar imagen e ícono de Instagram en el modal (y preparados para TikTok/X)
function showImage(idx) {
  document.getElementById("expandedImage").src = imagenes[idx].src;
  document.getElementById("instagramLink").href = imagenes[idx].insta;

  // Preparado para futuro:
  // document.getElementById('tiktokLink').href = imagenes[idx].tiktok || "#";
  // document.getElementById('twitterLink').href = imagenes[idx].twitter || "#";

  const modal = new bootstrap.Modal(document.getElementById("imageModal"));
  modal.show();
}

// Inicializar tooltips y cerrar modal al hacer clic fuera
document.addEventListener("DOMContentLoaded", function () {
  // Tooltips Bootstrap
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Modal: cerrar al hacer clic fuera de la imagen
  const modal = document.getElementById("imageModal");
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        const bsModal = bootstrap.Modal.getInstance(modal);
        bsModal.hide();
      }
    });
  }

  // Animación de aparición al hacer scroll (Intersection Observer)
  const secciones = document.querySelectorAll(".scroll-section");
  if (secciones.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.4 }
    );

    secciones.forEach((seccion) => observer.observe(seccion));
  }

  // Menú de contacto flotante
  const btnContacto = document.getElementById("btn-contacto");
  const menuContacto = document.getElementById("menu-contacto");

  if (btnContacto && menuContacto) {
    btnContacto.addEventListener("click", function (e) {
      menuContacto.classList.toggle("show");
      e.stopPropagation();
    });

    // Cerrar menú si se hace clic fuera
    document.addEventListener("click", function (e) {
      if (menuContacto.classList.contains("show")) {
        menuContacto.classList.remove("show");
      }
    });

    // Evitar que el menú se cierre al hacer clic adentro
    menuContacto.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }
});

// Banner que desaparece al bajar y aparece al subir
let lastScroll = 0;
const banner = document.getElementById("banner");

window.addEventListener("scroll", function () {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScroll && currentScroll > 60) {
    banner.classList.add("hide");
  } else {
    banner.classList.remove("hide");
  }
  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});
