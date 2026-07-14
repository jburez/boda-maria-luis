# Boda de María y Luis

Página web sencilla y elegante para compartir la información de la boda de María y Luis, con un estilo inspirado en su invitación (paleta oliva/terracota, tipografía script + serif cálido).

24 de octubre de 2026 · Iglesia del Carmen (Antequera) · Finca El Romeral.

## Secciones

- Portada (estilo invitación, con la ilustración de acuarela)
- Datos principales (ceremonia y celebración)
- Agenda del día, con los iconos dibujados a mano de la invitación
- Nuestra historia: galería de viajes + vídeo de la pedida de mano + vídeo de la finca
- FAQ: dress code, niños, viaje y alojamiento (pendientes de cerrar), RSVP
- Confirmación de asistencia y regalo: pendientes de habilitar (a la espera de que la pareja confirme si quiere publicar teléfonos/IBAN)

## Estructura

```text
.
├── index.html
├── styles.css
├── app.js
└── assets/
    ├── img/
    │   ├── deco/        iconos y acuarela extraídos de la invitación
    │   └── *.jpg         fotos de la pareja, optimizadas para web
    └── video/            pedida de mano, El Romeral, Dolomitas (comprimidos)
```

`material/` (fuera del repo, ver `.gitignore`) guarda el PDF original de la invitación y los archivos multimedia sin procesar, como referencia de trabajo.

## Publicación

El proyecto se publica con GitHub Pages.
