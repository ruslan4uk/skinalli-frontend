<template>
    <v-app>
        <VTNavbar/>
        
        <v-content>

            <VTSearch/>

            <VTLeftNavigation v-if="authenticated"/>

            <nuxt/>

            <VTFooter/>
            
        </v-content>

    </v-app>
</template>

<script>
import VTLeftNavigation from '@/layouts/partials/VTLeftNavigation'
import VTNavbar from '@/layouts/partials/VTNavbar'
import VTSearch from '@/layouts/partials/VTSearch'
import VTFooter from '@/layouts/partials/VTFooter'
export default {
    components: {
        VTNavbar,
        VTSearch,
        VTFooter,
        VTLeftNavigation,
    },
}
</script>

<style scoped>

</style>