<script context="module">
    export async function preload({params}, {token}) {
        if (!token) {
            this.redirect(302, `/login`);
        }
    }
</script>
<script>
    import {goto, stores} from '@sapper/app';
    import {post} from 'utils.js';

    let accountFrom = '';
    let accountTo = '';
    let amount = '';
    let explanation = '';
    let error = null;

    async function submit(event) {
        const response = await post(`auth/createTransaction`, {accountFrom, accountTo, amount, explanation});
        error = response.error;
        if (response.id) {
            goto('/overview');
        }
    }

</script>
<svelte:head>
    <title>Transactions</title>
</svelte:head>

<div class="auth-page">
    <div class="container page">
        <div class="row">
            <div class="col-md-6 offset-md-3 col-xs-12">
                <h1 class="text-xs-center">Transactions</h1>

                {#if error}
                    <div class="alert alert-danger" role="alert">{error}</div>
                {/if}

                <form on:submit|preventDefault={submit}>
                    <fieldset class="form-group">
                        <input bind:value={accountFrom} class="form-control form-control-lg" placeholder="Account From"
                               required
                               type="text">
                    </fieldset>
                    <fieldset class="form-group">
                        <input bind:value={accountTo} class="form-control form-control-lg" placeholder="Account To"
                               required
                               type="text">
                    </fieldset>
                    <fieldset class="form-group">
                        <input bind:value={amount} class="form-control form-control-lg" placeholder="Amount"
                               required
                               type="number">
                    </fieldset>
                    <fieldset class="form-group">
                        <input bind:value={explanation} class="form-control form-control-lg" placeholder="Explanation"
                               required
                               type="text">
                    </fieldset>
                    <button class="btn btn-lg btn-primary pull-xs-right">
                        Transaction
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
