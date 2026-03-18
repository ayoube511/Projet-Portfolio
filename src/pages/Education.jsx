import { education } from "@/data/education"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Education() {
  return (
    <div className="space-y-16">

      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold gradient-violet text-glow">
          Education
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Les formations et études qui ont construit mes compétences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {education.map((item, index) => (
          <Card
            key={index}
            className="border-primary/20 bg-gradient-to-b from-background to-background/70 shadow-glow hover-glow transition-all"
          >
            <CardHeader>
              <CardTitle className="text-xl gradient-violet text-glow">
                {item.degree}
              </CardTitle>

              <p className="text-primary font-medium">
                {item.school}
              </p>

              <p className="text-sm text-muted-foreground">
                {item.period}
              </p>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

    </div>
  )
}