<template>
    <div class="c-logo" v-on:mouseenter="startAnime">
        <nuxt-link class="c-logo__link" to="/" active-class="" exact-active-class="c-logo__link--active">
            <svg class="c-logo__svg" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlns:xlink="http://www.w3.org/1999/xlink" 
                x="0px" y="0px" 
                viewBox="0 0 150 180" 
                xml:space="preserve">

                <path class="c-logo__svg-g" d="M70,75c0,19.3-15.7,35-35,35S0,94.3,0,75s15.7-35,35-35v35H70z"/>
                <polygon class="c-logo__svg-g" points="105,110 70,180 140,180 "/>
                <polygon class="c-logo__svg-g" points="70,180 0,180 0,110 35,145 70,110 "/>
                <path class="c-logo__svg-o" d="M140,75c0,9.7,-3.9,18.4,-10.3,24.7c-6.3,6.3,-15.1,10.3,-24.7,10.3s-18.4,-3.9,-24.7,-10.3c-6.4,-6.3,-10.3,-15,-10.3,-24.7s3.9,-18.4,10.3,-24.7c6.3,-6.4,15,-10.3,24.7,-10.3s18.4,3.9,24.7,10.3c6.4,6.3,10.3,15,10.3,24.7z"/>
            </svg>
            <span class="c-logo__title">carlosgoma.net</span>
        </nuxt-link>
    </div>
</template>

<script>
    export default {

        methods: {

            startAnime: function() {
                this.$anime({
                    targets: '.c-logo__svg-o',
                    d: [
                        { duration: 400, easing: "easeInOutQuart", value: "M139,95c0,9.7,-0.9,19.4,-7.3,25.7c-6.3,6.3,-17.1,-10.7,-26.7,-10.7s-21.4,16.1,-27.7,9.7c-6.4,-6.3,-6.3,-15,-6.3,-24.7s2.9,-22.4,9.3,-28.7c6.3,-6.4,15,-11.3,24.7,-11.3s18.4,4.9,24.7,11.3c6.4,6.3,9.3,19,9.3,28.7z"},
                        { duration: 200, easing: "easeOutQuart", value: "M132,39c0,9.7,1.1,18.4,-5.3,24.7c-6.3,6.4,-12,10.3,-21.7,10.3s-14.4,-3.9,-20.7,-10.3c-6.4,-6.3,-6.3,-15,-6.3,-24.7s-1.1,-20.4,5.3,-26.7c6.3,-6.4,12,-10.3,21.7,-10.3s15.4,3.9,21.7,10.3c6.4,6.3,5.3,17,5.3,26.7z"},
                        { duration: 100, easing: "easeInOutSine", value: "M144,39c0,9.7,-0.9,11.4,-7.3,17.7c-6.3,6.4,-22,7.3,-31.7,7.3s-24.4,-1.9,-30.7,-8.3c-6.4,-6.3,-8.3,-7,-8.3,-16.7s0.9,-13.4,7.3,-19.7c6.3,-6.4,22,-7.3,31.7,-7.3s25.4,0.9,31.7,7.3c6.4,6.3,7.3,10,7.3,19.7z"},
                        { duration: 500, easing: "easeOutBounce", value: "M140,75c0,9.7,-3.9,18.4,-10.3,24.7c-6.3,6.3,-15.1,10.3,-24.7,10.3s-18.4,-3.9,-24.7,-10.3c-6.4,-6.3,-10.3,-15,-10.3,-24.7s3.9,-18.4,10.3,-24.7c6.3,-6.4,15,-10.3,24.7,-10.3s18.4,3.9,24.7,10.3c6.4,6.3,10.3,15,10.3,24.7z"}
                    ],
                    duration: 1300,
                })
            }
        }
    }
</script>

<style lang="scss">

    .c-logo {
        position: relative;
        z-index: 3;
        pointer-events: auto;
        margin: space(m);
        width: 70px;

        &__link {
            display: flex;
            margin-top: -25%;
        }

        &__title {
            position: absolute;
            top: calc(100% + .5em);
            line-height: 1;
            left: 20px;
            opacity: 0;
            pointer-events: none;
            text-decoration: none;

            .c-logo:hover & {
                transition: .6s;
                opacity: 1;
                left: 0;
                animation: .3s bounce .9s;

                @keyframes bounce {
                    0% { transform: translateY(0) }
                    10% { transform: translateY(4px) }
                    40% { transform: translateY(-3px) }
                    60% { transform: translateY(2px) }
                    70% { transform: translateY(-2px) }
                    100% { transform: translateY(1px) }
                }
            }
        }
    }

</style>
