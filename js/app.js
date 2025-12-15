const WHATSAPP_NUMBER = "5491112345678"; // <-- Poner mi número

const DISCOUNT_THRESHOLD = 3; // desde cuántas unidades del mismo servicio
const DISCOUNT_RATE = 0.1;    // 10 %

// ------------------ SERVICIOS (Córdoba Capital - Diciembre 2025 - Freelance) ------------------
const services = [
  // MANTENIMIENTO / SISTEMA
  {
    id: "diagnostico",
    name: "Diagnóstico / revisión",
    tags: ["PC", "Notebook"],
    category: "mantenimiento",
    price: 10171,
    unitLabel: "por equipo",
    discountEligible: true,
    desc: "Chequeo general del equipo, estado de disco, rendimiento y temperatura."
  },
  {
    id: "formateo-so",
    name: "Formateo e instalación de Sistema Operativo (sin BackUp)",
    tags: ["PC", "Notebook"],
    category: "mantenimiento",
    price: 46495,
    unitLabel: "por equipo",
    discountEligible: true,
    desc: "Formateo limpio, instalación de Windows y drivers básicos."
  },
  {
    id: "full-limpieza-ssd",
    name: "Limpieza + formateo + programas + BackUp hasta 100 GB + cambio a SSD",
    tags: ["PC", "Notebook"],
    category: "mantenimiento",
    price: 58119,
    unitLabel: "por equipo",
    discountEligible: true,
    desc: "Limpieza interna, reinstalación, programas básicos, backup hasta 100 GB y migración a SSD."
  },
  {
    id: "backup-extra",
    name: "BackUp de datos cada 100 GB extras",
    tags: ["PC", "Notebook"],
    category: "mantenimiento",
    price: 11624,
    unitLabel: "cada 100 GB",
    discountEligible: false,
    desc: "Copia de seguridad adicional por cada 100 GB."
  },
  {
    id: "init-nuevo",
    name: "Inicialización de equipo nuevo (configuración + programas básicos)",
    tags: ["PC", "Notebook"],
    category: "mantenimiento",
    price: 43589,
    unitLabel: "por equipo",
    discountEligible: true,
    desc: "Configuración inicial, cuentas, actualizaciones y programas básicos."
  },
  {
    id: "inst-oss",
    name: "Instalación de programa OpenSource x1",
    tags: ["PC", "Notebook"],
    category: "mantenimiento",
    price: 11624,
    unitLabel: "por instalación",
    discountEligible: true,
    desc: "Instalación y ajuste de un software libre (LibreOffice, GIMP, etc.)."
  },
  {
    id: "inst-comercial",
    name: "Instalación de programa comercial x1 (provisto)",
    tags: ["PC", "Notebook"],
    category: "mantenimiento",
    price: 13077,
    unitLabel: "por instalación",
    discountEligible: true,
    desc: "Instalación de software con licencia provista por el cliente."
  },
  {
    id: "drivers",
    name: "Instalación y configuración de drivers",
    tags: ["PC", "Notebook"],
    category: "mantenimiento",
    price: 18889,
    unitLabel: "por equipo",
    discountEligible: true,
    desc: "Actualización de controladores para mejorar compatibilidad y rendimiento."
  },
  {
    id: "malware",
    name: "Eliminación de malware",
    tags: ["PC", "Notebook"],
    category: "mantenimiento",
    price: 26154,
    unitLabel: "por equipo",
    discountEligible: true,
    desc: "Limpieza de virus, spyware y software no deseado."
  },

  // VISITAS / REMOTO
  {
    id: "remoto",
    name: "Conexión remota x 1 hs - problemas generales",
    tags: ["PC", "Notebook"],
    category: "visita",
    price: 11624,
    unitLabel: "por hora",
    discountEligible: true,
    desc: "Soporte remoto para resolver problemas comunes sin mover el equipo."
  },
  {
    id: "visita",
    name: "Visita a domicilio x 1 hs",
    tags: ["PC", "Notebook"],
    category: "visita",
    price: 17436,
    unitLabel: "por hora",
    discountEligible: true,
    desc: "Soporte presencial en tu domicilio u oficina (Córdoba Capital)."
  },
  {
    id: "visita-urg",
    name: "Visita a domicilio x 1 hs (emergencia fuera de horario)",
    tags: ["PC", "Notebook"],
    category: "visita",
    price: 50854,
    unitLabel: "por hora",
    discountEligible: false,
    desc: "Atención urgente fuera de horario habitual."
  },

  // MANTENIMIENTO AVANZADO / DISCO
  {
    id: "clonado-ok",
    name: "Clonado de disco sin errores SMART",
    tags: ["PC", "Notebook"],
    category: "mantenimiento",
    price: 40684,
    unitLabel: "por equipo",
    discountEligible: true,
    desc: "Clonado de disco sano a otro disco o SSD."
  },
  {
    id: "clonado-bad",
    name: "Clonado de disco con errores SMART",
    tags: ["PC", "Notebook"],
    category: "mantenimiento",
    price: 58119,
    unitLabel: "por equipo",
    discountEligible: false,
    desc: "Recuperación/lectura avanzada y clonado de discos con fallas SMART."
  },
  {
    id: "reparacion-inicio",
    name: "Reparación de inicio de Windows / restablecimiento de sesión",
    tags: ["PC", "Notebook"],
    category: "mantenimiento",
    price: 38388,
    unitLabel: "por equipo",
    discountEligible: true,
    desc: "Restablecimiento del arranque y recuperación de la sesión de usuario."
  },

  // HARDWARE & MEJORAS
  {
    id: "armado-pc-basica",
    name: "Armado de PC básica desde 0",
    tags: ["PC"],
    category: "hardware",
    price: 58119,
    unitLabel: "por equipo",
    discountEligible: false,
    desc: "Ensamblado, cableado y testeo de PC de uso general."
  },
  {
    id: "armado-pc-gamer",
    name: "Armado de PC gamer desde 0",
    tags: ["PC"],
    category: "hardware",
    price: 87179,
    unitLabel: "por equipo",
    discountEligible: false,
    desc: "Armado profesional con buen airflow y cable management."
  },
  {
    id: "cambio-hw-pc",
    name: "Cambio de componente de hardware x1 (PC)",
    tags: ["PC"],
    category: "hardware",
    price: 23248,
    unitLabel: "por componente",
    discountEligible: true,
    desc: "Reemplazo de un componente interno (fuente, GPU, RAM, etc.)."
  },
  {
    id: "limpieza-pc-pasta",
    name: "Limpieza + cambio de pasta térmica (PC)",
    tags: ["PC"],
    category: "hardware",
    price: 36325,
    unitLabel: "por equipo",
    discountEligible: true,
    desc: "Limpieza interna y renovación de pasta térmica del procesador."
  },
  {
    id: "limpieza-notebook-pasta",
    name: "Limpieza + cambio de pasta térmica (Notebook)",
    tags: ["Notebook"],
    category: "hardware",
    price: 40684,
    unitLabel: "por equipo",
    discountEligible: true,
    desc: "Desarme, limpieza de cooler y cambio de pasta térmica."
  },
  {
    id: "cambio-flex",
    name: "Cambio de flex (Notebook)",
    tags: ["Notebook"],
    category: "hardware",
    price: 26154,
    unitLabel: "por reparación",
    discountEligible: true,
    desc: "Reemplazo del flex de video u otros flex internos dañados."
  },
  {
    id: "cambio-pantalla",
    name: "Cambio de pantalla (Notebook)",
    tags: ["Notebook"],
    category: "hardware",
    price: 29060,
    unitLabel: "mano de obra",
    discountEligible: false,
    desc: "Reemplazo de pantalla rota o con fallas (pantalla no incluida)."
  },
  {
    id: "cambio-teclado",
    name: "Cambio de teclado (Notebook)",
    tags: ["Notebook"],
    category: "hardware",
    price: 23248,
    unitLabel: "mano de obra",
    discountEligible: false,
    desc: "Cambio de teclado completo en notebooks (repuesto no incluido)."
  },
  {
    id: "despiece-notebook",
    name: "Despiece + cambio de componentes internos (Notebook)",
    tags: ["Notebook"],
    category: "hardware",
    price: 52307,
    unitLabel: "por trabajo",
    discountEligible: false,
    desc: "Desarme completo para cambio de componentes internos."
  },
  {
    id: "cambio-pin",
    name: "Cambio de pin de carga (Notebook)",
    tags: ["Notebook"],
    category: "hardware",
    price: 43589,
    unitLabel: "por reparación",
    discountEligible: false,
    desc: "Reparación del conector de carga en notebooks."
  },

  // REDES
  {
    id: "config-router",
    name: "Configuración de router / access point in situ",
    tags: ["PC", "Notebook"],
    category: "redes",
    price: 29060,
    unitLabel: "por visita",
    discountEligible: true,
    desc: "Configuración de red WiFi/cableada y verificación de conectividad."
  }
];

