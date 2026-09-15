/* ============================================
   DUQUESA FLORAL - Landing Pages JS
   Catálogo por secciones + funciones de contacto
   Estilo "Negro & Dorado" (ver landing/css/landing.css)
   ============================================ */

// Barra de urgencia por fases: se carga sola desde js/urgencia.js (mismo directorio que este archivo)
(function () {
    try {
        var me = document.currentScript && document.currentScript.src;
        var src = me ? me.replace(/landing\.js(\?.*)?$/, 'urgencia.js') : '../js/urgencia.js';
        var s = document.createElement('script');
        s.src = src;
        s.onload = function () { if (typeof filterProducts === 'function' && document.querySelector('.products-container')) filterProducts(); };
        document.head.appendChild(s);
    } catch (e) { /* noop */ }
})();

// Configuración global
const WA_NUMBER = '573202791687';
const BUSINESS_NAME = 'Duquesa Floral';
const ADS_CONVERSION_ID = 'AW-17503274952/zu_KCLCYgaQcEMiPm5pB';

// Secciones del catálogo (orden de aparición)
const SECCIONES = [
    { id: 'amor',      titulo: 'Amor y Amistad',  emoji: '❤️', fecha: '19 de septiembre', iso: '2026-09-19', sub: 'Detalles para celebrar el amor y la amistad' },
    { id: 'amarillas', titulo: 'Flores Amarillas', emoji: '💛', fecha: '21 de septiembre', iso: '2026-09-21', sub: 'Girasoles, tulipanes y rosas amarillas para el 21' },
    { id: 'mas',       titulo: 'Más Arreglos',     emoji: '✦',  fecha: '',                 iso: '',           sub: 'Rosas, eternas, cajas y detalles para toda ocasión' }
];

