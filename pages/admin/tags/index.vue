<template>
    <v-container class="mt-5">
        <v-layout wrap>
            <v-flex xs12>
                <!-- <h2 class="mb-5">Категории</h2> -->

                <v-data-table :headers="headers" :items="tags" sort-by="calories" class="elevation-1 mb-5">
                    <template v-slot:top>
                        <v-toolbar flat color="white">
                            <v-toolbar-title>Теги</v-toolbar-title>
                            <v-divider class="mx-4" inset vertical></v-divider>
                            <v-spacer></v-spacer>
                            <v-dialog v-model="dialog" max-width="500px">
                                <template v-slot:activator="{ on }">
                                    <v-btn color="primary" dark class="mb-2" v-on="on">Создать</v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">{{ formTitle }}</span>
                                    </v-card-title>

                                    <v-card-text>
                                        <v-container grid-list-md>
                                            <v-layout wrap>
                                                <v-flex xs12>
                                                    <v-text-field v-model="editedItem.name" label="Название" class="m-0 p-0"></v-text-field>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" text @click="close">Отмена</v-btn>
                                        <v-btn color="blue darken-1" text @click="save">Сохранить</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-toolbar>
                    </template>
                    <template v-slot:item.action="{ item }">
                        <v-icon small class="mr-2" @click="editItem(item)" >edit</v-icon>
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

    data: () => ({
      dialog: false,
      headers: [
        { text: 'Название', align: 'left', value: 'name' },
        { text: 'Действие', align: 'right', value: 'action', sortable: false },
      ],
      tags: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        name: '',
      },
      defaultItem: {
        name: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Добавить тег' : 'Редактировать тег'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
        this.initialize ()
    },

    methods: {
        initialize () {
            this.$axios.get(this.$route.path).then(res => {
                this.tags = res.data.data 
            })
        },

        editItem (item) {
            this.editedIndex = this.tags.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem (item) {
            const index = this.tags.indexOf(item)
            confirm('Are you sure you want to delete this item?') && this.tags.splice(index, 1)
            this.$axios.delete(this.$route.path + '/' + item.id).then(res => {
                console.log(res);                
            })
        },

        close () {
            this.dialog = false
            setTimeout(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            }, 300)
        },

        save () {
            this.$axios.post(this.$route.path, this.editedItem).then(res => {
                console.log(res.data);
                if (this.editedIndex > -1) {
                    Object.assign(this.tags[this.editedIndex], res.data.data)
                } else {
                    this.tags.push(res.data.data)
                }
                this.close()
            });
            
        },
    },
}
</script>

<style scoped>

</style>