<template>
    <div>
        <div class="main">
            <div class="text">
                <!-- AppHeader -->
                <app-header></app-header>
                <div class="text1">
                    题目列表<br>
                    <ol>
                        <li v-for="(value, index) in list" :key="index">{{ value }}</li>
                    </ol>
                    <ol>
                        <li v-for="(value, index) in list" :key="index">{{ value }}</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AppHeader from '../AppHeader'

    export default {
        props: ['list'],
        components: {AppHeader}
    }
</script>