// Catálogo de productos.
//  - num: número de la foto (assets/flores_cucuta_N.webp); se muestra como "Nº N"
//  - seccion: amor | amarillas | mas
//  - oculto: true → no se muestra (productos con fotos 1–26, ocultos temporalmente)
//  - desde: true → el precio se muestra como "Desde $"
const CATALOGO = [
    // ─── AMOR Y AMISTAD · 19 SEPT ───
    { num: 36, nombre: "Kit Amor Propio", descripcion: "Set de balaca y muñequeras, parches anti acné, 3 pomos para polvos, mascarilla velo, pañitos para rostro, parche de colágeno con niacinamida para ojeras y colágeno para labios. Un regalo de autocuidado para consentir a quien más quieres.", precio: 91000, imagen: "../assets/flores_cucuta_36.webp", seccion: "amor", tags: ["detalles"], kw: "skincare cuidado facial spa regalo mujer amiga" },
    { num: 37, nombre: "Oso de Rosas", descripcion: "Oso de 30 cm elaborado en rosas, presentado en caja de acetato con lazo rojo y acompañado de 2 globos de helio. Un detalle que no se marchita y llena de emoción cualquier espacio.", precio: 275000, imagen: "../assets/flores_cucuta_37.webp", seccion: "amor", tags: ["peluches", "eternas"], kw: "osito foamy globos helio caja" },
    { num: 38, nombre: "Abrazo Eterno", descripcion: "21 rosas eternas en tonos rosa y dorado con mariposas decorativas y un tierno peluche en el centro. Dura para siempre, igual que lo que sientes.", precio: 160000, imagen: "../assets/flores_cucuta_38.webp", seccion: "amor", tags: ["eternas", "peluches"], kw: "osito rosas eternas 21" },
    { num: 39, nombre: "Ternura Eterna", descripcion: "11 rosas eternas rosadas y doradas con mariposas y un peluche de oso. El detalle ideal para decir “te quiero” sin gastar de más.", precio: 100000, imagen: "../assets/flores_cucuta_39.webp", seccion: "amor", tags: ["eternas", "peluches"], kw: "osito rosas eternas 11 economico" },
    { num: 40, nombre: "Dulce Docena", descripcion: "Ramo de 12 rosas rojas con flor nube y 3 Ferrero Rocher, envuelto en papel blanco con lazo rojo. Clásico, dulce y directo al corazón.", precio: 122000, imagen: "../assets/flores_cucuta_40.webp", seccion: "amor", tags: ["rosas", "chocolates"], kw: "12 rosas ferrero bombones" },
    { num: 41, nombre: "10 Razones para Amarte", descripcion: "Caja corazón negra con 4 rosas rojas, flor nube, 12 Ferrero Rocher y los mensajes de la canción en su interior. Cada razón viene con una flor y un dulce.", precio: 130000, imagen: "../assets/flores_cucuta_41.webp", seccion: "amor", tags: ["rosas", "chocolates", "cajas"], kw: "caja corazon ferrero cancion mensajes" },
    { num: 42, nombre: "Corazón Feliz Día", descripcion: "35 rosas rojas dispuestas en forma de corazón con perlas y topper dorado “Feliz Día”. Para que lo vea y sonría antes de leer la tarjeta.", precio: 175000, imagen: "../assets/flores_cucuta_42.webp", seccion: "amor", tags: ["rosas"], kw: "corazon 35 rosas topper feliz dia" },
    { num: 43, nombre: "Corazón Ferrero Mixto", descripcion: "Caja corazón con rosas rojas y rosadas, flor nube y 11 Ferrero Rocher, con lazo dorado. Flores y chocolate en una sola sorpresa.", precio: 145000, imagen: "../assets/flores_cucuta_43.webp", seccion: "amor", tags: ["rosas", "chocolates", "cajas"], kw: "caja corazon 11 ferrero rosas rosadas" },
    { num: 44, nombre: "Fresas & Rosas", descripcion: "Caja portable con fresas con crema en vaso de 12 onzas, rosas rojas frescas y eucalipto. Un antojo romántico, perfecto para sorprender en la oficina.", precio: 66000, imagen: "../assets/flores_cucuta_44.webp", seccion: "amor", tags: ["detalles"], kw: "fresas con crema postre economico" },
    { num: 45, nombre: "Desayuno Sorpresa", descripcion: "Bandeja con 2 sándwiches de jamón y queso con vegetales, ensalada de frutas con yogurt griego, 3 Ferrero Rocher, brownie y jugo de naranja o Chocolisto. La forma más rica de empezar el día juntos.", precio: 110000, imagen: "../assets/flores_cucuta_45.webp", seccion: "amor", tags: ["desayunos", "chocolates"], kw: "desayuno sorpresa sandwich brownie jugo" },
    { num: 46, nombre: "Cerezas de Amor", descripcion: "Ramo de 60 rosas rojas decorado con cerezas, perlas y moño rosado, envuelto en papel crema. Abundante, romántico y para dejar sin palabras.", precio: 240000, imagen: "../assets/flores_cucuta_46.webp", seccion: "amor", tags: ["rosas"], kw: "60 rosas cerezas" },
    { num: 47, nombre: "Tulipanes Rosados", descripcion: "Ramo de 6 tulipanes rosados con eucalipto y flor nube, envuelto en papel celeste con lazo rosa. Delicado, fresco y diferente a las rosas de siempre.", precio: 222000, imagen: "../assets/flores_cucuta_47.webp", seccion: "amor", tags: ["tulipanes"], kw: "6 tulipanes rosados" },
    { num: 48, nombre: "Flower World Rojo", descripcion: "Bolsa floral con rosas rojas, claveles, hipérico, eucalipto y flor nube. Se regala, se lleva y se luce en cualquier mesa.", precio: 170000, imagen: "../assets/flores_cucuta_48.webp", seccion: "amor", tags: ["rosas"], kw: "bolsa flower world claveles hiperico eucalipto" },
    { num: 59, nombre: "Dos Docenas de Amor", descripcion: "Ramo de 24 rosas rojas con perlas y mariposas doradas, envuelto en papel blanco con detalles “Love”. El gesto clásico que nunca falla.", precio: 150000, imagen: "../assets/flores_cucuta_59.webp", seccion: "amor", tags: ["rosas"], kw: "24 rosas rojas love" },
    { num: 60, nombre: "Sesenta Rosas", descripcion: "Ramo de 60 rosas rojas con flor nube, envuelto en papel negro con borde dorado. Impacto total para un amor en grande.", precio: 250000, imagen: "../assets/flores_cucuta_60.webp", seccion: "amor", tags: ["rosas"], kw: "60 rosas rojas papel negro" },
    // ─── FLORES AMARILLAS · 21 SEPT ───
    { num: 49, nombre: "Mini Sol Eterno", descripcion: "Mini ramo de 7 rosas eternas amarillas con perlas y mariposa dorada, envuelto en papel blanco con lazo dorado. Pequeño, duradero y perfecto para el 21 de septiembre.", precio: 53000, imagen: "../assets/flores_cucuta_49.webp", seccion: "amarillas", tags: ["eternas"], kw: "7 rosas eternas amarillas economico" },
    { num: 50, nombre: "24 Rosas Amarillas", descripcion: "Ramo de 24 rosas amarillas con eucalipto y perlas, envuelto en papel celeste con lazo dorado. Luz y buena energía para quien te alegra la vida.", precio: 180000, imagen: "../assets/flores_cucuta_50.webp", seccion: "amarillas", tags: ["rosas"], kw: "24 rosas amarillas" },
    { num: 51, nombre: "Docena Eterna Dorada", descripcion: "12 rosas eternas en tono amarillo dorado con perlas y mariposa, en papel blanco con lazo dorado. Un sol que no se marchita.", precio: 90000, imagen: "../assets/flores_cucuta_51.webp", seccion: "amarillas", tags: ["eternas"], kw: "12 rosas eternas amarillas doradas" },
    { num: 52, nombre: "Tulipanes Amarillos", descripcion: "Ramo de tulipanes amarillos disponible desde 4 unidades, con flor nube y papel rosado. Frescura y luz para el Día de las Flores Amarillas.", precio: 148000, imagen: "../assets/flores_cucuta_52.webp", seccion: "amarillas", tags: ["tulipanes"], desde: true, kw: "tulipanes amarillos 4 6 10" },
    { num: 53, nombre: "Sol y Rosas", descripcion: "10 girasoles con 50 rosas en tonos rosa y blanco, envueltos en papel rosa con borde dorado. Un arreglo enorme para una ocasión enorme.", precio: 318000, imagen: "../assets/flores_cucuta_53.webp", seccion: "amarillas", tags: ["girasoles", "rosas"], kw: "10 girasoles 50 rosas grande" },
    { num: 54, nombre: "Docena Amarilla", descripcion: "Ramo de 12 rosas amarillas rodeadas de flor nube, en papel crema con lazo dorado. Alegría en su forma más clásica.", precio: 140000, imagen: "../assets/flores_cucuta_54.webp", seccion: "amarillas", tags: ["rosas"], kw: "12 rosas amarillas" },
    { num: 55, nombre: "Tres Soles", descripcion: "Ramo de 3 girasoles con flor nube, envuelto en papel lila con lazo dorado. Alegría pura en un tamaño ideal para sorprender.", precio: 130000, imagen: "../assets/flores_cucuta_55.webp", seccion: "amarillas", tags: ["girasoles"], kw: "3 girasoles lila" },
    { num: 56, nombre: "Girasol entre Rosas", descripcion: "60 rosas en tonos amarillo y blanco con un girasol en el centro y manzanilla, en papel dorado. Un diseño de lujo para quien lo merece todo.", precio: 340000, imagen: "../assets/flores_cucuta_56.webp", seccion: "amarillas", tags: ["girasoles", "rosas"], kw: "60 rosas 1 girasol manzanilla" },
    { num: 57, nombre: "Girasoles y Siempreviva", descripcion: "Ramo de 3 girasoles con flor siempreviva en tono lila, envuelto en papel blanco. Colorido, fresco y a muy buen precio.", precio: 95000, imagen: "../assets/flores_cucuta_57.webp", seccion: "amarillas", tags: ["girasoles"], kw: "3 girasoles siempre viva statice economico" },
    { num: 58, nombre: "Seis Girasoles", descripcion: "Ramo de 6 girasoles con flor nube, envuelto en papel crema con tarjeta Duquesa. Grande, radiante y listo para alegrar el día.", precio: 145000, imagen: "../assets/flores_cucuta_58.webp", seccion: "amarillas", tags: ["girasoles"], kw: "6 girasoles" },
    { num: 61, nombre: "Corazón Dorado", descripcion: "Caja corazón con rosas eternas amarillas, mariposa dorada y 12 Ferrero Rocher, con lazo amarillo. Un detalle que dura y endulza.", precio: 103000, imagen: "../assets/flores_cucuta_61.webp", seccion: "amarillas", tags: ["eternas", "chocolates", "cajas"], kw: "caja corazon rosas eternas amarillas 12 ferrero" },
    // ─── MÁS ARREGLOS ───
    { num: 27, nombre: "Ternura Kitty", descripcion: "Arreglo escultórico en forma de Hello Kitty con crisantemos blancos, moño de rosas rosadas y detalles en rosas amarillas. Una pieza única para sorprender de verdad.", precio: 520000, imagen: "../assets/flores_cucuta_27.webp", seccion: "mas", tags: ["especiales", "destacado"], kw: "hello kitty gato figura personaje" },
    { num: 32, nombre: "Jardín Encantado", descripcion: "Caja rosa con orquídeas cymbidium, lirios naranjas, girasoles, gerberas y rosas lavanda entre hortensias y claveles. Color y sofisticación en gran formato.", precio: 545000, imagen: "../assets/flores_cucuta_32.webp", seccion: "mas", tags: ["especiales", "destacado", "cajas", "girasoles"], kw: "orquideas lirios gerberas hortensias" },
    { num: 35, nombre: "Noche Estrellada", descripcion: "Ramo inspirado en “La Noche Estrellada” de Van Gogh: hortensias y rosas azules con crisantemos amarillos y lámina de la obra. Arte que florece.", precio: 160000, imagen: "../assets/flores_cucuta_35.webp", seccion: "mas", tags: ["especiales", "destacado"], kw: "van gogh azul arte" },
    // ─── AMOR Y AMISTAD · 19 SEPT ───
    { num: 28, nombre: "Amor de 200 Rosas", descripcion: "200 rosas rojas coronadas con iniciales personalizadas en flor nube, envueltas en papel negro. El gesto más grande que puedes regalar.", precio: 820000, imagen: "../assets/flores_cucuta_28.webp", seccion: "amor", tags: ["rosas", "especiales"], kw: "200 rosas iniciales letras gigante" },
    // ─── MÁS ARREGLOS ───
    { num: 29, nombre: "Fuego Silvestre", descripcion: "Ramo rojo con rosas, gerberas, claveles y astromelias, envuelto en papel blanco. Intensidad y elegancia para una ocasión inolvidable.", precio: 360000, imagen: "../assets/flores_cucuta_29.webp", seccion: "mas", tags: ["rosas", "gerberas"], kw: "gerberas claveles astromelias rojo" },
    { num: 30, nombre: "Corazón Ferrero", descripcion: "Corazón con 33 Ferrero Rocher al centro, 52 rosas rojas y billetes decorativos a elección. Precio base del ramo; el dinero se ajusta a tu gusto.", precio: 650000, imagen: "../assets/flores_cucuta_30.webp", seccion: "mas", tags: ["rosas", "chocolates", "especiales"], kw: "corazon 33 ferrero 52 rosas billetes dinero" },
    { num: 31, nombre: "Ruta de Campeón", descripcion: "12 rosas rojas con flor nube y 5 carritos Hot Wheels. El regalo perfecto para los amantes de los autos.", precio: 167000, imagen: "../assets/flores_cucuta_31.webp", seccion: "mas", tags: ["rosas", "especiales"], kw: "hot wheels carritos autos hombre niño" },
    { num: 33, nombre: "Cerezo Rojo", descripcion: "60 rosas rojas con cerezas y moño rosado, envueltas en tul beige. Pasión y dulzura en una sola presentación.", precio: 265000, imagen: "../assets/flores_cucuta_33.webp", seccion: "mas", tags: ["rosas"], kw: "60 rosas cerezas tul" },
    { num: 34, nombre: "Nube Pastel", descripcion: "36 rosas con mini rosas y claveles en tonos rosa, amarillo y pastel, en papel lila. Ternura y frescura en cada pétalo.", precio: 232000, imagen: "../assets/flores_cucuta_34.webp", seccion: "mas", tags: ["rosas"], kw: "36 rosas pastel lila" },
    { nombre: "Despertar de Primavera", descripcion: "Bouquet de tulipanes en 4, 6 o 10 unidades, de un solo color o combinados. Elegante y versátil para cualquier ocasión.", precio: 148000, imagen: "../ofertas/imagenes/tulipanes/tulipanes_amarillos.webp", seccion: "mas", tags: ["tulipanes"], desde: true, kw: "tulipanes 4 6 10 colores" },
    { nombre: "Cápsula de Eternidad", descripcion: "Mini ramo de 7 rosas eternas con perlas y mariposas decorativas. Disponible en varios colores.", precio: 53000, imagen: "../assets/mini_ramo_eternas.webp", seccion: "mas", tags: ["eternas"], kw: "7 rosas eternas mini colores" },
    { nombre: "Legado Inmortal", descripcion: "Bouquet de 20 rosas eternas con malla de perlas y mariposas doradas. Incluye listón y mensaje personalizado.", precio: 145000, imagen: "../assets/bouquet_eternas.webp", seccion: "mas", tags: ["eternas"], kw: "20 rosas eternas perlas" },
    { nombre: "Imperio Eterno", descripcion: "Bouquet de 34 rosas eternas con perlas y mariposas. Incluye moño y mensaje especial.", precio: 220000, imagen: "../assets/bouquet_eternas_grandes.webp", seccion: "mas", tags: ["eternas"], kw: "34 rosas eternas grande" },
    { nombre: "Celebración de Vida", descripcion: "Bouquet de 20 rosas frescas con eucalipto en base que las mantiene radiantes. Incluye tarjeta personalizada.", precio: 140000, imagen: "../ofertas/imagenes/ramo_bouquets/ramo_flores_cumpleanos.webp", seccion: "mas", tags: ["rosas", "cumpleanos"], kw: "20 rosas cumpleaños eucalipto" },
    { nombre: "Juramento Sagrado", descripcion: "Bouquet de 18 rosas frescas con follajes y listón decorativo. Diseño delicado para el día más especial.", precio: 155000, imagen: "../ofertas/imagenes/ramo_bouquets/ramos_novias_naturales.webp", seccion: "mas", tags: ["rosas", "novia"], kw: "novia boda 18 rosas" },
    { nombre: "Coronación de Princesa", descripcion: "48 rosas frescas rodeadas de flor nube, con corona dorada y listón con mensaje. Perfecto para los 15 años.", precio: 255000, imagen: "../ofertas/imagenes/ramo_bouquets/ramo_flores_quinceaneras.webp", seccion: "mas", tags: ["rosas", "quince"], kw: "quince años 15 corona 48 rosas" },
    { nombre: "Arsenal Completo", descripcion: "Rosas frescas, flor nube y 11 Ferrero Rocher en base elegante con lazo dorado. El detalle que cubre todas las expectativas.", precio: 177500, imagen: "../assets/amoryamistad/amoryamistad2.webp", seccion: "mas", tags: ["rosas", "chocolates"], kw: "11 ferrero rosas base" },
    { nombre: "Alegría Multicolor", descripcion: "Bouquet de astromelias frescas con base de oasis y tarjeta personalizada. Color y frescura que duran varios días.", precio: 60000, imagen: "../assets/cumpleanos/cumpleanos5.webp", seccion: "mas", tags: ["cumpleanos"], kw: "astromelias economico cumpleaños" },
    { nombre: "Monumento de Amor", descripcion: "110 rosas en forma de corazón con mensaje en listón y 2 globos de helio. Una declaración imposible de olvidar.", precio: 465000, imagen: "../assets/cumpleanos/cumpleanos1.webp", seccion: "mas", tags: ["rosas", "cumpleanos"], kw: "110 rosas corazon globos helio" },
    { nombre: "Estrella Resplandeciente", descripcion: "Bouquet de claveles de larga duración con tarjeta personalizada. Ideal para celebrar años de amistad.", precio: 60000, imagen: "../assets/cumpleanos/cumpleanos6.webp", seccion: "mas", tags: ["cumpleanos"], kw: "claveles economico cumpleaños" },
    { nombre: "Sinfonía Dorada", descripcion: "56 rosas con un girasol radiante y manzanilla. Elegancia y felicidad en un solo ramo.", precio: 280000, imagen: "../assets/cumpleanos/cumpleanos2.webp", seccion: "mas", tags: ["rosas", "girasoles", "cumpleanos"], kw: "56 rosas girasol manzanilla" },
    { nombre: "Nube de Celebración", descripcion: "52 rosas frescas con flor nube y moño decorativo. Sofisticación pura para celebrar con estilo.", precio: 255000, imagen: "../assets/cumpleanos/cumpleanos3.webp", seccion: "mas", tags: ["rosas", "cumpleanos"], kw: "52 rosas flor nube" },
    { nombre: "Esencia de Felicidad", descripcion: "20 rosas frescas en arreglo clásico con tarjeta personalizada. Afecto directo al corazón, sin complicaciones.", precio: 160000, imagen: "../assets/cumpleanos/cumpleanos4.webp", seccion: "mas", tags: ["rosas", "cumpleanos"], kw: "20 rosas clasico" },
    { nombre: "Just For You", descripcion: "Caja con rosas artificiales de alta calidad y un globo con mensaje especial. Un detalle que dura meses impecable.", precio: 89000, imagen: "../assets/dia_madres/flores25.webp", seccion: "mas", tags: ["detalles", "eternas", "cajas"], kw: "caja rosas artificiales globo" },
    { nombre: "Detalle Natural", descripcion: "Flores naturales acompañadas de dos Ferrero Rocher. Frescura, color y dulzura en un solo regalo.", precio: 86000, imagen: "../assets/dia_madres/flores27.webp", seccion: "mas", tags: ["detalles", "chocolates"], kw: "detalle ferrero economico" },
    { nombre: "Eternidad Floral", descripcion: "Detalle de flores artificiales de alta calidad y larga duración. Un recuerdo elegante para conservar.", precio: 110000, imagen: "../assets/dia_madres/flores28.webp", seccion: "mas", tags: ["detalles", "eternas"], kw: "flores artificiales recuerdo" },
    { nombre: "Sol Radiante", descripcion: "Caja blanca con girasoles, rosas amarillas, crisantemos, claveles y eucalipto. Una declaración de cariño en gran formato.", precio: 480000, imagen: "../assets/dia_madres/flores29.webp", seccion: "mas", tags: ["girasoles", "cajas", "especiales"], kw: "caja girasoles rosas amarillas grande" },
    { nombre: "Elegancia Rosada", descripcion: "Caja redonda rosa con hortensias, rosas y crisantemos en tonos pastel. Romántico, femenino y elegante.", precio: 200000, imagen: "../assets/dia_madres/flores33.webp", seccion: "mas", tags: ["cajas", "rosas"], kw: "caja redonda hortensias pastel" },
    { nombre: "Reina del Sol", descripcion: "Bouquet con varios girasoles y rosas rojas, papel decorativo y listón blanco con inscripción dorada. Un homenaje monumental.", precio: 450000, imagen: "../assets/dia_madres/flores38.webp", seccion: "mas", tags: ["girasoles", "rosas", "especiales"], kw: "girasoles rosas rojas grande" },
    // ─── OCULTOS TEMPORALMENTE (fotos 1–26) ───
    { num: 25, nombre: "Romance Duquesa", descripcion: "Bolsa Duquesa Floral “Flower World” en dos versiones: rosas rojas con claveles e hipérico, o rosas rosadas con lisianthus. Presentación premium con paniculata y eucalipto.", precio: 165000, imagen: "../assets/flores_cucuta_25.webp", seccion: "mas", tags: ["rosas"], kw: "bolsa flower world", oculto: true },
    { num: 18, nombre: "Despertar de Alegría", descripcion: "Ramo de 10 gerberas con tarjeta o mensaje personalizado. Color y alegría al instante.", precio: 95000, imagen: "../assets/flores_cucuta_18.webp", seccion: "mas", tags: ["gerberas"], oculto: true },
    { num: 2, nombre: "Fusión Perfecta", descripcion: "Ramo de 36 rosas y 6 girasoles con tarjeta personalizada. Elegancia y energía en un solo ramo.", precio: 227500, imagen: "../assets/flores_cucuta_2.webp", seccion: "mas", tags: ["rosas", "girasoles"], oculto: true },
    { num: 17, nombre: "Garantía de Amor", descripcion: "Ramo de 12 rosas con tarjeta o mensaje personalizado. El clásico que siempre funciona.", precio: 102500, imagen: "../assets/flores_cucuta_17.webp", seccion: "mas", tags: ["rosas"], oculto: true },
    { num: 21, nombre: "Conquista Definitiva", descripcion: "Ramo de 24 rosas y claveles con tarjeta personalizada. Para dejar claro lo que sientes.", precio: 165000, imagen: "../assets/flores_cucuta_21.webp", seccion: "mas", tags: ["rosas"], oculto: true },
    { num: 1, nombre: "Obra Maestra", descripcion: "Ramo de 60 rosas y claveles con tarjeta personalizada. Abundancia que impresiona.", precio: 265000, imagen: "../assets/flores_cucuta_1.webp", seccion: "mas", tags: ["rosas"], oculto: true },
    { num: 23, nombre: "Vitamina Emocional", descripcion: "Ramo de 4 girasoles con tarjeta o mensaje personalizado. Alegría garantizada.", precio: 110000, imagen: "../assets/flores_cucuta_23.webp", seccion: "mas", tags: ["girasoles"], oculto: true },
    { num: 24, nombre: "Guardián del Corazón", descripcion: "Osito de 25 cm en rosas de foamy dentro de caja de acetato, con tarjeta y 3 globos de helio. Un detalle que perdura.", precio: 275000, imagen: "../assets/flores_cucuta_24.webp", seccion: "mas", tags: ["peluches", "eternas"], oculto: true },
    { num: 26, nombre: "Reflejo de Amor", descripcion: "Arreglo circular de rosas rojas alrededor de un espejo grabado “Eres la mejor mamá”. Elegancia con un mensaje eterno.", precio: 212000, imagen: "../assets/flores_cucuta_26.webp", seccion: "mas", tags: ["rosas", "especiales"], oculto: true },
];

