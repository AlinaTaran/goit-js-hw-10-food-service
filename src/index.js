import './styles.css';
import './js/themes';
import markup from './js/templating';


const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);