const WHATSAPP_NUMBER = "5491112345678";

const services = [
  {
    id: "diagnostico",
    name: "Diagnóstico / revisión",
    tags: ["PC", "Notebook"],
    price: 9081,
    desc: "Chequeo general del equipo, estado de disco, rendimiento y temperatura."
  },
  {
    id: "formateo-so",
    name: "Formateo e instalación de Sistema Operativo (sin BackUp)",
    tags: ["PC", "Notebook"],
    price: 41514,
    desc: "Formateo limpio, instalación de Windows y drivers básicos."
  },
  {
    id: "full-limpieza-ssd",
    name: "Limpieza + formateo + programas + BackUp + cambio a SSD",
    tags: ["PC", "Notebook"],
    price: 51892,
    desc: "Servicio completo: limpieza, reinstalación, programas básicos y migración a SSD."
  },
  {
    id: "backup-extra",
    name: "BackUp de datos cada 100 GB extras",
    tags: ["PC", "Notebook"],
    price: 10378,
    desc: "Copia de seguridad adicional por cada 100 GB de datos."
  },
  {
    id: "init-nuevo",
    name: "Inicialización de equipo nuevo",
    tags: ["PC", "Notebook"],
    price: 38919,
    desc: "Configuración inicial de equipo nuevo con programas básicos."
  },
  {
    id: "inst-oss",
    name: "Instalación de programa OpenSource x1",
    tags: ["PC", "Notebook"],
    price: 10378,
    desc: "Instalación y ajuste de un software libre (por ejemplo, LibreOffice, GIMP)."
  },
  {
    id: "inst-comercial",
    name: "Instalación de programa comercial x1 (provisto)",
    tags: ["PC", "Notebook"],
    price: 11676,
    desc: "Instalación de licencias provistas por el cliente."
  },
  {
    id: "drivers",
    name: "Instalación y configuración de drivers",
    tags: ["PC", "Notebook"],
    price: 16865,
    desc: "Actualización de controladores para mejorar compatibilidad y rendimiento."
  },
  {
    id: "malware",
    name: "Eliminación de malware",
    tags: ["PC", "Notebook"],
    price: 23352,
    desc: "Limpieza de virus, spyware y software no deseado."
  },
  {
    id: "remoto",
    name: "Conexión remota x 1 hs - problemas generales",
    tags: ["PC", "Notebook"],
    price: 10378,
    desc: "Soporte remoto para resolver problemas comunes sin mover el equipo."
  },
  {
    id: "visita",
    name: "Visita a domicilio x 1 hs",
    tags: ["PC", "Notebook"],
    price: 15568,
    desc: "Soporte presencial en tu domicilio u oficina (dentro de zona de cobertura)."
  },
  {
    id: "visita-urg",
    name: "Visita a domicilio x 1 hs (emergencia fuera de horario)",
    tags: ["PC", "Notebook"],
    price: 45406,
    desc: "Atención urgente fuera de horario habitual."
  },
  {
    id: "clonado-ok",
    name: "Clonado de disco sin errores SMART",
    tags: ["PC", "Notebook"],
    price: 36325,
    desc: "Clonado de disco sano a otro disco o SSD."
  },
  {
    id: "clonado-bad",
    name: "Clonado de disco con errores SMART",
    tags: ["PC", "Notebook"],
    price: 51892,
    desc: "Intento de recuperación y clonado de discos con fallas SMART."
  },
  {
    id: "reparacion-inicio",
    name: "Reparación de inicio de Windows",
    tags: ["PC", "Notebook"],
    price: 34275,
    desc: "Restablecimiento del arranque de Windows y de la sesión de usuario."
  },
  {
    id: "armado-pc-basica",
    name: "Armado de PC básica desde 0",
    tags: ["PC"],
    price: 51892,
    desc: "Ensamblado, cableado y testeo de PC de uso general."
  },
  {
    id: "armado-pc-gamer",
    name: "Armado de PC gamer desde 0",
    tags: ["PC"],
    price: 77838,
    desc: "Armado profesional de PC gamer, airflow y cable management."
  },
  {
    id: "cambio-hw-pc",
    name: "Cambio de componente de hardware x1 (PC)",
    tags: ["PC"],
    price: 20757,
    desc: "Reemplazo de un componente interno (fuente, placa de video, etc.)."
  },
  {
    id: "limpieza-pc-pasta",
    name: "Limpieza + cambio de pasta térmica (PC)",
    tags: ["PC"],
    price: 32433,
    desc: "Limpieza interna y renovación de pasta térmica del procesador."
  },
  {
    id: "limpieza-notebook-pasta",
    name: "Limpieza + cambio de pasta térmica (Notebook)",
    tags: ["Notebook"],
    price: 36325,
    desc: "Desarme de notebook, limpieza de cooler y cambio de pasta térmica."
  },
  {
    id: "cambio-flex",
    name: "Cambio de flex (Notebook)",
    tags: ["Notebook"],
    price: 23352,
    desc: "Reemplazo del flex de video u otros flex internos dañados."
  },
  {
    id: "cambio-pantalla",
    name: "Cambio de pantalla (Notebook)",
    tags: ["Notebook"],
    price: 25946,
    desc: "Reemplazo de pantalla rota o con fallas."
  },
  {
    id: "cambio-teclado",
    name: "Cambio de teclado (Notebook)",
    tags: ["Notebook"],
    price: 20757,
    desc: "Cambio de teclado completo en notebooks."
  },
  {
    id: "despiece-notebook",
    name: "Despiece + cambio de componentes internos (Notebook)",
    tags: ["Notebook"],
    price: 46703,
    desc: "Desarme completo para cambio de componentes internos."
  },
  {
    id: "config-router",
    name: "Configuración de router / access point in situ",
    tags: ["PC", "Notebook"],
    price: 25946,
    desc: "Configuración de red WiFi y cableada para tus equipos."
  },
  {
    id: "reflow",
    name: "Reflow de placa madre (PC/Notebook)",
    tags: ["PC", "Notebook"],
    price: 70000,
    desc: "Trabajo avanzado sobre placa madre (casos específicos)."
  },
  {
    id: "cambio-pin",
    name: "Cambio de pin de carga (Notebook)",
    tags: ["Notebook"],
    price: 38919,
    desc: "Reparación del conector de carga en notebooks."
  }
];

