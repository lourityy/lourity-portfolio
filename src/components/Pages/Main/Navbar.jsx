import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className='flex justify-start'>
                <span className="top-20 left-20 right-20 shadow-[0_0_1000px_130px_#0ea5e9]"></span>
            </div>
            <div className='flex justify-center'>
                <span className="shadow-[0_0_1000px_90px_#0ea5e9]"></span>
            </div>
            <div className='flex justify-end'>
                <span className="shadow-[0_0_1000px_130px_#0ea5e9]"></span>
            </div>

            <div className='flex justify-center sm:justify-between p-2 py-4 mt-4 mx-2 sm:mx-8 lg:mx-60 text-center bg-gray-700 rounded-full shadow-md'>
                <div className='mt-1 hidden sm:block'>
                    <span className='font-bold m-8 text-md'>Lourity</span>
                </div>
                <div className='flex gap-2 sm:border rounded-2xl border-sky-500 px-2'>
                    <a rel='nofollow' onClick={() => navigate('/')} className='cursor-pointer duration-300 font-medium rounded-md px-3 py-1 hover:text-sky-300'>Anasayfa</a>
                    <a rel='nofollow' onClick={() => navigate('/projects')} className='cursor-pointer duration-300 font-medium rounded-2xl px-3 py-1 hover:text-sky-300'>Projeler</a>
                    <a rel='nofollow' onClick={() => navigate('/about')} className='cursor-pointer duration-300 font-medium rounded-2xl px-3 py-1 hover:text-sky-300'>Hakkımda</a>
                </div>
                <div className='flex gap-4'>
                    <a rel='nofollow' href='https://discord.com/users/1123906177923813396' target='_blank' className="invisible sm:visible duration-300 cursor-pointer hover:bg-gray-900 w-8 h-8 rounded-full hidden sm:flex items-center justify-center">
                        <i className="bi bi-discord"></i>
                    </a>
                    <a rel='nofollow' href='https://github.com/lourityy' target='_blank' className="invisible sm:visible duration-300 cursor-pointer hover:bg-gray-900 w-8 h-8 rounded-full hidden sm:flex items-center justify-center">
                        <i className="bi bi-github"></i>
                    </a>
                    <a rel='nofollow' href='https://www.youtube.com/@lourityy' target='_blank' className="invisible sm:visible duration-300 cursor-pointer hover:bg-gray-900 w-8 h-8 rounded-full hidden sm:flex items-center justify-center">
                        <i className="bi bi-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
