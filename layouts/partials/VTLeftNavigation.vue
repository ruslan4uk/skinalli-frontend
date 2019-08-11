<template>
     <v-navigation-drawer expand-on-hover permanent absolute color="light">
        <v-list nav dense >
            <v-list-item link :to="{ name: 'admin' }" exact>
                <v-list-item-icon>
                    <v-icon>dashboard</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item>
            <v-list-item link :to="{ name: 'admin-category' }">
                <v-list-item-icon>
                    <v-icon>category</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Категории</v-list-item-title>
            </v-list-item>
            <v-list-item link :to="{ name: 'admin-photos' }">
                <v-list-item-icon>
                    <v-icon>burst_mode</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Картинки</v-list-item-title>
            </v-list-item>
            <v-list-item link :to="{ name: 'admin-tags' }">
                <v-list-item-icon>
                    <v-icon>filter_none</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Теги</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>