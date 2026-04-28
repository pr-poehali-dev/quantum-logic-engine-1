import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Установи Minecraft",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Для игры на CraftZONE подходит Minecraft Java Edition версии 1.20 и выше.
            Если у тебя уже установлен лаунчер — отлично, можно сразу переходить к следующему шагу.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Официальный лаунчер Minecraft Java Edition
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Версия 1.20.x и выше
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Windows, macOS и Linux — всё поддерживается
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Подключись к серверу",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Запусти Minecraft, выбери «Сетевая игра» → «Добавить сервер» и введи наш адрес.
            Через секунду ты уже в игре!
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Адрес сервера: play.craftzone.ru
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Онлайн 24/7 без перерывов
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Сервер в России — минимальный пинг
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Выбери режим и начни играть",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            После входа тебя встретит красивое лобби с порталами в разные режимы.
            Выбирай что нравится — и вперёд навстречу приключениям!
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Выживание, PvP, мини-игры и многое другое
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Вступи в клан или создай свой
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Зарегистрируйся в Discord для бонусов
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-6">Как начать играть</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Три простых шага — и ты уже на нашем сервере. Регистрация не нужна, просто заходи и играй.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
