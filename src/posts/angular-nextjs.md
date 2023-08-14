---
image: /posts/angular.jpg
title: "Mi segundo post"
subtitle: "Cómo Transformé Mi Adorado Portfolio de Angular a Next.js 13 para Potenciar el SEO y Mejorar la Experiencia Visual"
date: "12-08-2023"
---

![Alt text](/posts/angular.jpg "a title")

# Cómo Transformé Mi Adorado Portfolio de Angular a Next.js 13 para Potenciar el SEO y Mejorar la Experiencia Visual

¡Saludos, comunidad de desarrolladores! Hoy quiero compartir con ustedes mi emocionante viaje de transformar mi adorado portfolio, que originalmente estaba construido en Angular, a la última versión de Next.js (Next.js 13). Esta decisión fue motivada por mi deseo de mejorar el SEO, lograr una mejor integración visual con Tailwind CSS y, por supuesto, elevar las Core Web Vitals para ofrecer una experiencia excepcional a los usuarios. Permítanme compartir mi experiencia y algunos ejemplos de código en TypeScript para ilustrar los cambios clave.

### Integración Visual con Tailwind CSS

La integración de Tailwind CSS con Next.js es fluida y eficiente. Tailwind ofrece una manera rápida de diseñar interfaces elegantes y receptivas, y su combinación con Next.js resulta en una experiencia de desarrollo suave y agradable. La modularidad de Next.js se alinea bien con la filosofía de diseño de componentes de Tailwind, lo que hace que la implementación de diseños visualmente atractivos sea una tarea gratificante.

### Mejora de las Core Web Vitals

La optimización de las Core Web Vitals es crucial para brindar una experiencia de usuario excepcional. Next.js facilita la carga optimizada de recursos y la gestión del rendimiento. Con un enfoque en la velocidad de carga, la interactividad y la estabilidad visual, pude mejorar significativamente las métricas de las Core Web Vitals y, en última instancia, ofrecer un portfolio más atractivo y eficiente.

## El Proceso de Migración

### Configuración del Proyecto

```
npx create-next-app@13 my-portfolio
```

### Migración de Componentes

```json title="Example response" {30, 32-73}
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: '<div>{{ content }}</div>',
})
export class CardComponent {
  @Input() content: string;
}

// Después (Next.js)
import React from 'react';

interface CardProps {
  content: string;
}

const Card: React.FC<CardProps> = ({ content }) => {
  return <div>{content}</div>;
};

export default Card;

```

### Renderizado del lado del servidor

```
import React from 'react';

const ServerSideRenderingPage: React.FC = () => {
  return (
    <div>
      <h1>Página con Renderizado en el Lado del Servidor</h1>
      {/* Contenido de la página */}
    </div>
  );
};

export default ServerSideRenderingPage;
```
