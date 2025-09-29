'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Code, Database, Globe } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Butcher Shop E-Commerce',
    description:
      'A full-stack e-commerce web application for a butcher shop, featuring online ordering system, real-time inventory management, and direct communication with the establishment for custom orders and inquiries. Private Respository',
    image: '/Carniceria.png',
    technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: '',
    demoUrl: 'https://carniceriaelviso.com',
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'Classroom Management System',
    description:
      'AulaTec is a web platform that revolutionizes classroom management in educational institutions. The system allows students to reserve seats through an interactive classroom map, register attendance via QR codes, and manage their reservations autonomously.',
    image: '/AulaTec.png',
    technologies: ['Laravel', 'MySQL', 'Docker', 'Bootstrap'],
    githubUrl: 'https://github.com/jaandro16/AulaTec.git',
    demoUrl: '',
    category: 'Full Stack',
  },
  {
    id: 3,
    title: 'Virtual Academy Platform',
    description:
      'Log In of a virtual academy developed with Java. It is a simulation created to apply the basic knowledge acquired about structured programming in Java packages.',
    image: '/Ciberseguridad.jpg',
    technologies: ['Java'],
    githubUrl: 'https://github.com/jaandro16/MiPrimerRespositorio.git',
    demoUrl: '',
    category: 'Backend',
  },
];

const categories = ['All', 'Frontend', 'Backend', 'Full Stack'];

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Frontend':
        return <Globe size={16} />;
      case 'Backend':
        return <Database size={16} />;
      case 'Full Stack':
        return <Code size={16} />;
      default:
        return <Code size={16} />;
    }
  };

  return (
    <div className='min-h-screen py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h1 className='text-4xl sm:text-5xl font-bold mb-6 gradient-text'>
            My Projects
          </h1>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            A collection of projects that showcase my skills in web development,
            from frontend interfaces to full-stack applications.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
              } hover-lift`}
            >
              {category !== 'All' && getCategoryIcon(category)}
              <span className={category !== 'All' ? 'ml-2' : ''}>
                {category}
              </span>
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className='bg-card border-border hover-lift overflow-hidden group'
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className='relative overflow-hidden'>
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  width={500}
                  height={300}
                  className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105'
                />
                <div className='absolute top-4 right-4'>
                  <Badge
                    variant='secondary'
                    className='bg-background/80 text-foreground'
                  >
                    {getCategoryIcon(project.category)}
                    <span className='ml-1'>{project.category}</span>
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className='text-xl font-bold'>
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed'>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className='flex flex-wrap gap-2'>
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant='outline' className='text-xs'>
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className='flex gap-3 pt-4'>
                  {project.githubUrl && (
                    <Button
                      size='sm'
                      variant='outline'
                      className={`${
                        project.demoUrl ? 'flex-1' : 'w-full'
                      } border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent`}
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Github size={16} className='mr-2' />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button
                      size='sm'
                      className={`${
                        project.githubUrl ? 'flex-1' : 'w-full'
                      } bg-primary hover:bg-primary/90 text-primary-foreground`}
                      asChild
                    >
                      <a
                        href={project.demoUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <ExternalLink size={16} className='mr-2' />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h3 className='text-2xl text-white font-bold mb-4'>
            Interested in working together?
          </h3>
          <p className='text-muted-foreground mb-6 max-w-2xl mx-auto'>
            I'm always open to discussing new opportunities and exciting
            projects. Let's create something amazing together!
          </p>
          <Button
            size='lg'
            className='bg-primary hover:bg-primary/90 text-primary-foreground hover-lift animate-glow'
            asChild
          >
            <a href='mailto:jandroperezrentero12@gmail.com'>Get In Touch</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
