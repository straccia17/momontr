<script lang="ts">
    import type { Category } from './index'

    export let categories: Category[];
</script>

<table>
    <tr>
        <th>ID</th>
        <th>Title</th>
    </tr>
    {#each categories as cat}
    <tr>
        <td>{cat.id}</td>
        <td>{cat.title}</td>
    </tr>
    {/each}
</table>