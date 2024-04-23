'use client';

import { Avatar, Button, Popover } from 'antd';
import Link from 'next/link';
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import * as Api from '@/api';
import { useRouter } from 'next/navigation';

export default function NavBar() {
	const router = useRouter();

	const onClickLogOut = () => {
		if (window.confirm('Вы действительно хотите выйти?')) {
			Api.auth.logOut();
			router.push('/');
		}
	};

	return (
		<nav className='fixed rounded-full border bg-black border-white/[0.2]  shadow-input flex justify-around items-center px-6 py-4 max-w-lg mx-auto mt-2 z-50 inset-x-0'>
			<div className=' flex space-x-4'>
				<NavItem
					item='Главная'
					link='/dashboard'
				/>
				<NavItem
					item='Профиль'
					link='/dashboard/profile'
				/>
			</div>

			<Popover
				overlayInnerStyle={{
					backgroundColor: 'black',
					border: '1px solid white',
					padding: 0,
				}}
				content={
					<Button
						type='default'
						className='bg-black text-white'
						onClick={onClickLogOut}
					>
						Выйти
					</Button>
				}
				trigger='click'
				className='cursor-pointer'
			>
				<Avatar
					size='large'
					icon={<UserOutlined />}
				/>
			</Popover>
		</nav>
	);
}

export const NavItem = ({ item, link }: { item: string; link: string }) => {
	return (
		<div className='relative '>
			<Link
				href={link}
				className='cursor-pointer hover:opacity-[0.6] text-white'
			>
				{item}
			</Link>
		</div>
	);
};
