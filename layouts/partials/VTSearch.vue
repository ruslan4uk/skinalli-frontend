<template>
        <v-row>
            <v-col cols="12" class="py-0 my-0">
                <v-toolbar dense class="py-2 py-sm-0">
                    <v-text-field
                        hide-details
                        prepend-icon="search"
                        single-line
                        placeholder="Введите для поиска"
                        @keyup.enter="alert('Enter')"
                    ></v-text-field>

                    <v-menu left offset-y max-width="100%">
                        <template v-slot:activator="{ on }">
                            <v-btn class="ml-5" outlined color="primary" v-on="on">
                                <v-icon left dark>more_vert</v-icon>
                                Категории
                            </v-btn>
                        </template>

                        <v-list dense>
                            <v-container class="custom-card-category py-0">
                                <v-row>
                                    <v-col cols="12" md="6" class="pa-0" v-if="initCategory" v-for="(item, i) in initCategory" :key="i">
                                        <v-list-item :to="{ name: 'catalog-subcatalog', params: { subcatalog: item.slug} }" >
                                            <v-list-item-title>{{ item.name }}</v-list-item-title>
                                        </v-list-item>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-list>
                    </v-menu>

                </v-toolbar>
            </v-col>
        </v-row>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

    methods: {
        alert(text) {
            alert(text)
        }
    },
}
</script>

<style scoped lang="sass">
.custom-card-category
    max-width: 500px
</style>