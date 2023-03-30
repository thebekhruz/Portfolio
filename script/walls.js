const linkBox = document.querySelector('.link-box');
const wallLeft = document.querySelector('.wall-left');
const wallRight = document.querySelector('.wall-right');
const wallLeftText = wallLeft.querySelector('::before');
const wallRightText = wallRight.querySelector('::before');

function closeWalls() {
    linkBox.addEventListener('mousemove', (event) => {
    const x = event.pageX - linkBox.offsetLeft;
    wallLeft.style.width = x + 'px';
    wallRight.style.width = linkBox.offsetWidth - x + 'px';
    wallLeftText.style.opacity = 1;
    wallRightText.style.opacity = 1;
    });

    linkBox.addEventListener('mouseleave', () => {
    wallLeft.style.width = '0';
    wallRight.style.width = '0';
    wallLeftText.style.opacity = 0;
    wallRightText.style.opacity = 0;
    });
}