/* ============================================
   DUQUESA FLORAL - Landing Pages JS
   Catálogo de productos + funciones de contacto
   ============================================ */

// Configuración global
const WA_NUMBER = '573202791687';
const BUSINESS_NAME = 'Duquesa Floral';
const ADS_CONVERSION_ID = 'AW-17503274952/zu_KCLCYgaQcEMiPm5pB';

// Catálogo de productos
const CATALOGO = [
    // ─── ROSAS ───
    {
        nombre: "Garantía de Amor",
        descripcion: "Ramo de 12 rosas con tarjeta o mensaje personalizado con nombre.",
        precio: 102500,
        imagen: "../assets/flores_cucuta_17.webp",
        tags: ["rosas", "bouquets", "precio-bajo"]
    },
    {
        nombre: "Conquista Definitiva",
        descripcion: "Ramo de 24 rosas y claveles con tarjeta o mensaje personalizado con nombre.",
        precio: 165000,
        imagen: "../assets/flores_cucuta_21.webp",
        tags: ["rosas", "bouquets", "precio-medio"]
    },
    {
        nombre: "Fusión Perfecta",
        descripcion: "Ramo de 36 rosas y 6 girasoles con tarjeta personalizada con nombre.",
        precio: 227500,
        imagen: "../assets/flores_cucuta_2.webp",
        tags: ["rosas", "girasoles", "bouquets", "precio-medio"]
    },
    {
        nombre: "Obra Maestra",
        descripcion: "Ramo de 60 rosas y claveles con tarjeta o mensaje personalizado con nombre.",
        precio: 265000,
        imagen: "../assets/flores_cucuta_1.webp",
        tags: ["rosas", "bouquets", "premium", "precio-alto"]
    },
    {
        nombre: "Trilogía del Poder",
        descripcion: "Ramo de 12 rosas, lirios y claveles con tarjeta o mensaje personalizado con nombre.",
        precio: 162500,
        imagen: "../assets/flores_cucuta_22.webp",
        tags: ["rosas", "bouquets", "precio-medio"]
    },
    {
        nombre: "Esencia de Felicidad",
        descripcion: "20 rosas frescas en arreglo clásico con tarjeta personalizada.",
        precio: 160000,
        imagen: "../assets/cumpleanos/cumpleanos4.webp",
        tags: ["rosas", "bouquets", "precio-medio"]
    },
    {
        nombre: "Nube de Celebración",
        descripcion: "52 rosas frescas con delicada flor nube y moño decorativo.",
        precio: 255000,
        imagen: "../assets/cumpleanos/cumpleanos3.webp",
        tags: ["rosas", "bouquets", "premium", "precio-alto"]
    },
    {
        nombre: "Sinfonía Dorada",
        descripcion: "56 rosas combinadas con 1 girasol radiante y delicada manzanilla.",
        precio: 280000,
        imagen: "../assets/cumpleanos/cumpleanos2.webp",
        tags: ["rosas", "girasoles", "bouquets", "premium", "precio-alto"]
    },
    {
        nombre: "Monumento de Amor",
        descripcion: "110 rosas dispuestas en forma de corazón con mensaje personalizado y 2 globos en helio.",
        precio: 465000,
        imagen: "../assets/cumpleanos/cumpleanos1.webp",
        tags: ["rosas", "premium", "precio-alto"]
    },

    // ─── GIRASOLES ───
    {
        nombre: "Vitamina Emocional",
        descripcion: "Ramo de 4 girasoles con tarjeta o mensaje personalizado con nombre.",
        precio: 110000,
        imagen: "../assets/flores_cucuta_23.webp",
        tags: ["girasoles", "bouquets", "precio-bajo"]
    },

    // ─── GERBERAS ───
    {
        nombre: "Despertar de Alegría",
        descripcion: "Ramo de 10 gerberas con tarjeta o mensaje personalizado con nombre.",
        precio: 95000,
        imagen: "../assets/flores_cucuta_18.webp",
        tags: ["gerberas", "bouquets", "precio-bajo"]
    },

    // ─── TULIPANES ───
    {
        nombre: "Despertar de Primavera",
        descripcion: "Bouquet de tulipanes disponible en 4, 6 o 10 tulipanes, en un único color o combinación.",
        precio: 148000,
        imagen: "../ofertas/imagenes/tulipanes/tulipanes_amarillos.webp",
        tags: ["bouquets", "precio-bajo"]
    },

    // ─── ESPECIALES ───
    {
        nombre: "Distinción Absoluta",
        descripcion: "Ramo de Claveles y Lirios.",
        precio: 50000,
        imagen: "../assets/flores_cucuta_3.webp",
        tags: ["bouquets", "precio-bajo"]
    },
    {
        nombre: "Guardián del Corazón",
        descripcion: "Osito de 25 CM elaborado con rosas de foamy en caja de acetato, tarjeta personalizada y tres globos en helio.",
        precio: 275000,
        imagen: "../assets/flores_cucuta_24.webp",
        tags: ["premium", "precio-alto"]
    },
    {
        nombre: "Precision Strike",
        descripcion: "Caja \"LOVE\" con rosas rojas y 10 Ferrero Rocher. Diseñado para máxima efectividad.",
        precio: 300500,
        imagen: "../assets/amoryamistad/amoryamistad6.webp",
        tags: ["chocolates", "cajas", "premium", "precio-alto"]
    },
    {
        nombre: "Arquitectura del Éxito",
        descripcion: "Caja circular sofisticada: 18 Ferrero Rocher en la base, rosas rojas con follaje en el nivel superior.",
        precio: 200000,
        imagen: "../assets/amoryamistad/amoryamistad7.webp",
        tags: ["chocolates", "cajas", "precio-medio"]
    },
    {
        nombre: "Arsenal Completo",
        descripcion: "Rosas frescas, flor nube y 11 Ferrero Rocher en base elegante con lazo dorado.",
        precio: 177500,
        imagen: "../assets/amoryamistad/amoryamistad2.webp",
        tags: ["chocolates", "precio-medio"]
    },

    // ─── FLORES ETERNAS ───
    {
        nombre: "Cápsula de Eternidad",
        descripcion: "Mini ramo de 7 rosas eternas con perlas y mariposas decorativas. Disponible en múltiples colores.",
        precio: 53000,
        imagen: "../assets/mini_ramo_eternas.webp",
        tags: ["rosas-eternas", "precio-bajo"]
    },
    {
        nombre: "Legado Inmortal",
        descripcion: "Bouquet de 20 rosas eternas decorado con malla de perlas y mariposas doradas. Incluye listón con mensaje especial.",
        precio: 145000,
        imagen: "../assets/bouquet_eternas.webp",
        tags: ["rosas-eternas", "precio-bajo"]
    },
    {
        nombre: "Imperio Eterno",
        descripcion: "Bouquet de 34 rosas eternas decorado con perlas y mariposas. Incluye moño y mensaje especial.",
        precio: 220000,
        imagen: "../assets/bouquet_eternas_grandes.webp",
        tags: ["rosas-eternas", "precio-medio"]
    },

    // ─── CELEBRACIONES ───
    {
        nombre: "Celebración de Vida",
        descripcion: "Bouquet de 20 rosas frescas con eucalipto e incluye tarjeta personalizada. Ideal para cumpleaños.",
        precio: 140000,
        imagen: "../ofertas/imagenes/ramo_bouquets/ramo_flores_cumpleanos.webp",
        tags: ["rosas", "bouquets", "precio-bajo"]
    },
    {
        nombre: "Juramento Sagrado",
        descripcion: "Bouquet de 18 rosas frescas con follajes y listón decorativo. Perfecto para el día más especial.",
        precio: 155000,
        imagen: "../ofertas/imagenes/ramo_bouquets/ramos_novias_naturales.webp",
        tags: ["rosas", "novia", "precio-medio"]
    },
    {
        nombre: "Coronación de Princesa",
        descripcion: "48 rosas frescas con flor nube, corona dorada y listón con mensaje especial. Perfecto para 15 años.",
        precio: 255000,
        imagen: "../ofertas/imagenes/ramo_bouquets/ramo_flores_quinceaneras.webp",
        tags: ["rosas", "premium", "precio-alto"]
    },
    {
        nombre: "Alegría Multicolor",
        descripcion: "Bouquet de astromelias frescas con base de oasis y tarjeta personalizada.",
        precio: 60000,
        imagen: "../assets/cumpleanos/cumpleanos5.webp",
        tags: ["bouquets", "precio-bajo"]
    },
    {
        nombre: "Estrella Resplandeciente",
        descripcion: "Bouquet de claveles con tarjeta personalizada. Flores de larga duración.",
        precio: 60000,
        imagen: "../assets/cumpleanos/cumpleanos6.webp",
        tags: ["bouquets", "precio-bajo"]
    }
];

