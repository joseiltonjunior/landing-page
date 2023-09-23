import { motion } from 'framer-motion'

export function Aside() {
  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-between p-8 md:p-0 md:pt-4"
    >
      <div>
        <p className="font-bold text-4xl">Desenvolvedor de Software</p>
        <p className="font-bold text-2xl ms-8 text-purple-600">
          Apaixonado por Transformar Ideias em Realidade
        </p>
      </div>
      <p className="font-medium text-2xl mt-8">
        Seja bem-vindo ao universo da inovação digital! Sou Junior Ferreira, um
        entusiasta da tecnologia e desenvolvedor de softwares apaixonado por
        criar soluções que impulsionam negócios e facilitam a vida das pessoas.
        Com anos de experiência e expertise em programação, estou pronto para
        transformar sua visão em um software funcional e impactante.
      </p>

      <p className="font-medium text-2xl mt-8">
        Seja uma startup ambiciosa ou uma empresa estabelecida, estou pronto
        para colaborar com você para alcançar seus objetivos digitais. Vamos
        juntos transformar suas ideias em realidade!
      </p>
    </motion.div>
  )
}
