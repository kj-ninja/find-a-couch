<template>
    <li class="request-item">
        <div class="box">
            <article class="media">
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>{{name}}</strong> <small>31m ago</small>
                            <br>
                            {{ message }}
                        </p>
                    </div>
                    <nav class="level is-mobile">
                        <div class="level-left">
                            <a class="level-item" aria-label="reply" :href="emailLink">
                                <span class="icon is-small">
                                  <i class="fas fa-reply" aria-hidden="true"></i>
                                </span>
                            </a>
                        </div>
                    </nav>
                </div>
            </article>
        </div>
    </li>
</template>

<script>
export default {
    props: ['email', 'message', 'name'],
    data() {
        return {
            isActive: true
        }
    },
    computed: {
        emailLink() {
            return 'mailto:' + this.email;
        },
        defaultName() {
            return this.name;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>