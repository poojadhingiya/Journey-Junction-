class StyleManager {
    constructor() {
        this.styleSheet = document.createElement('style');
        document.head.appendChild(this.styleSheet);
    }

    // Create a unique class name
    generateClassName(prefix = 'css-') {
        return `${prefix}${Math.random().toString(36).substr(2, 9)}`;
    }

    // Create a style rule
    createRule(selector, styles) {
        const styleString = Object.entries(styles)
            .map(([property, value]) => `${this.camelToKebab(property)}: ${value};`)
            .join(' ');
        this.styleSheet.sheet.insertRule(`${selector} { ${styleString} }`, this.styleSheet.sheet.cssRules.length);
    }

    // Apply styles directly to an element
    applyStyles(element, styles) {
        Object.entries(styles).forEach(([property, value]) => {
            element.style[property] = value;
        });
    }

    // Create a styled element
    createStyledElement(tagName, styles) {
        const element = document.createElement(tagName);
        const className = this.generateClassName();
        element.classList.add(className);
        this.createRule(`.${className}`, styles);
        return element;
    }

    // Add hover styles
    addHoverStyles(selector, styles) {
        this.createRule(`${selector}:hover`, styles);
    }

    // Add animation keyframes
    createKeyframes(name, keyframes) {
        const keyframeRules = Object.entries(keyframes)
            .map(([percentage, styles]) => {
                const styleString = Object.entries(styles)
                    .map(([property, value]) => `${this.camelToKebab(property)}: ${value};`)
                    .join(' ');
                return `${percentage} { ${styleString} }`;
            })
            .join(' ');
        this.styleSheet.sheet.insertRule(`@keyframes ${name} { ${keyframeRules} }`, this.styleSheet.sheet.cssRules.length);
    }

    // Helper to convert camelCase to kebab-case
    camelToKebab(str) {
        return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    }

    // Create media query
    createMediaQuery(query, selector, styles) {
        const styleString = Object.entries(styles)
            .map(([property, value]) => `${this.camelToKebab(property)}: ${value};`)
            .join(' ');
        this.styleSheet.sheet.insertRule(`@media ${query} { ${selector} { ${styleString} } }`, this.styleSheet.sheet.cssRules.length);
    }
}
