
<template>
	<article class="p-anaglyph" role="article" itemscope itemtype="http://schema.org/WebPage">

		<client-only>
			<svg id="space"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				viewBox="0 0 1300 900"
				enable-background="new 0 0 1300 900"
				xml:space="preserve">

				<g>
				<g id="grupo_fondo">
					<!-- Estrellas -->
					<defs>
						<g id="estrellas">
							<circle cx="369.424" cy="293.654" r="1.96"/>
							<circle cx="832.665" cy="568.07" r="1.96"/>
							<circle cx="649.067" cy="260.332" r="1.96"/>
							<circle cx="453.709" cy="437.396" r="1.96"/>
							<circle cx="453.709" cy="520.374" r="1.96"/>
							<circle cx="821.558" cy="359.645" r="1.96"/>
							<circle cx="661.481" cy="430.209" r="1.96"/>
							<circle cx="449.645" cy="247.92" r="2.47"/>
							<circle cx="1033.395" cy="593.724" r="2.47"/>
							<circle cx="802.035" cy="205.93" r="2.47"/>
							<circle cx="555.856" cy="429.056" r="2.47"/>
							<circle cx="555.856" cy="533.619" r="2.47"/>
							<circle cx="1019.397" cy="331.078" r="2.47"/>
							<circle cx="817.679" cy="419.999" r="2.47"/>
						</g>
					</defs>
					<!-- Repeticiones de estrellas -->
					<use id="estrellas1" xlink:href="#estrellas" x="100" y="50" fill="#f4ef51" />
					<use id="estrellas2" xlink:href="#estrellas" x="100" y="50" fill="#78F9F5" />
					<use id="estrellas3" xlink:href="#estrellas" x="100" y="50" fill="#fff" />
					<use id="estrellas4" xlink:href="#estrellas" x="100" y="50" fill="#fff" />
					<!-- Galaxias -->
					<ellipse id="galaxia_rosa" transform="matrix(-0.8787 0.4774 -0.4774 -0.8787 1454.2761 501.3186)" opacity="0.28" fill="#662D91" cx="663.442" cy="435.435" rx="268.574" ry="82.572"/>
					<ellipse id="galaxia_azul" transform="matrix(-0.9057 -0.4238 0.4238 -0.9057 1173.3274 1231.0452)" opacity="0.28" fill="#2E528E" cx="723.552" cy="485.052" rx="268.574" ry="87.525"/>
					<!-- filtros para las galaxias -->
					<filter id="desenfoque" x="-2" y="-2" width="20" height="20">
						<feGaussianBlur in="SourceGraphic" stdDeviation="2" />
					</filter>
					<ellipse id="degradado" opacity="0.2" fill="url(#degradado_1_)" cx="615.499" cy="429.558" rx="451.616" ry="378.86"/>
					<!-- Degradado para una galaxia -->
					<radialGradient id="degradado_1_" cx="677.6797" cy="429.5586" r="378.8662" gradientTransform="matrix(1.192 0 0 1 -192.2957 0)" gradientUnits="userSpaceOnUse">
						<stop  offset="0" style="stop-color:#662D91"/>
						<stop  offset="0.0552" style="stop-color:#5F358E"/>
						<stop  offset="0.2464" style="stop-color:#4B4A86"/>
						<stop  offset="0.4309" style="stop-color:#3F5882"/>
						<stop  offset="0.6" style="stop-color:#3B5C80"/>
						<stop  offset="1" style="stop-color:#000000"/>
					</radialGradient>
				</g>
				</g>

				<!-- <g id="grupo_esfera"> -->
				<g class="layer" data-depth="0.07">
					<g id="grupo_esfera">
						<!-- Esferas en 3D -->
						<g class="anaglifo esfera">
							<circle class="rojo fill" cx="253.704" cy="383.694" r="155.421"/>
							<circle class="azul fill" cx="253.704" cy="383.694" r="155.421"/>
							<circle class="rojo fill" cx="336.955" cy="244.317" r="62.353"/>
							<circle class="azul fill" cx="336.955" cy="244.317" r="62.353"/>
						</g>
						<!-- Esfera grande -->
						<circle id="esfera_grande" opacity="0.16" fill="#5CBFBC" cx="253.704" cy="383.694" r="155.421"/>
						<!-- Degradado esfera chica -->
						<radialGradient id="degradado_esfera" cx="336.9546" cy="244.3164" r="62.353" gradientUnits="userSpaceOnUse">
							<stop  offset="0.297" style="stop-color:#5CBFBC;stop-opacity:0"/>
							<stop  offset="1" style="stop-color:#5CBFBC"/>
						</radialGradient>
						<!-- Esfera chica -->
						<circle id="esfera_chica" opacity="0.16" fill="url(#degradado_esfera)" cx="336.955" cy="244.317" r="62.353"/>
					</g>
				</g>


				<!-- Se define el triangulo -->
				<defs>
					<polygon id="triangulo" points="850.139,769.997 577.421,620.362 304.704,470.729 570.649,309.365 836.596,148.002 843.366,459"/>
				</defs>
				<!-- Se hace la mascara del triangulo -->
				<clipPath id="recorte-triangulo">
					<use xlink:href="#triangulo" overflow="visible"/>
				</clipPath>
				<!-- Se define la maya -->
				<defs>
					<g id="rayas" stroke-width="3">
						<line x1="-294.484" y1="457.311" x2="1594.484" y2="457.311"/>
						<line x1="-294.484" y1="457.311" x2="1594.484" y2="372.068"/>
						<line x1="-294.484" y1="457.311" x2="1594.484" y2="286.826"/>
						<line x1="-294.484" y1="457.311" x2="1594.484" y2="201.584"/>
						<line x1="-294.484" y1="457.311" x2="1594.484" y2="116.342"/>
						<line x1="-294.484" y1="457.311" x2="1594.484" y2="31.1"/>
						<line x1="-294.484" y1="457.311" x2="1594.484" y2="-54.143"/>
						<line x1="-294.484" y1="457.309" x2="1594.484" y2="542.551"/>
						<line x1="-294.484" y1="457.309" x2="1594.484" y2="627.793"/>
						<line x1="-294.484" y1="457.309" x2="1594.484" y2="713.035"/>
						<line x1="-294.484" y1="457.309" x2="1594.484" y2="798.277"/>
						<line x1="-294.484" y1="457.309" x2="1594.484" y2="883.52"/>
						<line x1="-294.484" y1="457.309" x2="1594.484" y2="968.762"/>
					</g>
				</defs>

				<g class="layer" data-depth="0.2">
					<g id="grupo_triangulo1">
						<!-- Creamos triangulo original -->
						<g >
							<g clip-path="url(#recorte-triangulo)" stroke="#77f9f5" fill="none">
							<use xlink:href="#rayas"/>
							<use xlink:href="#rayas" transform="rotate(90 750 350)"/>
							</g>
							<use xlink:href="#triangulo" id="trianguloborde" stroke-width="7" stroke="#77f9f5" fill="none"/>
							<use xlink:href="#triangulo" id="trianguloblur" stroke-width="7" stroke="#77f9f5" fill="none" />
						</g>
					</g>
				</g>

				<g class="layer" data-depth="0.3">
					<g id="grupo_triangulo2">
						<!-- Creamos triangulo 3d -->
						<g class="anaglifo triangulo">
							<g class="rojo">
								<g clip-path="url(#recorte-triangulo)">
									<use xlink:href="#rayas" />
									<use xlink:href="#rayas" transform="rotate(90 750 350)" />
								</g>
								<use xlink:href="#triangulo" stroke-width="7" fill="none"/>
							</g>
							<g class="azul" >
								<g clip-path="url(#recorte-triangulo)">
									<use xlink:href="#rayas" />
									<use xlink:href="#rayas" transform="rotate(90 750 350)" />
								</g>
								<use xlink:href="#triangulo" stroke-width="7" fill="none"/>
							</g>
						</g>
					</g>
				</g>

				<!-- definimos cuadrado rosa -->
				<defs>
					<polygon id="cuadrado_rosa" points="1041.889,487.68 578.374,479.875 593.934,169.536 1057.446,177.343"/>
				</defs>
				<!-- Creamos cuadrado rosa -->
				<use xlink:href="#cuadrado_rosa" opacity="0.8" fill="#E79DF9" class="layer" data-depth="0.9"/>
				<!-- Creamos cuadrado 3d -->
				<g class="anaglifo cuadrado layer" data-depth="1">
					<use xlink:href="#cuadrado_rosa" class="rojo fill" />
					<use xlink:href="#cuadrado_rosa" class="azul fill" />
				</g>


				<!-- Zig Zag -->
				<polygon class="zig_zag layer" data-depth="0.3" fill="#ED1C24" points="462.432,610.326 443.353,591.247 473.835,560.765 431.918,518.849 420.5,530.266 451,560.765 420.515,591.244 420.518,591.247 420.5,591.265 451.014,621.744 420.515,652.243 431.932,663.66 473.849,621.744 	"/>

				<g id="rayos" fill="none" stroke="#F74646" stroke-width="5" stroke-linecap="round">
					<line id="rayo-1" class="rayo" x1="672.246" y1="856.5" x2="672.246" y2="663.5"/>
					<line id="rayo-2" class="rayo" x1="1192.756" y1="856.5" x2="1087.128" y2="750.872"/>
					<line id="rayo-3" class="rayo" x1="151.083" y1="856.5" x2="346.826" y2="660.757"/>
				</g>

				<g id="ojo">
					<g id="interior-ojo">
						<!-- Definimos centro de ojo -->
						<symbol>
							<g id="centro_ojo" stroke-width="4" stroke-linecap="round">
								<circle id="amarillo" fill="none" cx="671.508" cy="446.998" r="96.614"/>
								<path id="raya-iris_1" fill="none" d="M590.165,446.17c0-44.924,36.419-81.343,81.344-81.343c44.924,0,81.343,36.419,81.343,81.343"/>
								<path id="raya-iris" fill="none" d="M671.509,512.155c-36.443,0-65.986-29.542-65.986-65.985c0-36.442,29.543-65.986,65.986-65.986c36.442,0,65.985,29.543,65.985,65.986"/>
							</g>
						</symbol>
						<!-- Definimos contorno de ojo -->
						<defs>
							<path id="forma_ojo" d="M409.896,465.162l261.612,108.983l261.613-108.983L671.509,356.181L409.896,465.162z M409.896,465.162h-52.893 M986.014,465.162h-52.892"/>
						</defs>
						<!-- máscara -->
						<clipPath id="mascara_ojo">
							<use xlink:href="#forma_ojo" overflow="visible" />
						</clipPath>
						<!-- Blanco ojo -->
						<path id="blanco_ojo" opacity="0.4" fill="#E6E6E6" d="M409.896,465.162l261.612,108.983 l261.613-108.983L671.509,356.181L409.896,465.162z"/>
						<!-- Formas interior ojo -->
						<circle id="luz" opacity="0.5" clip-path="url(#mascara_ojo)" fill="#FFFFFF" cx="671.508" cy="457.635" r="145.14"/>
						<circle id="rosa" opacity="0.26" clip-path="url(#mascara_ojo)" fill="#DE5D90" cx="672.988" cy="668.445" r="235.345"/>
						<!-- Iris, pupila... -->
						<g clip-path="url(#mascara_ojo)">
							<circle id="amarillo" fill="#F4F45D" stroke="#000011" stroke-width="4" cx="671.508" cy="446.998" r="96.614"/>
							<path id="raya-iris_1" fill="none" stroke="#000011" stroke-width="4" stroke-linecap="round" d="M590.165,446.17c0-44.924,36.419-81.343,81.344-81.343c44.924,0,81.343,36.419,81.343,81.343"/>
							<path id="raya-iris" fill="none" stroke="#000011" stroke-width="4" stroke-linecap="round" d="M671.509,512.155c-36.443,0-65.986-29.542-65.986-65.985c0-36.442,29.543-65.986,65.986-65.986c36.442,0,65.985,29.543,65.985,65.986"/>
							<circle @click="blink" id="pupila" fill="#000011" cx="671.508" cy="446.17" r="51.61"/>
							<circle id="luz_pupila" fill="#F4F45D" cx="641.558" cy="457.17" r="8.648"/>
						</g>
					</g>
					<!-- Creamos centro ojo en 3D -->
					<g class="anaglifo iris layer" clip-path="url(#mascara_ojo)" data-depth="0.2">
						<use xlink:href="#centro_ojo" class="rojo" />
						<use xlink:href="#centro_ojo" class="azul" />
						<circle class="rojo fill" cx="671.508" cy="446.17" r="51.61"/>
						<circle class="azul fill" cx="671.508" cy="446.17" r="51.61"/>
					</g>
					<!-- Sombras ojo -->
					<g id="sombras" opacity="0.41">
						<path id="sombra_superior" fill="#000011" d="M885.335,485.068l47.787-19.906L671.509,356.181L409.896,465.162l269.808-86.729L885.335,485.068z"/>
						<polygon fill="#000011" points="671.509,574.145 409.896,465.162 661.482,595.633 931.291,508.9 885.335,485.068"/>
					</g>
					<!-- Contorno ojo y cejas-->
					<g fill="none" stroke="#000011" stroke-width="7" stroke-linecap="round">
						<use xlink:href="#forma_ojo" id="contorno" />
						<line id="ceja_der" x1="871.263" y1="396.394" x2="757.611" y2="349.05"/>
						<line id="ceja_izq" x1="585.407" y1="349.05" x2="471.755" y2="396.394"/>
					</g>
					<!-- Creamos contorno ojo en 3D -->
					<g class="anaglifo ojo layer" fill="none" stroke-width="7" stroke-linecap="round" data-depth="0.2">
						<use xlink:href="#forma_ojo" class="rojo" />
						<use xlink:href="#forma_ojo" class="azul" />
					</g>
				</g>

				<!-- Título -->
				<g class="layer" data-depth="0.2">
					<!-- Definimos degradado -->
					<linearGradient id="degradado_letras" gradientUnits="userSpaceOnUse" x1="799.5391" y1="672.0137" x2="799.5391" y2="587.8613">
						<stop  offset="0" style="stop-color:#5CBFBC"/>
						<stop  offset="0.2182" style="stop-color:#4A1047"/>
						<stop  offset="0.4667" style="stop-color:#000011"/>
						<stop  offset="0.4848" style="stop-color:#FFFFFF"/>
						<stop  offset="0.7515" style="stop-color:#5CBFBC"/>
						<stop  offset="1" style="stop-color:#2E3192"/>
					</linearGradient>
					<!-- Definimos Título space-->
					<defs>
						<g id="titulo_space" stroke="#E6E6E6" stroke-width="2">
							<path d="M764.82,646.631h33.627
								c0.581,0,1.019-0.168,1.31-0.502c0.291-0.375,0.438-0.77,0.438-1.188c0-0.5-0.146-0.916-0.438-1.25s-0.729-0.5-1.31-0.5h-5.568
								c-11.938,0-20.381-4.189-25.329-12.566c-2.912-4.377-4.367-9.629-4.367-15.756c-0.037-4.709,1.219-9.23,3.767-13.566
								c5.313-8.961,14.375-13.441,27.186-13.441h34.719l5.021,25.195h-33.244c-0.583,0-1.02,0.166-1.311,0.5
								c-0.292,0.334-0.437,0.73-0.437,1.188c0,0.5,0.145,0.918,0.437,1.25c0.291,0.334,0.728,0.5,1.311,0.5h5.567
								c11.937,0,20.38,3.773,25.33,11.316c2.911,4.336,4.367,10.066,4.367,17.193c0.035,4.711-1.22,9.232-3.767,13.568
								c-5.314,8.961-14.376,13.441-27.186,13.441h-35.047L764.82,646.631z"/>
							<path d="M887.273,587.986
								c8.262,0,15.321,3.125,21.181,9.377c5.822,6.295,8.734,13.859,8.734,22.695c0,8.879-2.875,16.443-8.625,22.695
								c-5.786,6.293-12.847,9.439-21.181,9.439h-14.575v19.82h-31.334v-84.027H887.273z M878.267,626.061
								c2.184,0,4.021-0.646,5.514-1.938c1.528-1.25,2.293-2.793,2.293-4.627c0-1.791-0.765-3.314-2.293-4.564
								c-1.528-1.291-3.385-1.938-5.568-1.938h-5.404v13.066H878.267z"/>
							<path d="M944.111,660.385l-2.292,11.629h-30.024
								l16.813-84.027h50.604l16.813,84.027h-29.969l-2.348-11.629H944.111z M958.359,633.563l-4.422-22.068l-4.422,22.068H958.359z"/>
							<path d="M1062.089,613.307l-15.285,0.063
								c-4.331,0-8.024,1.75-11.081,5.252c-3.058,3.5-4.586,7.295-4.586,11.379c0,4.125,1.51,7.939,4.531,11.441
								c3.021,3.5,6.478,5.168,10.372,5l16.322,0.063v25.51h-32.535c-10.081-0.084-18.67-4.209-25.767-12.379
								c-7.133-8.211-10.699-18.09-10.699-29.635c0-11.588,3.584-21.486,10.754-29.697c7.169-8.211,15.813-12.316,25.93-12.316h26.858
								L1062.089,613.307z"/>
							<path d="M1129.954,613.182v0.063h-30.733v3.502
								h30.733v26.508h-30.733v3.502h30.733v25.258h-62.067v-84.027h57.046L1129.954,613.182z"/>
						</g>
					</defs>
					<!-- Creamos título space original -->
					<use xlink:href="#titulo_space" fill="url(#degradado_letras)" />
					<!-- Creamos 3D del título -->
					<g class="anaglifo titulo">
						<use xlink:href="#titulo_space" class="rojo fill" />
						<use xlink:href="#titulo_space" class="azul fill" />
					</g>
					<g id="titulo_anaglyph">
						<path fill="#ED1C24" d="M914.662,684.197c-5.245,5.162-10.406,10.406-15.741,15.479c-4.072,3.871-11.546,13.648-17.183,13.037
							c-4.604-0.502-18.619-3.689-18.515,3.316c0.087,6.234,8.995,3.756,13.044,3.809c-6.537,5.387-12.842,11.02-19.662,16.064
							c-1.671,1.234-7.597,3.801-7.415,6.666c0.228,3.688,3.657,5.543,6.631,3.465c7.981-5.168,15.413-11.078,22.547-17.357
							c3.407-2.996,7.364-8.629,11.991-8.451c4.414,0.17,8.822,0.482,13.227,0.809c-0.564,3.492-2.969,15.131,0.405,17.751
							c-0.109-0.068-0.178-0.104,0.083,0.081c0.059,0.032,0.089,0.048,0.104,0.053c7.842,4.305,6.123-6.152,6.231-9.996
							c0.212-7.449,1.634-14.873,3.954-21.945c2.364-7.209,8.185-14.709,9.638-21.92C925.185,679.123,916.432,682.455,914.662,684.197z
							M904.603,715.871c-3.504-0.664-10.438-1.857-10.556-1.74c-0.118,0.115,12.209-12.191,17.926-18.652
							C908.851,702.016,905.149,714.562,904.603,715.871z"/>
						<path fill="#ED1C24" d="M1013.643,698.209c-0.058-0.512-0.022-0.196-0.001-0.006c-0.54-4.754-4.567-3.346-6.59-1.115
							c-6.918-9.475-22.238,8.774-25.554,13.752c-2.737,2.465-5.708,6.34-6.203,6.959c-1.241,1.555-4.36,6.65-6.418,5.893
							c-2.758-1.014,3.056-9.637,3.766-10.748c2.313-3.621,4.857-6.949,7.418-10.383c2.77-3.836-3.412-6.996-5.892-2.795
							c-8.078-9.123-21.023,7.6-25.603,15.314c-5.221,4.17-12.114,12.762-12.441,11.875c-1.575-4.182,9.747-14.936,11.599-18.607
							c1.603-3.18,0.851-8.154-3.643-8.027c-4.067,0.113-8.07,2.92-11.033,5.463c-2.31-9.881-11.871,7.324-13.178,9.424
							c-1.462,2.348-9.29,13.008-7.58,16.363c3.585,7.746,10.685-8.084,12.212-10.354c2.498-3.709,5.724-6.877,8.987-9.904
							c0.728-0.641,7.452-5.75,8.682-4.475c1.229,1.277-9.937,10.604-11.957,17.148c-1.417,4.164,0.483,9.303,5.556,8.586
							c-0.253,0.043-0.366,0.063,0.097-0.008c1.194-0.201,0.585-0.105,0.095-0.023c1.642-0.348,5.891-3.026,9.894-6.375
							c0.261,1.229,0.802,2.344,1.753,3.203c4.891,4.41,11.466-1.232,14.734-4.727c0.838,3.492,4.015,4.863,7.327,4.229
							c-0.309,0.063-0.501,0.104,0.052-0.006c1.045-0.215,0.527-0.111,0.075-0.02c1.934-0.43,4.81-2.395,7.625-4.938
							c0.116,0.416,0.256,0.83,0.449,1.236c1.797,3.877,6.639,3.732,9.875,1.996c-4.069,7.225-7.541,14.73-10.41,22.504
							c-1.208,3.043,2.882,4.332,4.891,3.35c1.094-0.621,1.446-2.588,1.854-3.617c1.372-3.498,3.035-6.906,4.72-10.264
							c4.106-8.18,8.691-16.104,13.461-23.912c1.863-3.049,11.741-13.675,11.383-16.988
							C1013.654,698.317,1013.661,698.377,1013.643,698.209z M959.054,720.584c-1.402,1.52-9.194,8.451-6.995,1.977
							c1.915-5.671,5.881-10.67,10.047-14.874c-0.255,0.259-1.619,1.632,0.021-0.021c0.021-0.021,0.022-0.022,0.015-0.015
							c1.132-1.126,8.439-7.557,8.495-3.063C966.93,710.039,963.423,715.627,959.054,720.584z M1001.518,704.301
							c-3.66,5.145-7.281,10.322-11.836,14.729c-2.506,2.426-8.572,6.436-5.354-0.273c2.299-4.734,7.615-11.119,9.864-13.146
							S1007.163,696.363,1001.518,704.301z"/>
						<path fill="#ED1C24" d="M1065.59,691.398c-0.084-0.746-0.018-0.156-0.001-0.008c-1.22-10.813-13.351,8.146-14.729,10.023
							c-1.436,1.953-11.41,16.373-14.464,14.768c-2.319-0.488,7.479-14.613,8.521-16.051c1.801-2.482,6.539-6.533,3.258-9.662
							c-2.055-1.953-3.69-0.113-5.111,1.414c-3.208,4.018-7.117,8.621-9.807,13.576c-0.732,0.914-0.643,0.786-0.401,0.477
							c-3.107,3.624-16.541,18-16.164,7.975c0.313-8.348,10.971-13.199,16.36-18.43c5.767-5.596,12.167-12.594,14.918-20.307
							c3.277-9.209-6.254-9.959-12.045-5.959c-7.657,5.42-13.192,14.73-17.555,22.848c-3.717,6.914-10.52,18.68-7,26.785
							c3.793,8.728,14.417,1.881,18.921-2.266c0.778,4.132,5.001,6.039,9.325,3.844c-3.661,6.711-7.359,13.711-9.828,20.979
							c-1.251,3.707,3.726,7.791,5.173,3.895c1.175-3.195,2.551-6.346,3.977-9.436c4.058-8.793,9.041-17.262,14.048-25.543
							c2.389-3.951,4.846-7.85,7.547-11.598c0.995-1.379,5.268-5.367,5.059-7.322C1065.593,691.428,1065.595,691.439,1065.59,691.398z
							M1032.775,680.48c1.764-2.209,5.872-8.297,9.254-8.297c1.277,0.01-4.702,9.443-4.977,9.814
							c-2.996,4.063-6.456,7.779-10.061,11.305c2.181-2.133-0.745,0.732,0,0c-1.47,1.385-2.972,2.732-4.506,4.045
							C1025.229,691.434,1028.701,685.576,1032.775,680.48z"/>
						<path fill="#ED1C24" d="M1084.242,684.797c-4.06-0.053-5.81,3.199-9.396,2.291c-1.854-0.469-2.519,0.709-3.354,2.002
							c-2.449,3.787-4.898,7.574-7.347,11.361c-7.716,11.932-16.027,23.586-22.508,36.252c-1.176,2.299-5.024,8.084,0.211,8.842
							c3.738,0.541,5.438-5.887,6.794-8.307c4.078-7.283,8.635-14.285,13.231-21.25c1.241,1.422,3.229,2.09,5.095,1.998
							c8.17-0.32,14.986-8.582,18.987-14.896C1088.754,698.672,1094.735,684.506,1084.242,684.797z M1084.894,693.158
							c-2.014,5.48-5.873,10.623-9.979,14.74c0.325-0.325,0.713-0.713-0.014,0.016c-0.466,0.465-0.269,0.268-0.012,0.01
							c-1.983,1.975-11.804,8.324-7.244,1.127c3.096-4.885,6.416-9.619,10.25-13.957
							C1079.178,693.754,1087.269,686.732,1084.894,693.158z"/>
						<path fill="#ED1C24" d="M1124.904,662.006c0.282,2.504-5.762,7.525-7.171,9.465c-2.962,4.072-5.671,8.346-8.43,12.559
							c3.128-1.92,8.194-4.828,11.427-1.543c4.245,5.053-4.379,13.439-7.173,17.055c-1.227,1.586-7.542,12.072-1.089,6.449
							c3.776-3.301,6.922-10.584,11.233-12.768c2.828-1.369,4.81,2.051,3.109,4.035c-1.546,1.797-2.934,3.75-4.435,5.588
							c-3.479,4.258-7.506,9.439-13.256,10.426c-7.063,1.219-6.693-6.689-4.795-10.986c2.43-5.496,12.518-14.219,10.629-15.055
							s-9.275,5.676-10.423,6.758c-3.977,3.75-7.077,8.23-9.862,12.908c-1.394,2.34-4.33,10.596-8.473,6.459
							c-2.396-2.535,1.776-7.406,3.093-9.654c5.769-9.85,11.711-19.568,18.338-28.871
							C1108.542,673.547,1123.653,650.801,1124.904,662.006C1124.957,662.475,1124.807,661.131,1124.904,662.006z"/>
					</g>
				</g>
			</svg>
		</client-only>

		<div class="p-anaglyph__advertisement">
			<samp class="p-anaglyph__advertisement-background"></samp>
			<img class="p-anaglyph__advertisement-img" src="~/assets/images/glasses.png" alt="Anaglyph glasses">
			<h2 class="p-anaglyph__advertisement-title">Glasses needed!</h2>
		</div>

		<img class="p-anaglyph__woman-crying" src="~/assets/images/cry.gif">
	</article>
