<template>
    <div class="confirm_modal">
        <div  class="confirm_modal_background"></div>
        <div class="confirm_modal_wrap">
            <h1 class="confirm_modal_title">Do you want to delete this contact ?</h1>

            <div class="confirm_modal_btn">
                <Button
                        text="no"
                        v-if="!isOpenAddForm"
                        @click="toggleAddForm()"
                />
                <Button
                        text="yes"
                        v-if="!isOpenAddForm"
                        @click="toggleAddForm()"
                />
            </div>
        </div>

        <AddContact v-if="isOpenAddForm" />
    </div>
</template>

<script>
    import Button from "../components/Button";
    import AddContact from "../components/AddContact";

    export default {
        name: "Home",
        components: { Button, AddContact },

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
            left: 45%;
            top: 12%;
            display: flex;
            justify-content: center;
            position: fixed;
            z-index: 1;
            padding: 0 40px;
            background-color: $dark;
            border: 1px solid $light;
            box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            box-sizing: border-box;
            transition: all 0.3s ease-out;
            flex-direction: column;
            max-width: 450px;
            color: $light;

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
