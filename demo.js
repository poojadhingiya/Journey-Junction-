// Initialize the style manager
const styleManager = new StyleManager();

// Static Styling Demo
const styledButton = document.getElementById('styled-button');
styleManager.applyStyles(styledButton, {
    backgroundColor: 'var(--bs-primary)',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
});

const styledBox = document.getElementById('styled-box');
styleManager.applyStyles(styledBox, {
    backgroundColor: 'var(--bs-info)',
    color: 'white',
    borderRadius: '4px',
    textAlign: 'center'
});

// Dynamic Styling Demo
const dynamicBox = document.getElementById('dynamic-box');
const colorPicker = document.getElementById('color-picker');
const sizeSlider = document.getElementById('size-slider');

styleManager.applyStyles(dynamicBox, {
    backgroundColor: 'var(--bs-secondary)',
    color: 'white',
    borderRadius: '4px',
    textAlign: 'center',
    transition: 'all 0.3s ease'
});

colorPicker.addEventListener('input', (e) => {
    styleManager.applyStyles(dynamicBox, {
        backgroundColor: e.target.value
    });
});

sizeSlider.addEventListener('input', (e) => {
    styleManager.applyStyles(dynamicBox, {
        fontSize: `${e.target.value}px`
    });
});

// Hover Effects Demo
const hoverBox = document.getElementById('hover-box');
const hoverClassName = styleManager.generateClassName('hover-');
hoverBox.classList.add(hoverClassName);

styleManager.createRule(`.${hoverClassName}`, {
    backgroundColor: 'var(--bs-success)',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'all 0.3s ease'
});

styleManager.addHoverStyles(`.${hoverClassName}`, {
    backgroundColor: 'var(--bs-warning)',
    transform: 'scale(1.1)'
});

// Animation Demo
const animateButton = document.getElementById('animate-button');
const animationClassName = styleManager.generateClassName('animate-');
animateButton.classList.add(animationClassName);

styleManager.createKeyframes('bounce', {
    '0%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-20px)' },
    '100%': { transform: 'translateY(0)' }
});

styleManager.createRule(`.${animationClassName}`, {
    backgroundColor: 'var(--bs-danger)',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
});

animateButton.addEventListener('click', () => {
    styleManager.applyStyles(animateButton, {
        animation: 'bounce 0.5s ease'
    });

    // Remove animation after it completes
    setTimeout(() => {
        styleManager.applyStyles(animateButton, {
            animation: 'none'
        });
    }, 500);
});

// Responsive styling demo
styleManager.createMediaQuery('(max-width: 768px)', `.${hoverClassName}`, {
    padding: '20px',
    fontSize: '14px'
});
