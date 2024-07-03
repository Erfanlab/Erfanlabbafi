import * as IconCollection from "./collection.generated.json"

type IconMap = Record<string, string>;

class IconComponent extends HTMLElement {
    getIconSVG(iconName: string): string {
        const icons: IconMap = IconCollection;
        let iconSVG: string = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 256 256\"><path d=\"m39.5,10.7c-0.2,0.4 -0.2,53.5 -0.2,118l0.2,117.3l88.5,0l88.5,0l0.2,-51.5c0.1,-28.2 0.66667,-50.73333 -0.2,-51.4c-0.86667,-0.66667 -43.6,30.4 -46.2,32.3c-0.3,0.3 -6.2,-7.1 -15.8,-20.2c-13,-17.8 -13.3,-19.26667 -16.1,-20c-2.8,-0.73333 -8.1,6.7 -16.9,14.1c-8.8,7.4 -16.2,13.4 -16.5,13.4c-0.2,0 -6.7,-5.9 -14.5,-13l-14.1,-13.1l-8.8,0.3l-8.8,0.4l7.8,-6.6l7.8,-6.6l15.4,9.9c8.5,5.4 15.8,10 16.3,10.1c0.5,0.1 8.7,-5.4 19,-13c10,-7.3 18.3,-13.1 18.6,-13c0.2,0.2 6.9,8.7 14.6,19c7.8,10.3 14.5,18.6 14.8,18.5c0.3,-0.1 10.2,-8 22.1,-17.6l21.6,-17.5l0,-30.6l0,-30.6l-24.6,-24.7l-24.8,-24.6l-63.9,0c-50.5,0 -61.13334,0.2 -64,0.7zm118,33.7l0.86667,23.36667l24.03333,1.53333l24.6,0.1l0,23.2l0,23.2l-15.8,13c-8.7,7.1 -16.1,13 -16.4,13s-6.1,-7.3 -12.9,-16.1c-6.7,-8.9 -13.86667,-18.63333 -14.3,-18.8l-4.1,-0.7l-17.7,12.4l-19.7,14.4l-16.3,-10.4l-16.2,-10.6l-2.9,2.5c-1.6,1.4 -7.1,5.9 -12.2,10.2l-9.2,7.7l-0.2,-55.6c-0.1,-30.5 0,-55.9 0.2,-56.3c0.2,-0.5 11.6,-0.7 54.2,-0.7l53.9,0l0.1,24.6zm27.6,-2.9c9.5,9.5 17.2,17.3 17.2,17.6c0,0.2 -7.8,0.3 -17.4,0.3l-16.83333,-0.2l-0.86667,-17.5c-0.1,-9.6 0.1,-17.4 0.3,-17.4c0.3,0.1 8.2,7.8 17.6,17.2zm-96.6,119.8c14.3,13.3 13.8,14.7 16.8,13.9c3,-0.8 16.13334,-14.30001 29.6,-24.2l2.7,-2.1l14.8,20.2l15.46667,19.53333l2.7,0.2c6.16666,-3 9.43333,-8.33333 18.43333,-14.63333c9,-6.3 16.8,-11.6 17.2,-11.8c0.6,-0.2 0.7,7.2 0.6,36.8l-0.2,37.1l-78.6,0l-78.7,0l-0.2,-44.3c-0.1,-35.2 0,-44.2 0.6,-44.3c1.6,-0.2 16.5,-0.9 19.7,-1l3.3,-0.1l15.8,14.7z\"/></svg>";
        if (iconName in icons) {
            iconSVG = icons[iconName];
        }
        return iconSVG;
    }

    connectedCallback() {
        const iconName = this.getAttribute("name") ?? '';
        // Fetch or use a map to get the SVG content
        this.innerHTML = this.getIconSVG(iconName);
    }
}

window.customElements.define("icon-component", IconComponent);