console.log("PixelGame IT JS cargado");
console.log("Servicios:", services.length);

// ------------------ DOM ------------------
const servicesGrid = document.getElementById("services-grid");
const categoryButtons = document.querySelectorAll(".pg-category");

const cartItemsEl = document.getElementById("cart-items");
const cartSubtotalEl = document.getElementById("cart-subtotal");
const cartDiscountEl = document.getElementById("cart-discount");
const cartTotalEl = document.getElementById("cart-total");
const sendWhatsappBtn = document.getElementById("send-whatsapp");
const whatsappHeroBtn = document.getElementById("whatsapp-hero");

// Selector guiado
const pickerEquipment = document.getElementById("picker-equipment");
const pickerCategory = document.getElementById("picker-category");
const pickerService = document.getElementById("picker-service");
const pickerQty = document.getElementById("picker-qty");
const pickerNotes = document.getElementById("picker-notes");
const pickerSummary = document.getElementById("picker-summary");
const pickerAddBtn = document.getElementById("picker-add");
const pickerSendBtn = document.getElementById("picker-send");

let cart = [];

// ------------------ UTILIDADES ------------------
function formatCurrency(value) {
  try {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0
    }).format(value);
  } catch {
    return `$${Number(value || 0).toLocaleString("es-AR")}`;
  }
}