</template>


<script>
	export default {
		layout: 'experiment',
		transition: {
			name:'experiment'
		},

		head () {
			return {
				title: 'Anaglyph',
				meta: [
					{ hid: 'description', name: 'description', content: 'Anaglyph experiment'}
				],
				script: [
					{
						hid: 'anaglyph',
						src: '/scripts/anaglyph.js',
						defer: true,
						callback: () => this.init()
					}
				]
			}
		},

		data() {
			return {
				time: null
			}
		},
		destroyed() {
			clearTimeout(this.time);
			// $(document).off('click', "#js-action", actionButton )
		},
		methods: {

			blink() {
				const ojocontorno = Snap.select("#contorno");
				const ojoforma = Snap.select("#forma_ojo");
				const ojosombra = Snap.select("#sombra_superior");
				const cejaizq = Snap.select("#ceja_izq");
				const cejader = Snap.select("#ceja_der");
				const ojocerrado = "M409.896,465.162l261.612,0.001l261.613-0.001l-261.613,0.001L409.896,465.162z M409.896,465.162h-35.046 M968.167,465.162h-35.045";
				const ojoabierto = "M409.896,465.162l261.612,108.983l261.613-108.983L671.509,356.181L409.896,465.162z M409.896,465.162h-52.893 M986.014,465.162h-52.892";
				ojocontorno.animate ({ d: ojocerrado }, 400, mina.easeout, function() {
				ojocontorno.animate ({ d: ojoabierto }, 600, mina.elastic );
				});
				ojoforma.animate ({ d: ojocerrado }, 400, mina.easeout, function() {
				ojoforma.animate ({ d: ojoabierto }, 600, mina.elastic );
				});
				ojosombra.animate ({ d: 'M885.335,465.163l47.787-0.001l-261.613,0.001l-261.612-0.001l269.808,0.001H885.335z' }, 400, mina.easeout, function() {
				ojosombra.animate ({ d: 'M885.335,485.068l47.787-19.906L671.509,356.181L409.896,465.162l269.808-86.729L885.335,485.068z' }, 600, mina.elastic );
				});
				cejaizq.animate ({ transform: 'r15,471.755,396.394' }, 400, mina.easeout, function() {
				cejaizq.animate ({ transform: 'r0,471.755,396.394' }, 400, mina.elastic );
				});
				cejader.animate ({ transform: 'r-15,871.263,396.394' }, 400, mina.easeout, function() {
				cejader.animate ({ transform: 'r0,871.263,396.394' }, 400, mina.elastic );
				});
			},

			init() {

				const self = this;

				// Lista de variables.
				const svg = Snap.select("#space");
				const trianguloblur = Snap.select("#trianguloblur");
				const estrellas2 = Snap.select("#estrellas2");
				const estrellas3 = Snap.select("#estrellas3");
				const estrellas4 = Snap.select("#estrellas4");
				const fondo = Snap.select("#grupo_fondo");
				const esferas = Snap.select("#grupo_esfera");
				const triangulos1 = Snap.select("#grupo_triangulo1");
				const triangulos2 = Snap.select("#grupo_triangulo2");

				// Paralax.js
				const scene = $('#space').get(0);
				const $parallax = new Parallax(scene);
				$parallax.disable();

				// Filtro desenfoque
				const desenfoque = svg.filter(Snap.filter.blur(10, 10));
				trianguloblur.attr({ filter: desenfoque });

				// Posicionamiento galaxias
				estrellas2.transform('r-40,750,350');
				estrellas3.transform('r48,800,450s1.15');
				estrellas4.transform('r-120,750,400s1,750,400');

				// Movimiento infinito del grupo Estrellas3
				function estrella3mov() {
					estrellas3.stop().animate({transform:'r408,800,450'}, 200000, function() {
					estrellas3.attr({ transform: 'rotate(48 800 450)'});
					estrella3mov();
					});
				} estrella3mov();
				// Movimiento infinito del grupo Estrellas4
				function estrella4mov() {
					estrellas4.stop().animate({transform:'r-300,750,400s0.8,750,400'}, 100000, function() {
					estrellas4.animate({transform:'r-480,750,400s1,750,400'}, 100000, function() {
						estrellas4.transform('r-120,750,400s1,750,400');
						estrella4mov();
					});
					});
				} estrella4mov();

				$("#js-action").on('click', actionButton )
				// Función de desactivar y activar
				function actionButton() {
					if (!$(".p-anaglyph").hasClass("is-active") ) {
						$(".p-anaglyph").addClass("is-active");
						$("#js-action").addClass("is-active");
						$("#js-action").attr('title', 'Switch off');
						$parallax.enable();
						estrellas3.stop();
						estrellas4.stop();
						fondo.animate({ 'transform': 's0.7, 750, 350'}, 2000, mina.backout );
						esferas.animate({ 'transform': 's0.8, 750, 350'}, 1500, mina.backout );
						triangulos1.animate({ 'transform': 's.9, 750, 350'}, 1000, mina.backout );
						triangulos2.animate({ 'transform': 's.9, 750, 350'}, 1000, mina.backout );
						self.time = setInterval(rayosAnime, 1000);
					} else {
						$(".p-anaglyph").removeClass("is-active");
						$("#js-action").removeClass("is-active");
						$("#js-action").attr('title', 'Switch on');
						$parallax.disable();
						estrella3mov();
						estrella4mov();
						fondo.animate({ 'transform': 's1, 750, 350'}, 500, mina.bounce);
						esferas.animate({ 'transform': 's1, 750, 350'}, 500, mina.bounce);
						triangulos1.animate({ 'transform': 's1, 750, 350'}, 500, mina.bounce);
						triangulos2.animate({ 'transform': 's1, 750, 350'}, 500, mina.bounce);
						clearInterval(self.time);
					}
				};

				// Rayos
				function rayosAnime(){
					var chance = 2;  // Probabilidad entre 1 de aparecer
					var myArray = ["#rayo-1", "#rayo-2", "#rayo-3"];
					$.each(myArray, function (index, value) {
						var rand = Math.floor(Math.random()*chance)+1;
						if(rand == 1) {
							$(value).addClass('activa');
							setTimeout(function () {
								$(value).removeClass('activa');
							}, 1000);
						};
					});
				};
			}
		}

	}
