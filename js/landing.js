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
    // ─── DESTACADOS / NOVEDADES ───
    {
        nombre: "Ternura Kitty",
        descripcion: "Espectacular arreglo escultórico en forma de Hello Kitty elaborado con crisantemos blancos, un tierno moño de rosas rosadas y detalle de rosas amarillas. Una obra floral única para sorprender y enamorar.",
        precio: 520000,
        imagen: "../assets/flores_cucuta_27.webp",
        tags: ["especiales", "destacado", "bouquets", "precio-alto"]
    },
    {
        nombre: "Jardín Encantado",
        descripcion: "Lujoso arreglo en caja rosa que reúne orquídeas cymbidium, lirios naranjas, girasoles, gerberas y rosas lavanda entre hortensias y claveles. Una explosión de color y sofisticación.",
        precio: 545000,
        imagen: "../assets/flores_cucuta_32.webp",
        tags: ["especiales", "destacado", "cajas", "girasoles", "gerberas", "precio-alto"]
    },
    {
        nombre: "Noche Estrellada",
        descripcion: "Ramo artístico inspirado en 'La Noche Estrellada' de Van Gogh: hortensias y rosas en tonos azules con crisantemos amarillos y una lámina decorativa de la icónica obra. Arte que florece.",
        precio: 160000,
        imagen: "../assets/flores_cucuta_35.webp",
        tags: ["especiales", "destacado", "bouquets", "precio-medio"]
    },
    {
        nombre: "Amor de 200 Rosas",
        descripcion: "Imponente ramo de 200 rosas rojas coronado con iniciales personalizadas hechas en flor nube (gypsophila), envuelto en elegante papel negro. Un gesto monumental de amor. Letras a elección del cliente.",
        precio: 820000,
        imagen: "../assets/flores_cucuta_28.webp",
        tags: ["rosas", "bouquets", "precio-alto"]
    },
    {
        nombre: "Fuego Silvestre",
        descripcion: "Vibrante ramo en tonos rojos que combina rosas, gerberas, claveles y astromelias, envuelto en papel blanco. Intensidad y elegancia para una ocasión inolvidable.",
        precio: 360000,
        imagen: "../assets/flores_cucuta_29.webp",
        tags: ["gerberas", "rosas", "bouquets", "precio-alto"]
    },
    {
        nombre: "Corazón Ferrero",
        descripcion: "Arreglo en forma de corazón con 33 Ferrero Rocher en el centro, rodeado de 52 rosas rojas y billetes decorativos a elección del cliente. Precio base del ramo; el dinero alrededor se ajusta a tu gusto.",
        precio: 650000,
        imagen: "../assets/flores_cucuta_30.webp",
        tags: ["especiales", "chocolates", "precio-alto"]
    },
    {
        nombre: "Ruta de Campeón",
        descripcion: "Original ramo con 12 rosas rojas, flor nube y 5 carritos Hot Wheels. El regalo perfecto para los amantes de los autos, grandes y pequeños.",
        precio: 167000,
        imagen: "../assets/flores_cucuta_31.webp",
        tags: ["especiales", "bouquets", "rosas", "precio-medio"]
    },
    {
        nombre: "Cerezo Rojo",
        descripcion: "Romántico ramo de 60 rosas rojas adornado con cerezas y un delicado moño rosado, envuelto en tul beige. Pasión y dulzura en una presentación de ensueño.",
        precio: 265000,
        imagen: "../assets/flores_cucuta_33.webp",
        tags: ["rosas", "bouquets", "precio-alto"]
    },
    {
        nombre: "Nube Pastel",
        descripcion: "Encantador ramo de 36 rosas acompañado de mini rosas y claveles en tonos rosa, amarillo y pastel, envuelto en papel lila. Ternura y frescura en cada pétalo.",
        precio: 232000,
        imagen: "../assets/flores_cucuta_34.webp",
        tags: ["rosas", "bouquets", "precio-medio"]
    },

    // ─── DETALLES ESPECIALES ───
    {
        nombre: "Just For You",
        descripcion: "Hermoso detalle compuesto por rosas artificiales de excelente calidad, acompañado de un globo con mensaje especial. Un detalle destinado a durar meses en excelente estado.",
        precio: 89000,
        imagen: "../assets/dia_madres/flores25.webp",
        tags: ["dia-madre", "cajas", "precio-bajo"]
    },
    {
        nombre: "Detalle Natural",
        descripcion: "Hermoso detalle de flores naturales acompañado con dos Ferrero Rocher.",
        precio: 86000,
        imagen: "../assets/dia_madres/flores27.webp",
        tags: ["dia-madre", "chocolates", "bouquets", "precio-bajo"]
    },
    {
        nombre: "Eternidad Floral",
        descripcion: "Detalle elaborado con diversas flores artificiales de alta calidad, larga duración.",
        precio: 110000,
        imagen: "../assets/dia_madres/flores28.webp",
        tags: ["dia-madre", "precio-bajo"]
    },
    {
        nombre: "Sol Radiante",
        descripcion: "Imponente arreglo en caja blanca con girasoles, rosas amarillas, claveles y eucalipto. Premium.",
        precio: 480000,
        imagen: "../assets/dia_madres/flores29.webp",
        tags: ["dia-madre", "girasoles", "premium", "precio-alto"]
    },
    {
        nombre: "Elegancia Rosada",
        descripcion: "Caja redonda rosa con hortensias, rosas y crisantemos en tonos rosa pastel.",
        precio: 200000,
        imagen: "../assets/dia_madres/flores33.webp",
        tags: ["dia-madre", "cajas", "rosas", "precio-medio"]
    },
    {
        nombre: "Reflejo de Amor",
        descripcion: "Arreglo circular de rosas rojas frescas rodeando un espejo grabado con la frase \"Eres la mejor mamá\". Un detalle único, elegante y con un mensaje eterno.",
        precio: 212000,
        imagen: "../assets/flores_cucuta_26.webp",
        tags: ["dia-madre", "rosas", "premium", "precio-medio"]
    },
    {
        nombre: "Reina del Sol",
        descripcion: "Espectacular bouquet con girasoles y rosas rojas con listón decorativo dorado.",
        precio: 450000,
        imagen: "../assets/dia_madres/flores38.webp",
        tags: ["dia-madre", "girasoles", "rosas", "bouquets", "premium", "precio-alto"]
    },
    {
        nombre: "Romance Duquesa",
        descripcion: "Elegante bolsa Duquesa Floral 'Flower World' disponible en dos versiones: rosas rojas con claveles e hipérico, o rosas rosadas con lisianthus. Detalles en paniculata y eucalipto, presentación premium.",
        precio: 165000,
        imagen: "../assets/flores_cucuta_25.webp",
        tags: ["rosas", "cajas", "premium", "precio-medio"]
    },

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
    // Producto "Distinción Absoluta" OCULTO del catálogo
    // {
    //     nombre: "Distinción Absoluta",
    //     descripcion: "Ramo de Claveles y Lirios.",
    //     precio: 50000,
    //     imagen: "../assets/flores_cucuta_3.webp",
    //     tags: ["bouquets", "precio-bajo"]
    // },
    {
        nombre: "Guardián del Corazón",
        descripcion: "Osito de 25 CM elaborado con rosas de foamy en caja de acetato, tarjeta personalizada y tres globos en helio.",
        precio: 275000,
        imagen: "../assets/flores_cucuta_24.webp",
        tags: ["premium", "precio-alto"]
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

/* ─── Normalización (minúsculas + sin tildes) ─── */
function normalizeText(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '');
}

