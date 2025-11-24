const WHATSAPP_NUMBER = "5491112345678";

const DISCOUNT_THRESHOLD = 3;   // a partir de cuántas unidades del mismo servicio
const DISCOUNT_RATE = 0.1;      // 10% de descuento

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
    desc: "Limpieza interna, reinstalación, programas básicos y migración a SSD."
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
    desc: "Instalación y ajuste de un software libre (LibreOffice, GIMP, etc.)."
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
    desc: "Armado profesional de PC gamer con buen airflow y cable management."
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

// --- DOM ---

const serviceListEl = document.getElementById("service-list");
const filterButtons = document.querySelectorAll(".js-filter");
const cartItemsEl = document.getElementById("cart-items");
const cartSubtotalEl = document.getElementById("cart-subtotal");
const cartDiscountEl = document.getElementById("cart-discount");
const cartTotalEl = document.getElementById("cart-total");
const sendWhatsappBtn = document.getElementById("send-whatsapp");
const whatsappHeroBtn = document.getElementById("whatsapp-hero");

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

// --- RENDER SERVICIOS ---

function createServiceCard(service) {
  const tagsHtml = service.tags
    .map(tag => {
      const cls = tag === "PC" ? "pg-tag--pc" : "pg-tag--nb";
      return `<span class="pg-tag ${cls}">${tag}</span>`;
    })
    .join("");

  const title =
    service.name.length > 64 ? service.name.slice(0, 61) + "..." : service.name;

  return `
    <article class="pg-service-card" data-tags="${service.tags.join(",")}">
      <h3 class="pg-service__title">${title}</h3>
      <div class="pg-service__tags">${tagsHtml}</div>
      <p class="pg-service__desc">${service.desc}</p>
      <div class="pg-service__footer">
        <div class="pg-service__price">
          ${formatCurrency(service.price)}
          <span>precio freelance</span>
        </div>
        <button class="pg-service__btn" data-add="${service.id}">
          Agregar al carrito
        </button>
      </div>
    </article>
  `;
}

function renderServices(filter = "all") {
  const selected = services.filter(service =>
    filter === "all" ? true : service.tags.includes(filter)
  );
  serviceListEl.innerHTML = selected.map(createServiceCard).join("");
}

// --- CARRITO ---

function addToCart(id) {
  const svc = services.find(s => s.id === id);
  if (!svc) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: svc.id, name: svc.name, price: svc.price, qty: 1 });
  }
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  renderCart();
}

function cartSubtotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function cartDiscount() {
  return cart.reduce((sum, item) => {
    if (item.qty >= DISCOUNT_THRESHOLD) {
      sum += item.price * item.qty * DISCOUNT_RATE;
    }
    return sum;
  }, 0);
}

function cartTotal() {
  const subtotal = cartSubtotal();
  const discount = cartDiscount();
  return Math.max(0, subtotal - discount);
}

function renderCart() {
  if (cart.length === 0) {
    cartItemsEl.innerHTML =
      '<li class="pg-cart__empty">Todavía no agregaste servicios.</li>';
    cartSubtotalEl.textContent = "$0";
    cartDiscountEl.textContent = "-$0";
    cartTotalEl.textContent = "$0";
    return;
  }

  const itemsHtml = cart
    .map(
      item => `
      <li class="pg-cart__item">
        <div class="pg-cart__main">
          <span class="pg-cart__name">${item.name}</span>
          <span class="pg-cart__meta">
            x${item.qty} · ${formatCurrency(item.price)} c/u
          </span>
        </div>
        <div class="pg-cart__side">
          <span class="pg-badge-qty">${item.qty}</span>
          <button class="pg-cart__remove" data-remove="${item.id}" title="Quitar">
            ✕
          </button>
        </div>
      </li>
    `
    )
    .join("");

  cartItemsEl.innerHTML = itemsHtml;

  const subtotal = cartSubtotal();
  const discount = cartDiscount();
  const total = cartTotal();

  cartSubtotalEl.textContent = formatCurrency(subtotal);
  cartDiscountEl.textContent = discount > 0 ? "-" + formatCurrency(discount) : "-$0";
  cartTotalEl.textContent = formatCurrency(total);
}

// --- WHATSAPP ---

function buildWhatsappMessage() {
  if (cart.length === 0) {
    return "Hola, quiero consultar por un servicio técnico para mi PC/notebook. Todos los trabajos incluyen 3 meses de garantía.";
  }

  const subtotal = cartSubtotal();
  const discount = cartDiscount();
  const total = cartTotal();

  let msg = "Hola, quiero pedir presupuesto por estos servicios:%0A";
  cart.forEach(item => {
    msg += `- ${item.name} (x${item.qty}) - ${formatCurrency(
      item.price * item.qty
    )}%0A`;
  });

  msg += `%0ASubtotal: ${formatCurrency(subtotal)}%0A`;
  if (discount > 0) {
    msg += `Descuento por cantidad (${DISCOUNT_RATE * 100}% desde ${DISCOUNT_THRESHOLD} equipos iguales): -${formatCurrency(
      discount
    )}%0A`;
  }
  msg += `Total estimado: ${formatCurrency(total)}%0A`;
  msg += "%0AEquipo(s): PC / Notebook";
  msg += "%0AIncluye 3 meses de garantía sobre la reparación.";

  return msg;
}

function openWhatsapp() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    decodeURIComponent(buildWhatsappMessage())
  )}`;
  window.open(url, "_blank");
}

// --- EVENTOS ---

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("pg-filter--active"));
    btn.classList.add("pg-filter--active");
    renderServices(btn.dataset.filter);
  });
});

serviceListEl.addEventListener("click", e => {
  const btn = e.target.closest("[data-add]");
  if (!btn) return;
  addToCart(btn.dataset.add);
});

cartItemsEl.addEventListener("click", e => {
  const btn = e.target.closest("[data-remove]");
  if (!btn) return;
  removeFromCart(btn.dataset.remove);
});

sendWhatsappBtn.addEventListener("click", openWhatsapp);
whatsappHeroBtn.addEventListener("click", openWhatsapp);

// --- INIT ---

renderServices("all");
renderCart();
