<template>
    <b-tag :type="type" size="is-medium">{{content}}</b-tag>
</template>

<script>
export default {
    props: ['type', 'content']
}
</script>
