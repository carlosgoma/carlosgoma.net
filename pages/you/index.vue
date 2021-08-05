<template>
	<article class="p-you o-grid" role="article" itemscope itemtype="http://schema.org/WebPage">
		<header class="p-you__header o-grid__header">
			<h1 class="p-you__title o-title o-title--main t-title">
				<span>You are wellcome!</span>
			</h1>
		</header>

		<div class="p-you__intro t-section">
			<div class="o-text">
				<p>I hope this webpage distract you a little bit. I did it with love and some humor, don’t take it too much seriously.</p>
			</div>
		</div>

		<div class="p-you__hiring t-section">
			<div class="o-text">
				<h3 class="p-you__past-title o-title o-title--secundary">Are you hiring in Ho Chi Minh City?</h3>
				<p>I’m living here! If you are looking for an appasionated front-end developer that works with <cite>Vue.js</cite> or <cite>React</cite> don’t hesitate to get in touch. If you already have some doubts please click <a href="/hirehim/index.html" class="o-link" target="_blank" title="Do it!">here</a>.</p>
				<div class="p-you__email">
					<span v-if="isLabelShown" ref="label" class="p-you__email-label">{{labelText}}</span>
					<button
						v-if="$device.isDesktop"
						@click="copyToClipboard('carlosgoma@gmail.com')"
						@mouseenter="isLabelShown = true"
						@mouseleave="labelReset"
						@mousemove="labelMove"
						class="p-you__email-link o-link">
						carlosgoma@gmail.com
					</button>
					<a v-else
						href="mailto:carlosgoma@gmaill.com"
						target="_blank"
						class="p-you__email-link o-link">
						carlosgoma@gmail.com
					</a>
				</div>
			</div>
		</div>

		<div class="p-you__friends t-section">
			<div class="o-text">
				<p>Otherwise, if you are a friend, call me after the lockdown. I’m wishing to have a coffee with you.</p>
			</div>
		</div>
	</article>
</template>

<script>
	export default {
		data() {
			return {
				isLabelShown: false,
				labelText: "Copy email!"
			}
		},
		methods: {
			copyToClipboard : function(text) {
				navigator.clipboard.writeText(text).then( () => {
					this.labelText = "Copied!";
				});
			},
			labelReset : function() {
				this.isLabelShown = false;
				this.labelText = "Copy email!"
			},
			labelMove : function(e) {
				this.$refs.label.style.left = e.clientX + 'px';
				this.$refs.label.style.top = e.clientY + 'px';
			}
		}
	}
</script>

<style lang="scss">

	.p-you {
		--page-color: var(--red-light);

		position: relative;
		z-index: 2;

		&__intro {
			@media ( min-width: $mobile ) {
				grid-column: 2/5;
				grid-row: 2;

				position: relative;
				@include line(top, calc(var(--space) * -1), 80%);

				.o-text {
					@include line(left, calc(var(--space) * -1), calc(var(--space) * -6));
				}
			}
		}

		&__hiring {
			@media ( min-width: $mobile ) {
				grid-column: 5/8;
				grid-row: 3;
				position: relative;
				@include line(top, calc(-100% + var(--space)), 100%);
				@include line(bottom, 66%, 0);

				.o-text {
					@include line(right, $font-indent-pos, calc(var(--space) * -3));
				}
			}

		}

		&__friends {
			@media ( min-width: $mobile ) {
				grid-column: 2/5;
				grid-row: 4;
				position: relative;

				&:before {
					content: "";
					position: absolute;
					top: -10vh;
					left: 0;
					right: 33%;
					border-top: $line-black
				}
			}

		}

		&__email {
			&-label {
				position: fixed;
				font-size: font-size(xs);
				background: $black;
				color: $white;
				border-radius: 3px;
				padding: .3em .6em;
				letter-spacing: .01em;
				pointer-events: none;
				transform: translate(10px, 20px)
			}
		}
	}
</style>
