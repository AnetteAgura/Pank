<script context="module">
    export async function preload({params}, {token}) {
        if (!token) {
            this.redirect(302, `/login`);
        }
    }
</script>
<script>
    import UserData from "../components/UserData.svelte";
</script>

<UserData/>
