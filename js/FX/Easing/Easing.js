import FX from '../FX';

/**
 * This object contains some built-in easing functions that are used
 * when applying effects adn scrollings in AthenaJS
 */
const Easing = {
    'easeInQuad': function (x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    'easeOutBounce': function (x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
        }
    },
    'swing': function (x/*, t, b, c, d*/) {
        return 0.5 - Math.cos(x * Math.PI) / 2;
    }
};

// add every easing to the FX class
Object.keys(Easing).forEach((name) => FX.addEasing(name, Easing[name]));

export default Easing;