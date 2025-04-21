import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import {TYPE_COLOR_MAP} from './type-color-map';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective implements OnInit {

  @Input('pkmnBorderCard') types: string[] = [];

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.setHeight(350);
    this.setTransition();

    this.el.nativeElement.style.border = 'none';
    this.el.nativeElement.style.background = 'transparent';
  }

  private setBackgroundColor(): void {
    const colors = this.types.map(t => this.getColorForType(t));
  
    if (colors.length === 1) {
      const rgba = this.hexToRgba(colors[0], 0.15);
      this.el.nativeElement.style.background = rgba;
    } else if (colors.length >= 2) {
      const rgbaColors = colors.slice(0, 4).map(c => this.hexToRgba(c, 0.4));
      this.el.nativeElement.style.background = `linear-gradient(to right, ${rgbaColors.join(', ')})`;
    } else {
      this.el.nativeElement.style.background = this.hexToRgba('#f5f5f5', 0.4);
    }
  }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.applyBorder();
    this.setBackgroundColor();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.border = 'solid 2px #f5f5f5';
    this.el.nativeElement.style.backgroundImage = 'none';
    this.el.nativeElement.style.backgroundOrigin = '';
    this.el.nativeElement.style.backgroundClip = '';
    this.el.nativeElement.style.background = 'transparent';
  }

  private setHeight(height: number): void {
    this.el.nativeElement.style.height = `${height}px`; 
  }

  private setTransition(): void {
    this.el.nativeElement.style.transition = 'border-color 0.3s ease-in-out, height 0.3s ease-in-out';
  }

  private applyBorder(): void {
    const colors = this.types.map(t => this.getColorForType(t));

    if (colors.length === 1) {
      this.el.nativeElement.style.border = `solid 2px ${colors[0]}`;
      this.el.nativeElement.style.backgroundImage = 'none';
      this.el.nativeElement.style.backgroundOrigin = '';
      this.el.nativeElement.style.backgroundClip = '';
    } else {
      this.el.nativeElement.style.border = '2px solid transparent';
      this.el.nativeElement.style.backgroundImage = `linear-gradient(white, white), linear-gradient(to right, ${colors.join(', ')})`;
      this.el.nativeElement.style.backgroundOrigin = 'border-box';
      this.el.nativeElement.style.backgroundClip = 'content-box, border-box';
    }
  }

  private getColorForType(type: string): string {
    if (!type) return TYPE_COLOR_MAP['default'].hex;
  const t = type.trim().toLowerCase();
  return TYPE_COLOR_MAP[t]?.hex || TYPE_COLOR_MAP['default'].hex;
  }

  private hexToRgba(hex: string, alpha: number): string {
    const bigint = parseInt(hex.replace('#', ''), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  
}
