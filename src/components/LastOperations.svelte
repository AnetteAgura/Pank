<script>
    import {post} from "utils.js";

    async function getTransactions() {
        return await post('auth/getTransactions').catch(error => {
            alert(error.message)
        })
    }
</script>

<h1>Last Transactions</h1>

{#if process.browser}

    {#await getTransactions()}

        <p>Loading</p>

    {:then transactions}

        <table class="table table-striped">
            <thead>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Sum</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {#each transactions as transaction}
                <tr>
                    <td><b>{transaction.senderName}</b><br>
                        {transaction.explanation}</td>
                    <td>{transaction.createdAt}
                    </td>
                    <td style="color: {transaction.amount < 0? 'red': 'green'}">{transaction.amount} {transaction.currency}</td>
                    <td><b>{transaction.status}</b><br>{transaction.statusDetail}</td>
                </tr>
            {/each}
            </tbody>
        </table>

    {/await}

{/if}