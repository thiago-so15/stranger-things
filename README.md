# Stranger Things - Fan Platform

Plataforma web con estética **Stranger Things**: tema negro y rojo, efectos de neón, luces parpadeantes y atmósfera de los 80s.

## Características

- **Tema oscuro** con acentos en rojo estilo Netflix/Stranger Things
- **Efecto glitch** en el título principal
- **Partículas flotantes** interactivas con el mouse
- **Luces navideñas** animadas (como las de Joyce)
- **Abecedario con luces** en el footer (Joyce's Wall)
- **Efecto typewriter** en el subtítulo
- **Parallax** en la sección hero
- **Timeline** de temporadas
- **Cards** con efecto glass y glow
- **Barras de poder** animadas en personajes
- **Galería** con efecto de estática de TV
- **Formulario de contacto** con animaciones
- **Diseño responsive** para todos los dispositivos
- **Scroll animations** con IntersectionObserver

## Estructura

```
stranger-things/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos (tema negro/rojo)
├── js/
│   └── main.js         # Animaciones e interactividad
├── assets/             # Imágenes y recursos
└── README.md
```

## Uso

Abre `index.html` en tu navegador o usa un servidor local:

```bash
# Con Python
python -m http.server 8000

# Con Node.js (npx)
npx serve .

# Con Live Server (VS Code extension)
# Click derecho en index.html > "Open with Live Server"
```

## Tecnologías

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox, Animations, Backdrop Filter)
- JavaScript Vanilla (Canvas API, IntersectionObserver, Event Listeners)
- Google Fonts (Libre Baskerville, Special Elite, Inter)

## Secciones

1. **Hero** - Título con efecto glitch y luces navideñas
2. **El Mundo** - Descripción del universo de Stranger Things
3. **Personajes** - Cards de personajes principales
4. **Temporadas** - Timeline con las 5 temporadas
5. **Galería** - Grid de imágenes con efectos
6. **Contacto** - Formulario estilizado
7. **Footer** - Con el abecedario de luces de Joyce
