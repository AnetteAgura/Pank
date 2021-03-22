<!-- register.svelte -->
<script>
    let name;
    let username;
    let password;

    function doPost() {

        fetch("https://barbank.diarainfra.com/sessions", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                username,
                password
            })
        })
    }

</script>

<svelte:head>
    <title>Register</title>
</svelte:head>

<h1>Register</h1>

<form id="test" action="#" method="post">
    <div class="form-group">
        <label for="name">Full name</label>
        <input bind:value={name} class="form-control" type="text" name="name" id="name" />
    </div>
    <div class="form-group">
        <label for="username">Username</label>
        <input bind:value={username} class="form-control" type="text" name="username" id="username" />
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input bind:value={password} class="form-control" type="password" name="password" id="password" />
    </div>
    <p>
        <input type="submit" value="Register" class="btn btn-primary btn-block" on:click={doPost}>
    </p>
</form>
