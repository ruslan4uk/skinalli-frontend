<template>
    <v-container class="mt-5">
        <v-layout wrap>
            <v-flex xs12>
                <v-data-table 
                    :headers="headers" 
                    :items="photos" 
                    sort-by="created_at" 
                    sort-desc
                    class="elevation-1 mb-5"
                    :loading="loading" 
                    loading-text="Загружаем"
                    :search="search">
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
                    <template v-slot:item.image="{ item }">
                        <v-img
                            :src="item.image_preview_path + '#' + Math.random()"
                            :lazy-src="item.image_lazy"
                            aspect-ratio="1"
                            class="grey lighten-2"
                            max-width="400"
                            max-height="100"
                        ></v-img>
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
                { text: 'Изображение', align: 'left', value: 'image' },
                { text: 'Название', align: 'left', value: 'name' },
                { text: 'Дата', align: 'left', value: 'created_at' },
                { text: 'Действие', align: 'right', value: 'action', sortable: false },
            ],
            photos: [],
            loading: true,
        }
    },

    created () {
        this.initialize ()
    },

    methods: {
        initialize() {
            this.$axios.get(this.$route.path).then(res => {
                this.photos = res.data.data 
                this.loading = false
                
            })
        },
        createPhoto() {
            this.$axios.put(this.$route.path + '/0').then(res => {
                console.log(res);
                
                this.$router.push({ name: 'admin-photos-id', params: { id: res.data.data } })
            })
        },
        deleteItem (item) {
            const index = this.photos.indexOf(item)
            confirm('Are you sure you want to delete this item?') && this.photos.splice(index, 1)
            this.$axios.delete(this.$route.path + '/' + item.id).then(res => {
                console.log(res);
            })
        },
    },
}
</script>

<style scoped>

</style>