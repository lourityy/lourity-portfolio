import Footer from './Main/Footer';
import Navbar from './Main/Navbar';
import { Helmet } from 'react-helmet';
// lourity
const About = () => {
    return (
        <div>
            <Helmet>
                <title>Lourity - Hakkımda</title>
                <meta name="description" content="Web tabanlı uygulamalar geliştiriyor ve Discord botları ile ilgileniyorum. Portföyüm ve becerilerim için URL lourity adresini ziyaret edin." />
                <meta property="og:image" content="/logo.png" />
                <meta name="theme-color" content="#0ea5e9" />
            </Helmet>
            <Navbar />
            <div className='mt-20'>
                <div className='px-10'>
                    <h2 className='font-semibold text-3xl text-gray-300'><i className="bi bi-file-earmark-person text-2xl mr-2"></i> Hakkımda</h2>
                    <p className='text-gray-400 text-lg'>Benim hakkımda bir şeyler öğrenmek ister misin?</p>
                </div>

                <div className='py-0 px-0 sm:py-8 sm:px-20'>
                    <div className='flex gap-2 py-8 px-20'>
                        <img className='w-12 h-12 rounded-md mt-2 sm:mt-0' src="/lourity.jpeg" alt="lourity" />
                        <span className='font-bold text-2xl text-gray-300 sm:mt-2'>Lourity kimdir?</span>
                    </div>
                    <div className='p-4 sm:p-1'>
                        <h2 className='text-lg text-gray-300 font-medium'>Merhaba, ben Lourity!</h2>
                        <p className='text-gray-400 mt-1'>16 yaşında bir Full Stack Developer olarak, 4 yıldır yazılım dünyasına merak salmış, bu alanda kendimi geliştirmeye çalışan biriyim. Sakarya'da yaşıyorum ve aynı zamanda Youtube platformunda Discord botları ve yazılım ile ilgili videolar paylaşarak topluluğa katkıda bulunmaya çalışıyorum. Tüm bunlarla birlikte, lise eğitimimi sürdürürken yazılımla ilgili lisans eğitimi almayı hedefliyor ve bu alanda daha ileri düzeyde çalışmalar yapmak istiyorum.</p>
                        <h2 className='text-lg text-gray-300 font-medium mt-2'>Yazılım yolculuğum</h2>
                        <p className='text-gray-400 mt-1'>Yazılım yolculuğuma ilk adımlarımı attığımda, web tabanlı geliştirme konusunda bir tutku hissettim. Şu anda favori dillerim arasında React, HTML, CSS ve JavaScript bulunuyor. Bu dilleri kullanarak etkileyici ve kullanıcı dostu web uygulamaları geliştirmek benim için heyecan verici bir deneyim.</p>
                        <h2 className='text-lg text-gray-300 font-medium mt-2'>Discord botları</h2>
                        <p className='text-gray-400 mt-1'>Aynı zamanda Discord botları dünyasına duyduğum ilgi, beni bu alanda da başarılı projelere yönlendirdi. Discord topluluklarına katılarak ve kendi bot projelerimi geliştirerek bu alandaki bilgi ve deneyimimi arttırmaktan keyif alıyorum.</p>
                        <h2 className='text-lg text-gray-300 font-medium mt-2'>Porföy ve iletişim</h2>
                        <p className='text-gray-400 mt-1'>Bu portföy sitesinde, yaptığım projeleri inceleyerek ve yazılım becerilerim hakkında daha fazla bilgi edinerek beni daha iyi tanıyabilirsiniz. Herhangi bir sorunuz varsa veya işbirliği yapmak istiyorsanız, lütfen bana ulaşın. Sizinle projelerinizi hayata geçirmek için sabırsızlanıyorum!</p>
                    </div>
                </div>
            </div>

            <div>
                <div className='py-4 px-10'>
                    <h2 className='font-semibold text-3xl text-gray-300'><i className="bi bi-award text-2xl mr-2"></i> Kullandığım dil ve teknolojiler</h2>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4 sm:py-8 sm:px-14'>
                    <div className='duration-300 flex rounded-md bg-mainalt-black hover:bg-mainhv-black cursor-default p-3 items-center'>
                        <img className='w-6 h-6' src="/javascript.svg" alt="javascript" />
                        <span className='font-semibold ml-4'>Javascript</span>
                    </div>

                    <div className='duration-300 flex rounded-md bg-mainalt-black hover:bg-mainhv-black cursor-default p-3 items-center'>
                        <img className='w-7 h-7' src="/html.svg" alt="html" />
                        <span className='font-semibold ml-4'>HTML</span>
                    </div>

                    <div className='duration-300 flex rounded-md bg-mainalt-black hover:bg-mainhv-black cursor-default p-3 items-center'>
                        <img className='w-7 h-7' src="/css.svg" alt="css" />
                        <span className='font-semibold ml-4'>CSS</span>
                    </div>

                    <div className='duration-300 flex rounded-md bg-mainalt-black hover:bg-mainhv-black cursor-default p-3 items-center'>
                        <img className='w-7 h-7' src="/tailwindcss.svg" alt="tailwindcss" />
                        <span className='font-semibold ml-4'>Tailwindcss</span>
                    </div>

                    <div className='duration-300 flex rounded-md bg-mainalt-black hover:bg-mainhv-black cursor-default p-3 items-center'>
                        <img className='w-6 h-6' src="/bootstrap.svg" alt="bootstrap" />
                        <span className='font-semibold ml-4'>Bootstrap</span>
                    </div>

                    <div className='duration-300 flex rounded-md bg-mainalt-black hover:bg-mainhv-black cursor-default p-3 items-center'>
                        <img className='w-6 h-6' src="/nodejs.svg" alt="nodejs" />
                        <span className='font-semibold ml-4'>Node JS</span>
                    </div>

                    <div className='duration-300 flex rounded-md bg-mainalt-black hover:bg-mainhv-black cursor-default p-3 items-center'>
                        <img className='w-6 h-6' src="/express.svg" alt="express" />
                        <span className='font-semibold ml-4'>Express</span>
                    </div>

                    <div className='duration-300 flex rounded-md bg-mainalt-black hover:bg-mainhv-black cursor-default p-3 items-center'>
                        <img className='w-6 h-6' src="/typescript.svg" alt="typescript" />
                        <span className='font-semibold ml-4'>TypeScript</span>
                    </div>

                    <div className='duration-300 flex rounded-md bg-mainalt-black hover:bg-mainhv-black cursor-default p-3 items-center'>
                        <img className='w-6 h-6' src="/mongo.svg" alt="mongo" />
                        <span className='font-semibold ml-4'>MongoDB</span>
                    </div>

                    <div className='duration-300 flex rounded-md bg-mainalt-black hover:bg-mainhv-black cursor-default p-3 items-center'>
                        <img className='w-8 h-8' src="/react.svg" alt="react" />
                        <span className='font-semibold ml-4'>React</span>
                    </div>

                    <div className='duration-300 flex rounded-md bg-mainalt-black hover:bg-mainhv-black cursor-default p-3 items-center'>
                        <img className='w-8 h-8' src="/vite.svg" alt="vite" />
                        <span className='font-semibold ml-4'>Vite</span>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4 sm:py-8 sm:px-14'>
                    <div className='duration-300 flex rounded-md bg-mainalt-black hover:bg-mainhv-black cursor-default p-3 items-center'>
                        <img className='w-6 h-6' src="/visual-studio-code.svg" alt="visual-studio-code" />
                        <span className='font-semibold ml-4'>Visual Studio Code</span>
                    </div>

                    <div className='duration-300 flex rounded-md bg-mainalt-black hover:bg-mainhv-black cursor-default p-3 items-center'>
                        <img className='w-10 h-15' src="/bootstrap-icons.png" alt="bootstrap-icons" />
                        <span className='font-semibold ml-4'>Boostrap Icons</span>
                    </div>

                    <div className='duration-300 flex rounded-md bg-mainalt-black hover:bg-mainhv-black cursor-default p-3 items-center'>
                        <img className='w-6 h-6' src="/fontawesome.png" alt="fontawesome" />
                        <span className='font-semibold ml-4'>Font Awesome</span>
                    </div>

                    <div className='duration-300 flex rounded-md bg-mainalt-black hover:bg-mainhv-black cursor-default p-3 items-center'>
                        <img className='w-6 h-6' src="/svgrepo.png" alt="svgrepo" />
                        <span className='font-semibold ml-4'>Svgrepo</span>
                    </div>

                    <div className='duration-300 flex rounded-md bg-mainalt-black hover:bg-mainhv-black cursor-default p-3 items-center'>
                        <img className='w-6 h-6' src="/vercel.svg" alt="vercel" />
                        <span className='font-semibold ml-4'>Vercel</span>
                    </div>

                    <div className='duration-300 flex rounded-md bg-mainalt-black hover:bg-mainhv-black cursor-default p-3 items-center'>
                        <img className='w-6 h-6' src="/antd.png" alt="antd" />
                        <span className='font-semibold ml-4'>Ant Design</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
