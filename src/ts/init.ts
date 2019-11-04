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

    const group1 = two.makeGroup([circle, rect]);
    group1.translation.set(two.width / 2, two.height / 2);
    group1.scale = 0;
    group1.noStroke();

    const ear1 = two.makeRectangle(0, 0, 30, 30);
    ear1.fill = '#333333';
    const ear1Inner = two.makeRectangle(0, 0, 20, 20);
    ear1Inner.fill = '#DDDDDD';

    const group2 = two.makeGroup([ear1, ear1Inner]);
    group2.translation.set(350, 400);
    group2.rotation = 0.4;

    const head = two.makeEllipse(300, 500, 50, 25);
    head.fill = '#333333';
    // const ear1 = two.makePath([250, 250, 300, 250, 250, 250], false);
    // ear1.fill = '#333333';
    // const ear2 = two.makePath([275, 275, 325, 275, 275, 275], false);
    // ear2.fill = '#333333';

    // Bind a function to scale and rotate the group
    // to the animation loop.
    two.bind(Two.Events.update, () => {
        // This code is called everytime two.update() is called.
        // Effectively 60 times per second.
        if (group1.scale > 0.9999) {
            group1.scale = group1.rotation = 0;
        }
        const t = (1 - group1.scale) * 0.125;
        group1.scale += t;
        group1.rotation += t * 4 * Math.PI;
    }).play();  // Finally, start the animation loop
}