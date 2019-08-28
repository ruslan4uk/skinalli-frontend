<template>
    <v-footer dark padless>
        <v-overlay :value="loader">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>

        <v-card flat tile class="primary darken-2 white--text text-center" >
            <v-card-text>
                <v-btn class="mx-4 white--text" icon >
                    <!-- <v-icon size="24px">{{ icon }}</v-icon> -->
                </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. 
                Mauris cursus commodo interdum. Praesent ut risus eget metus luctus 
                accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim 
                a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula 
                lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus 
                iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum 
                tempor vel ut orci. Orci varius natoque penatibus et magnis dis 
                parturient montes, nascetur ridiculus mus.
            </v-card-text> 

            <v-divider></v-divider>

            <v-card-text class="white--text">
                <strong>Vuetify</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            overlay: true
        }
    },

    computed: {
        ...mapGetters({ loader: 'init/loader' })
    },
}
</script>

<style scoped>

</style>