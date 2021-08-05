
import Vue from 'vue';

const consoleInteraction = {


	install(Vue) {

		console.warn('Parental Advisory : explicit content.');
		console.log('%cHere you are!', 'font-size: 3em; padding: 30px 10px 10px; line-height: 1.5;');
		console.log('%c ', 'background: url("http://carlosgoma.net/images/bill_murray.jpg") center no-repeat; margin: 30px 10px; padding: 125px 100px; background-size: 100% 100%;')
		console.log('%cThis website is done with NuxtJS (A VueJS framework).', 'font-size: 1.1em; padding: 10px 10px 10px; line-height: 1.5; font-weight:bold');
		console.group('%cThese are the libraries I have used:', 'margin-left: 10px; padding: 10px; background: #caffcc; display: block; width: 600px');
		console.info('%canimejs: For the svg morphing animation.', 'font-size: 1.1em; margin-left: 10px; padding: 10px; background: #ebffe2; display: block; width: 600px');
		console.info('%cinteractjs: For the inertia effects in the drag and drop.', 'font-size: 1.1em; margin-left: 10px; padding: 10px; background: #ebffe2; display: block; width: 600px');
		console.groupEnd();
		console.log('%cFor further information execute the folowing method: %crunDeveloperView()', 'padding: 10px 0 10px 10px; line-height: 1.5;', 'font-weight:bold; line-height: 1.5; font-size: 1.1em');

		Vue.prototype.$runDeveloperView = function () {
			$nuxt.$store.commit({
				type: 'runView',
				view: 'developer'
			});
			return console.log('Running!');
		}

		Vue.prototype.$stopDeveloperView = function () {
			$nuxt.$store.commit({
				type: 'stopView',
				view: 'developer'
			});
			return console.log('Stopped!');
		}
	}
};

Vue.use(consoleInteraction)
