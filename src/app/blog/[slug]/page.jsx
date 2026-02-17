'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Badge } from '../../../components/ui/badge';
import { Calendar, Clock, ArrowLeft, Tag, Share2 } from 'lucide-react';

const articles = {
  'elimina-tus-deepfakes': {
    title: 'Cómo eliminar fotos íntimas deepfakes de internet',
    date: '2026-02-17',
    readTime: '3 min',
    category: 'Cybersecurity',
    tags: ['Deepfakes', 'Privacy', 'Digital Safety', 'OSINT'],
    content: `
## Introduction

Si alguna vez te han generado o difundido una imagen íntima tuya, ya sea real o creada con inteligencia artificial, hay pasos concretos que puedes seguir para intentar eliminarla de internet y proteger tu privacidad. 
Lo primero es **descargar la imagen** para tenerla como referencia y poder subirla a los sistemas oficiales que se encargan de su retirada.

Dependiendo de la situación, puedes recurrir a las siguientes entidades especializadas:

- **Para adultos:** [StopCNII](https://stopncii.org)
- **Para menores:** [National Center for Missing & Exploited Children](https://takeitdown.ncmec.org/es/)

### Cómo abrir un caso

Abrir un caso es sencillo y gratuito. 
Una vez dentro de la plataforma correspondiente, selecciona la opción para crear un nuevo “Caso” o “Reporte”. 
Se te pedirá subir la imagen que deseas eliminar. **No te preocupes: estas plataformas no almacenan la foto tal cual, sino que generan un hash único o “huella digital” de la imagen.** 
Esto asegura que tu contenido sensible nunca quede guardado, pero permite rastrearlo y eliminarlo en todas las webs colaboradoras.

### Qué esperar del proceso

Una vez que subes la imagen y se genera el hash, las plataformas envían esta huella digital a todos los sitios colaboradores: desde Instagram, Facebook, TikTok, X, Microsoft Bing, hasta sitios de contenido adulto. 
Ellos proceden a retirar y eliminar la imagen. El sistema también te permite recibir actualizaciones sobre el estado de tu caso, de manera que puedas verificar qué sitios han eliminado la imagen y cuáles están pendientes. 
La efectividad de este proceso es alta, alrededor del 90%, y ya se han eliminado más de 200.000 imágenes íntimas no consentidas.

### Cómo hacer seguimiento

Es importante revisar regularmente la notificación del caso y verificar los resultados que te envía la plataforma. Algunas webs pueden tardar más que otras en procesar la retirada. Mantén un registro de las comunicaciones 
y de los sitios donde la imagen fue eliminada para tu tranquilidad y, si fuese necesario, para adjuntar a denuncias oficiales.

### Qué hacer si la imagen sigue circulando

En el caso de que la imagen aparezca nuevamente o en nuevas plataformas, vuelve a abrir un nuevo caso con la misma imagen. Gracias al hash, el sistema puede detectar duplicados y actuar de manera rapida. 
También es recomendable mantener configuraciones de privacidad más estrictas en tus redes sociales, limitar el acceso a tu contenido y no interactuar con usuarios desconocidos que puedan intentar difundir tus imágenes.

### Medidas de seguridad adicionales

- **Revisa tus dispositivos y cuentas:** asegúrate de que no existan copias locales compartidas accidentalmente.
- **Activa autenticación en dos pasos** en todas tus cuentas.
- **No compartas enlaces privados** de tus archivos o fotos sin protección.
- **Denuncia** siempre el contenido ante las autoridades pertinentes: la actuación de estas plataformas no reemplaza la denuncia legal, pero aumenta tus posibilidades de éxito.

### Reflexión final

Este tema me ha parecido **realmente importante para abrir y estrenar la sección de blog de mi portfolio**, porque combina concienciación sobre privacidad digital, seguridad y el uso responsable de la tecnología. 
Quiero que este espacio sea un lugar donde compartir conocimientos que puedan ayudar directamente a la gente a proteger su información y su intimidad en internet.

    `,
  },
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogArticlePage() {
  const params = useParams();
  const article = articles[params.slug];

  if (!article) {
    return (
      <div className='min-h-screen py-20 px-4 flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold mb-4 text-foreground'>
            Article Not Found
          </h1>
          <p className='text-muted-foreground mb-6'>
            The article you are looking for does not exist.
          </p>
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors'
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen py-10 px-4 sm:px-6 lg:px-8'>
      <article className='max-w-3xl mx-auto'>
        {/* Back link */}
        <Link
          href='/blog'
          className='inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm'
        >
          <ArrowLeft size={16} />
          Back to all articles
        </Link>

        {/* Article header */}
        <header className='mb-10'>
          <div className='flex items-center gap-2 mb-4'>
            <Badge
              variant='outline'
              className='text-xs border-primary/40 text-primary'
            >
              {article.category}
            </Badge>
          </div>

          <h1 className='text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight'>
            {article.title}
          </h1>

          <div className='flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6'>
            <span className='inline-flex items-center gap-1'>
              <Calendar size={14} />
              {formatDate(article.date)}
            </span>
            <span className='inline-flex items-center gap-1'>
              <Clock size={14} />
              {article.readTime}
            </span>
          </div>

          <div className='flex flex-wrap gap-1.5'>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className='inline-flex items-center gap-1 text-xs text-muted-foreground bg-muted/30 px-2 py-0.5 rounded'
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Divider */}
        <div className='h-px bg-border mb-10' />

        {/* Article content with Markdown rendering */}
        <div className='prose prose-invert max-w-none'>
          <ReactMarkdown
            components={{
              h2: ({ node, ...props }) => (
                <h2
                  className='text-2xl font-bold text-white mt-10 mb-4'
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <h3
                  className='text-xl font-semibold text-white mt-8 mb-3'
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <p className='text-gray-100 leading-relaxed mb-4' {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul
                  className='list-disc list-outside text-gray-100 mb-4'
                  {...props}
                />
              ),
              li: ({ node, ...props }) => (
                <li className='mb-2 ml-6' {...props} />
              ),
              a: ({ node, ...props }) => (
                <a
                  className='text-primary hover:text-primary/80 underline font-medium'
                  target='_blank'
                  rel='noopener noreferrer'
                  {...props}
                />
              ),
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>

        {/* Share + Back */}
        <div className='mt-12 pt-8 border-t border-border flex items-center justify-between'>
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors'
          >
            <ArrowLeft size={16} />
            Back to all articles
          </Link>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: article.title,
                  url: window.location.href,
                });
              } else {
                navigator.clipboard.writeText(window.location.href);
              }
            }}
            className='inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors'
          >
            <Share2 size={16} />
            Share
          </button>
        </div>
      </article>
    </div>
  );
}
