
import Vue from 'vue';
import AsciiMorph from '@kelleyvanevert/ascii-morph';

// export default ({ app }, inject) => {
//     app.Ascii = require(`~/assets/scripts/asciiMorph.min.js`);
// }

export default ({ app }, inject) => {
    inject(AsciiMorph)
}