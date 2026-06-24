# 📋 Reporte de Políticas del Sitio Web — AeroSport
**Tienda de Deportes de Alto Rendimiento**
*Documento informativo • Versión 1.0 • Junio 2026*

---

> Este reporte explica, en palabras sencillas, qué políticas tiene el sitio web de AeroSport, por qué las tiene, y cómo cada una protege a las personas que lo visitan.

---

## 🔐 1. Política de Privacidad y Confidencialidad de la Información

### ¿Qué es y para qué sirve?

Imagina que entras a una tienda física y el vendedor te pide tu nombre, teléfono y domicilio para enviarte tu compra. Naturalmente te preguntas: **¿qué va a hacer esa tienda con mis datos?** La Política de Privacidad es exactamente eso: un documento que le explica al cliente qué información recopila la tienda, cómo la cuida y qué derechos tiene el usuario sobre ella.

En AeroSport, cuando alguien compra un producto, necesita proporcionar:
- **Su nombre** — para saber a quién va dirigido el paquete.
- **Su correo electrónico** — para enviarle la confirmación del pedido.
- **Su teléfono** — por si hay algún problema con la entrega.
- **Su dirección** — para saber dónde llevar el pedido.

### ¿Por qué la tenemos?

Porque **es obligatoria por ley**. En México existe la *Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)*, que dice que toda empresa que recopile información personal debe informarle al usuario cómo la va a usar. A nivel internacional, también existe el *Reglamento General de Protección de Datos de Europa (RGPD)*, una de las leyes más estrictas del mundo en esta materia.

Si una tienda en línea no tiene esta política, puede recibir **multas muy altas** y pierde la confianza de sus clientes.

### ¿Qué compromisos hace AeroSport?

| Compromiso | Qué significa en la práctica |
|---|---|
| **No guardar datos de tarjetas** | Los números de tarjetas bancarias nunca se almacenan en los servidores de AeroSport. Solo pasan por la pasarela de pago y se destruyen. |
| **Datos cifrados en tránsito** | Cuando mandas tu información, viaja como un sobre sellado y codificado. Solo AeroSport puede abrirlo. |
| **Acceso restringido** | Solo las personas de AeroSport que realmente necesitan ver tu dirección de envío pueden hacerlo. No todo el equipo tiene acceso. |
| **Derechos ARCO** | El usuario puede en cualquier momento pedir que se borren, corrijan o limiten sus datos enviando un correo. |

---

## 🍪 2. Política de Cookies

### ¿Qué es una cookie y por qué suena extraño?

Una **cookie** no tiene nada que ver con las galletas de chocolate. 🍪 En internet, es un pequeño archivo de texto que el sitio web guarda en el navegador de la persona que lo visita. Sirve para que el sitio "recuerde" cosas.

**Ejemplo del mundo real:** Cuando vas a un supermercado y metes cosas al carrito, si sales a hacer otra cosa y regresas, el carrito sigue ahí con tus productos. En una tienda en línea, la cookie es lo que hace que tu carrito no desaparezca si cierras accidentalmente la pestaña.

### ¿Qué tipos de cookies usa AeroSport?

AeroSport usa tres tipos, y es importante ser honestos sobre cada una:

#### 🟢 Cookies Esenciales (no se pueden apagar)
Estas son **indispensables** para que la tienda funcione. Sin ellas, el carrito de compras no guardaría nada, el proceso de pago fallaría y la experiencia sería un caos total.

- Guardan los productos que el usuario añade al carrito.
- Recuerdan que el usuario ya aceptó las políticas para no mostrar el aviso cada vez.

**¿Por qué no se pueden rechazar?** Porque apagarlas sería como quitarle las ruedas al carrito del supermercado — el servicio simplemente no funcionaría.

#### 🟡 Cookies de Rendimiento (opcionales)
Estas cookies ayudan a **mejorar el sitio web** con el tiempo. Registran información anónima como: ¿cuántas personas visitan la sección de calzado?, ¿en qué parte de la página se detienen más?, ¿cuánto tiempo tardan las páginas en cargar?

Con esa información, el equipo de AeroSport puede hacer mejoras para que la experiencia sea más rápida y agradable. No identifican a nadie en específico.

#### 🔴 Cookies de Marketing (opcionales)
Son las cookies que permiten mostrar anuncios personalizados. Por ejemplo, si buscaste "zapatillas de running" en AeroSport, estas cookies pueden hacer que más adelante veas un anuncio de ese producto en otras páginas.

El usuario tiene el **derecho total de rechazarlas** sin que eso afecte su capacidad de comprar normalmente.

### ¿Por qué tenemos esta política?

Porque la ley lo exige. Desde 2009, tanto en Europa como en muchos países latinoamericanos, las tiendas en línea están **obligadas a informar y pedir consentimiento** antes de activar cookies que no sean estrictamente necesarias.

El banner que aparece en la parte inferior del sitio al entrar por primera vez es precisamente para cumplir con eso: darle al usuario el control sobre qué acepta y qué no.

---

## 🏗️ 3. Justificación Técnica del Sitio

Este apartado explica las decisiones de diseño y programación que se tomaron, y **por qué** cada una importa.

