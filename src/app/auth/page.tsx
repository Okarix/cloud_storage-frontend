import { Login } from '../ui/login';
import { SignUp } from '../ui/sign-up';
import { Tabs } from '../ui/tabs';

export default function Auth() {
	const tabs = [
		{
			title: 'Войти',
			value: 'login',
			content: <Login />,
		},
		{
			title: 'Зарегистрироваться',
			value: 'sign-up',
			content: <SignUp />,
		},
	];

	return (
		<div className='h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10'>
			<Tabs tabs={tabs} />
		</div>
	);
}
