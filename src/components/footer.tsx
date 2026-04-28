import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              Craft<span className="text-red-500">ZONE</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-2 max-w-md">
              Лучший Minecraft-сервер для тех, кто хочет строить, выживать и побеждать.
            </p>
            <p className="font-orbitron text-red-500 font-bold mb-6">play.craftzone.ru</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Icon name="MessageCircle" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Icon name="Youtube" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Icon name="Send" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Сервер</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Режимы
                </a>
              </li>
              <li>
                <a href="#applications" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Как начать
                </a>
              </li>
              <li>
                <a href="#faq" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Сообщество</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  ВКонтакте
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">© 2025 CraftZONE. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200">
                Правила сервера
              </a>
              <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
