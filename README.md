# 💰 LukApp Wallet

> Tu billetera digital inteligente, segura y adaptable a cualquier dispositivo.

![Estado del Proyecto](https://img.shields.io/badge/Estado-Terminado-success)
![Licencia](https://img.shields.io/badge/Licencia-MIT-blue)
![Responsive](https://img.shields.io/badge/Diseño-Responsive-orange)

**LukApp** es una simulación de billetera virtual (e-wallet) desarrollada como una Single Page Application (SPA) simulada. El proyecto fue diseñado con un enfoque **Mobile-First**, asegurando que la experiencia de usuario sea fluida tanto en teléfonos móviles como en computadoras de escritorio.

Permite a los usuarios gestionar su saldo, realizar transferencias, visualizar movimientos históricos y simular operaciones bancarias con persistencia de datos local.

---

## 🚀 Demo en Vivo
¡Prueba la aplicación funcionando aquí!
[**🔗 Ver LukApp Online**](https://zhainy.github.io/LukApp-Wallet/)

---

## ✨ Características Principales

### 📱 Diseño 100% Responsive
- **Adaptabilidad:** La interfaz se ajusta automáticamente a diferentes tamaños de pantalla (Móvil, Tablet, Desktop) utilizando el sistema de grillas de Bootstrap.
- **Navegación Optimizada:** Menú de navegación colapsable (hamburguesa) en móviles para ahorrar espacio.
- **Elementos Táctiles:** Botones y tarjetas con áreas de clic optimizadas para uso táctil.

### 📊 Dashboard Dinámico
- **Visualización de Saldo:** Actualización en tiempo real.
- **Indicadores de Variación:** Flechas dinámicas (🡅/🡇) que muestran el porcentaje de variación del saldo basado en el último movimiento.
- **Modo Privacidad:** Funcionalidad "Blur" para ocultar/mostrar datos sensibles de la tarjeta virtual con un efecto de desenfoque seguro CSS.

### 💸 Gestión de Transferencias
- **Agenda de Contactos:** CRUD de contactos utilizando `localStorage`.
- **Buscador en Tiempo Real:** Filtra contactos por nombre o alias instantáneamente.
- **Validaciones:** Control de saldo insuficiente y validación de montos negativos.
- **Modales:** Confirmación de transacciones para mejorar la UX sin recargar la página.

### 📜 Historial de Transacciones
- Registro automático de ingresos (depósitos) y egresos (transferencias).
- Persistencia de datos para que el historial no se borre al cerrar el navegador.

---

## 🛠️ Tecnologías Utilizadas

El proyecto fue construido utilizando estándares modernos y arquitectura modular:

| Tecnología | Uso |
|---|---|
| **HTML5** | Estructura semántica de la aplicación. |
| **CSS3** | Estilos personalizados, efectos de blur y **Media Queries**. |
| **Bootstrap 4.6** | Sistema de grillas responsivo, componentes (Modales, Acordeones) y utilidades. |
| **JavaScript (ES6+)** | Lógica de negocio dividida en **Módulos** (`import`/`export`). |
| **jQuery** | Manipulación eficiente del DOM y eventos. |
| **LocalStorage** | Persistencia de datos (Saldo, Contactos, Historial) en el navegador. |
| **Git & GitHub** | Control de versiones y despliegue. |

---

## 📂 Estructura del Proyecto

El código está organizado siguiendo el patrón de separación de responsabilidades, manteniendo los estilos, scripts e imágenes en una carpeta de recursos (`assets`) y la lógica de negocio dividida en módulos ES6.

```text
L4/
├── assets/
│   ├── css/
│   │   └── style.css           # Estilos globales y efectos (Blur, colores)
│   ├── img/                    # Logos y recursos gráficos
│   └── js/
│       ├── contactos.js        # Lógica CRUD de contactos
│       ├── dashboard.js        # Cálculos del menú principal y gráficas
│       ├── depositar.js        # Lógica de abono de saldo
│       ├── enviarDinero.js     # Lógica de transferencias y validaciones
│       ├── login.js            # Autenticación simulada
│       ├── renderTransacciones.js # Generador de la lista HTML de historial
│       ├── saldo.js            # Manejo del estado del dinero (localStorage)
│       ├── script.js           # Orquestador principal e inicialización
│       └── transacciones.js    # Lógica de guardado de movimientos
├── deposit.html                # Vista de depósitos
├── index.html                  # Landing page / Home
├── login.html                  # Vista de inicio de sesión
├── menu.html                   # Dashboard principal
├── README.md                   # Documentación
├── register.html               # Vista de registro
├── sendmoney.html              # Vista de enviar dinero
└── transactions.html           # Vista de historial
```
---

## 📸 Capturas de Pantalla

| Versión Escritorio | Versión Móvil |
|:---:|:---:|
| <img src="assets/img/preview (1).png" alt="Escritorio 1" width="400"> | <img src="assets/img/preview (3).png" alt="Móvil 1" width="200"> |
| <img src="assets/img/preview (2).png" alt="Escritorio 2" width="400"> | <img src="assets/img/preview (4).png" alt="Móvil 2" width="200"> |
| | <img src="assets/img/preview (5).png" alt="Móvil 3" width="200"> |

---

## 💿 Instalación y Uso

Este proyecto no requiere instalación de dependencias de servidor (Node.js, etc), ya que funciona directamente en el navegador.

1. **Clonar el repositorio:**

```bash
   git clone [https://github.com/Zhainy/LukApp-Wallet.git](https://github.com/Zhainy/LukApp-Wallet.git)
```

2. **Abrir la carpeta del proyecto:**
   Navega en tu explorador de archivos hasta la carpeta `LukApp-Wallet` que se acaba de descargar.

3. **Ejecutar la aplicación:**
   Localiza el archivo `index.html` y haz doble clic sobre él. La billetera se abrirá automáticamente en tu navegador web predeterminado (Chrome, Firefox, Edge, etc.).

   > **Nota:** No es necesario instalar dependencias ni iniciar un servidor local (como Live Server), aunque puedes usarlo si deseas una experiencia de desarrollo más fluida.

## 🔐 Credenciales de Prueba

Para probar la funcionalidad de inicio de sesión (Login), puedes utilizar las siguientes credenciales genéricas:

* **Usuario/Correo:** Cualquier correo que termine en `@admin.com` (ej: `test@admin.com`, `admin@admin.com`).
* **Contraseña:** `1234`

---

## 👩‍💻 Autora

**Nicole Fernández**

* [Perfil de GitHub](https://github.com/Zhainy)
* Desarrollado como parte del Bootcamp de Desarrollo Full Stack.

---

*Hecho con 💜 y mucho código.*