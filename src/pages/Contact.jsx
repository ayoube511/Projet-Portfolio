import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
export default function Contact() {
  return (
    <div className="space-y-16">

      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold gradient-violet text-glow">
          Contact
        </h1>

        <p className="text-xl text-muted-foreground max-w-xl mx-auto">
          N'hésitez pas à me contacter pour collaborer ou discuter d'un projet.
        </p>
      </div>

      <Card className="max-w-xl mx-auto border-primary/20 shadow-glow">
        <CardHeader>
          <CardTitle>Envoyer un message</CardTitle>
        </CardHeader>

      <CardContent className="space-y-4">

  <input
    type="text"
    placeholder="Votre nom"
    className="w-full p-3 rounded-md border border-primary/20 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
  />

  <input
    type="email"
    placeholder="Votre email"
    className="w-full p-3 rounded-md border border-primary/20 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
  />

  <input
    type="tel"
    placeholder="Votre numéro de téléphone"
    className="w-full p-3 rounded-md border border-primary/20 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
  />

  <textarea
    placeholder="Votre message"
    rows="5"
    className="w-full p-3 rounded-md border border-primary/20 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
  />

  <motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <Button className="w-full">
    Envoyer le message 🚀
  </Button>
</motion.div>

</CardContent>
      </Card>

    </div>
  )
}