function serviceMatchesEquipment(service, equipmentValue) {
  if (!equipmentValue || equipmentValue === "any") return true;
  return service.tags.includes(equipmentValue);
}

function getFilteredServices(category, equipment) {
  return services.filter(s => {
    const byCategory = category === "all" ? true : s.category === category;
    const byEquipment = serviceMatchesEquipment(s, equipment);
    return byCategory && byEquipment;
  });
}

// ------------------ RENDER SERVICIOS ------------------
function createServiceRow(service) {
  const tagsHtml = service.tags
    .map(tag => {
      const cls = tag === "PC" ? "pg-tag--pc" : "pg-tag--nb";
      return `<span class="pg-tag ${cls}">${tag}</span>`;
    })
    .join("");

  const title =
    service.name.length > 70 ? service.name.slice(0, 67) + "..." : service.name;

  return `
    <article class="pg-service-row">
      <div class="pg-service-row__main">
        <h3>${title}</h3>
        <p class="pg-service-row__desc">${service.desc}</p>
        <div class="pg-service-row__tags">${tagsHtml}</div>
      </div>
      <div class="pg-service-row__side">
        <div class="pg-service-row__price">
          ${formatCurrency(service.price)}
          <span>${service.unitLabel || "precio freelance"}</span>
        </div>
        <button class="pg-service-row__btn" data-add="${service.id}">Agregar</button>
      </div>
    </article>
  `;
}

function renderServices(category = "all") {
  const filtered = services.filter(s => (category === "all" ? true : s.category === category));
  servicesGrid.innerHTML = filtered.map(createServiceRow).join("");
}

