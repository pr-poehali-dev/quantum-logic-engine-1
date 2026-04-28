import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Какая версия Minecraft нужна для игры?",
      answer:
        "Для игры на CraftZONE нужна Minecraft Java Edition версии 1.20 и выше. Bedrock Edition (Xbox, PE, Windows 10) пока не поддерживается.",
    },
    {
      question: "Сервер платный или бесплатный?",
      answer:
        "Вход на сервер абсолютно бесплатный. У нас есть донат-магазин с косметическими привилегиями, которые не влияют на баланс игры — никакого pay-to-win.",
    },
    {
      question: "Как защитить свои постройки от гриферов?",
      answer:
        "После входа на сервер напиши команду /rg claim — это защитит твой участок. Гриферы не смогут сломать или украсть ничего внутри твоего региона.",
    },
    {
      question: "Есть ли на сервере анти-чит?",
      answer:
        "Да, мы используем современную систему анти-чита, которая отлавливает читеров в реальном времени. Также работает команда модераторов 24/7.",
    },
    {
      question: "Как вступить в клан?",
      answer:
        "Напиши команду /clan list чтобы увидеть список открытых кланов, или попроси лидера понравившегося клана принять тебя. Также можно создать собственный клан командой /clan create.",
    },
    {
      question: "Где задать вопрос администрации?",
      answer:
        "Самый быстрый способ — написать в наш Discord. Также можно обратиться к онлайн-модератору прямо на сервере командой /helpop.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о сервере CraftZONE.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
