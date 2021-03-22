<script>
	let username;
	let password;
	function loginHandler() {
	}
</script>

<svelte:head>
	<title>Log in</title>
</svelte:head>

<h1>Log in</h1>

<form id="test" action="#" method="post">
	<div class="form-group">
		<label for="username">Username</label>
		<input bind:value={username} class="form-control" type="text" name="username" id="username" />
	</div>
	<div class="form-group">
		<label for="password">Password</label>
		<input bind:value={password} class="form-control" type="password" name="password" id="password" />
	</div>
	<p>
		<input type="submit" value="Login" class="btn btn-primary btn-block" on:click={loginHandler}/>
	</p>
</form>
<p>Don't have an account yet? Create one <a href="./register-user">here!</a></p>
