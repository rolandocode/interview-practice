import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStrongLetters]'
})
export class StrongLettersDirective {

  //easiest way to modify beheavor
  // constructor(private element: ElementRef) { 
  //   this.element.nativeElement.style.backgroundColor = 'yellow';
    
  // }


  // Modify font weight beheavor: https://stackblitz.com/edit/ng-stylesincustomdirective?embed=1&file=src/app/custom.directive.ts
  // https://stackoverflow.com/questions/35915433/angular2-styles-in-a-directive
  domElement: any;
  constructor(private renderer: Renderer2,private elementRef: ElementRef) {
    this.domElement = this.elementRef.nativeElement;  // to get DOM element and store it in global variable
    // setting compulsory required styles to the DOM element
    const requiredStyles : any = {
      'background-color': 'yellow',
      'color': 'red',
      'font-weight': 'bold',
      //...and so on
    };
    Object.keys(requiredStyles).forEach(newStyle => {
      // this.domElement.style.setProperty(`${newStyle}`, elipsifyme[newStyle]);
      this.renderer.setStyle(
        this.domElement, `${newStyle}`, requiredStyles[newStyle]
      );
    });
  }
}

