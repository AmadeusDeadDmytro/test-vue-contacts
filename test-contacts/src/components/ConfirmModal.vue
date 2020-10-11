<template>
    <div class="confirm_modal">

        <div class="confirm_modal_wrap">
            <h1 class="confirm_modal_title">{{ questionProp }}</h1>

            <div class="confirm_modal_btn">
                <Button
                    text="no"
                    @click="emitToParent"
                />
                <Button
                    text="yes"
                    @click="agreeDelete"
                />
            </div>
        </div>
        <div @click="emitToParent" class="confirm_modal_background"></div>
    </div>
</template>

<script>
    import Button from "../components/Button";

    export default {
        name: "Home",
        components: { Button },
        props: ['id', 'question'],
        data() {
            return {
                contactId: this.id,
                questionProp: this.question
            }
        },
        methods: {
            emitToParent () {
                this.$emit('close-modal', false)
            },
            agreeDelete() {
                this.$emit('delete-agree', this.contactId)
            }
        }

    };
</script>

<style lang="scss" scoped>
    @import "../scss/colors.scss";

    .confirm_modal {
        .confirm_modal_background {
            width: 100%;
            height: 100%;
            position: fixed;
            z-index: 100;
            left: 0;
            top: 0;
            filter: blur(4px);
        }

        .confirm_modal_wrap {
            left: 50%;
            top: 42%;
            display: flex;
            justify-content: center;
            position: fixed;
            z-index: 500;
            padding: 0 40px;
            background-color: $dark;
            border: 1px solid $light;
            border-radius: 10px;
            box-sizing: border-box;
            transition: all 0.3s ease-out;
            flex-direction: column;
            max-width: 450px;
            color: $light;
            transform: translateX(-50%);

            .confirm_modal_title {
                font-size: 24px;
                margin-top: 30px;
                text-align: center;
            }

            .confirm_modal_btn {
                margin: 30px 0 30px 0;
                display: flex;
                justify-content: space-around;
            }
        }

    }

</style>
