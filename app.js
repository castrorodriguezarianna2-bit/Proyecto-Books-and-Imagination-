const configuracionCorreo = {
  clavePublica: '',
  servicio: '',
  plantilla: ''
};
const formatoMoneda = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 });
const claves = {
  carrito: 'books-imagination-carrito',
  sesion: 'books-imagination-sesion',
  cuentas: 'books-imagination-cuentas',
  resenasLibros: 'books-imagination-resenas-libros',
  resenasSitio: 'books-imagination-resenas-sitio'
};
const textoSesion = 'Una nueva historia está a punto de comenzar.';
const mensajesSesion = {
  compra: 'Inicia sesión para continuar con tu compra.',
  'resena-libro': 'Inicia sesión para dejar tu reseña de este libro.',
  'resena-sitio': 'Inicia sesión para reseñar nuestra página.'
};
const categorias = [...new Set(libros.map(libro => libro.categoria))];
const estado = { busqueda: '', orden: 'recomendados', categoria: 'Ficción', limites: { clasicos: 5, populares: 5, categorias: 5 }, modoSesion: 'inicio', accionPendiente: null, comprando: false, favoritos: new Set() };

function leerAlmacenamiento(clave, respaldo) {
  try { return JSON.parse(localStorage.getItem(clave)) ?? respaldo; } catch { return respaldo; }
}
function guardarAlmacenamiento(clave, valor) {
  try { localStorage.setItem(clave, JSON.stringify(valor)); } catch { avisar('No pudimos conservar tus datos en este navegador.'); }
}
function resenaValida(resena) {
  return resena && typeof resena.correo === 'string' && typeof resena.nombre === 'string' && typeof resena.comentario === 'string' && Number.isInteger(resena.calificacion) && resena.calificacion >= 1 && resena.calificacion <= 5;
}

let carrito = leerAlmacenamiento(claves.carrito, []);
carrito = Array.isArray(carrito) ? carrito.filter(item => libros.some(libro => libro.id === item.id) && Number.isInteger(item.cantidad) && item.cantidad > 0).map(item => ({ id: item.id, cantidad: Math.min(item.cantidad, 999) })) : [];
let cuentas = leerAlmacenamiento(claves.cuentas, []);
cuentas = Array.isArray(cuentas) ? cuentas.filter(cuenta => cuenta && ['nombre', 'correo', 'sal', 'clave'].every(campo => typeof cuenta[campo] === 'string')) : [];
let sesion = leerAlmacenamiento(claves.sesion, null);
const cuentaActiva = sesion && cuentas.find(cuenta => cuenta.correo === sesion.correo);
sesion = cuentaActiva ? { nombre: cuentaActiva.nombre, correo: cuentaActiva.correo } : null;
let resenasLibros = leerAlmacenamiento(claves.resenasLibros, {});
resenasLibros = resenasLibros && typeof resenasLibros === 'object' && !Array.isArray(resenasLibros) ? Object.fromEntries(Object.entries(resenasLibros).map(([id, lista]) => [id, Array.isArray(lista) ? lista.filter(resenaValida) : []])) : {};
let resenasSitio = leerAlmacenamiento(claves.resenasSitio, []);
resenasSitio = Array.isArray(resenasSitio) ? resenasSitio.filter(resenaValida) : [];

const elementoLibro = document.getElementById('modal-libro');
const modalLibro = new bootstrap.Modal(elementoLibro);
const modalSesion = new bootstrap.Modal(document.getElementById('modal-sesion'));
const modalPago = new bootstrap.Modal(document.getElementById('modal-pago'));
const modalCompra = new bootstrap.Modal(document.getElementById('modal-compra'));
const modalPrivacidad = new bootstrap.Modal(document.getElementById('modal-privacidad'));
const notificacion = new bootstrap.Toast(document.getElementById('notificacion'), { delay: 3500 });
const observador = new IntersectionObserver(entradas => entradas.forEach(entrada => { if (entrada.isIntersecting) { entrada.target.classList.add('mostrado'); observador.unobserve(entrada.target); } }), { threshold: 0.04 });

