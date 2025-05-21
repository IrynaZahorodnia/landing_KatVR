
import { scrollUp } from './components/scrollUp.js';
import { playVideo } from './components/playVideo.js';
import { changeLang } from './components/changeLang.js';
import { openDetails } from './components/openDetails.js';
import { formValidation } from './components/formValidation.js';
import { openQuestion } from './components/openQuestion.js';
import './components/swiper.js';
import { toggleList } from './components/toggleList.js';
import { closeDropdown, chooseSelect } from './components/chooseSelect.js';
import { closeOrder } from './components/closeOrder.js';

document.addEventListener('DOMContentLoaded', () => {
  scrollUp();
  playVideo();
  changeLang();
  openQuestion();
  openDetails();
  toggleList();
  closeDropdown();
  formValidation();
  chooseSelect();
  closeOrder();
});
