class StyleManager {
    constructor() {
        this.styleSheet = document.createElement('style');
        document.head.appendChild(this.styleSheet);
    }

    createRule(selector, styles) {
        const styleString = Object.entries(styles)
            .map(([property, value]) => `${this.camelToKebab(property)}: ${value};`)
            .join(' ');
        this.styleSheet.sheet.insertRule(`${selector} { ${styleString} }`, 
            this.styleSheet.sheet.cssRules.length);
    }

    createMediaQuery(query, selector, styles) {
        const styleString = Object.entries(styles)
            .map(([property, value]) => `${this.camelToKebab(property)}: ${value};`)
            .join(' ');
        this.styleSheet.sheet.insertRule(
            `@media ${query} { ${selector} { ${styleString} } }`,
            this.styleSheet.sheet.cssRules.length
        );
    }

    camelToKebab(str) {
        return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    }
}