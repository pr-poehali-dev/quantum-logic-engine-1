import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Выживание",
    description: "Классическое выживание с уникальными механиками, кастомными биомами и эпическими боссами. Собери команду и завоюй мир.",
    icon: "sword",
    badge: "Хит",
  },
  {
    title: "Анти-грифер защита",
    description: "Твой дом и постройки под надёжной защитой. Система регионов и логов позволяет вернуть любой блок.",
    icon: "shield",
    badge: "Безопасно",
  },
  {
    title: "Мини-игры",
    description: "BedWars, SkyWars, Hunger Games и ещё десятки режимов. Каждый день — новые события и турниры.",
    icon: "game",
    badge: "PvP",
  },
  {
    title: "Экономика",
    description: "Торгуй на аукционе, открывай магазины, зарабатывай монеты и становись самым богатым игроком сервера.",
    icon: "coins",
    badge: "Торговля",
  },
  {
    title: "Кастомные плагины",
    description: "Уникальные плагины, написанные специально для нашего сервера. Нигде больше ты такого не найдёшь.",
    icon: "star",
    badge: "Уникально",
  },
  {
    title: "Активное сообщество",
    description: "Тысячи игроков онлайн каждый день. Discord, события, конкурсы и дружелюбные администраторы 24/7.",
    icon: "community",
    badge: "24/7",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-orbitron">Режимы и возможности</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Всё, что нужно для незабываемой игры — на одном сервере
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "sword" && "⚔️"}
                    {feature.icon === "shield" && "🛡️"}
                    {feature.icon === "game" && "🎮"}
                    {feature.icon === "coins" && "💰"}
                    {feature.icon === "star" && "⭐"}
                    {feature.icon === "community" && "👥"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
