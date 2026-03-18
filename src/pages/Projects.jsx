// src/pages/Projects.jsx
import { projects } from '@/data/projects'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 text-glow">
          Mes Projets
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Voici une sélection de projets qui me passionnent. Full-stack, IA, SIG, cloud...
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={index}
            className="border-primary/20 bg-gradient-to-b from-background to-background/70 overflow-hidden shadow-glow hover-glow transition-all duration-300 group"
          >
            {project.image && (
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            )}

            <CardHeader>
              <CardTitle className="text-2xl gradient-violet text-glow">
                {project.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground/80">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <Badge 
                    key={i} 
                    variant="secondary" 
                    className="bg-primary/15 text-primary border-primary/30 hover:bg-primary/25 transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="gap-4 justify-end border-t border-primary/10 pt-4">
              {project.github && (
                <Button variant="ghost" size="sm" className="hover:bg-primary/10" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={18} className="mr-2" />
                    Code
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button className="bg-primary hover:bg-purple-600 shadow-glow" size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} className="mr-2" />
                    Demo
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
