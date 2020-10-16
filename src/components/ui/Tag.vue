<template>
    <b-tag :type="tagClass" size="is-medium">{{ tagName }}</b-tag>
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
            if (this.tag === 'frontend') return 'is-success is-light';
            if (this.tag === 'backend') return 'is-primary is-light';
            if (this.tag === 'fullstack') return 'is-warning is-light';
            if (this.tag === 'designer') return 'is-info is-light';
            if (this.tag === 'management') return 'is-danger is-light';
            if (this.tag === 'career') return 'is-light';
            else return 'is-light';
        },
        tagName() {
            const string = this.tag;
            return string[0].toUpperCase() + string.slice(1);
        }
    }
}
</script>