// Variable global para prioridad de tags por landing
var LANDING_PRIORITY_TAG = '';

/* ─── Formato de precio ─── */
function formatPrice(n) {
    return '$' + n.toLocaleString('es-CO');
}

/* ─── Tracking de conversión Google Ads ─── */
function trackConversion(url) {
    try {
        if (typeof gtag === 'function') {
            gtag('event', 'conversion', {
                'send_to': ADS_CONVERSION_ID,
                'event_callback': function () { window.open(url, '_blank'); }
            });
            // Fallback en caso de que el callback no dispare
            setTimeout(function () { window.open(url, '_blank'); }, 1500);
        } else {
            window.open(url, '_blank');
        }
    } catch (e) {
        window.open(url, '_blank');
    }
}

/* ─── Funciones de contacto WhatsApp ─── */
function contactWA() {
    var url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent('Hola, vi su página y me gustaría más información sobre sus arreglos florales.');
    trackConversion(url);
    return false;
}

function orderWA() {
    var url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent('Hola, quiero hacer un pedido de flores a domicilio en Cúcuta.');
    trackConversion(url);
    return false;
}

function productWA(nombre, precio) {
    var msg = 'Hola, me interesa el ' + nombre + ' por ' + formatPrice(precio) + '. ¿Podrían darme más información?';
    var url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);
    trackConversion(url);
    return false;
}

