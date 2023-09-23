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
    <main className="h-auto bg-gray-950/90 p-8 md:p-4 rounded-xl">
      <div>
        <h1 className="font-bold text-2xl text-purple-600 md:text-2xl">
          Juntos, Podemos Criar o Futuro Digital
        </h1>
        <p className="mt-8 font-medium text-lg">
          Vamos iniciar essa jornada juntos. Entre em contato para uma
          consultoria gratuita e sem compromisso.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(handleSendEmail)}
        className="flex flex-col gap-4 mt-12"
      >
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
