<template>
    <v-layout>
        <v-row>
            <v-col cols="12 my-0 py-0">
                <v-toolbar dense >
                    <v-text-field
                        hide-details
                        prepend-icon="search"
                        single-line
                        placeholder="Введите для поиска"
                        @keyup.enter="alert('Enter')"
                    ></v-text-field>

                    <v-btn class="ml-5" outlined color="primary">
                        <v-icon left dark>more_vert</v-icon>
                        Категории
                    </v-btn>
                </v-toolbar>
            </v-col>
        </v-row>
    </v-layout>
</template>

<script>
export default {
    methods: {
        alert(text) {
            alert(text)
        }
    },
}
</script>

<style scoped>

</style>