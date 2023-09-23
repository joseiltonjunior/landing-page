import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export function Aside() {
  const { t } = useTranslation()
  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-between p-8 md:p-0 md:pt-4"
    >
      <div>
        <p className="font-bold text-4xl">{t('title')}</p>
        <p className="font-bold text-2xl ms-8 text-purple-600">{t('info')}</p>
      </div>
      <p className="font-medium text-2xl mt-8">{t('firstParagraph')}</p>

      <p className="font-medium text-2xl mt-8">{t('secondParagraph')}</p>
    </motion.div>
  )
}
