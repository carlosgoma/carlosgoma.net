<template>
	<article class="p-this o-grid" role="article" itemscope itemtype="http://schema.org/WebPage">

		<header class="p-this__header o-grid__header">
			<h1 class="p-this__title o-title o-title--main t-title">
				<span>This is my sandbox</span>
			</h1>
			<figure v-if="$device.isDesktop" class="p-this__ascii t-section">
				<pre>{{ascii}}</pre>
			</figure>
		</header>

		<div class="p-this__intro t-section">
			<div class="o-text">
				<p>Here you are some experiments. Things that I wanted to do before to implement in a real project or things that I wanted to do and I already haven't had the chance to use.</p>
			</div>
		</div>

		<div class="p-this__experiments t-section">
			<experiment-item
				v-for="experiment in experiments"
				:key="experiment.id"
				:experiment="experiment" />
		</div>
	</article>
</template>

<script>

export default {

	data() {
		return {
			ascii: null,
			experiments : [
				{
					id: 'zoom1',
					isOut: true,
					url: '/this/zoom1',
					name: 'Zoom #1',
					img: {
						mobile: 'zoom1-mobile.png',
						desktop: 'zoom1-desktop.png'
					},
					year: '2018',
					info: ['Parallax.js', 'Snap.svg', 'Illustration']
				},
				{
					id: 'anaglyph1',
					isOut: true,
					url: '/this/anaglyph1',
					name: 'Anaglyph #1',
					img: {
						mobile: 'anaglyph1-mobile.png',
						desktop: 'anaglyph1-desktop.png'
					},
					year: '2013',
					info: ['Zoomooz.js', 'Snap.svg', 'Illustration']
				}
			],
			animeAscii: null
		}
	},

	mounted : function() {
		const figures = {
			keyboard: `. -------------------------------------------------------------------.
| [Esc] [F1][F2][F3][F4][F5][F6][F7][F8][F9][F0][F10][F11][F12] o o o|
|                                                                    |
| ['][1][2][3][4][5][6][7][8][9][0][-][=][_<_] [I][H][U] [N][/][*][-]|
| [|-][Q][W][E][R][T][Y][U][I][O][P][{][}] | | [D][E][D] [7][8][9]|+||
| [CAP][A][S][D][F][G][H][J][K][L][;]['][#]|_|           [4][5][6]|_||
| [Shif][Z][X][C][V][B][N][M][,][.][/] [__^__]    [^]    [1][2][3]| ||
| [c]   [a][________________________][a]   [c] [<][V][>] [ 0  ][.]|_||
'--------------------------------------------------------------------'`,
			fish : `					___            __________
					/   \\          /          \\
				__/_/_/_\\________/ / / /  /   \\
		,,----'                 ------  / /   \\          _
		,/  ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) \\/ /  /       ,/' \\
	./''  ,\\ ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) \\ /      /'  /  \\
./''  O , ,\\) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) )------' / / / /
(____ , , , |) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) )----- /
\\. \\ , , , | ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ) ----- \\
	\\.   ___/ ) )_______  ) ) ) ) ) ) ) ) ) ) ) ------. \\ \\ \\ \\
	''\\.. ) ) ) )______\ ) ) ) ) ) ) ) ) ) ) /          \\. \\  /
			'\\..    _____/ ) ) ) ) ) ) ) ) /--__        '\\._/
				''\________________------''' \\   \\
					\\ \\ \\/           \\  \\  \\ \\  /
					\\__/             \\________/ `,
			bike: `										_
									,-~ |
		________________          o==]___|
		|                |            \\ \\
		|________________|            /\\ \\
__  /  _,-----._      )           |  \\ \\.
|_||/_-~         '.   /()          |  /|]_|_____
	|//              \ |              \\/ /_-~     ~-_
	//________________||              / //__________\\
//__|______________| \____________/ //___/-\\ \\~-_
((_________________/_-o___________/_//___/  /\\,\\  \\
|__/(  ((====)o===--~~                 (  ( (o/)  )
		\\  ''==' /                         \\  '--'  /
		'-.__,-'                           '-.__,-' `,
		}

		this.ascii= figures.keyboard;
	},
}

</script>

<style lang="scss">

	.p-this {
		--page-color: var(--blue-light);

		position: relative;
		z-index: 2;

		&__intro {
			@media ( min-width: $mobile ) {
				grid-column: 2/5;
				grid-row: 2;
				position: relative;
				@include line(left, 0, calc(var(--space) * -3));

				.o-text {
					position: relative;
					@include line(bottom, calc(var(--space) * -1), 80%, true);
				}
			}

		}

		// &__header {
		// 	position: relative;
		// }

		&__ascii {
			position: absolute;
			top: space(m);
			right: space(m);
			overflow: hidden;
			max-width: 100%;

			pre {
				margin-top: -1ex;
				line-height: 1.2;
				color: $blue;
				opacity: .5;
				font-size: .8vw;
			}
		}

		&__experiments {

			display: grid;
			gap: space(vh) 0;

			@media ( min-width: $mobile ) {
				padding-top: space(vh);
				grid-template-columns: repeat(3, 1fr);
				grid-column: 2/8;
				grid-row: 3;

				& > * {
					grid-column: 2/4;
					&:nth-child(2n) {
						grid-column: 1/3;
					}
				}
			}
		}
	}
</style>
