<template>
    <nav class="c-nav">
        <nuxt-link class="c-nav__link" 
            to="/this" 
            active-class="" 
            exact-active-class="c-nav__link--active"> 
            <span class="c-nav__link-text">This</span>
            <div class="c-nav__link-shape" @mouseover="animateButton" @mouseleave="animateButton">
                <svg class="c-nav__link-svg" viewBox="0 0 90 90" preserveAspectRatio="xMinYMax meet">
                    <path class="c-nav__link-path" d="M80,45c0,8.8,-3.3,16.9,-8.6,23c-6.4,7.4,-15.9,12,-26.4,12s-20,-4.6,-26.4,-12c-5.3,-6.1,-8.6,-14.2,-8.6,-23c0,-19.3,15.7,-35,35,-35s35,15.7,35,35z"></path>
                </svg>
            </div>
        </nuxt-link>
        <nuxt-link class="c-nav__link" 
            to="/you" 
            active-class="" 
            exact-active-class="c-nav__link--active">
            <span class="c-nav__link-text">You</span>
            <div class="c-nav__link-shape" @mouseover="animateButton" @mouseleave="animateButton">
                <svg class="c-nav__link-svg" viewBox="0 0 90 90" preserveAspectRatio="xMinYMax meet">
                    <path class="c-nav__link-path" d="M80,45c0,8.8,-3.3,16.9,-8.6,23c-6.4,7.4,-15.9,12,-26.4,12s-20,-4.6,-26.4,-12c-5.3,-6.1,-8.6,-14.2,-8.6,-23c0,-19.3,15.7,-35,35,-35s35,15.7,35,35z"></path>
                </svg>
            </div>
        </nuxt-link>
        <nuxt-link class="c-nav__link" 
            to="/me" 
            active-class="" 
            exact-active-class="c-nav__link--active">
            <span class="c-nav__link-text">Me</span>
            <div class="c-nav__link-shape" @mouseover="animateButton" @mouseleave="animateButton">
                <svg class="c-nav__link-svg" viewBox="0 0 90 90" preserveAspectRatio="xMinYMax meet">
                    <path class="c-nav__link-path" d="M80,45c0,8.8,-3.3,16.9,-8.6,23c-6.4,7.4,-15.9,12,-26.4,12s-20,-4.6,-26.4,-12c-5.3,-6.1,-8.6,-14.2,-8.6,-23c0,-19.3,15.7,-35,35,-35s35,15.7,35,35z"></path>
                </svg>
            </div>
        </nuxt-link>
    </nav>
</template>

<script>

    export default {
        
        methods: {
            animateButton: function (event) {
                
                let radian = Math.atan2(event.offsetX - event.target.offsetWidth / 2, event.offsetY - event.target.offsetHeight / 2);
                let rotation = (radian * (180/ Math.PI) * -1) + 0;
                event.target.getElementsByTagName("svg")[0].style.transform = `rotate(${Math.floor(rotation)}deg)`;

                if (event.type === "mouseover") {
                    this.$anime({
                        targets: event.target.getElementsByTagName("path")[0],
                        d: [
                            { easing: "easeInOutBack", value: "M83,45c0,8.8,-6.3,16.9,-11.6,23c-6.4,7.4,-15.9,1,-26.4,1s-20,6.4,-26.4,-1c-5.3,-6.1,-11.6,-14.2,-11.6,-23c0,-19.3,18.7,-35,38,-35s38,15.7,38,35z"},
                            { easing: "easeOutBounce", value: "M80,45c0,8.8,-3.3,16.9,-8.6,23c-6.4,7.4,-15.9,12,-26.4,12s-20,-4.6,-26.4,-12c-5.3,-6.1,-8.6,-14.2,-8.6,-23c0,-19.3,15.7,-35,35,-35s35,15.7,35,35z"},
                        ],
                        opacity: [
                            {value: 0.1}, 
                            {value: 1}
                        ],
                        duration: 400,
                    })
                } else if (event.type === "mouseleave") {
                    this.$anime({
                        targets: event.target.getElementsByTagName("path")[0],
                        d: [
                            { easing: "easeOutBack", value: "M78,45c0,8.8,-5.3,16.9,-10.6,23c-6.4,7.4,-11.9,19,-22.4,19s-16,-11.6,-22.4,-19c-5.3,-6.1,-10.6,-14.2,-10.6,-23c0,-19.3,13.7,-35,33,-35s33,15.7,33,35z"},
                            { value: "M80,45c0,8.8,-3.3,16.9,-8.6,23c-6.4,7.4,-15.9,12,-26.4,12s-20,-4.6,-26.4,-12c-5.3,-6.1,-8.6,-14.2,-8.6,-23c0,-19.3,15.7,-35,35,-35s35,15.7,35,35z"},
                        ],
                        opacity: [
                            {duration: 250, value: 1}, 
                            {duration: 150, easing: "linear", value: 0.1}
                        ],
                        duration: 400,
                    })
                }

            }
        }
    }

</script>

<style lang="scss">

    .c-nav {
        display: flex;
        justify-content: space-between;
        padding: $space;

        &__link {
            position: relative;
            pointer-events: auto;
            color: $black;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            transition: color 0s .2s;

            &:hover {
                color: $white;
            }

            &-text {
                position: relative;
                z-index: 2;
                pointer-events: none;
                
            }

            &-shape {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                border-radius: 50%;
            }
            &-svg {
                position: absolute;
                top: -15%;
                left: -15%;
                right: -15%;
                bottom: -15%;
                pointer-events: none;
            }

            &-path {
                fill: $black;
                opacity: .1;
            }
        }
    }

</style>