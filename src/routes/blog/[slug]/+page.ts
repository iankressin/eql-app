import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../../posts/${params.slug}.md`);

		console.log({
			params,
			post
		});

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		console.log(e);
		throw error(404, `Could not find ${params.slug}`);
	}
}
