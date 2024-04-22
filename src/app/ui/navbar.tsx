import React from 'react';

export default function NavBar() {
	return (
		<nav className='fixed rounded-full border bg-black border-white/[0.2]  shadow-input flex justify-center space-x-4 px-6 py-4 max-w-lg mx-auto mt-2 z-50 inset-x-0'>
			<NavItem item='Главная' />
			<NavItem item='Профиль' />
		</nav>
	);
}

export const NavItem = ({ item }: { item: string }) => {
	return (
		<div className='relative '>
			<div className='cursor-pointer hover:opacity-[0.6] text-white'>{item}</div>
		</div>
	);
};
