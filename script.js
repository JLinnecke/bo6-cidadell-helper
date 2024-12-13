const images = [
    './img/1.png', './img/2.png', './img/3.png', './img/4.png', './img/5.png',
    './img/6.png', './img/7.png', './img/8.png', './img/9.png', './img/10.png',
    './img/11.png', './img/12.png', './img/13.png', './img/14.png', './img/15.png',
    './img/16.png', './img/17.png', './img/18.png', './img/19.png', './img/20.png'
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('icons-container');

    images.forEach(src => {
        const div = document.createElement('div');
        div.className = 'icon-item';
        div.innerHTML = `<img src="${src}" alt=""><input type="number">`;
        container.appendChild(div);
    });

    const inputs = document.querySelectorAll('.icon-item input');
    inputs.forEach(input => {
        input.addEventListener('input', sortIcons);
    });
});

function resetInput() {
    const inputs = document.querySelectorAll('.icon-item input');
    inputs.forEach(input => input.value = '');
    document.getElementById('outputIcons').innerHTML = ''; // Clear the output container
}

function sortIcons() {
    const container = document.getElementById('outputIcons');
    container.innerHTML = ''; // Clear previous content

    const iconItems = Array.from(document.querySelectorAll('.icon-item'));
    const sortedItems = iconItems
        .map(item => ({
            element: item,
            value: parseInt(item.querySelector('input').value) || null
        }))
        .filter(item => item.value !== null) // Only include items with a value
        .sort((a, b) => a.value - b.value);

    sortedItems.forEach(item => {
        const clone = item.element.cloneNode(true);
        container.appendChild(clone);
    });
}