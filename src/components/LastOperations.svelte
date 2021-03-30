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

<h1>Last Operations</h1>

<table class="funds">
    <thead>
    <tr>
        <th>Name</th>
        <th>Date</th>
        <th>Sum</th>
    </tr>
    </thead>
    <tbody>
    {#each transactions as transaction}
        <tr>
            <td>
                {transaction.name}
            </td>
            <td>
                {transaction.date}
            </td>
            <td>
                {transaction.sum}
            </td>
        </tr>
    {/each}
    </tbody>
</table>