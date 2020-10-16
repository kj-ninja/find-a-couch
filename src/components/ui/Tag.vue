<template>
    <b-tag :type="tagClass" size="is-medium">{{tagName}}</b-tag>
</template>

<script>
export default {
    props: ['tag', 'index'],
    data() {
        return {
            tagsClasses: ['is-info is-light', 'is-success is-light', 'is-primary is-light', 'is-warning is-light']
        }
    },
    computed: {
        tagClass() {
            return this.tagsClasses[this.index];
        },
        tagName() {
            const string = this.tag;
            return string[0].toUpperCase() + string.slice(1);
        }
    }
}
</script>
