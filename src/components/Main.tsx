import { collection, addDoc } from 'firebase/firestore'
import { firestore } from '@/services/firebase'

import { Button } from './Button'
import { Input } from './Input'
import { TextArea } from './TextArea'
import { useForm } from 'react-hook-form'
import { useCallback, useState } from 'react'
import { useToast } from '@/hooks/useToast'
import { SendEmailProps } from '@/utils/sendEmailProps'

export function Main() {
  const [isLoading, setIsLoading] = useState(false)

  const { showToast } = useToast()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SendEmailProps>()

  const handleSendEmail = useCallback(
    async (form: SendEmailProps) => {
      setIsLoading(true)

      await addDoc(collection(firestore, 'messages'), {
        form,
      })
        .then(() => {
          showToast('E-mail enviado com sucesso', {
            type: 'success',
            theme: 'light',
          })
          setValue('email', '')
          setValue('name', '')
          setValue('message', '')
        })
        .catch(() => {
          showToast('Falha ao enviar e-mail, entre novamente mais tarde.', {
            type: 'error',
            theme: 'light',
          })
        })
        .finally(() => setIsLoading(false))
    },
    [setValue, showToast],
  )

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
        onSubmit={handleSubmit(handleSendEmail)}
        className="flex flex-col gap-4 my-8"
      >
        <div className="flex gap-4 justify-between md:flex-col">
          <Input
            name="name"
            placeholder="Nome"
            type="text"
            required
            register={register}
            error={errors.name}
          />
          <Input
            name="email"
            placeholder="Email"
            type="email"
            required
            register={register}
            error={errors.email}
          />
        </div>
        <TextArea
          name="message"
          placeholder="Em que posso te ajudar?"
          required
          register={register}
          error={errors.message}
        />

        <Button isLoading={isLoading} type="submit">
          Enviar
        </Button>
      </form>
    </main>
  )
}
