<template>
    <div>
        <v-container fluid class="px-lg-5 pa-0 pa-md-2">
            <v-row class="ma-0">
                <v-col cols="12" class="mb-0 pb-0">
                    <h3 class="headline font-weight-bold">Каталог изображений</h3>
                    <p class="body-2 grey--text pb-0 mb-0">Найдено более 1 000 изображений</p>
                    <v-breadcrumbs :items="items" class="pl-0 pt-2 pb-2"></v-breadcrumbs>
                </v-col>
                <v-col cols="12" md="6" lg="6" v-for="n in 20" :key="n" class="px-0 pa-md-1">
                    <v-card :to="{ name: 'images-slug', params: { slug: '312' } }">
                        <v-img 
                            src="https://skinali.s3.us-east-2.amazonaws.com/skinali/1/skinali-1_preview.jpg"
                            aspect-ratio="3.5"></v-img>
                        <v-card-actions class="py-1">
                            <div class="body-2">Title </div>

                            <v-spacer></v-spacer>
                            
                            <v-tooltip top>
                                <template v-slot:activator="{ on }">
                                    <v-btn icon small v-on="on">
                                        <v-icon>favorite</v-icon>
                                    </v-btn>
                                </template>
                                <span>В избранное</span>
                            </v-tooltip>

                            <v-tooltip top>
                                <template v-slot:activator="{ on }">
                                    <v-btn icon small v-on="on">
                                        <v-icon>add_shopping_cart</v-icon>
                                    </v-btn>
                                </template>
                                <span>Купить</span>
                            </v-tooltip>

                            
                        </v-card-actions>
                    </v-card>
                </v-col>
                <v-col cols="12">
                    <div class="text-left">
                        <v-pagination
                            :length="6"
                        ></v-pagination>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    text: 'Dashboard',
                    disabled: false,
                    href: 'breadcrumbs_dashboard',
                },
                {
                    text: 'Link 1',
                    disabled: false,
                    href: 'breadcrumbs_link_1',
                },
                {
                    text: 'Link 2',
                    disabled: true,
                    href: 'breadcrumbs_link_2',
                },
            ],
        }
    },
}
</script>

<style lang="sass" scoped>

</style>