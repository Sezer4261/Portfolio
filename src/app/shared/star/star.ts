import { Component } from '@angular/core';

/** Figma "Spinning shape". Takes the current text color, so it can be tinted via `color`. */
@Component({
  selector: 'app-star',
  template: `
    <svg viewBox="21 20 120 120" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M21 88.1027L23.2883 97.8795L57.074 91.0491L30.4896 113.214L36.7487 121.049L64.2754 100.29L49.94 131.696L59.0258 136.049L74.7745 105.513L75.5822 140H85.6775L86.4851 105.647L102.301 136.384L111.387 132.031L97.1189 100.759L124.78 121.652L131.039 113.75L104.589 91.7188L138.577 98.6161L140.865 88.8393L107.349 80.4018L141 71.8973L138.779 62.1205L104.926 68.9509L131.51 46.7857L125.251 38.9509L97.7246 59.7098L112.06 28.3036L102.974 23.9509L87.2255 54.5536L86.4178 20L76.3225 20L75.5149 54.3527L59.7661 23.6161L50.613 27.9687L64.8811 59.2411L37.2199 38.3482L30.9607 46.25L57.4105 68.2812L23.4229 61.3839L21.2019 71.1607L54.6512 79.5982L21 88.1027Z"
      />
    </svg>
  `,
  styles: `
    :host {
      display: block;
      aspect-ratio: 1;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  `,
})
export class Star {}