// --- Utilidades ---

const cardsContainer = document.getElementById("cards-container");
const cartItemsList = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const filterButtons = document.querySelectorAll(".filter-btn");
const whatsappBtn = document.getElementById("whatsapp-btn");
const ctaWhatsapp = document.getElementById("cta-whatsapp");

let cart = [];

function formatCurrency(value) {
  try {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0
    }).format(value);
  } catch (e) {
    return `$${value.toLocaleString("es-AR")}`;
  }
}

// --- Render de cartas ---

function createCard(service) {
  const tagsHtml = service.tags
    .map(tag => {
      const cls = tag === "PC" ? "pc" : "notebook";
      return `<span class="tag ${cls}">${tag}</span>`;
    })
    .join("");

  const titleShort =
    service.name.length > 56 ? service.name.slice(0, 53) + "..." : service.name;

  return `
    <article class="card" data-tags="${service.tags.join(",")}">
      <div class="card-header">
        <div>
          <h3 class="card-title">${titleShort}</h3>
          <div class="card-tags">${tagsHtml}</div>
        </div>
      </div>
      <div class="card-body">
        <p class="card-desc">${service.desc}</p>
      </div>
      <div class="card-footer">
        <div class="card-price">
          ${formatCurrency(service.price)}
          <span>freelance</span>
        </div>
        <button class="card-btn" data-id="${service.id}">
          Añadir al carrito
        </button>
      </div>
    </article>
  `;
}

function renderCards(filter = "all") {
  const normalizedFilter = filter.toLowerCase();
  const filtered = services.filter(service =>
    normalizedFilter === "all"
      ? true
      : service.tags.includes(filter)
  );

  cardsContainer.innerHTML = filtered.map(createCard).join("");
}

// --- Carrito ---

function addToCart(serviceId) {
  const service = services.find(s => s.id === serviceId);
  if (!service) return;

  const existing = cart.find(item => item.id === serviceId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: service.id, name: service.name, price: service.price, qty: 1 });
  }
  renderCart();
}

function removeFromCart(serviceId) {
  cart = cart.filter(item => item.id !== serviceId);
  renderCart();
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function renderCart() {
  if (cart.length === 0) {
    cartItemsList.innerHTML = '<li class="cart-empty">Todavía no agregaste servicios.</li>';
    cartTotalEl.textContent = "$0";
    return;
  }

  const itemsHtml = cart
    .map(
      item => `
      <li class="cart-item">
        <div class="cart-item-main">
          <span class="cart-item-name">${item.name}</span>
          <span class="cart-item-meta">
            x${item.qty} · ${formatCurrency(item.price)} c/u
          </span>
        </div>
        <div class="cart-item-actions">
          <span class="qty-badge">${item.qty}</span>
          <button class="cart-remove" data-remove="${item.id}" title="Quitar">
            ✕
          </button>
        </div>
      </li>
    `
    )
    .join("");

  cartItemsList.innerHTML = itemsHtml;
  cartTotalEl.textContent = formatCurrency(getCartTotal());
}

// --- WhatsApp ---

function buildWhatsappMessage() {
  if (cart.length === 0) {
    return "Hola, quiero consultar por un servicio técnico para mi PC/notebook.";
  }

  let message = "Hola, quiero pedir presupuesto por estos servicios:%0A";
  cart.forEach(item => {
    message += `- ${item.name} (x${item.qty}) - ${formatCurrency(
      item.price * item.qty
    )}%0A`;
  });
  message += `%0ATotal estimado: ${formatCurrency(getCartTotal())}%0A`;
  message += "%0AEquipo(s): PC / Notebook";
  return message;
}

function openWhatsapp() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    decodeURIComponent(buildWhatsappMessage())
  )}`;
  window.open(url, "_blank");
}

// --- Listeners ---

// botones de filtro
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderCards(btn.dataset.filter);
  });
});

// clicks en cartas (event delegation)
cardsContainer.addEventListener("click", event => {
  const button = event.target.closest(".card-btn");
  if (!button) return;
  const id = button.dataset.id;
  addToCart(id);
});

// quitar del carrito
cartItemsList.addEventListener("click", event => {
  const btn = event.target.closest("[data-remove]");
  if (!btn) return;
  removeFromCart(btn.dataset.remove);
});

// WhatsApp
whatsappBtn.addEventListener("click", openWhatsapp);
ctaWhatsapp.addEventListener("click", event => {
  event.preventDefault();
  openWhatsapp();
});

// --- Init ---
renderCards("all");
renderCart();
