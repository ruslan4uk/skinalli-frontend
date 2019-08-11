<template>
    <v-container class="mt-5">
        <v-layout wrap>
            <v-flex xs12>
                <v-data-table :headers="headers" :items="photos" sort-by="calories" class="elevation-1 mb-5">
                    <template v-slot:top>
                        <v-toolbar flat color="white">
                            <v-toolbar-title>Изображения</v-toolbar-title>
                            <v-divider class="mx-4" inset vertical></v-divider>
                            <v-text-field
                                v-model="search"
                                append-icon="search"
                                label="Поиск"
                                single-line
                                hide-details
                                class="mr-5"
                            ></v-text-field>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" dark class="mb-2" @click.prevent="createPhoto()">Создать</v-btn>
                        </v-toolbar>
                    </template>
                    <template v-slot:item.action="{ item }">
                        <v-icon small class="mr-2" @click="$router.push({name: 'admin-photos-id', params: { id: item.id }})" >edit</v-icon>
                        <v-icon small @click="deleteItem(item)" >delete</v-icon>
                    </template>
                    <template v-slot:no-data>
                        <v-btn color="primary" @click="initialize">Reset</v-btn>
                    </template>
                </v-data-table>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    middleware: ['auth'],

    data() {
        return {
            search: '',
            headers: [
                { text: 'Название', align: 'left', value: 'name' },
                { text: 'Действие', align: 'right', value: 'action', sortable: false },
            ],
            photos: [],
        }
    },

    created () {
        this.initialize ()
    },

    methods: {
        initialize() {
            this.$axios.get(this.$route.path).then(res => {
                this.photos = res.data.data 
            })
        },
        createPhoto() {
            this.$axios.put(this.$route.path + '/0').then(res => {
                console.log(res);
                
                this.$router.push({ name: 'admin-photos-id', params: { id: res.data.data } })
            })
        }
    },
}
</script>

<style scoped>

</style>