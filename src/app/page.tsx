import { WavyBackground } from './ui/wavy-background';
import Link from 'next/link';

export default function Home() {
	return (
		<WavyBackground className='max-w-4xl flex flex-col items-center'>
			<p className='text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center'>Небо Ваших Файлов</p>
			<p className='text-base md:text-lg mt-4 text-white font-normal inter-var text-center'>Храните. Делитесь. Вдохновляйтесь.</p>
			<div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-6'>
				<Link
					href='/auth'
					className='px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]'
				>
					Использовать
				</Link>
				<Link
					href='/about'
					className='px-4 py-2  text-white '
				>
					О проекте
				</Link>
			</div>
		</WavyBackground>
	);
}