// ------------------ CARRITO ------------------
function addToCart(id, qty = 1) {
  const svc = services.find(s => s.id === id);
  if (!svc) return;

  const n = Math.max(1, Number(qty || 1));
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty += n;
  } else {
    cart.push({
      id: svc.id,
      name: svc.name,
      price: svc.price,
      qty: n,
      discountEligible: svc.discountEligible !== false,
      unitLabel: svc.unitLabel || "precio freelance"
    });
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
    if (item.discountEligible && item.qty >= DISCOUNT_THRESHOLD) {
      sum += item.price * item.qty * DISCOUNT_RATE;
    }
    return sum;
  }, 0);
}

function cartTotal() {
  return Math.max(0, cartSubtotal() - cartDiscount());
}

function renderCart() {
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<li class="pg-cart__empty">Todavía no agregaste servicios.</li>';
    cartSubtotalEl.textContent = "$0";
    cartDiscountEl.textContent = "-$0";
    cartTotalEl.textContent = "$0";
    return;
  }

  cartItemsEl.innerHTML = cart
    .map(item => `
      <li class="pg-cart__item">
        <div class="pg-cart__main">
          <span class="pg-cart__name">${item.name}</span>
          <span class="pg-cart__meta">x${item.qty} · ${formatCurrency(item.price)} c/u</span>
        </div>
        <div class="pg-cart__side">
          <span class="pg-badge-qty">${item.qty}</span>
          <button class="pg-cart__remove" data-remove="${item.id}" title="Quitar">✕</button>
        </div>
      </li>
    `)
    .join("");

  const subtotal = cartSubtotal();
  const discount = cartDiscount();
  const total = cartTotal();

  cartSubtotalEl.textContent = formatCurrency(subtotal);
  cartDiscountEl.textContent = discount > 0 ? `-${formatCurrency(discount)}` : "-$0";
  cartTotalEl.textContent = formatCurrency(total);
}

// ------------------ WHATSAPP ------------------
function buildWhatsappMessage(extra = {}) {
  const equipment = extra.equipment || "PC / Notebook";
  const notes = (extra.notes || "").trim();

  if (cart.length === 0 && !extra.singleService) {
    let base = "Hola, quiero consultar por un servicio técnico.\n";
    base += `Equipo: ${equipment}\n`;
    if (notes) base += `Detalle: ${notes}\n`;
    base += "Todos los trabajos incluyen 3 meses de garantía sobre la reparación.\n";
    return base;
  }

  // Caso: consulta directa desde el selector sin carrito
  if (extra.singleService) {
    const svc = services.find(s => s.id === extra.singleService.id);
    const qty = Math.max(1, Number(extra.singleService.qty || 1));
    let msg = "Hola, quiero pedir presupuesto por este servicio:\n";
    if (svc) {
      msg += `- ${svc.name} (x${qty}) - ${formatCurrency(svc.price * qty)}\n`;
    }
    msg += `Equipo: ${equipment}\n`;
    if (notes) msg += `Detalle: ${notes}\n`;
    msg += "Incluye 3 meses de garantía sobre la reparación.\n";
    return msg;
  }

  const subtotal = cartSubtotal();
  const discount = cartDiscount();
  const total = cartTotal();

  let msg = "Hola, quiero pedir presupuesto por estos servicios:\n";
  cart.forEach(item => {
    msg += `- ${item.name} (x${item.qty}) - ${formatCurrency(item.price * item.qty)}\n`;
  });

  msg += `\nSubtotal: ${formatCurrency(subtotal)}\n`;
  if (discount > 0) {
    msg += `Descuento por cantidad (${DISCOUNT_RATE * 100}% desde ${DISCOUNT_THRESHOLD} unidades iguales): -${formatCurrency(discount)}\n`;
  }
  msg += `Total estimado: ${formatCurrency(total)}\n`;
  msg += `\nEquipo: ${equipment}\n`;
  if (notes) msg += `Detalle: ${notes}\n`;
  msg += "Incluye 3 meses de garantía sobre la reparación.\n";

  return msg;
}

