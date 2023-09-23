import { collection, addDoc } from 'firebase/firestore'
import { firestore } from '@/services/firebase'
import { motion } from 'framer-motion'

import { Button } from './Button'
import { Input } from './Input'
import { TextArea } from './TextArea'
import { useForm } from 'react-hook-form'
import { useCallback, useState } from 'react'
import { useToast } from '@/hooks/useToast'
import { SendEmailProps } from '@/utils/sendEmailProps'
import { useTranslation } from 'react-i18next'

export function Main() {
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useTranslation()
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
          showToast(t('success'), {
            type: 'success',
            theme: 'light',
          })
          setValue('email', '')
          setValue('name', '')
          setValue('message', '')
        })
        .catch(() => {
          showToast(t('error'), {
            type: 'error',
            theme: 'light',
          })
        })
        .finally(() => setIsLoading(false))
    },
    [setValue, showToast, t],
  )

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-auto bg-gray-950/90 p-8 md:p-4 rounded-xl"
    >
      <div>
        <h1 className="font-bold text-2xl text-purple-600 md:text-2xl">
          {t('formTitle')}
        </h1>
        <p className="mt-8 font-medium text-lg">{t('formInfo')}</p>
      </div>

      <form
        onSubmit={handleSubmit(handleSendEmail)}
        className="flex flex-col gap-4 mt-12"
      >
        <Input
          name="name"
          placeholder={t('inputName')}
          type="text"
          required
          register={register}
          error={errors.name}
        />
        <Input
          name="email"
          placeholder={t('inputEmail')}
          type="email"
          required
          register={register}
          error={errors.email}
        />

        <TextArea
          name="message"
          placeholder={t('inputArea')}
          required
          register={register}
          error={errors.message}
        />

        <Button isLoading={isLoading} type="submit">
          {t('sendButton')}
        </Button>
      </form>
    </motion.div>
  )
}