function escapar(texto) {
  return String(texto).replace(/[&<>"']/g, caracter => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[caracter]);
}
function normalizar(texto) { return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase(); }
function iniciales(nombre) { return nombre.split(' ').filter(Boolean).slice(0, 2).map(parte => parte[0].toUpperCase()).join(''); }
function fechaCorta(fecha) { return new Date(fecha).toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric' }); }
function estrellas(calificacion) {
  return `<span class="estrellas" aria-label="${calificacion} de 5 estrellas">${Array.from({ length: 5 }, (_, i) => `<i class="bi bi-star${calificacion >= i + 1 ? '-fill' : calificacion > i ? '-half' : ''}"></i>`).join('')}</span>`;
}
function resenasDeUsuarios(id) { return resenasLibros[id] ?? []; }
function cantidadResenas(libro) { return libro.resenas.length + resenasDeUsuarios(libro.id).length; }
function calificacionDe(libro) {
  const propias = resenasDeUsuarios(libro.id);
  const base = libro.resenas.length;
  if (!propias.length) return libro.calificacion;
  const suma = libro.calificacion * base + propias.reduce((total, resena) => total + resena.calificacion, 0);
  return Math.round((suma / (base + propias.length)) * 10) / 10;
}
function portada(libro, grande = false) {
  const respaldo = `<span class="respaldo-portada tono-${libro.id % 3}"><i class="bi bi-flower1"></i><strong>${escapar(libro.titulo)}</strong><small>${escapar(libro.autor)}</small></span>`;
  return `<span class="zona-portada">${respaldo}${libro.portada ? `<img class="portada" src="${escapar(libro.portada)}" alt="Portada de ${escapar(libro.titulo)}" width="240" height="350" loading="${grande ? 'eager' : 'lazy'}" referrerpolicy="no-referrer">` : ''}</span>`;
}
function gestionarPortadas(contenedor) {
  contenedor.querySelectorAll('img.portada').forEach(imagen => {
    imagen.addEventListener('error', () => imagen.remove(), { once: true });
    imagen.addEventListener('load', () => { if (imagen.naturalWidth < 10) imagen.remove(); }, { once: true });
    if (imagen.complete && imagen.naturalWidth < 10) imagen.remove();
  });
}
function tarjeta(libro) {
  const destacado = ['Cien años de soledad', 'La biblioteca de la medianoche', 'Hábitos atómicos'].includes(libro.titulo);
  const calificacion = calificacionDe(libro);
  return `<article class="tarjeta-libro revelar"><button class="favorito ${estado.favoritos.has(libro.id) ? 'seleccionado' : ''}" data-favorito="${libro.id}" aria-label="${estado.favoritos.has(libro.id) ? 'Quitar de' : 'Guardar en'} favoritos: ${escapar(libro.titulo)}" aria-pressed="${estado.favoritos.has(libro.id)}" title="Guardar favorito"><i class="bi bi-heart${estado.favoritos.has(libro.id) ? '-fill' : ''}"></i></button>${destacado ? `<span class="etiqueta-libro">${libro.catalogo === 'clasicos' ? 'IMPRESCINDIBLE' : 'FAVORITO DE LECTORES'}</span>` : ''}<button class="portada-enlace" data-libro="${libro.id}" aria-label="Ver ${escapar(libro.titulo)}">${portada(libro)}</button><div class="info-libro"><p class="categoria-libro">${escapar(libro.categoria)}</p><button class="titulo-libro" data-libro="${libro.id}">${escapar(libro.titulo)}</button><p class="autor-libro">${escapar(libro.autor)}</p><div class="valoracion">${estrellas(calificacion)}<span>${calificacion.toFixed(1)}</span><span class="cantidad-resenas">(${cantidadResenas(libro)})</span></div><div class="precio-acciones"><span class="precio">${formatoMoneda.format(libro.precio)}<small>COP</small></span><button class="agregar-libro" data-agregar="${libro.id}" title="Añadir al carrito" aria-label="Añadir ${escapar(libro.titulo)} al carrito"><i class="bi bi-bag-plus"></i></button></div></div></article>`;
}
function ordenar(lista) {
  const copia = [...lista];
  if (estado.orden === 'precio-asc') copia.sort((a, b) => a.precio - b.precio);
  if (estado.orden === 'precio-desc') copia.sort((a, b) => b.precio - a.precio);
  if (estado.orden === 'calificacion') copia.sort((a, b) => calificacionDe(b) - calificacionDe(a));
  if (estado.orden === 'recomendados') {
    const destacados = ['Cien años de soledad', 'El amor en los tiempos del cólera', 'Orgullo y prejuicio', 'Don Quijote de la Mancha', '1984', 'La biblioteca de la medianoche', 'Hábitos atómicos', 'La canción de Aquiles', 'La sombra del viento', 'Los siete maridos de Evelyn Hugo'];
    const prioridad = libro => { const indice = destacados.indexOf(libro.titulo); return indice < 0 ? 100 + libro.id : indice; };
    copia.sort((a, b) => prioridad(a) - prioridad(b));
  }
  return copia;
}
function librosFiltrados(seccion) {
  return ordenar(libros.filter(libro => (seccion === 'categorias' ? libro.categoria === estado.categoria : libro.catalogo === seccion) && (!estado.busqueda || normalizar(`${libro.titulo} ${libro.autor}`).includes(normalizar(estado.busqueda)))));
}
function mostrarCatalogo(seccion) {
  const lista = librosFiltrados(seccion);
  const contenedor = document.getElementById(`lista-${seccion}`);
  contenedor.innerHTML = lista.length ? lista.slice(0, estado.limites[seccion]).map(tarjeta).join('') : '<div class="sin-resultados"><i class="bi bi-search"></i>No encontramos esa historia. Prueba otro título o autor.</div>';
  gestionarPortadas(contenedor);
  contenedor.querySelectorAll('.revelar').forEach(elemento => observador.observe(elemento));
  document.querySelector(`[data-cargar="${seccion}"]`).hidden = estado.limites[seccion] >= lista.length;
  const cantidad = document.getElementById(`cantidad-${seccion}`);
  if (cantidad) cantidad.textContent = lista.length;
}
function mostrarCatalogos() { ['clasicos', 'populares', 'categorias'].forEach(mostrarCatalogo); }
function mostrarFiltros() {
  document.getElementById('filtros-categorias').innerHTML = categorias.map(categoria => `<button class="filtro ${estado.categoria === categoria ? 'activo' : ''}" data-categoria="${escapar(categoria)}" aria-pressed="${estado.categoria === categoria}">${escapar(categoria)} <span>· ${libros.filter(libro => libro.categoria === categoria).length}</span></button>`).join('');
}

function selectorEstrellas(nombre, seleccionada = 0) {
  return `<fieldset class="estrellas-entrada"><legend class="visually-hidden">Tu calificación</legend>${[5, 4, 3, 2, 1].map(valor => `<input type="radio" name="${nombre}" id="${nombre}-${valor}" value="${valor}" ${seleccionada === valor ? 'checked' : ''}><label for="${nombre}-${valor}" title="${valor} ${valor === 1 ? 'estrella' : 'estrellas'}"><i class="bi bi-star-fill"></i><span class="visually-hidden">${valor} ${valor === 1 ? 'estrella' : 'estrellas'}</span></label>`).join('')}</fieldset>`;
}
function avisoSesion(tipo, texto, id = '') {
  return `<div class="aviso-sesion"><i class="bi bi-person-lock"></i><p>${texto}</p><button class="boton boton-principal" type="button" data-pedir-sesion="${tipo}" data-id="${id}">Iniciar sesión</button></div>`;
}
function resenaHtml(resena, propia = false) {
  return `<div class="resena"><div class="resena-encabezado"><span class="avatar">${escapar(iniciales(resena.nombre))}</span><span class="resena-autor"><strong>${escapar(resena.nombre)}</strong>${propia ? '<span class="propia">TU RESEÑA</span>' : ''}${resena.fecha ? `<small>${fechaCorta(resena.fecha)}</small>` : ''}</span>${estrellas(resena.calificacion)}</div><p>${escapar(resena.comentario)}</p></div>`;
}
function formularioResenaLibro(libro) {
  if (!sesion) return avisoSesion('resena-libro', 'Inicia sesión para dejar tu reseña de este libro.', libro.id);
  const previa = resenasDeUsuarios(libro.id).find(resena => resena.correo === sesion.correo);
  return `<form class="formulario-resena formulario-libro" id="formulario-resena-libro" data-libro="${libro.id}" novalidate>${selectorEstrellas('calificacion-libro', previa?.calificacion)}<label for="comentario-libro">${previa ? 'Actualiza tu reseña' : 'Tu reseña'}</label><textarea id="comentario-libro" rows="3" maxlength="400" placeholder="¿Qué te pareció este libro?">${previa ? escapar(previa.comentario) : ''}</textarea><p class="error-formulario" role="alert"></p><button class="boton boton-principal" type="submit">${previa ? 'Actualizar reseña' : 'Publicar reseña'}</button></form>`;
}
function mostrarLibro(id) {
  const libro = libros.find(libro => libro.id === id);
  if (!libro) return;
  const calificacion = calificacionDe(libro);
  const propias = resenasDeUsuarios(libro.id);
  const contenedor = document.getElementById('detalle-libro');
  contenedor.innerHTML = `<div class="detalle-principal">${portada(libro, true)}<div class="detalle-texto"><p class="sobrelinea">${escapar(libro.categoria)}</p><h2 id="titulo-modal-libro">${escapar(libro.titulo)}</h2><p class="detalle-autor">${escapar(libro.autor)}</p><div class="valoracion">${estrellas(calificacion)} ${calificacion.toFixed(1)} · ${cantidadResenas(libro)} reseñas</div><p class="sinopsis">${escapar(libro.sinopsis)}</p><span class="precio">${formatoMoneda.format(libro.precio)} <small>COP</small></span><button class="boton boton-principal" data-agregar="${libro.id}"><i class="bi bi-bag-plus"></i> Añadir al carrito</button></div></div><div class="resenas"><h3>Entre lectores</h3><p class="aviso-resenas">Las reseñas de ejemplo son de demostración. Las que escribas se guardan en este navegador.</p><div id="lista-resenas-libro">${propias.map(resena => resenaHtml(resena, sesion?.correo === resena.correo)).join('')}${libro.resenas.map(resena => resenaHtml(resena)).join('')}</div>${formularioResenaLibro(libro)}</div>`;
  gestionarPortadas(contenedor);
  modalLibro.show();
}
function validarResena(calificacion, comentario) {
  if (!calificacion) return 'Elige de 1 a 5 estrellas.';
  if (comentario.length < 10) return 'Cuéntanos un poco más: escribe al menos 10 caracteres.';
  return '';
}
function publicarResenaLibro(formulario) {
  const id = Number(formulario.dataset.libro);
  const calificacion = Number(formulario.querySelector('input[type="radio"]:checked')?.value ?? 0);
  const comentario = formulario.querySelector('textarea').value.trim();
  const error = validarResena(calificacion, comentario);
  formulario.querySelector('.error-formulario').textContent = error;
  if (error || !sesion) return;
  const lista = resenasDeUsuarios(id);
  const nueva = { correo: sesion.correo, nombre: sesion.nombre, calificacion, comentario, fecha: new Date().toISOString() };
  const indice = lista.findIndex(resena => resena.correo === sesion.correo);
  if (indice >= 0) lista[indice] = nueva; else lista.unshift(nueva);
  resenasLibros[id] = lista;
  guardarAlmacenamiento(claves.resenasLibros, resenasLibros);
  mostrarCatalogos();
  mostrarLibro(id);
  elementoLibro.focus({ preventScroll: true });
  document.getElementById('lista-resenas-libro').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  avisar('Gracias, tu reseña ya está publicada.');
}

function mostrarResenasSitio() {
  const lista = [...resenasSitio].sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  document.getElementById('lista-resenas-sitio').innerHTML = lista.length ? lista.map(resena => resenaHtml(resena, sesion?.correo === resena.correo)).join('') : '<p class="sin-resenas">Aún no hay reseñas de la página. Sé la primera persona en contarnos tu experiencia.</p>';
  const previa = sesion && resenasSitio.find(resena => resena.correo === sesion.correo);
  document.getElementById('zona-formulario-sitio').innerHTML = sesion
    ? `<form class="formulario-resena" id="formulario-resena-sitio" novalidate>${selectorEstrellas('calificacion-sitio', previa?.calificacion)}<label for="comentario-sitio">${previa ? 'Actualiza tu reseña' : 'Tu reseña'}</label><textarea id="comentario-sitio" rows="4" maxlength="400" placeholder="¿Cómo fue tu experiencia en Books and Imagination?">${previa ? escapar(previa.comentario) : ''}</textarea><p class="error-formulario" role="alert"></p><button class="boton boton-principal" type="submit">${previa ? 'Actualizar reseña' : 'Publicar reseña'}</button></form><p class="nota-resenas">Publicas como ${escapar(sesion.nombre)}. Las reseñas se guardan en este navegador.</p>`
    : avisoSesion('resena-sitio', 'Inicia sesión para escribir tu reseña de la página.');
}
function publicarResenaSitio(formulario) {
  const calificacion = Number(formulario.querySelector('input[type="radio"]:checked')?.value ?? 0);
  const comentario = formulario.querySelector('textarea').value.trim();
  const error = validarResena(calificacion, comentario);
  formulario.querySelector('.error-formulario').textContent = error;
  if (error || !sesion) return;
  const nueva = { correo: sesion.correo, nombre: sesion.nombre, calificacion, comentario, fecha: new Date().toISOString() };
  const indice = resenasSitio.findIndex(resena => resena.correo === sesion.correo);
  if (indice >= 0) resenasSitio[indice] = nueva; else resenasSitio.push(nueva);
  guardarAlmacenamiento(claves.resenasSitio, resenasSitio);
  mostrarResenasSitio();
  avisar('Gracias por tu reseña de la página.');
}

function avisar(mensaje) { document.getElementById('texto-notificacion').textContent = mensaje; notificacion.show(); }
function guardarCarrito() { guardarAlmacenamiento(claves.carrito, carrito); mostrarCarrito(); }
function agregarLibro(id) {
  if (estado.comprando) return;
  const libro = libros.find(libro => libro.id === id);
  if (!libro) return;
  const item = carrito.find(item => item.id === id);
  if (item) { if (item.cantidad >= 999) { avisar('Alcanzaste el máximo de unidades.'); return; } item.cantidad++; } else carrito.push({ id, cantidad: 1 });
  guardarCarrito();
  avisar(`${libro.titulo} añadido a tu carrito.`);
}
function cambiarCantidad(id, cambio) {
  if (estado.comprando) return;
  const item = carrito.find(item => item.id === id);
  if (!item) return;
  item.cantidad = Math.min(999, item.cantidad + cambio);
  carrito = carrito.filter(item => item.cantidad > 0);
  guardarCarrito();
}
function totalCarrito(items = carrito) { return items.reduce((total, item) => total + (libros.find(libro => libro.id === item.id)?.precio ?? 0) * item.cantidad, 0); }
function mostrarCarrito() {
  const unidades = carrito.reduce((total, item) => total + item.cantidad, 0);
  document.getElementById('contador-carrito').textContent = unidades;
  const contenedor = document.getElementById('contenido-carrito');
  if (!carrito.length) { contenedor.innerHTML = '<div class="carrito-vacio"><i class="bi bi-bag-heart"></i><h3>Tu próxima aventura aún te espera</h3><p>Tu carrito está vacío. ¿Qué historia llevarás contigo?</p><a class="boton boton-principal" href="#clasicos">Encontrar mi próxima lectura <i class="bi bi-arrow-right"></i></a></div>'; return; }
  contenedor.innerHTML = `<div class="carrito-distribucion"><div>${carrito.map(item => { const libro = libros.find(libro => libro.id === item.id); if (!libro) return ''; return `<div class="fila-carrito"><div class="mini-portada">${portada(libro)}</div><div class="nombre-carrito"><h3>${escapar(libro.titulo)}</h3><p>${escapar(libro.autor)}</p><span>${formatoMoneda.format(libro.precio)}</span></div><div class="control-cantidad"><button data-disminuir="${libro.id}" aria-label="Disminuir unidades de ${escapar(libro.titulo)}"><i class="bi bi-dash"></i></button><span>${item.cantidad}</span><button data-aumentar="${libro.id}" aria-label="Aumentar unidades de ${escapar(libro.titulo)}"><i class="bi bi-plus"></i></button></div><span class="precio">${formatoMoneda.format(libro.precio * item.cantidad)}</span><button class="eliminar" data-eliminar="${libro.id}" aria-label="Eliminar ${escapar(libro.titulo)}" title="Eliminar libro"><i class="bi bi-trash3"></i></button></div>`; }).join('')}</div><aside class="resumen-carrito"><h3>Tu selección</h3><p>${unidades} ${unidades === 1 ? 'libro' : 'libros'} para imaginar</p><div class="total"><span>Total</span><strong>${formatoMoneda.format(totalCarrito())} COP</strong></div><button id="confirmar-compra" class="boton boton-principal" ${estado.comprando ? 'disabled' : ''}>${estado.comprando ? 'Confirmando…' : 'Confirmar compra'} <i class="bi bi-arrow-right"></i></button><p><i class="bi bi-shield-check"></i> ${sesion ? 'Compra de demostración. No se realizarán cobros ni envíos físicos.' : 'Para confirmar tu compra necesitas iniciar sesión. Compra de demostración, sin cobros.'}</p></aside></div>`;
  gestionarPortadas(contenedor);
}

function actualizarCuenta() {
  document.getElementById('abrir-sesion').hidden = Boolean(sesion);
  document.getElementById('menu-cuenta').hidden = !sesion;
  document.getElementById('nombre-cuenta').textContent = sesion ? sesion.nombre.split(' ')[0] : '';
  document.getElementById('correo-cuenta').textContent = sesion ? sesion.correo : '';
}
function cambiarModo(modo) {
  estado.modoSesion = modo;
  const registro = modo === 'registro';
  document.getElementById('campo-nombre').hidden = !registro;
  document.getElementById('campo-confirmacion').hidden = !registro;
  document.getElementById('nombre').required = registro;
  document.getElementById('confirmacion').required = registro;
  document.getElementById('clave').autocomplete = registro ? 'new-password' : 'current-password';
  document.getElementById('titulo-sesion').textContent = registro ? 'Tu historia empieza aquí' : 'Bienvenido de nuevo';
  document.getElementById('enviar-sesion').textContent = registro ? 'Crear mi cuenta' : 'Iniciar sesión';
  document.getElementById('error-sesion').textContent = '';
  document.querySelectorAll('[data-modo]').forEach(boton => boton.classList.toggle('activo', boton.dataset.modo === modo));
}
function abrirSesion(accion = null) {
  estado.accionPendiente = accion;
  const mostrar = () => {
    cambiarModo('inicio');
    document.getElementById('descripcion-sesion').textContent = accion ? mensajesSesion[accion.tipo] : textoSesion;
    modalSesion.show();
  };
  if (elementoLibro.classList.contains('show')) {
    elementoLibro.addEventListener('hidden.bs.modal', mostrar, { once: true });
    modalLibro.hide();
  } else mostrar();
}
function validarSesion(nombre, correo, clave, confirmacion, registro) {
  if (registro && (nombre.length < 5 || nombre.split(/\s+/).length < 2)) return 'Escribe tu nombre y al menos un apellido.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) return 'Escribe un correo electrónico válido.';
  if (clave.length < 8) return 'La contraseña debe tener al menos 8 caracteres.';
  if (registro && clave !== confirmacion) return 'Las contraseñas no coinciden. Escríbelas de nuevo.';
  return '';
}
function bytesAHexadecimal(bytes) { return Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join(''); }
function crearSal() { return bytesAHexadecimal(crypto.getRandomValues(new Uint8Array(16))); }
async function calcularHuella(clave, sal) {
  const huella = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${sal}:${clave}`));
  return bytesAHexadecimal(new Uint8Array(huella));
}
function ejecutarAccion(accion) {
  if (accion.tipo === 'compra') abrirPago();
  if (accion.tipo === 'resena-libro') mostrarLibro(accion.id);
  if (accion.tipo === 'resena-sitio') document.getElementById('comentario-sitio')?.focus();
}
function sesionIniciada(nombreBienvenida) {
  guardarAlmacenamiento(claves.sesion, { correo: sesion.correo });
  document.getElementById('formulario-sesion').reset();
  actualizarCuenta();
  mostrarCarrito();
  mostrarResenasSitio();
  const accion = estado.accionPendiente;
  estado.accionPendiente = null;
  if (accion) document.getElementById('modal-sesion').addEventListener('hidden.bs.modal', () => ejecutarAccion(accion), { once: true });
  else avisar(`¡Bienvenido, ${nombreBienvenida}!`);
  modalSesion.hide();
}
async function enviarSesion(evento) {
  evento.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim().toLowerCase();
  const clave = document.getElementById('clave').value;
  const confirmacion = document.getElementById('confirmacion').value;
  const registro = estado.modoSesion === 'registro';
  const mostrarError = mensaje => { document.getElementById('error-sesion').textContent = mensaje; };
  const error = validarSesion(nombre, correo, clave, confirmacion, registro);
  mostrarError(error);
  if (error) return;
  if (registro) {
    if (cuentas.some(cuenta => cuenta.correo === correo)) { mostrarError('Ese correo ya tiene una cuenta. Inicia sesión.'); return; }
    const sal = crearSal();
    cuentas.push({ nombre, correo, sal, clave: await calcularHuella(clave, sal) });
    guardarAlmacenamiento(claves.cuentas, cuentas);
    sesion = { nombre, correo };
  } else {
    const cuenta = cuentas.find(cuenta => cuenta.correo === correo);
    if (!cuenta) { mostrarError('No encontramos una cuenta con ese correo. Crea una en la pestaña Registrarme.'); return; }
    if (await calcularHuella(clave, cuenta.sal) !== cuenta.clave) { mostrarError('La contraseña no es correcta.'); return; }
    sesion = { nombre: cuenta.nombre, correo };
  }
  sesionIniciada(sesion.nombre);
}
function cerrarSesion() {
  if (estado.comprando) return;
  sesion = null;
  localStorage.removeItem(claves.sesion);
  actualizarCuenta();
  mostrarCarrito();
  mostrarResenasSitio();
  avisar('Cerraste tu sesión. Puedes entrar con otra cuenta cuando quieras.');
}

function mostrarCamposPago() {
  const nequi = document.getElementById('metodo-nequi').checked;
  document.getElementById('campos-nequi').hidden = !nequi;
  document.getElementById('campos-tarjeta').hidden = nequi;
}
function abrirPago() {
  if (!sesion || !carrito.length) return;
  document.getElementById('total-pago').textContent = `${formatoMoneda.format(totalCarrito())} COP`;
  document.getElementById('error-pago').textContent = '';
  const receptor = document.getElementById('envio-nombre');
  if (!receptor.value) receptor.value = sesion.nombre;
  mostrarCamposPago();
  modalPago.show();
}
function confirmarCompra() {
  if (!carrito.length || estado.comprando) return;
  if (!sesion) { abrirSesion({ tipo: 'compra' }); return; }
  abrirPago();
}
function leerPago() {
  const valor = id => document.getElementById(id).value.trim();
  return {
    metodo: document.querySelector('input[name="metodo"]:checked').value,
    nequi: valor('nequi-numero'),
    tarjeta: valor('tarjeta-numero').replace(/\s/g, ''),
    titular: valor('tarjeta-titular'),
    vence: valor('tarjeta-vence'),
    cvv: valor('tarjeta-cvv'),
    receptor: valor('envio-nombre'),
    telefono: valor('envio-telefono'),
    departamento: valor('envio-departamento'),
    ciudad: valor('envio-ciudad'),
    direccion: valor('envio-direccion'),
    notas: valor('envio-notas')
  };
}
function vencimientoValido(texto) {
  const partes = /^(\d{2})\/(\d{2})$/.exec(texto);
  if (!partes) return false;
  const mes = Number(partes[1]);
  const anio = 2000 + Number(partes[2]);
  const hoy = new Date();
  return mes >= 1 && mes <= 12 && (anio > hoy.getFullYear() || (anio === hoy.getFullYear() && mes >= hoy.getMonth() + 1));
}
function validarPago(datos) {
  if (datos.metodo === 'nequi' && !/^3\d{9}$/.test(datos.nequi)) return 'Escribe el celular de tu cuenta Nequi: 10 dígitos que empiecen por 3.';
  if (datos.metodo === 'tarjeta') {
    if (!/^\d{15,16}$/.test(datos.tarjeta)) return 'Escribe un número de tarjeta válido de 15 o 16 dígitos.';
    if (datos.titular.length < 5) return 'Escribe el nombre del titular como aparece en la tarjeta.';
    if (!vencimientoValido(datos.vence)) return 'La fecha de vencimiento no es válida o la tarjeta ya venció.';
    if (!/^\d{3,4}$/.test(datos.cvv)) return 'Escribe el código de seguridad de 3 o 4 dígitos.';
  }
  if (datos.receptor.length < 5) return 'Escribe el nombre de quien recibirá el pedido.';
  if (!/^3\d{9}$/.test(datos.telefono)) return 'Escribe un celular de contacto de 10 dígitos que empiece por 3.';
  if (datos.departamento.length < 3) return 'Escribe el departamento de entrega.';
  if (datos.ciudad.length < 3) return 'Escribe la ciudad de entrega.';
  if (datos.direccion.length < 6) return 'Escribe una dirección de entrega completa.';
  return '';
}
function enviarPago(evento) {
  evento.preventDefault();
  if (!sesion || estado.comprando) return;
  const datos = leerPago();
  const error = validarPago(datos);
  document.getElementById('error-pago').textContent = error;
  if (error) return;
  const entrega = {
    pago: datos.metodo === 'nequi' ? `Nequi, celular terminado en ${datos.nequi.slice(-4)}` : `Tarjeta terminada en ${datos.tarjeta.slice(-4)}`,
    receptor: datos.receptor,
    telefono: datos.telefono,
    direccion: `${datos.direccion}, ${datos.ciudad}, ${datos.departamento}${datos.notas ? ` (${datos.notas})` : ''}`
  };
  document.getElementById('formulario-pago').reset();
  mostrarCamposPago();
  document.getElementById('modal-pago').addEventListener('hidden.bs.modal', () => completarCompra(entrega), { once: true });
  modalPago.hide();
}
async function enviarCorreo(pedido, total, entrega, numero) {
  if (!configuracionCorreo.clavePublica || !configuracionCorreo.servicio || !configuracionCorreo.plantilla) return 'Tu pedido quedó confirmado. El correo de confirmación aún no está configurado.';
  if (!window.emailjs) return 'Tu pedido quedó confirmado, pero no se pudo cargar el servicio de correo.';
  const resumen = pedido.map(item => { const libro = libros.find(libro => libro.id === item.id); return libro ? `${item.cantidad} × ${libro.titulo}: ${formatoMoneda.format(libro.precio * item.cantidad)} COP` : ''; }).join('\n');
  try {
    await emailjs.send(configuracionCorreo.servicio, configuracionCorreo.plantilla, { to_email: sesion.correo, to_name: sesion.nombre, message: `¡Felicitaciones, ${sesion.nombre}!\n\nGracias por tu compra en Books and Imagination.\n\nPedido ${numero}\n${resumen}\n\nTotal: ${formatoMoneda.format(total)} COP\nPago: ${entrega.pago}\nEntrega: ${entrega.receptor}, ${entrega.direccion}\n\nEsta compra es una demostración. No se ha realizado ningún cobro ni envío físico.\n\nGracias por dejar florecer tu imaginación.` }, { publicKey: configuracionCorreo.clavePublica });
    return `Enviamos el resumen a ${sesion.correo}. Revisa también tu carpeta de correo no deseado.`;
  } catch { return 'Tu pedido quedó confirmado, pero no pudimos enviar el correo. Revisa la configuración de EmailJS y tu conexión.'; }
}
async function completarCompra(entrega) {
  if (!sesion || !carrito.length || estado.comprando) return;
  estado.comprando = true;
  const pedido = carrito.map(item => ({ ...item }));
  const total = totalCarrito(pedido);
  const numero = `BI-${Math.floor(100000 + Math.random() * 900000)}`;
  mostrarCarrito();
  document.getElementById('mensaje-compra').textContent = `${sesion.nombre}, tu pedido ${numero} quedó confirmado. Esta es una compra de demostración: no se realizó ningún cobro.`;
  document.getElementById('resumen-compra').innerHTML = pedido.map(item => { const libro = libros.find(libro => libro.id === item.id); return libro ? `<div><span>${item.cantidad} × ${escapar(libro.titulo)}</span><span>${formatoMoneda.format(libro.precio * item.cantidad)}</span></div>` : ''; }).join('') + `<div><strong>Total</strong><strong>${formatoMoneda.format(total)} COP</strong></div><div><span>Pago</span><span>${escapar(entrega.pago)}</span></div><div><span>Entrega para</span><span>${escapar(entrega.receptor)}<br>${escapar(entrega.direccion)}</span></div>`;
  document.getElementById('estado-correo').textContent = 'Confirmando tu pedido…';
  modalCompra.show();
  const resultado = await enviarCorreo(pedido, total, entrega, numero);
  document.getElementById('estado-correo').textContent = resultado;
  carrito = [];
  estado.comprando = false;
  guardarCarrito();
}

function delegarAcciones(evento) {
  const boton = evento.target.closest('button, a');
  if (!boton) return;
  if (boton.dataset.libro) mostrarLibro(Number(boton.dataset.libro));
  if (boton.dataset.agregar) agregarLibro(Number(boton.dataset.agregar));
  if (boton.dataset.aumentar) cambiarCantidad(Number(boton.dataset.aumentar), 1);
  if (boton.dataset.disminuir) cambiarCantidad(Number(boton.dataset.disminuir), -1);
  if (boton.dataset.eliminar && !estado.comprando) { carrito = carrito.filter(item => item.id !== Number(boton.dataset.eliminar)); guardarCarrito(); }
  if (boton.dataset.favorito) { const id = Number(boton.dataset.favorito); estado.favoritos.has(id) ? estado.favoritos.delete(id) : estado.favoritos.add(id); boton.classList.toggle('seleccionado', estado.favoritos.has(id)); boton.setAttribute('aria-pressed', String(estado.favoritos.has(id))); boton.querySelector('i').className = `bi bi-heart${estado.favoritos.has(id) ? '-fill' : ''}`; avisar(estado.favoritos.has(id) ? 'Guardado en tus favoritos de esta visita.' : 'Quitado de tus favoritos.'); }
  if (boton.dataset.categoria) { estado.categoria = boton.dataset.categoria; estado.limites.categorias = 5; mostrarFiltros(); mostrarCatalogo('categorias'); }
  if (boton.dataset.cargar) { estado.limites[boton.dataset.cargar] += 10; mostrarCatalogo(boton.dataset.cargar); }
  if (boton.dataset.expandir) { evento.preventDefault(); estado.limites[boton.dataset.expandir] = 1000; mostrarCatalogo(boton.dataset.expandir); }
  if (boton.dataset.modo) cambiarModo(boton.dataset.modo);
  if (boton.dataset.pedirSesion) abrirSesion({ tipo: boton.dataset.pedirSesion, id: Number(boton.dataset.id) || null });
  if (boton.dataset.privacidad !== undefined) modalPrivacidad.show();
  if (boton.id === 'confirmar-compra') confirmarCompra();
  if (boton.id === 'cerrar-sesion') cerrarSesion();
  if (boton.id === 'abrir-sesion') abrirSesion();
  if (boton.matches('.nav-link')) { document.querySelectorAll('.nav-link').forEach(enlace => enlace.classList.toggle('activo', enlace === boton)); const menu = bootstrap.Collapse.getInstance(document.getElementById('navegacion')); if (menu) menu.hide(); }
}
function formatearCampo(evento) {
  const campo = evento.target;
  if (['nequi-numero', 'envio-telefono', 'tarjeta-cvv'].includes(campo.id)) campo.value = campo.value.replace(/\D/g, '');
  if (campo.id === 'tarjeta-numero') campo.value = campo.value.replace(/\D/g, '').slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ');
  if (campo.id === 'tarjeta-vence') { const digitos = campo.value.replace(/\D/g, '').slice(0, 4); campo.value = digitos.length > 2 ? `${digitos.slice(0, 2)}/${digitos.slice(2)}` : digitos; }
}
function delegarFormularios(evento) {
  const formulario = evento.target;
  if (formulario.id === 'formulario-sesion') enviarSesion(evento);
  if (formulario.id === 'formulario-pago') enviarPago(evento);
  if (formulario.id === 'formulario-resena-libro') { evento.preventDefault(); publicarResenaLibro(formulario); }
  if (formulario.id === 'formulario-resena-sitio') { evento.preventDefault(); publicarResenaSitio(formulario); }
}
document.addEventListener('click', delegarAcciones);
document.addEventListener('submit', delegarFormularios);
document.addEventListener('input', formatearCampo);
document.addEventListener('change', evento => { if (evento.target.name === 'metodo') { mostrarCamposPago(); document.getElementById('error-pago').textContent = ''; } });
document.getElementById('modal-sesion').addEventListener('hidden.bs.modal', () => { estado.accionPendiente = null; });
document.getElementById('buscador').addEventListener('input', evento => { estado.busqueda = evento.target.value; estado.limites = { clasicos: 5, populares: 5, categorias: 5 }; mostrarCatalogos(); });
document.getElementById('ordenamiento').addEventListener('change', evento => { estado.orden = evento.target.value; mostrarCatalogos(); });
document.getElementById('volver-arriba').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
window.addEventListener('scroll', () => document.getElementById('volver-arriba').classList.toggle('visible', window.scrollY > 450), { passive: true });
mostrarFiltros();
mostrarCatalogos();
mostrarCarrito();
actualizarCuenta();
mostrarResenasSitio();
