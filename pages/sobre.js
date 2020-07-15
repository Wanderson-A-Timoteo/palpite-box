import React from 'react'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
  return (
    <div className='mb-16'>
      <PageTitle title='Sobre' />
      <h1 className='text-center mt-8 mb-8 text-2xl font-normal'>Sobre a Aplicação</h1>

      <div className='xs:flex'>
        <div className='xs:flex-shrink-2 px-4 md:px-20 lg:px-48'>
          <p className='mt-2 text-xs sm:text-base text-gray-600'>
            Aplicação desenvolvida durante o workshop Semana Fullstack Master, disponibilizada pela plataforma DevPleno e lecionada pelo professor 
            Túlio Faria. Consiste numa caixa de sugestões na qual os clientes podem deixar opiniões e sugestões sobre os estabelecimentos comerciais e,
            em troca receber cupons de desconto e ou vantagens.
          </p>
        </div>
        <div className='mt-12 mx-auto px-6 sm:px-12 md:px-24 lg:px-40'>
          <div className='mt-10 mx-auto'>
            <div className='uppercase tracking-wide text-sm text-teal-500 font-bold'>PALPITE BOX</div>
              <a href='https://github.com/Wanderson-A-Timoteo/palpite-box' target='_blank' className='block mt-1 text-base md:text-lg leading-tight font-semibold text-gray-900 hover:underline'>Ir para o repositório da aplicação</a>
              <p className='mt-2 text-xs sm:text-base text-gray-600'>
                Aplicação desenvolvida utilizando as tecnologias React, NextJS, Node e Tailwind. A Semana Fullstack Master é mais um dos eventos disponibilizados pela plataforma DevPleno.
                Tive a oportunidade de realizar algumas melhorias e implementações, você pode encontrar mais detalhes acessando o repisitório da aplicação.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}
export default Sobre