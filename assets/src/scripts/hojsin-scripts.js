/* global document */
/* eslint-disable no-new */

import initTinySlider from './parts/tiny-slider';
import initPageScroll from './parts/fullPgaeScroll';
import initScrollReval from './parts/scrollReval';
import ToggleMenu from './parts/toggleMenu';
import initLightBox from './parts/lightbox';
import {roomsSliderOptions, gallerySliderOptions} from './parts/slider-options/slider-options';
import resizeHeaderOnScroll from './parts/resizeHeaderOnScroll';
import parallax from './parts/parallax';


const HOJSIN_SCRIPTS = {
    init() {
        initTinySlider('endPaddingSlider', roomsSliderOptions);
        initTinySlider('gallerySlider', gallerySliderOptions);
        initPageScroll();
        initScrollReval('js_scroll-reval');
        initLightBox('js_gallery');
        initLightBox('js_gallery-maps');
        new ToggleMenu('js_menu-toggler', 'js_toggle-menu');
        resizeHeaderOnScroll();
        parallax();
    },
};

document.addEventListener('DOMContentLoaded', () => {
    HOJSIN_SCRIPTS.init();
});
