'use client';
import DashboardCard from '../ui/dashboard-card';
import { Menu, ConfigProvider } from 'antd';
import { DeleteOutlined, FileImageOutlined, FileOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
	const router = useRouter();
	return (
		<DashboardCard>
			<main className='grid grid-cols-[0.3fr_1fr]'>
				<div className='w-4/12'>
					<button className='text-white'>hello</button>
					<ConfigProvider
						theme={{
							components: {
								Menu: {
									darkItemBg: 'black',
									darkItemSelectedBg: 'gray',
								},
							},
						}}
					>
						<Menu
							mode='inline'
							theme='dark'
							items={[
								{
									key: `/dashboard`,
									icon: <FileOutlined />,
									label: `Файлы`,
									onClick: () => router.push('/dashboard'),
								},
								{
									key: `/dashboard/photos`,
									icon: <FileImageOutlined />,
									label: `Фото`,
									onClick: () => router.push('/dashboard/photos'),
								},
								{
									key: `/dashboard/trash`,
									icon: <DeleteOutlined />,
									label: `Корзина`,
									onClick: () => router.push('/dashboard/trash'),
								},
							]}
						/>
					</ConfigProvider>
				</div>

				<div className='w-4/6'>
					<h1 className='text-white'>Files</h1>
				</div>
			</main>
		</DashboardCard>
	);
}
