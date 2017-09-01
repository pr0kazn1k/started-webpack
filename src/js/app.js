import '../less/main.less';

//import moment from 'moment';
import Test from './components/Test'

(() => {
	document.addEventListener('DOMContentLoaded', () => {

		/*const now = moment().format('MMMM Do YYYY, h:mm:ss a');
		console.log(now);*/

		new Test();
		
	});
})();
