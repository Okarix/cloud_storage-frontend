'use client';
import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { cn } from '@/utils/cn';
import { useState } from 'react';
import { RegisterFormDTO } from '@/api/dto/auth.dto';
import * as Api from '@/api';
import { setCookie } from 'nookies';

export function SignUp() {
	const [formData, setFormData] = useState<RegisterFormDTO>({
		email: '',
		password: '',
		fullName: '',
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Form submitted');
		try {
			const { token } = await Api.auth.register(formData);

			setCookie(null, '_token', token, {
				path: '/',
			});

			setFormData({
				email: '',
				password: '',
				fullName: '',
			});
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<div className='max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black'>
			<h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>Зарегистрироваться</h2>

			<form
				className='my-8'
				onSubmit={handleSubmit}
			>
				<div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
					<LabelInputContainer>
						<Label htmlFor='firstname'>Полное имя</Label>
						<Input
							name='fullName'
							id='fullName'
							placeholder='Tyler Durden'
							type='text'
							value={formData.fullName}
							onChange={handleInputChange}
						/>
					</LabelInputContainer>
				</div>
				<LabelInputContainer className='mb-3'>
					<Label htmlFor='email'>Адрес почты</Label>
					<Input
						name='email'
						id='signUpEmail'
						placeholder='example@gmail.com'
						type='email'
						value={formData.email}
						onChange={handleInputChange}
					/>
				</LabelInputContainer>
				<LabelInputContainer className='mb-3'>
					<Label htmlFor='password'>Пароль</Label>
					<Input
						name='password'
						id='signUpPassword'
						placeholder='••••••••'
						type='password'
						value={formData.password}
						onChange={handleInputChange}
					/>
				</LabelInputContainer>

				<button
					className='bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-xl text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]'
					type='submit'
				>
					Регистрация &rarr;
					<BottomGradient />
				</button>
			</form>
		</div>
	);
}

const BottomGradient = () => {
	return (
		<>
			<span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
			<span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
		</>
	);
};

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
	return <div className={cn('flex flex-col space-y-2 w-full', className)}>{children}</div>;
};
