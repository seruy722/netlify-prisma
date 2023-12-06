import type { PageServerLoad, Actions } from './$types';
import { auth } from '$lib/server/lucia';
import { redirect } from '@sveltejs/kit';
import { getRouterPath } from '$lib/settings';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	console.log('session2', session);
	if (session) {
		throw redirect(302, getRouterPath('main'));
	}
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const formData = Object.fromEntries(await request.formData()) as Record<string, string>;
		console.log('formData', formData);
		const { email, password } = formData;

		try {
			const user = await auth.createUser({
				key: {
					providerId: 'email',
					providerUserId: email,
					password
				},
				attributes: {
					username: 'user123',
					email,
					password
				}
			});
			console.log('user', user);

			const session = await auth.createSession({
				userId: user.userId,
				attributes: {
					createdAt: new Date()
				}
			});

			console.log('session', session);
			locals.auth.setSession(session);
		} catch (error) {
			console.log(error);
		}
	}
};
