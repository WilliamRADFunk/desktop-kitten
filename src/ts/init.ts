import * as Two from 'twojs-ts';
import { Example } from './example';
/**
 * Placeholder function typically used to initiate the applications loop.
 */
export default () => {
    const example = new Example();
    const h1El = document.getElementsByTagName('h1');
    h1El[0].innerHTML = `${example.getName()} of a Desktop Kitten`;

    const elem = document.getElementById('mainview');
    const two = new Two({ width: 600, height: 600 }).appendTo(elem);

    const circle = two.makeCircle(-70, 0, 50);
    const rect = two.makeRectangle(70, 0, 100, 100);
    circle.fill = '#FF8000';
    rect.fill = 'rgba(0, 200, 255, 0.75)';

    const group = two.makeGroup([circle, rect]);
    group.translation.set(two.width / 2, two.height / 2);
    group.scale = 0;
    group.noStroke();

    // Bind a function to scale and rotate the group
    // to the animation loop.
    two.bind(Two.Events.update, () => {
    // This code is called everytime two.update() is called.
    // Effectively 60 times per second.
    if (group.scale > 0.9999) {
        group.scale = group.rotation = 0;
    }
    var t = (1 - group.scale) * 0.125;
    group.scale += t;
    group.rotation += t * 4 * Math.PI;
    }).play();  // Finally, start the animation loop
}