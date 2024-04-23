export default function DashboardCard({ children }: { children: React.ReactNode }) {
	return (
		<div className='border border-white/[0.2]  mt-6 w-4/6 mx-auto p-4 relative h-[30rem] bg-black'>
			<Icon className='absolute h-6 w-6 -top-3 -left-3 text-white' />
			<Icon className='absolute h-6 w-6 -bottom-3 -left-3 text-white' />
			<Icon className='absolute h-6 w-6 -top-3 -right-3 text-white' />
			<Icon className='absolute h-6 w-6 -bottom-3 -right-3 text-white' />

			{children}
		</div>
	);
}

export const Icon = ({ className, ...rest }: any) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke='currentColor'
			className={className}
			{...rest}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M12 6v12m6-6H6'
			/>
		</svg>
	);
};
