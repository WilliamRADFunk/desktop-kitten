import * as Two from 'twojs-ts';
/**
 * Placeholder function typically used to initiate the applications loop.
 */
export default () => {
    const elem = document.getElementById('mainview');
    const body = document.getElementsByTagName('body')[0];
    const two = new Two({ width: body.offsetWidth, height: body.offsetHeight }).appendTo(elem);
    const center = [two.width / 2, two.height / 2];

    const ear1 = two.makeRectangle(0, 0, 30, 30);
    ear1.fill = '#333333';
    const ear1Inner = two.makeRectangle(0, 0, 20, 20);
    ear1Inner.fill = '#DDDDDD';

    const group2 = two.makeGroup([ear1, ear1Inner]);
    group2.rotation = 0.4;
    group2.translation.set(center[0] - 25, center[1] - 215);

    const ear2 = two.makeRectangle(0, 0, 30, 30);
    ear2.fill = '#333333';
    const ear2Inner = two.makeRectangle(0, 0, 20, 20);
    ear2Inner.fill = '#DDDDDD';

    const group3 = two.makeGroup([ear2, ear2Inner]);
    group3.rotation = -0.4;
    group3.translation.set(center[0] + 25, center[1] - 215);

    const bodyOuter = two.makeRoundedRectangle(center[0], center[1] - 150, 60, 100, 20);
    bodyOuter.fill = '#333333';

    const bodyInner = two.makeRoundedRectangle(center[0], center[1] - 150, 40, 80, 20);
    bodyInner.fill = '#FFFFFF';

    const head = two.makeEllipse(center[0], center[1] - 200, 50, 25);
    head.fill = '#333333';
    const eyeLeftOuter = two.makeEllipse(center[0] - 20, center[1] - 200, 10, 5);
    eyeLeftOuter.fill = '#307047';
    const eyeLeftInner = two.makeEllipse(center[0] - 20, center[1] - 200, 3, 4);
    eyeLeftInner.fill = '#000000';
    const eyeRightOuter = two.makeEllipse(center[0] + 20, center[1] - 200, 10, 5);
    eyeRightOuter.fill = '#307047';
    const eyeRightInner = two.makeEllipse(center[0] + 20, center[1] - 200, 3, 4);
    eyeRightInner.fill = '#000000';

    const tongueOuter = two.makeEllipse(center[0], center[1] - 181, 4, 6);
    tongueOuter.fill = '#FF1402';

    const mouthLeft1 = two.makeLine(center[0] - 5, center[1] - 182, center[0], center[1] - 187);
    mouthLeft1.linewidth = 2;
    mouthLeft1.fill = '#666666';
    mouthLeft1.noFill();

    const mouthLeft2 = two.makeLine(center[0] - 5, center[1] - 182, center[0] - 10, center[1] - 182);
    mouthLeft2.linewidth = 2;
    mouthLeft2.fill = '#666666';
    mouthLeft2.noFill();

    const mouthRight1 = two.makeLine(center[0] + 5, center[1] - 182, center[0], center[1] - 187);
    mouthRight1.linewidth = 2;
    mouthRight1.fill = '#666666';
    mouthRight1.noFill();

    const mouthRight2 = two.makeLine(center[0] + 5, center[1] - 182, center[0] + 10, center[1] - 182);
    mouthRight2.linewidth = 2;
    mouthRight2.fill = '#666666';
    mouthRight2.noFill();

    const toungueLine = two.makeLine(center[0], center[1] - 177, center[0], center[1] - 183);
    toungueLine.linewidth = 1;
    toungueLine.opacity = 0.3;
    toungueLine.fill = '#666666';

    const nose = two.makeRoundedRectangle(center[0], center[1] - 193, 10, 7, 3);
    nose.fill = '#E75480';

    const leftLeg = two.makeRoundedRectangle(center[0] - 25, center[1] - 125, 20, 50, 10);
    leftLeg.fill = '#333333';
    const groupLegLeft = two.makeGroup([leftLeg]);
    // groupLegLeft.rotation = 0.1;
    // groupLegLeft.translation.set(30, -60);

    const leftLegPaw = two.makeRoundedRectangle(center[0] - 25, center[1] - 100, 18, 10, 5);
    leftLegPaw.fill = '#FFFFFF';

    const rightLeg = two.makeRoundedRectangle(center[0] + 25, center[1] - 125, 20, 50, 10);
    rightLeg.fill = '#333333';
    const groupLegRight = two.makeGroup([rightLeg]);
    // groupLegRight.rotation = -0.1;
    // groupLegRight.translation.set(-25, 75);

    const rightLegPaw = two.makeRoundedRectangle(center[0] + 25, center[1] - 100, 18, 10, 5);
    rightLegPaw.fill = '#FFFFFF';

    const leftLegPawLine1 = two.makeLine(center[0] - 22, center[1] - 105, center[0] - 22, center[1] - 99);
    leftLegPawLine1.linewidth = 1;
    leftLegPawLine1.opacity = 0.5;
    leftLegPawLine1.fill = '#CCCCCC';

    const leftLegPawLine2 = two.makeLine(center[0] - 28, center[1] - 105, center[0] - 28, center[1] - 99);
    leftLegPawLine2.linewidth = 1;
    leftLegPawLine2.opacity = 0.5;
    leftLegPawLine2.fill = '#CCCCCC';

    const rightLegPawLine1 = two.makeLine(center[0] + 22, center[1] - 105, center[0] + 22, center[1] - 99);
    rightLegPawLine1.linewidth = 1;
    rightLegPawLine1.opacity = 0.5;
    rightLegPawLine1.fill = '#CCCCCC';

    const rightLegPawLine2 = two.makeLine(center[0] + 28, center[1] - 105, center[0] + 28, center[1] - 99);
    rightLegPawLine2.linewidth = 1;
    rightLegPawLine2.opacity = 0.5;
    rightLegPawLine2.fill = '#CCCCCC';

    const leftArm = two.makeRoundedRectangle(center[0] - 25, center[1] - 155, 15, 35, 7);
    leftArm.fill = '#333333';

    const leftArmPaw = two.makeRoundedRectangle(center[0] - 25, center[1] - 142, 15, 10, 5);
    leftArmPaw.fill = '#FFFFFF';

    const leftArmPawLine1 = two.makeLine(center[0] - 23, center[1] - 142, center[0] - 23, center[1] - 137);
    leftArmPawLine1.linewidth = 1;
    leftArmPawLine1.opacity = 0.5;
    leftArmPawLine1.fill = '#CCCCCC';

    const leftArmPawLine2 = two.makeLine(center[0] - 27, center[1] - 142, center[0] - 27, center[1] - 137);
    leftArmPawLine2.linewidth = 1;
    leftArmPawLine2.opacity = 0.5;
    leftArmPawLine2.fill = '#CCCCCC';

    const rightArm = two.makeRoundedRectangle(center[0] + 25, center[1] - 155, 15, 35, 7);
    rightArm.fill = '#333333';

    const rightArmPaw = two.makeRoundedRectangle(center[0] + 25, center[1] - 142, 15, 10, 5);
    rightArmPaw.fill = '#FFFFFF';

    const rightArmPawLine1 = two.makeLine(center[0] + 23, center[1] - 142, center[0] + 23, center[1] - 137);
    rightArmPawLine1.linewidth = 1;
    rightArmPawLine1.opacity = 0.5;
    rightArmPawLine1.fill = '#CCCCCC';

    const rightArmPawLine2 = two.makeLine(center[0] + 27, center[1] - 142, center[0] + 27, center[1] - 137);
    rightArmPawLine2.linewidth = 1;
    rightArmPawLine2.opacity = 0.5;
    rightArmPawLine2.fill = '#CCCCCC';

    const tailTip = two.makeEllipse(center[0] - 85, center[1] - 180, 4.5, 4.5);
    tailTip.stroke = '#87CEEB';
    tailTip.fill = '#333333';

    const tail = two.makeCurve(
        center[0] - 85, center[1] - 180,
        center[0] - 75, center[1] - 180,
        center[0] - 55, center[1] - 120,
        center[0] - 35, center[1] - 150,
        center[0] - 15, center[1] - 120,
        center[0], center[1] - 150, true);
    tail.linewidth = 8;
    tail.stroke = '#333333';
    tail.noFill();

    const groupCat = two.makeGroup([
        group2,
        group3,
        tailTip,
        tail,
        bodyOuter,
        bodyInner,
        head,
        eyeLeftOuter,
        eyeLeftInner,
        eyeRightOuter,
        eyeRightInner,
        tongueOuter,
        mouthLeft1,
        mouthLeft2,
        mouthRight1,
        mouthRight2,
        nose,
        toungueLine,
        groupLegLeft,
        groupLegRight,
        leftLegPaw,
        rightLegPaw,
        leftLegPawLine1,
        leftLegPawLine2,
        rightLegPawLine1,
        rightLegPawLine2,
        leftArm,
        leftArmPaw,
        leftArmPawLine1,
        leftArmPawLine2,
        rightArm,
        rightArmPaw,
        rightArmPawLine1,
        rightArmPawLine2]);
    groupCat.scale = 2;
    groupCat.translation.set(-center[0], 0);

    two.bind(Two.Events.update, () => {}).play();
}