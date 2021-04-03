<script>
    import {post} from "utils.js";

    async function getUserData() {
        return await post('auth/getUser').then(user => {
            // Calculate funds by summing the balance of accounts
            user.funds = user.accounts.reduce((result, {balance}) =>
                result + balance, 0
            )
            return user
        }).catch(error => {
            alert(error)
        });
    }
</script>

{#if process.browser}

    {#await getUserData()}

        <p>Loading</p>

    {:then user}

        <h1>{user.name}</h1>

        <section>Available funds
            <p style="font-size:xx-large; color: {user.funds > 0 ? 'green': 'red'}">
                {user.funds}
            </p>
        </section>

        <section>Account number
            <ul class="account-list" style="list-style-type: none; padding-left: 0px">
                {#each user.accounts as account}
                    <li>
                        {account.number}
                    </li>
                {/each}
            </ul>
        </section>

    {/await}

{/if}