<template>
    <div class="alert alert-success text-center">
        <p>{{msg}}</p>
        <button class="btn btn-primary" @click="onNextQuestion">Next Question</button>
    </div>
</template>
<style>

</style>
<script>
    import { eventBus } from '../../main.js';

    export default{
        props: ['msg'],
        data() {
            return {
                text: ''
            };
        },
        methods: {
            onNextQuestion() {
                this.$emit('confirmed');
            }
        },
        computed: {
            answerText() {
                return eventBus.$on('answerText', (text) => {
                    this.text = text;
                });
            }
        }
    }
</script>