// Variable global para prioridad de tags por landing (ej: 'girasoles')
var LANDING_PRIORITY_TAG = '';

/* ─── Formato de precio ─── */
function formatPrice(n) {
    return '$' + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
function priceLabel(p) {
    return (p.desde ? 'Desde ' : '') + formatPrice(p.precio);
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

function productWA(idx) {
    var p = CATALOGO[idx];
    if (!p) return false;
    var ref = p.num ? ' (Nº ' + p.num + ')' : '';
    var msg = 'Hola, me interesa el ' + p.nombre + ref + ' por ' + priceLabel(p) + '. ¿Podrían darme más información?';
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

function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

var WA_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 22a10 10 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A10 10 0 1 1 12 22z"/></svg>';

/* ─── Banda de precio ─── */
function priceBand(p) {
    if (p.precio < 150000) return 'precio-bajo';
    if (p.precio <= 250000) return 'precio-medio';
    return 'precio-alto';
}

/* ─── Renderizar tarjeta de producto ─── */
function renderCard(p, idx) {
    var isDest = p.tags.indexOf('destacado') >= 0;
    return '<div class="product-item' + (isDest ? ' product-item--destacado' : '') + '" data-tags="' + p.tags.join(',') + '" data-price="' + p.precio + '" data-number="' + (p.num || '') + '">' +
        '<div class="product-image">' +
            '<img src="' + p.imagen + '" alt="' + escapeHtml(p.nombre) + '" loading="lazy">' +
            (p.num ? '<span class="product-number">Nº ' + p.num + '</span>' : '') +
            (isDest ? '<span class="product-featured-badge">Destacado</span>' : '') +
            '<span class="price">' + priceLabel(p) + '</span>' +
        '</div>' +
        '<div class="product-info">' +
            '<h3>' + escapeHtml(p.nombre) + '</h3>' +
            '<p>' + escapeHtml(p.descripcion) + '</p>' +
            '<button class="btn-order" onclick="return productWA(' + idx + ')">' + WA_ICON + ' Pedir por WhatsApp</button>' +
        '</div>' +
    '</div>';
}

/* ─── Encabezado de sección ─── */
function daysUntil(iso) {
    if (!iso) return null;
    var parts = iso.split('-');
    var target = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
    var today = new Date(); today.setHours(0, 0, 0, 0);
    return Math.round((target - today) / 86400000);
}
function renderSectionHead(s) {
    var d = daysUntil(s.iso);
    var cd = '';
    if (s.iso && window.DuquesaUrgencia) {
        cd = window.DuquesaUrgencia.pastilla(s.iso); // frase según la fase (js/urgencia.js)
    } else if (d !== null) {
        if (d > 1) cd = 'Faltan ' + d + ' días';
        else if (d === 1) cd = '¡Es mañana!';
        else if (d === 0) cd = '¡Es hoy!';
    }
    return '<div class="section-head" id="sec-' + s.id + '">' +
        '<h2>' + s.emoji + ' ' + s.titulo + '</h2>' +
        '<span class="ln"></span>' +
        (s.fecha ? '<span class="date">' + s.fecha + '</span>' : '') +
        (cd ? '<span class="countdown">' + cd + '</span>' : '') +
    '</div>' +
    (s.sub ? '<p class="section-sub">' + s.sub + '</p>' : '');
}

/* ─── Filtrado y búsqueda ─── */
function filterProducts() {
    var container = document.querySelector('.products-container');
    if (!container) return;

    var activeFilter = document.querySelector('.filter-btn.active');
    var filterVal = activeFilter ? activeFilter.getAttribute('data-filter') : 'todos';
    var rawSearch = document.getElementById('search-input') ? document.getElementById('search-input').value : '';
    var searchVal = normalizeText(rawSearch.trim());

    function matches(p) {
        if (p.oculto) return false;
        var tags = p.tags.concat([p.seccion, priceBand(p)]);
        if (filterVal !== 'todos' && tags.indexOf(filterVal) < 0) return false;
        if (searchVal) {
            var n = p.num ? (p.num + ' #' + p.num + ' n' + p.num + ' nº' + p.num + ' ') : '';
            var haystack = normalizeText(n + p.nombre + ' ' + p.descripcion + ' ' + tags.join(' ').replace(/-/g, ' ') + ' ' + (p.kw || ''));
            if (haystack.indexOf(searchVal) < 0) return false;
        }
        return true;
    }

    var html = '';
    var count = 0;

    SECCIONES.forEach(function (s) {
        var items = [];
        CATALOGO.forEach(function (p, idx) {
            if (p.seccion === s.id && matches(p)) items.push({ p: p, idx: idx });
        });
        if (!items.length) return;

        // Dentro de cada sección: destacados primero, luego prioridad de la landing
        items.sort(function (a, b) {
            var aDest = a.p.tags.indexOf('destacado') >= 0 ? 0 : 1;
            var bDest = b.p.tags.indexOf('destacado') >= 0 ? 0 : 1;
            if (aDest !== bDest) return aDest - bDest;
            if (LANDING_PRIORITY_TAG) {
                var aHas = a.p.tags.indexOf(LANDING_PRIORITY_TAG) >= 0 ? 0 : 1;
                var bHas = b.p.tags.indexOf(LANDING_PRIORITY_TAG) >= 0 ? 0 : 1;
                if (aHas !== bHas) return aHas - bHas;
            }
            return 0;
        });

        html += '<section class="product-section">' + renderSectionHead(s) + '<div class="product-grid">';
        items.forEach(function (it) { html += renderCard(it.p, it.idx); count++; });
        html += '</div></section>';
    });

    container.innerHTML = html;

    var counter = document.getElementById('results-count');
    if (counter) counter.textContent = count;

    var empty = document.getElementById('empty-state');
    if (empty) empty.style.display = count === 0 ? 'block' : 'none';

    var clearBtn = document.getElementById('search-clear');
    if (clearBtn) clearBtn.style.display = rawSearch ? 'flex' : 'none';
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
    var initialFilter = readFilterFromURL();
    if (initialFilter) {
        applyFilterByName(initialFilter, false);
    } else {
        filterProducts();
    }

    document.querySelectorAll('.filter-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            applyFilterByName(this.getAttribute('data-filter'), true);
        });
    });

    var searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.addEventListener('input', filterProducts);

    var clearBtn = document.getElementById('search-clear');
    if (clearBtn) {
        clearBtn.style.display = 'none';
        clearBtn.addEventListener('click', function () {
            if (searchInput) { searchInput.value = ''; searchInput.focus(); }
            filterProducts();
        });
    }

    window.addEventListener('popstate', function () { applyFilterByName(readFilterFromURL() || 'todos', false); });
    window.addEventListener('hashchange', function () { applyFilterByName(readFilterFromURL() || 'todos', false); });

    initImagePreview();
}

