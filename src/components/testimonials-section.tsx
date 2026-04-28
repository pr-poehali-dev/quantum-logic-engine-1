import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Артём_Крафтер",
    role: "Игрок, 2 года на сервере",
    avatar: "/placeholder-user.jpg",
    content:
      "CraftZONE — лучшее место для выживания. Тут всегда есть с кем поиграть, админы отзывчивые, а грифферов нет вообще. Уже 2 года не могу уйти!",
  },
  {
    name: "NightBuilder",
    role: "Строитель, топ-1 рейтинга",
    avatar: "/placeholder-user.jpg",
    content:
      "Нигде больше нет таких инструментов для строительства. Плагины, регионы, кастомные блоки — рай для билдера. Мои постройки наконец-то в безопасности.",
  },
  {
    name: "SkyWarrior99",
    role: "PvP-игрок, 500+ побед",
    avatar: "/placeholder-user.jpg",
    content:
      "BedWars на CraftZONE — отдельная история. Честные бои, нормальный анти-чит и всегда полные лобби. Каждый день по несколько часов тут провожу.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-orbitron">Нам доверяют игроки</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят те, кто уже играет на CraftZONE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-card-foreground font-orbitron">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
