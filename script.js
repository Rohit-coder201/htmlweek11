// Change Background Color
document.getElementById('colorButton').addEventListener('click', function() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? '#f4f4f4' : 'lightblue';
});

// Add New Element
document.getElementById('addElementButton').addEventListener('click', function() {
    let newElement = document.createElement('div');
    newElement.textContent = 'This is a dynamically added element!';
    newElement.style.marginTop = '20px';
    newElement.style.padding = '10px';
    newElement.style.backgroundColor = '#ffeb3b';
    document.querySelector('.container').appendChild(newElement);
});

// Toggle Visibility
document.getElementById('toggleButton').addEventListener('click', function() {
    const newElement = document.querySelector('.container div');
    if (newElement) {
        newElement.style.display = newElement.style.display === 'none' ? 'block' : 'none';
    }
});

// Animate Element
document.getElementById('animateButton').addEventListener('click', function() {
    const animatedElement = document.getElementById('animatedElement');
    animatedElement.style.transform = animatedElement.style.transform === 'scale(1.5)' ? 'scale(1)' : 'scale(1.5)';
});

// Modify Text Content
document.getElementById('modifyTextButton').addEventListener('click', function() {
    const h1 = document.querySelector('h1');
    h1.textContent = 'Text has been changed!';
});
