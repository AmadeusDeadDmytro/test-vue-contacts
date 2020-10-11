<template>
    <div class="add_form">
        <p class="title">New Field</p>
        <Input label="Name" id="name" @handle-input="handleInput" />
        <Input label="Value" id="value" @handle-input="handleInput" />

        <div class="add_form_btns">
            <Button text="Cancel" @click="toggleAddField()" />
            <Button text="Save" />
        </div>
    </div>
</template>

<script>
    import Input from "./Input";
    import Button from "./Button";

    import { useStore } from "vuex";

    export default {
        name: "Home",
        components: { Input, Button },
        data() {
            return {
                form: {
                    name: "",
                    value: "",
                },
            };
        },
        setup() {
            const store = useStore();

            const toggleAddField = () => {
                store.commit("toggleAddField");
            };

            return { toggleAddField };
        },
        methods: {
            handleInput(value) {
                this.form[value.id] = value.text
            },
        },
    };
</script>

<style lang="scss" scoped>
    .add_form {
        .add_form_btns {
            display: flex;
            justify-content: flex-start;

            .btn {
                margin-right: 10px;
            }
        }
    }
</style>
