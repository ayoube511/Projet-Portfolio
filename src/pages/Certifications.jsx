import { certifications } from "@/data/certifications"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Certifications() {
  return (
    <div className="space-y-16">

      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold gradient-violet text-glow">
          Certifications
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Quelques certifications qui attestent de mes compétences techniques.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <Card
            key={index}
            className="border-primary/20 bg-gradient-to-b from-background to-background/70 shadow-glow hover-glow transition-all"
          >
            <CardHeader>
              <CardTitle className="gradient-violet text-glow">
                {cert.title}
              </CardTitle>

              <p className="text-primary font-medium">
                {cert.organization}
              </p>

              <p className="text-sm text-muted-foreground">
                {cert.year}
              </p>
            </CardHeader>

            <CardContent>
              <Button asChild className="w-full">
                <a href={cert.link} target="_blank">
                  Voir le certificat
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

    </div>
  )
}