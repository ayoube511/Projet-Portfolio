// src/pages/Home.jsx
import { profile } from '@/data/profile'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto space-y-20 px-4 py-20">
      {/* Hero avec glow néon */}
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <Avatar className="w-56 h-56 border-8 border-primary/40 rounded-full shadow-glow">
          <AvatarFallback className="text-7xl bg-gradient-to-br from-primary to-purple-600 text-white font-extrabold text-glow">
            {profile.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>

        <div className="space-y-8">
          <h1 className="text-7xl font-extrabold tracking-tighter gradient-violet text-glow">
            {profile.name}
          </h1>
          <p className="text-4xl text-primary/90 font-semibold">{profile.role}</p>
          <p className="text-2xl leading-relaxed max-w-3xl text-muted-foreground/90">
            {profile.about}
          </p>

          <div className="flex gap-8 pt-10">
            <Button 
              size="xl" 
              className="text-xl bg-gradient-to-r from-primary to-purple-600 hover:from-purple-600 hover:to-primary shadow-glow hover-glow px-10 py-7 rounded-2xl transition-all duration-300"
              asChild
            >
              <a href="/projects">Voir mes projets →</a>
            </Button>
            <Button 
              size="xl" 
              variant="outline" 
              className="text-xl border-primary/50 hover:bg-primary/10 hover:text-primary hover:border-primary shadow-glow hover-glow px-10 py-7 rounded-2xl transition-all duration-300"
              asChild
            >
              <a href="/contact">Me contacter</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Compétences avec glow néon */}
      <Card className="border-primary/20 bg-gradient-to-b from-background to-background/70 shadow-glow">
        <CardHeader>
          <CardTitle className="text-4xl gradient-violet text-glow">
            Compétences
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-5">
            {profile.skills.map((skill, i) => (
              <Badge 
                key={i}
                variant="secondary"
                className="text-xl px-8 py-4 bg-primary/20 hover:bg-primary/40 text-primary border-primary/30 hover-glow transition-all duration-300 shadow-sm hover:shadow-primary/50"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
