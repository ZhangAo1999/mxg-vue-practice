<template>
    <div>
        <div class="main">
            <div class="text">
                <!-- AppHeader -->
                <app-header></app-header>
                <div class="text1">
                    <app-link></app-link>
                    <div style="margin-top: 20px"></div>
                    <router-view style="padding: 0px 20px;" id="main"></router-view>
                    <div style="margin-top: 40px"></div>
                    <app-footer></app-footer>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AppHeader from '../AppHeader'
    import AppLink from './Link'
    import AppFooter from '../AppFooter'

    export default {
        props: ['list'],
        components: {AppHeader, AppLink, AppFooter}
    }
</script>