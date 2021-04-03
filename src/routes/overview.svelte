<script context="module">
    export async function preload({params}, {token}) {
        console.log(token)
        if (!token) {
            this.redirect(302, `/login`);
        }
    }
</script>
<script>
    import UserData from "../components/UserData.svelte";
    import LastOperations from "../components/LastOperations.svelte";
</script>

<UserData/>
<LastOperations/>