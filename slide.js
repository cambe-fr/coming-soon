class Slide {
    constructor(timer) {
        this.selectedIndex = 1;
        this.slide = [
            document.getElementById("logo"),
            document.getElementById("message"),
            document.getElementById("description"),
        ];
        this.slide.slice(1).forEach((screen) => screen.style.opacity = 0);
        setInterval(this.change, timer);
    }

    hide = (element) => {
        element.style.opacity = 0;
        element.style.transition = "all 1s ease-in-out";
    };
    
    show = (element) => {
        element.style.opacity = 1;
        element.style.transition = "opacity 1s ease-in-out";
    };
    
    change = () => {
        if (this.selectedIndex + 1 > this.slide.length) this.selectedIndex = 0;
        this.show(this.slide[this.selectedIndex]);
        this.slide.forEach((element, index) => { 
            if (index != this.selectedIndex) this.hide(element); 
        });
        this.selectedIndex++;
    }
}