/* ─── Renderizar tarjeta de producto ─── */
function renderCard(p) {
    return '<div class="product-item" data-tags="' + p.tags.join(',') + '" data-price="' + p.precio + '">' +
        '<div class="product-image"><img src="' + p.imagen + '" alt="' + p.nombre + '" loading="lazy"></div>' +
        '<div class="product-info">' +
            '<h3>' + p.nombre + '</h3>' +
            '<p>' + p.descripcion + '</p>' +
            '<div class="product-footer">' +
                '<span class="price">' + formatPrice(p.precio) + '</span>' +
                '<button class="btn-order" onclick="return productWA(\'' + p.nombre.replace(/'/g, "\\'") + '\', ' + p.precio + ')">Pedir por WhatsApp</button>' +
            '</div>' +
        '</div>' +
    '</div>';
}

/* ─── Filtrado y búsqueda ─── */
function filterProducts() {
    var container = document.querySelector('.products-container');
    if (!container) return;

    var activeFilter = document.querySelector('.filter-btn.active');
    var filterVal = activeFilter ? activeFilter.getAttribute('data-filter') : 'todos';
    var searchVal = (document.getElementById('search-input') ? document.getElementById('search-input').value : '').toLowerCase().trim();

    // Ordenar: prioridad de la landing primero
    var sorted = CATALOGO.slice().sort(function (a, b) {
        if (LANDING_PRIORITY_TAG) {
            var aHas = a.tags.indexOf(LANDING_PRIORITY_TAG) >= 0 ? 0 : 1;
            var bHas = b.tags.indexOf(LANDING_PRIORITY_TAG) >= 0 ? 0 : 1;
            if (aHas !== bHas) return aHas - bHas;
        }
        return 0;
    });

    var html = '';
    var count = 0;

    sorted.forEach(function (p) {
        // Filtro por tag
        if (filterVal !== 'todos') {
            if (filterVal === 'precio-bajo' && p.precio >= 150000) return;
            if (filterVal === 'precio-medio' && (p.precio < 150000 || p.precio > 250000)) return;
            if (filterVal === 'precio-alto' && p.precio <= 250000) return;
            if (['precio-bajo', 'precio-medio', 'precio-alto'].indexOf(filterVal) < 0) {
                if (p.tags.indexOf(filterVal) < 0) return;
            }
        }

        // Filtro por búsqueda
        if (searchVal) {
            var haystack = (p.nombre + ' ' + p.descripcion + ' ' + p.tags.join(' ')).toLowerCase();
            if (haystack.indexOf(searchVal) < 0) return;
        }

        html += renderCard(p);
        count++;
    });

    container.innerHTML = html;

    var counter = document.getElementById('results-count');
    if (counter) counter.textContent = count;

    var empty = document.getElementById('empty-state');
    if (empty) empty.style.display = count === 0 ? 'block' : 'none';
}

/* ─── Inicializar catálogo ─── */
function initCatalog() {
    filterProducts();

    // Filtros
    document.querySelectorAll('.filter-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
            this.classList.add('active');
            filterProducts();
        });
    });

    // Búsqueda
    var searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }

    var clearBtn = document.getElementById('search-clear');
    if (clearBtn) {
        clearBtn.addEventListener('click', function () {
            if (searchInput) searchInput.value = '';
            filterProducts();
        });
    }
}
