<script>
    import {goto, stores} from '@sapper/app';

    const {session} = stores();
    import {post} from "utils.js";

    let userData = {accounts: []};
    $: availableFunds = userData.accounts ? userData.accounts.reduce((result, {balance}) =>
        result + balance, 0) : 0;
    let name = "Unknown user";

    async function getData() {
        await post('api/getData').then(response => {
            name = response.name;
            userData = response;
        }).catch(error => {
            alert(error)
        });
    }

    process.browser ? getData() : "server";
    console.log(process.browser ? "browser" : "server");

</script>

<style>
    p {
        margin: 0;
    }

    section {
        margin-bottom: 15px;
        margin-top: 15px;
    }
</style>

<h1>{userData.name}</h1>

<section>Available funds
    <p style="padding-left: 35px; font-size: xx-large">{availableFunds}</p>
</section>

<section class="funds">
    <p>Account number</p>

    <ul style="list-style-type: none">
        {#each userData.accounts as account}
            <li>
                {account.number}
            </li>
        {/each}
    </ul>
</section>