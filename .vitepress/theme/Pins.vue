<!-- Based of VPFeatures (https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/components/VPFeatures.vue) -->

<script setup>
import { computed } from 'vue'
import Pin from './Pin.vue'

const props = defineProps({
    pins: Array
})

const grid = computed(() => {
    const length = props.pins.length

    if (!length) {
        return
    } else if (length === 2) {
        return 'grid-2'
    } else if (length === 3) {
        return 'grid-3'
    } else if (length % 3 === 0) {
        return 'grid-6'
    } else if (length > 3) {
        return 'grid-4'
    }
})
</script>

<template>
    <div v-if="pins" class="Pins">
        <div class="container">
            <div class="items">
                <div v-for="pin in pins" :key="pin.title" class="item" :class="[grid]">
                    <Pin :icon="pin.icon" :title="pin.title" :details="pin.details" :link="pin.link"
                        :link-text="pin.linkText" :rel="pin.rel" :target="pin.target" />
                </div>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.Pins {
    position: relative;
    padding: 0 24px;
}

@media (min-width: 640px) {
    .Pins {
        padding: 0 48px;
    }
}

@media (min-width: 960px) {
    .Pins {
        padding: 0 64px;
    }
}

.container {
    margin: 0 auto;
    max-width: 1152px;
}

.items {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
}

.item {
    padding: 8px;
    width: 100%;
}

@media (min-width: 640px) {

    .item.grid-2,
    .item.grid-4,
    .item.grid-6 {
        width: calc(100% / 2);
    }
}

@media (min-width: 768px) {

    .item.grid-2,
    .item.grid-4 {
        width: calc(100% / 2);
    }

    .item.grid-3,
    .item.grid-6 {
        width: calc(100% / 3);
    }
}

@media (min-width: 960px) {
    .item.grid-4 {
        width: calc(100% / 4);
    }
}
</style>