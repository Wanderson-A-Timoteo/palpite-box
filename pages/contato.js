import React from 'react'
import ContactCard from '../components/contactCard'
import PageTitle from '../components/PageTitle'


const Contato = () => {
  return (
    <div>
      <PageTitle title='Contato' />
      <h1 className='text-center mt-8 mb-8 text-2xl font-normal'>Meus Contatos</h1>
      <div className='flex flex-wrap justify-center items-center'>
        <ContactCard
          imageSrc='/logo_git.png'
          imageAlt='GitHub'
          Link='https://github.com/wanderson-a-timoteo'
          title='GitHub'
          content='Verifique outros projetos que eu desenvolvi e minhas práticas de estudos.'
          />

        <ContactCard
          imageSrc='/twitter.png'
          imageAlt='Twitter'
          link='https://twitter.com/WandersonAT'
          title='Twitter'
          content='Te convido a me conhecer um pouco, saber o que eu gosto e sobre o que eu estudo.'
          />

        <ContactCard
          imageSrc='/logo_lkd.png'
          imageAlt='LinkedIn'
          link='https://www.linkedin.com/in/wanderson-a-timoteo/'
          title='LinkedIn'
          content='Conheça a minha trajetória profissional e acadêmica.'
          />
      
        <ContactCard
          imageSrc='/telegram.png'
          imageAlt='Telegram'
          link='https://t.me/WandersonTimoteo'
          title='Telegram'
          content='Para entrar em contato comigo de forma rápida.'
          />
      </div>
    </div>  
  )
  
}
export default Contato