### 🛡️ ¿Cómo se protege la información durante el pago?

El proceso de pago en AeroSport sigue un principio clave de seguridad: **lo que no existe, no se puede robar**.

Cuando alguien ingresa su número de tarjeta, la información viaja directamente a la pasarela de pago (el intermediario bancario) de forma **tokenizada**. Eso significa que el número real de la tarjeta se convierte en un código único e ilegible que no sirve para nada fuera de esa transacción específica. AeroSport nunca ve ni guarda el número completo de la tarjeta.

**Analogía:** Es como cuando le das tu auto a un valet parking. Le das las llaves, pero él no sabe tu número de cuenta bancaria. Solo tiene lo que necesita para hacer su trabajo.

### 🔒 ¿Qué es el cifrado SSL y por qué es importante?

SSL (o su versión moderna, TLS) es un protocolo de seguridad. Cuando el sitio web usa HTTPS (con el candadito verde en el navegador), significa que toda la información que mandas viaja **cifrada**, como si fuera un mensaje en código secreto.

Sin SSL, cualquier persona en la misma red de WiFi podría interceptar y leer lo que mandas, incluyendo contraseñas o datos de tarjetas.

**¿Por qué AeroSport lo implementa?** Porque es un estándar mínimo de seguridad. Además, Google penaliza en los resultados de búsqueda a los sitios que no lo tienen, y los navegadores modernos como Chrome muestran una advertencia de "Sitio no seguro" si falta.

### 📱 ¿Por qué el sitio funciona bien en celular, tablet y computadora?

Se usó una técnica de diseño llamada **"diseño responsivo"** o *Mobile-First*. Esto significa que el sitio fue diseñado primero pensando en el celular (la pantalla más pequeña y más usada) y luego se adaptó para pantallas más grandes.

**¿Por qué importa?** Porque más del 60% de las compras en línea se hacen desde un teléfono. Si la tienda solo funcionara bien en computadora, se perdería la mayoría de sus clientes potenciales.

### ⚡ ¿Por qué el sitio carga rápido sin instalar nada pesado?

Se eligió construir el sitio con **tecnologías básicas y ligeras** (HTML, CSS y JavaScript nativo) en lugar de usar grandes aplicaciones o frameworks pesados. Esto tiene varias ventajas:

- El sitio carga más rápido porque hay menos código que descargar.
- Funciona bien incluso en conexiones de internet lentas.
- Es más fácil de mantener y de actualizar con el tiempo.

**Dato curioso:** Google también califica la velocidad de carga de los sitios. Un sitio lento aparece más abajo en los resultados de búsqueda, lo que significa menos visitas y menos ventas.

### ♿ ¿Por qué el sitio tiene etiquetas especiales para personas con discapacidad?

El sitio incluye atributos de **accesibilidad (a11y)**, como etiquetas `aria-label` en todos los botones con íconos. Estas etiquetas son invisibles para la mayoría de los usuarios, pero son leídas por los lectores de pantalla que usan personas con discapacidad visual.

También se eligieron colores con alto contraste entre el texto y el fondo, para que sea legible para personas con daltonismo o visión reducida.

**¿Por qué hacerlo?** Porque el acceso a las tiendas en línea debe ser para todos, sin importar sus capacidades físicas. Además, en algunos países es un requisito legal.

---

## 📊 Resumen General

| Política / Medida | ¿Por qué existe? | ¿Quién se beneficia? |
|---|---|---|
| **Política de Privacidad** | Obligación legal (LFPDPPP, RGPD) | El cliente sabe qué pasa con sus datos |
| **Política de Cookies** | Obligación legal + transparencia | El usuario decide qué acepta |
| **Cifrado SSL/HTTPS** | Protege los datos en tránsito | Comprador y vendedor |
| **Tokenización de tarjetas** | Evitar robo de datos financieros | El comprador |
| **localStorage solo para el carrito** | No exponer datos personales en el navegador | El comprador |
| **Diseño responsivo** | Funcionar en cualquier dispositivo | Todo tipo de usuario |
| **Código ligero (sin frameworks pesados)** | Mayor velocidad de carga | El visitante y el negocio |
| **Accesibilidad (aria-labels, contraste)** | Inclusión de personas con discapacidad | Usuarios con diversidad funcional |
| **Consentimiento explícito de cookies** | Cumplimiento legal y ética digital | El usuario |

---

## ✅ Conclusión

AeroSport no implementa estas políticas solo por obligación. Cada decisión tiene una razón lógica que beneficia tanto al usuario como al negocio:

- **Al usuario** le da tranquilidad, transparencia y control sobre su información.
- **Al negocio** le da credibilidad, cumplimiento legal y menor riesgo de sanciones.
- **Al sitio web** le da mejor posicionamiento en buscadores y mayor tasa de conversión.

En resumen: **una tienda en línea segura y transparente vende más, porque la gente compra donde confía.**

---

*Documento generado el 23 de junio de 2026 para el proyecto AeroSport — Sitio E-Commerce de Deportes.*
*Elaborado con fines académicos, profesionales y de cumplimiento normativo.*
