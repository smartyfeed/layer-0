/** @type {import('@sveltejs/kit').Handle} */
import { redirect } from '@sveltejs/kit';
import { handle as authenticationHandle } from './auth';
import { sequence } from '@sveltejs/kit/hooks';
 
// @ts-ignore
async function authorizationHandle({ event, resolve }) {
  if (event.url.pathname.startsWith('/')) {
    const session = await event.locals.auth();
    if (!session) {
      throw redirect(303, '/auth/signin');
    }
  }
 
  return resolve(event);
}
 
export const handle = sequence(authenticationHandle, authorizationHandle)