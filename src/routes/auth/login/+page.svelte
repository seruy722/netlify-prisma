<script lang="ts">
	import { getRouterPath } from '$lib/settings';
</script>

<form method="POST" class="form-control w-full max-w-xl space-y-3">
	<input
		type="email"
		id="email"
		name="email"
		placeholder="Enter email"
		class="input input-bordered"
		required
		maxlength="50"
		minlength="3"
	/>
	<input
		type="password"
		id="password"
		name="password"
		placeholder="Enter password"
		class="input input-bordered"
		required
		maxlength="8"
		minlength="4"
	/>
	<button class="btn self-center" type="submit">Login</button>
</form>
<p>Don't have an account? <a href={getRouterPath('register')} class="btn-link">Register</a></p>
