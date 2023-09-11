import { Button } from './Button'
import { Input } from './Input'
import { TextArea } from './TextArea'

export function Main() {
  return (
    <main>
      <h1 className="font-bold text-3xl text-purple-600 md:text-2xl">
        Que tal alcançar novos clientes e conquistar um público ainda maior,
        expandindo assim o alcance de sua marca?
      </h1>
      <p className="mt-8 font-medium text-lg">
        Posso auxiliá-lo por meio dos meus serviços especializados, que incluem
        a criação de sites, landing pages, dashboards, aplicativos e muito mais.
        Com essas ferramentas, você poderá gerenciar seus produtos de forma
        eficaz e alcançar novos clientes em potencial. Entre em contato para
        obter mais informações e dar um passo decisivo rumo ao crescimento do
        seu negócio!
      </p>

      <form
        onSubmit={(data) => console.log(data)}
        className="flex flex-col gap-4 my-8"
      >
        <div className="flex gap-4 justify-between md:flex-col">
          <Input name="name" placeholder="Nome" type="text" required />
          <Input name="email" placeholder="Email" type="email" required />
        </div>
        <TextArea
          name="message"
          placeholder="Em que posso te ajudar?"
          required
        />

        <Button type="submit">Enviar</Button>
      </form>
    </main>
  )
}
