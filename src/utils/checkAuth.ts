// import { GetServerSidePropsContext } from 'next';
// import nookies from 'nookies';
// import axios from 'axios';
// import * as Api from '@/api';
// import { redirect } from 'next/navigation';

// export const getMe = (ctx:GetServerSidePropsContext ) => {
// 	const {_token} = nookies.get(ctx)

// 	axios.defaults.headers.Authorization = "Bearer" + _token;

// 	try {
// 		const data =  Api.auth.getMe();

// 		return data
// 	} catch (err) {
// 		redirect('/auth')
// 	}

// }