/* ─── Renderizar tarjeta de producto ─── */
function renderCard(p, num) {
    var isDest = p.tags.indexOf('destacado') >= 0;
    var badge = isDest
        ? '<span class="product-featured-badge product-featured-badge--dest">✨ Destacado</span>'
        : (p.tags.indexOf('dia-madre') >= 0 ? '<span class="product-featured-badge">Detalles Especiales</span>' : '');
    return '<div class="product-item' + (isDest ? ' product-item--destacado' : '') + '" data-tags="' + p.tags.join(',') + '" data-price="' + p.precio + '" data-number="' + num + '">' +
        '<div class="product-image">' +
            '<span class="product-number">#' + num + '</span>' +
            badge +
            '<img src="' + p.imagen + '" alt="' + p.nombre + '" loading="lazy">' +
        '</div>' +
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
    var rawSearch = document.getElementById('search-input') ? document.getElementById('search-input').value : '';
    var searchVal = normalizeText(rawSearch.trim());

    // Ordenar: destacados primero, luego dia-madre, luego prioridad de la landing
    var sorted = CATALOGO.slice().sort(function (a, b) {
        // Productos destacados encabezan la vitrina
        var aDest = a.tags.indexOf('destacado') >= 0 ? 0 : 1;
        var bDest = b.tags.indexOf('destacado') >= 0 ? 0 : 1;
        if (aDest !== bDest) return aDest - bDest;

        // Día de la madre va al final del listado
        var aDia = a.tags.indexOf('dia-madre') >= 0 ? 1 : 0;
        var bDia = b.tags.indexOf('dia-madre') >= 0 ? 1 : 0;
        if (aDia !== bDia) return aDia - bDia;

        if (LANDING_PRIORITY_TAG) {
            var aHas = a.tags.indexOf(LANDING_PRIORITY_TAG) >= 0 ? 0 : 1;
            var bHas = b.tags.indexOf(LANDING_PRIORITY_TAG) >= 0 ? 0 : 1;
            if (aHas !== bHas) return aHas - bHas;
        }
        return 0;
    });

    var html = '';
    var count = 0;
    var num = 0;

    sorted.forEach(function (p) {
        num++;

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
            var haystack = normalizeText(num + ' #' + num + ' ' + p.nombre + ' ' + p.descripcion + ' ' + p.tags.join(' '));
            if (haystack.indexOf(searchVal) < 0) return;
        }

        html += renderCard(p, num);
        count++;
    });

    container.innerHTML = html;

    var counter = document.getElementById('results-count');
    if (counter) counter.textContent = count;

    var empty = document.getElementById('empty-state');
    if (empty) empty.style.display = count === 0 ? 'block' : 'none';

    // Mostrar/ocultar botón de limpiar búsqueda
    var clearBtn = document.getElementById('search-clear');
    if (clearBtn) {
        clearBtn.style.display = rawSearch ? 'flex' : 'none';
    }
}

