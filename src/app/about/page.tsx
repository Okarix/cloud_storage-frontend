import Image from 'next/image';
import panther from '../../../public/panther.jpg';
import Link from 'next/link';

export default function About() {
	return (
		<main className='flex flex-col items-center justify-center py-5'>
			<h1 className='text-white font-bold mb-3 text-2xl'>О проекте</h1>
			<p className='text-white mb-1'>Данный проект создавался в рамках дипломной работы</p>
			<div className='flex gap-5'>
				<p className='text-white'>Тема: Разработка облачного хранилища на основе инструментов Web technology</p>
				<p className='text-white mb-10'>Подготовил: Даткаев Адиар</p>
			</div>
			<Link
				href='/'
				className='px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]'
			>
				Назад
			</Link>
			<Image
				src={panther}
				width={200}
				height={100}
				alt='Panther'
				className='select-none'
			/>
		</main>
	);
}