function openWhatsapp(message) {
  const text = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  window.open(url, "_blank");
}

// ------------------ SELECTOR GUIADO ------------------
function populatePickerServices() {
  const cat = pickerCategory?.value || "all";
  const eq = pickerEquipment?.value || "any";

  const filtered = getFilteredServices(cat, eq);

  if (!pickerService) return;
  pickerService.innerHTML = `<option value="" selected disabled>Seleccioná un servicio…</option>` +
    filtered
      .map(s => `<option value="${s.id}">${s.name}</option>`)
      .join("");

  updatePickerSummary();
}

function updatePickerSummary() {
  if (!pickerSummary) return;

  const id = pickerService?.value;
  if (!id) {
    pickerSummary.textContent = "Elegí un servicio para ver el precio estimado.";
    return;
  }

  const svc = services.find(s => s.id === id);
  if (!svc) {
    pickerSummary.textContent = "Servicio no encontrado.";
    return;
  }

  const qty = Math.max(1, Number(pickerQty?.value || 1));
  const total = svc.price * qty;

  pickerSummary.innerHTML = `<strong>${svc.name}</strong> · ${formatCurrency(svc.price)} (${svc.unitLabel || "precio freelance"}) · ` +
    `<strong>Total:</strong> ${formatCurrency(total)}`;
}

// ------------------ EVENTOS ------------------

// Categorías sidebar
categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    categoryButtons.forEach(b => b.classList.remove("pg-category--active"));
    btn.classList.add("pg-category--active");
    const category = btn.dataset.category;
    renderServices(category);
  });
});

// Click en servicios (delegado)
servicesGrid.addEventListener("click", e => {
  const btn = e.target.closest("[data-add]");
  if (!btn) return;
  addToCart(btn.dataset.add, 1);
});

// Click en carrito (quitar)
cartItemsEl.addEventListener("click", e => {
  const btn = e.target.closest("[data-remove]");
  if (!btn) return;
  removeFromCart(btn.dataset.remove);
});

// Botones WhatsApp existentes
sendWhatsappBtn.addEventListener("click", () => {
  const equipment = pickerEquipment ? pickerEquipment.value : "any";
  const eqLabel = equipment === "any" ? "PC / Notebook" : equipment;
  openWhatsapp(buildWhatsappMessage({ equipment: eqLabel, notes: pickerNotes?.value || "" }));
});

whatsappHeroBtn.addEventListener("click", () => {
  const equipment = pickerEquipment ? pickerEquipment.value : "any";
  const eqLabel = equipment === "any" ? "PC / Notebook" : equipment;
  openWhatsapp(buildWhatsappMessage({ equipment: eqLabel, notes: pickerNotes?.value || "" }));
});

// Selector guiado: cambios
pickerEquipment?.addEventListener("change", populatePickerServices);
pickerCategory?.addEventListener("change", populatePickerServices);
pickerService?.addEventListener("change", updatePickerSummary);
pickerQty?.addEventListener("input", updatePickerSummary);

// Selector guiado: acciones
pickerAddBtn?.addEventListener("click", () => {
  const id = pickerService?.value;
  if (!id) return;
  addToCart(id, pickerQty?.value || 1);
});

pickerSendBtn?.addEventListener("click", () => {
  const id = pickerService?.value;
  if (!id) {
    const equipment = pickerEquipment ? pickerEquipment.value : "any";
    const eqLabel = equipment === "any" ? "PC / Notebook" : equipment;
    openWhatsapp(buildWhatsappMessage({ equipment: eqLabel, notes: pickerNotes?.value || "" }));
    return;
  }

  const equipment = pickerEquipment ? pickerEquipment.value : "any";
  const eqLabel = equipment === "any" ? "PC / Notebook" : equipment;

  openWhatsapp(
    buildWhatsappMessage({
      equipment: eqLabel,
      notes: pickerNotes?.value || "",
      singleService: { id, qty: pickerQty?.value || 1 }
    })
  );
});

// ------------------ INIT ------------------
renderServices("all");
renderCart();
populatePickerServices();