/* ─── URL: leer/escribir filtro activo ─── */
function readFilterFromURL() {
    var params = new URLSearchParams(window.location.search);
    var f = params.get('filter') || params.get('category');
    if (!f) {
        var hash = (window.location.hash || '').replace(/^#\??/, '').trim();
        if (hash) f = hash;
    }
    return f;
}

function updateURLForFilter(filter) {
    try {
        var url = new URL(window.location.href);
        if (filter === 'todos' || !filter) {
            url.searchParams.delete('filter');
            url.searchParams.delete('category');
            window.history.replaceState({}, '', url.pathname + url.search);
        } else {
            url.searchParams.set('filter', filter);
            window.history.replaceState({}, '', url.pathname + url.search + '#' + filter);
        }
    } catch (e) { /* noop */ }
}

function applyFilterByName(filter, updateUrl) {
    var btn = document.querySelector('.filter-btn[data-filter="' + filter + '"]');
    if (!btn) {
        btn = document.querySelector('.filter-btn[data-filter="todos"]');
        filter = 'todos';
    }
    document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
    if (btn) btn.classList.add('active');
    filterProducts();
    if (updateUrl !== false) updateURLForFilter(filter);
}

/* ─── Inicializar catálogo ─── */
function initCatalog() {
    // Aplicar filtro inicial desde URL si existe
    var initialFilter = readFilterFromURL();
    if (initialFilter) {
        applyFilterByName(initialFilter, false);
    } else {
        filterProducts();
    }

    // Filtros
    document.querySelectorAll('.filter-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var f = this.getAttribute('data-filter');
            applyFilterByName(f, true);
        });
    });

    // Búsqueda
    var searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }

    var clearBtn = document.getElementById('search-clear');
    if (clearBtn) {
        clearBtn.style.display = 'none';
        clearBtn.addEventListener('click', function () {
            if (searchInput) {
                searchInput.value = '';
                searchInput.focus();
            }
            filterProducts();
        });
    }

    // Soporte navegación atrás/adelante y cambio de hash
    window.addEventListener('popstate', function () {
        var f = readFilterFromURL() || 'todos';
        applyFilterByName(f, false);
    });
    window.addEventListener('hashchange', function () {
        var f = readFilterFromURL() || 'todos';
        applyFilterByName(f, false);
    });

    // Vista previa de imágenes de productos
    initImagePreview();
}

