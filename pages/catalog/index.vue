<template>
    <div>
        <v-container class="px-lg-5">
            <v-row>
                <v-col cols="12" class="mb-0 pb-0">
                    <h3 class="headline font-weight-bold">Каталог изображений</h3>
                    <p class="body-2 grey--text">Найдено более 1 000 изображений</p>
                </v-col>
                <v-col cols="12" md="6" lg="6" v-for="n in 20" :key="n">
                    <v-img
                        src="https://skinali.s3.us-east-2.amazonaws.com/skinali/1/skinali-1_preview.jpg"
                    ></v-img>
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

}
</script>

<style lang="sass" scoped>

</style>