</script>


<style lang="scss">

.p-anaglyph {
	position: relative;
	overflow: hidden;
	background: radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 100%);
	height: 100%;

	&.is-active {
		background: radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(61,33,69,1) 100%);
	}
}

.p-anaglyph__woman-crying {
	opacity: 0;
	position: absolute;
	bottom: 0;
	right: 0;
	width: 50vmin;
	mix-blend-mode: lighten;

	.is-active & {
		opacity: .7;
		transition: 1s .5s;
	}
}

.p-anaglyph__advertisement {
	position: absolute;
	display: flex;
	flex-direction: column;
	text-align: center;
	left: 0;
	top: 0;
	margin: space(m);
	z-index: 3;
	display: none;
	font-size: calc(11px + 1vw);

	@media (min-width: 1000px) {
		font-size: 1.3em;
	}
	@media (orientation: portrait ) {
		left: auto;
		right: 0;
	}

	.is-active & {
		display: block;
	}

	&-img {
		position: absolute;
		width: 100%;
		left: 0;
	}

	&-title {
		line-height: 1em;
		color: var(--white);
		padding: 3.2em .5em 0;
		animation: needed 2s infinite;
		@keyframes needed {
			0% { opacity: 1;}
			49% {
				opacity: 1;
			}
			50% {
				opacity: 0;
			}
			100% {opacity: 0;}
		}
	}
	&-background {
		position: absolute;
		z-index: -1;
		top: calc(50% - 3em);
		left: calc(50% - 3em);
		background-color: #b97ec7;
		width: 6em;
		height: 6em;
		clip-path: polygon(
			13% 13%, 30% 13%, 37% 0%,   50% 8%,  62% 0%,   70% 13%,
			87% 13%, 87% 30%, 100% 37%, 92% 50%, 100% 62%, 87% 70%,
			87% 87%, 70% 87%, 62% 100%, 50% 92%, 37% 100%, 30% 87%,
			13% 87%, 13% 70%, 0% 62%,   8% 50%,  0% 37%,   13% 30%
		);
		animation: rotate 6s infinite linear;
		transform-origin: 50%;
		@keyframes rotate {
			100% {
				transform: rotate(90deg);
			}
		}
	}
}


	// Estilos del SVG

