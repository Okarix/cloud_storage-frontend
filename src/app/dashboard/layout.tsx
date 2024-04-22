import { Background } from '../ui/background';
import NavBar from '../ui/navbar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<main>
			<NavBar />
			<Background>{children}</Background>
		</main>
	);
}