/* ─── Vista previa (lightbox) de imágenes ─── */
function initImagePreview() {
    if (document.getElementById('image-preview-modal')) return;

    // CSS inyectado dinámicamente
    var css = ''
        + '.product-image{cursor:zoom-in}'
        + '.product-image img{transition:transform .25s ease}'
        + '.product-image:hover img{transform:scale(1.03)}'
        + '.image-preview-modal{position:fixed;inset:0;background:rgba(0,0,0,.88);display:flex;align-items:center;justify-content:center;z-index:9999;padding:1rem;opacity:0;pointer-events:none;transition:opacity .25s ease}'
        + '.image-preview-modal.is-open{opacity:1;pointer-events:auto}'
        + '.image-preview-modal[hidden]{display:none !important}'
        + '.image-preview-content{position:relative;max-width:min(95vw,1100px);max-height:92vh;display:flex;flex-direction:column;align-items:center;justify-content:center;animation:previewZoom .28s ease}'
        + '@keyframes previewZoom{from{transform:scale(.92);opacity:0}to{transform:scale(1);opacity:1}}'
        + '.image-preview-img{max-width:100%;max-height:85vh;width:auto;height:auto;border-radius:12px;box-shadow:0 25px 60px rgba(0,0,0,.45);background:#fff;object-fit:contain}'
        + '.image-preview-caption{color:#fff;margin-top:.85rem;font-size:.95rem;text-align:center;max-width:90%;text-shadow:0 2px 6px rgba(0,0,0,.6)}'
        + '.image-preview-close{position:fixed;top:1rem;right:1.25rem;width:46px;height:46px;border-radius:50%;border:none;background:rgba(255,255,255,.92);color:#222;font-size:1.9rem;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 16px rgba(0,0,0,.35);transition:transform .15s ease,background .15s ease;z-index:10000}'
        + '.image-preview-close:hover{background:#fff;transform:scale(1.08)}'
        + '.image-preview-close:active{transform:scale(.95)}'
        + 'body.preview-open{overflow:hidden}'
        + '@media (max-width:600px){.image-preview-close{top:.6rem;right:.6rem;width:42px;height:42px;font-size:1.7rem}.image-preview-img{max-height:78vh;border-radius:8px}.image-preview-caption{font-size:.85rem}}';

    var styleTag = document.createElement('style');
    styleTag.id = 'image-preview-styles';
    styleTag.textContent = css;
    document.head.appendChild(styleTag);

    // Modal
    var modal = document.createElement('div');
    modal.id = 'image-preview-modal';
    modal.className = 'image-preview-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Vista previa de imagen');
    modal.hidden = true;
    modal.innerHTML = ''
        + '<button class="image-preview-close" type="button" aria-label="Cerrar vista previa">&times;</button>'
        + '<div class="image-preview-content" role="document">'
        +   '<img class="image-preview-img" alt="" />'
        +   '<div class="image-preview-caption"></div>'
        + '</div>';
    document.body.appendChild(modal);

    var imgEl   = modal.querySelector('.image-preview-img');
    var capEl   = modal.querySelector('.image-preview-caption');
    var closeBt = modal.querySelector('.image-preview-close');

    function openPreview(src, alt, title) {
        imgEl.src = src;
        imgEl.alt = alt || '';
        capEl.textContent = title || alt || '';
        modal.hidden = false;
        void modal.offsetWidth;
        modal.classList.add('is-open');
        document.body.classList.add('preview-open');
    }
    function closePreview() {
        modal.classList.remove('is-open');
        document.body.classList.remove('preview-open');
        setTimeout(function () {
            modal.hidden = true;
            imgEl.src = '';
        }, 260);
    }

    // Delegación global: click en imagen dentro de .product-image / .product-item / .product-card
    document.addEventListener('click', function (e) {
        var target = e.target;
        if (!target) return;
        // No interferir con botones
        if (target.closest && target.closest('button, a')) return;
        var wrapper = target.closest && target.closest('.product-image');
        if (!wrapper) return;
        var img = wrapper.querySelector('img');
        if (!img) return;
        e.preventDefault();
        var card = wrapper.closest('.product-item, .product-card');
        var title = '';
        if (card) {
            var t = card.querySelector('.product-title, h3, h2');
            if (t) title = (t.textContent || '').trim();
        }
        openPreview(img.currentSrc || img.src, img.alt, title);
    });

    closeBt.addEventListener('click', closePreview);
    modal.addEventListener('click', function (e) {
        if (e.target === modal) closePreview();
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) closePreview();
    });
}
