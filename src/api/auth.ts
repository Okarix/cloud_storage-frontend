import axios from '@/core/axios';
import { LoginFormDTO, LoginResponseDTO, RegisterFormDTO, RegisterResponseDTO, User } from './dto/auth.dto';

export const login = async (values: LoginFormDTO): Promise<LoginResponseDTO> => {
	return (await axios.post('/auth/login', values)).data;
};

export const register = async (values: RegisterFormDTO): Promise<RegisterResponseDTO> => {
	return (await axios.post('/auth/register', values)).data;
};

// export const getMe = async (token: string): Promise<User> => {
// 	try {
// 		const response = await axios.get('/users/me', {
// 			headers: {
// 				Authorization: `Bearer ${token}`,
// 			},
// 		});

// 		return response.data;
// 	} catch (error: any) {
// 		throw new Error('Ошибка получения данных пользователя: ' + error.message);
// 	}
// };

export const logOut = () => {
	window.localStorage.removeItem('_token');
};
