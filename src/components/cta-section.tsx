import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="slide-up">
          <h2 className="text-5xl font-bold text-foreground mb-6 font-orbitron text-balance">Готов начать приключение?</h2>
          <p className="text-xl text-muted-foreground mb-4 leading-relaxed max-w-2xl mx-auto">
            Тысячи игроков уже строят, сражаются и исследуют вместе. Присоединяйся прямо сейчас — это бесплатно!
          </p>
          <p className="text-2xl font-bold text-red-500 font-orbitron mb-10 tracking-widest">
            play.craftzone.ru
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 pulse-button text-lg px-8 py-4"
            >
              Играть сейчас
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4 bg-transparent"
            >
              Наш Discord
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