#space {
	z-index: 2;
	position: absolute;
	width: 100%;
	height: 100%;

	#pupila {
		cursor: pointer;
		pointer-events: auto;
	}

	#rayos line {
		opacity: 0;
		stroke-dasharray: 300;
		stroke-dashoffset: -300;
		transition: 0s;
	}
	#rayos line.activa {
		opacity: 1;
		stroke-dashoffset: 300;
		transition: stroke-dashoffset 1s linear;
	}

	.anaglifo {
		opacity: 0;
		pointer-events: none;
		transition: .3s;

		.rojo {
		stroke: $red;
		transform: none;
		transition: 1.5s;

			&.fill {
				fill: $red;
			}
		}

		.azul {
			stroke: $blue;
			transform: none;
			transition: 1.5s;

			&.fill {
				fill: $blue;
			}
		}
	}

	.is-active & .anaglifo {

		&.ojo {
			opacity: .4;

			.rojo {
				transform: translate(-5px,4px);
			}
			.azul {
				transform: translate(6px,-2px);
			}
		}

		&.cuadrado {
			opacity: .4;
			.rojo {
				transform: translate(-11px,10px);
			}
			.azul {
				transform: translate(12px,-10px);
			}
		}

		&.triangulo {
			opacity: .4;
			.rojo {
				transform: translate(-9px,4px);
			}
			.azul {
				transform: translate(12px,-3px);
			}
		}

		&.esfera {
			opacity: .4;
			.rojo {
				transform: translate(3px,-2px);
			}
			.azul {
				transform: translate(-4px,4px);
			}
		}

		&.titulo, &.iris {
			opacity: .4;
			.rojo {
				transform: translate(3px,-2px);
			}
			.azul {
				transform: translate(-4px,4px);
			}
		}
	}
}


</style>
