<template>

    <section class="p-this__experiment">
        <nuxt-link
            :to="experiment.url"
            class="p-this__experiment-link">

            <h2 class="p-this__experiment-title">{{experiment.name}}</h2>
            <time class="p-this__experiment-time" :datetime="experiment.year">{{experiment.year}}</time>
            <svg :class="['p-this__experiment-arrow', {'p-this__experiment-arrow--out': experiment.isOut}]"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
            </svg>
            <picture class="p-this__experiment-figure">
                <source :srcset="require(`~/assets/images/${experiment.img.desktop}`)" media="(min-width: 500px)">
                <img class="p-this__experiment-img" loading="lazy" :src="require(`~/assets/images/${experiment.img.mobile}`)" 
                    :alt="experiment.name">
            </picture>
        </nuxt-link>
        <ul class="p-this__experiment-list">
            <li v-for="item in experiment.info" :key="item">
                <cite>{{item}}</cite>
            </li>
        </ul>
    </section>

</template>


<script>
    export default {
        props: {
            experiment: {
                type: Object,
                required: true,
            }
        }
    }
</script>


<style lang="scss">

    .p-this__experiment {

        &-link {
            position: relative;
            display: grid;
            grid-template-columns: max-content 1fr;
            grid-template-rows: max-content max-content;
            gap: space(xs);
            text-decoration: none;
            color: inherit;
            background-color: $white;
        }

        &-title {
            grid-column: 1/-1;
            font-size: font-size(xl);
            line-height: 1.3;
            margin-top: indentation(1.3);
            margin-bottom: indentation(1.3);
            
            .is-desktop & {
                position: relative;
                z-index: 1;
                grid-row: 1;
                color: $white;
                mix-blend-mode: difference;
                margin-top: space(s);
            }
        }

        &-time {
            display: block;
            line-height: 1;
            color: $font-color-light;
        }
        &-figure {
            grid-row: 2/4;
            grid-column: 2;
            .is-desktop & {
                grid-row: 1/4;
                transition: filter .1s ease;
                filter: grayscale(1);
            }
            .is-desktop a:hover & {
                transition: filter .3s ease;
                filter: grayscale(0);
            }
        }

        &-img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        &-arrow {
            grid-column: 1;
            width: 3ch;
            height: 3ch;
            margin-left: auto;
            margin-top: -.2em;

            .is-desktop & {
                opacity: 0;
            }
            a:hover &  {
                opacity: 1;
                transition: .4s;
            }
            &--out {
                transform: rotate(-45deg);
            }
        }
        &-list {
            grid-column: 1/-1;
            grid-row: 2;
            display: flex;
            justify-content: flex-end;
            font-size: font-size(s);
            padding-right: .15em;

            li + li {
                &::before {
                    content: "·";
                    padding: 0 .5em;
                }
            }
        }
    }
</style>