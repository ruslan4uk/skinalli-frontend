<template>
    <v-container class="mt-5 mb-5">
        <v-layout wrap>
            <v-flex xs12>
                <!-- <h2 class="mb-5">Изображение</h2> -->
                <v-card tile >
                    <v-card-title>
                        <v-toolbar flat color="white">
                            <v-toolbar-title>Изображение</v-toolbar-title>
                            <v-divider class="mx-4" inset vertical></v-divider>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" class="mb-2" exact :to="{ name: 'admin-photos' }">Назад</v-btn>
                        </v-toolbar>
                    </v-card-title>
                    <v-card-text>

                        <v-divider class="mx-4 mb-5"></v-divider>
                        <v-form @submit.prevent="save()">
                            <v-container grid-list-xl>
                                <v-layout wrap>
                                    <v-flex lg8>
                                        <h2>Основные</h2>
                                        <v-text-field 
                                            v-model="form.name" 
                                            :counter="255" 
                                            label="Заголовок" 
                                            required
                                            :error-messages="errors.name"></v-text-field>
                                        
                                        <v-text-field 
                                            v-model="form.slug" 
                                            :counter="255" 
                                            label="URL (Автоматическая генерация)" 
                                            required></v-text-field>

                                        <v-text-field 
                                            v-model="form.name_photo" 
                                            :counter="255" 
                                            label="Внутренняя нумерация изображения" 
                                            required
                                            :error-messages="errors.name_photo"></v-text-field>
                                        
                                        <v-select 
                                            :items="category" 
                                            v-model="form.photo_category[0]"
                                            :menu-props="{ offsetY: true }"
                                            label="Категория" 
                                            item-text="name"
                                            item-value="id"
                                            required
                                            :error-messages="errors.photo_category"></v-select>
                                        
                                        <v-combobox
                                            v-model="form.photo_tags"
                                            :items="tags"
                                            label="Теги"
                                            multiple
                                            persistent-hint
                                            small-chips
                                            hide-selected
                                            :error-messages="errors.photo_tags">
                                            <template v-slot:no-data>
                                                <v-list-item>
                                                    <v-list-item-content>
                                                        <v-list-item-title>
                                                            Нет подходящих результатов. Нажмите <kbd>enter</kbd> что бы создать
                                                        </v-list-item-title>
                                                    </v-list-item-content>
                                                </v-list-item>
                                            </template>
                                            <template v-slot:selection="data">
                                                    <v-chip
                                                    @dblclick="data.parent.selectItem(data.item)"
                                                    :key="JSON.stringify(data.item)"
                                                    v-bind="data.attrs"
                                                    :input-value="data.selected"
                                                    :disabled="data.disabled"
                                                    @click:close="data.parent.selectItem(data.item)"
                                                    >
                                                    {{ data.item }}
                                                    <v-icon small right
                                                        @click="data.parent.selectItem(data.item)"
                                                        >close</v-icon>
                                                </v-chip>
                                            </template>
                                        </v-combobox>

                                        <p class="body-1 mt-2">Цвет</p>
                                        <v-btn-toggle multiple v-model="form.color" class="mb-2 custom-color">
                                            <v-btn :class="item + ' darken-1'" :value="item" 
                                                v-for="item in ['white','black','red','pink','purple','deep-purple','indigo','blue','teal','green','lime','orange','brown']" :key="item">
                                                <v-icon>done</v-icon>
                                            </v-btn>
                                        </v-btn-toggle>
                                            
                                        <v-textarea 
                                            v-model="form.about" 
                                            class="pb-8" 
                                            :counter="1000" 
                                            label="Описание" 
                                            required
                                            :error-messages="errors.about"></v-textarea>

                                        <v-divider></v-divider>

                                        <v-file-input
                                            v-model="image"
                                            accept="image/*"
                                            class="pt-8"
                                            color="primary accent-4"
                                            label="Изображение"
                                            placeholder="Выберите изображение"
                                            prepend-icon="mdi-paperclip"
                                            outlined
                                            name="skinali"
                                            ref="skinali"
                                            :display-size="1000"
                                            required
                                            @change="onFileChange"
                                            :error-messages="errors.photo_path">
                                        </v-file-input>

                                        <v-img v-if="form.image_preview_path "
                                            :src="form.image_preview_path + '?' + img_rand" >
                                            <template v-slot:placeholder>
                                                <v-layout fill-height align-center justify-center ma-0 >
                                                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                                </v-layout>
                                            </template>    
                                        </v-img>

                                    </v-flex>
                                    
                                    <v-flex >
                                        <h2>СЕО</h2>
                                        <v-text-field 
                                            v-model="form.keywords" 
                                            :counter="255" 
                                            label="Keywords" 
                                            required
                                            :error-messages="errors.keywords"></v-text-field>

                                        <v-textarea 
                                            v-model="form.description" 
                                            :counter="255" 
                                            label="Description" 
                                            required
                                            :error-messages="errors.description"></v-textarea>

                                        <v-switch v-model="form.active" color="primary" label="Опубликовано"></v-switch>
                                    </v-flex>

                                    <v-flex xs12>
                                        <v-btn type="submit" color="primary">Сохранить</v-btn>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>

        <v-snackbar v-model="snackbar" :timeout="3000" right top>{{ snackbarText }}
            <v-btn color="blue" text  @click="snackbar = false">Закрыть</v-btn>
        </v-snackbar>

        <v-overlay :value="overlay">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>

    </v-container>
</template>

<script>
export default {
    middleware: ['auth'],

    data() {
        return {
            overlay: true, 

            snackbar: false,
            snackbarText: '',

            category: [],
            tags: [],

            img_rand: Math.random(),

            image: [],

            form: {
                id: '',
                name: '',
                slug: '',
                name_photo: '',
                color: '',
                about: '',
                image_path: '',
                image_preview_path: '',
                active: '',
                keywords: '',
                description: '',
                created_at: '',
                updated_at: '',

                photo_tags: [],
                photo_category: []
            }

        }
    },
    methods: {
        onFileChange() {
            this.overlay = true
            let skinali = this.$refs.skinali.files; 

            console.log(skinali);
            
            let formData = new FormData
            formData.append('file', this.image)
            formData.append('id', this.$route.params.id)

            this.$axios.post('/admin/photos', formData, {headers: {'Content-Type': 'multipart/form-data'}})
                .then(res => {
                    this.snackbarText = "Фото загружено успешно"
                    this.snackbar = true
                    setTimeout(() => {
                        this.form.image_path = res.data.data.image_path
                        this.form.image_preview_path = res.data.data.image_preview_path
                        this.img_rand = Math.random()
                        this.overlay = false
                    }, 300);
                }).catch(err => {
                    this.overlay = false
                })
        },

        save() {
            this.$axios.put(this.$route.path, this.form).then(res => {
                this.snackbarText = "Сохранено успешно"
                this.snackbar = true
                this.form.slug = res.data.data.slug
                this.category = res.data.category
                this.tags = res.data.tags
            })
        }
    },

    created () {
        this.$axios.get(this.$route.path).then(res => {
            this.category = res.data.category
            this.tags = res.data.tags
            this.form = res.data.data
            this.overlay = false
        });
    },
}
</script>

<style lang="sass" scoped>
.custom-color
    & .v-btn 
        opacity: 1
    & i 
        display: none
    & .v-item--active
        opacity: 0.8
        & i 
            display: block
</style>