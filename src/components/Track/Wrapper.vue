<template>
  <div class="flex-wrapper" :style="container && {'max-width': container + 'px'}" :class="[basis, {container}]">
      <div v-if="row" class="row">
          <slot></slot>
      </div>
      <slot v-else></slot>
  </div>
</template>

<script>
export default {
    props: {
        basis: String,
        row: Boolean,
        container: Number
    }
}
</script>

<style lang="sass" scoped>
    .flex-wrapper
        display: flex
        flex-wrap: wrap
        & .col
            padding: 0 15px
            max-width: 100%
        & .row
            flex-grow: 1
        &.container
            margin: 0 auto
        &.col-1
            & .col
                flex-basis: 8.333333%
                max-width: 8.333333%
        &.col-2
            & .col
                flex-basis: 16.666667%
                max-width: 16.666667%

        &.col-3
            & .col
                flex-basis: 25%
                max-width: 25%
        
        &.col-4
            & .col
                flex-basis: 33.333333%
                max-width: 33.333333%

        &.col-5
            & .col
                flex-basis: 41.666667%
                max-width: 41.666667%

        &.col-6
            & .col
                flex-basis: 50%
                max-width:  50%

        &.col-7
            & .col
                flex-basis: 58.333333%
                max-width: 58.333333%

        &.col-8
            & .col
                flex-basis: 66.666667%
                max-width: 66.666667%

        &.col-9
            & .col
                flex-basis: 75%
                max-width: 75%
        
        &.col-10
            & .col
                flex-basis: 33.333333%
                max-width: 33.333333%

        &.col-11
            & .col
                flex-basis: 91.666667%
                max-width: 91.666667%

        &.col-12
            & .col
                flex-basis: 100%
                max-width: 100%
        
            
</style>