/* ─── Vista previa (lightbox) de imágenes ─── */
function initImagePreview() {
    if (document.getElementById('image-preview-modal')) return;

    var css = ''
        + '.product-image{cursor:zoom-in}'
        + '.image-preview-modal{position:fixed;inset:0;background:rgba(0,0,0,.9);display:flex;align-items:center;justify-content:center;z-index:9999;padding:1rem;opacity:0;pointer-events:none;transition:opacity .25s ease}'
        + '.image-preview-modal.is-open{opacity:1;pointer-events:auto}'
        + '.image-preview-modal[hidden]{display:none !important}'
        + '.image-preview-content{position:relative;max-width:min(95vw,1000px);max-height:92vh;display:flex;flex-direction:column;align-items:center;justify-content:center}'
        + '.image-preview-img{max-width:100%;max-height:82vh;width:auto;height:auto;border-radius:6px;background:#fff;object-fit:contain}'
        + '.image-preview-caption{color:#D9B569;margin-top:.8rem;font-size:1rem;font-family:"Cormorant Garamond",serif;letter-spacing:1px;text-align:center}'
        + '.image-preview-close{position:fixed;top:1rem;right:1.2rem;width:44px;height:44px;border-radius:50%;border:1px solid #D9B569;background:#151515;color:#D9B569;font-size:1.8rem;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:10000}'
        + 'body.preview-open{overflow:hidden}';

    var styleTag = document.createElement('style');
    styleTag.id = 'image-preview-styles';
    styleTag.textContent = css;
    document.head.appendChild(styleTag);

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
        setTimeout(function () { modal.hidden = true; imgEl.src = ''; }, 260);
    }

    document.addEventListener('click', function (e) {
        var target = e.target;
        if (!target) return;
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
    modal.addEventListener('click', function (e) { if (e.target === modal) closePreview(); });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) closePreview();
    });
}
