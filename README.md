# Sol Naciente — sitio web

Sitio del Instituto Sol Naciente (yoga, retiros, talleres y formaciones), construido con Next.js, TypeScript, Tailwind CSS y Framer Motion.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Editar contenido

Todo el contenido del sitio (textos, fotos, videos, WhatsApp, Instagram, ubicación, retiros, talleres, testimonios) se edita en un único archivo:

```
lib/content.ts
```

Las fotos y videos van en `public/media/`.

## Build de producción

```bash
npm run build
npm run start
```
