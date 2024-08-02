import React from 'react'
import Navbar from './Main/Navbar';
import Footer from './Main/Footer';
import { Helmet } from 'react-helmet';
// lourity
const Home = () => {
  const projects = [
    { name: "ViaApp", description: "Discord sunucunuzu yeni nesil sistemlerle yönetin (09.04.2024)", url: "https://viaappdc.xyz", language: "react", extraLanguage: "typescript" },
    { name: "Pastebin", description: "Kullanıcıların metin ve kodlarını geçici olarak paylaşabildiği bir platform (08.04.2024)", url: "https://pastebin.com.tr", language: "react", extraLanguage: "typescript" },
    { name: "Raven", description: "Ücretsiz projelerin paylaşıldığı bir platform (22.01.2024)", url: "https://ravendev.xyz", language: "react", extraLanguage: "typescript" },
    { name: "Synce Bot", description: "Discord sunucunuzu zahmetsizce yönetmenizi sağlayacak bir bot (02.02.2024)", url: "https://syncebot.com", language: "react", extraLanguage: "typescript" },
    { name: "Gelir Defteri", description: "Gelir ve giderlerinizi hesaplayabileceğiniz bir sistem (11.02.2024)", url: "https://gelirdefteri.vercel.app", language: "react", extraLanguage: "javascript" },
    { name: "Zeal Turizm", description: "Bir turizm firması için geliştirdiğim tanıtım sitesi (09.03.2024)", url: "https://zealturizm.com", language: "react" },
  ]

  const educations = [
    { name: "Discord Botu Geliştirme", description: "Javascript ile Discord botu geliştirme eğitimi", url: "https://www.udemy.com/course/javascript-ile-discord-bot-gelistirme/" },
  ]

  return (
    <div>
      <Helmet>
        <title>Lourity - Projeler</title>
        <meta name="description" content="Lourity'nin geliştirdiği projeleri inceleyin. Web geliştirme, Discord botları ve daha fazlası." />
        <meta property="og:image" content="/logo.png" />
        <meta name="theme-color" content="#0ea5e9" />
      </Helmet>
      <Navbar />
      <div className='mt-20'>
        <div className='px-10'>
          <h2 className='font-semibold text-3xl text-gray-300'><i className="bi bi-journal-bookmark text-2xl mr-2"></i> Tüm projelerim</h2>
          <p className='text-gray-400 text-lg'>Siparişlerde yaptığım ve kendime ait projeler</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 sm:py-8 sm:px-14'>
          {projects.map((project, index) => (
            <div key={++index} className='duration-300 rounded-md bg-mainalt-black ring-1 ring-white/5 hover:ring-sky-500 hover:bg-mainhv-black cursor-default p-3'>
              <a rel='nofollow' href={project.url} target='_blank'>
                <div className='min-h-[5rem]'>
                  <div className='flex justify-between'>
                    <h2 className='text-lg font-semibold'><i className="bi bi-journal-code"></i> {project.name}</h2>
                    <i className="bi bi-box-arrow-up-right"></i>
                  </div>
                  <span className='text-gray-400 text-sm'>{project.description}</span>
                </div>
                <div className='mt-4 flex justify-between'>
                  <p><i className="bi bi-link-45deg"></i> {project.url}</p>
                  <div className='flex gap-3'>
                    <span>{project.language === 'react' ? <div className='flex'><img className='w-8 h-8' src="/react.svg" alt="react" /> {project.extraLanguage === 'typescript' ? <img className='w-6 h-6 mt-1' src="/typescript.svg" alt="typescript" /> : project.extraLanguage === 'javascript' ? <img className='w-6 h-6 mt-1' src="/javascript.svg" alt="javascript" /> : ''}</div> : ''}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-20'>
        <div className='px-10'>
          <h2 className='font-semibold text-3xl text-gray-300'><i class="bi bi-backpack text-2xl mr-2"></i> Udemy'deki eğitimlerim</h2>
          <p className='text-gray-400 text-lg'>Udemy platformunda yayınladığım eğitimlerim</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 sm:py-8 sm:px-14'>
          {educations.map((education, index) => (
            <div key={++index} className='duration-300 rounded-md bg-mainalt-black ring-1 ring-white/5 hover:ring-sky-500 hover:bg-mainhv-black cursor-default p-3'>
              <a rel='nofollow' href={education.url} target='_blank'>
                <div className='min-h-[5rem]'>
                  <div className='flex justify-between'>
                    <h2 className='text-lg font-semibold'><i class="bi bi-backpack"></i> {education.name}</h2>
                    <i className="bi bi-box-arrow-up-right"></i>
                  </div>
                  <span className='text-gray-400 text-sm'>{education.description}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
