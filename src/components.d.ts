/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface PwcChoices2 {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
}

declare global {


  interface HTMLPwcChoices2Element extends Components.PwcChoices2, HTMLStencilElement {}
  var HTMLPwcChoices2Element: {
    prototype: HTMLPwcChoices2Element;
    new (): HTMLPwcChoices2Element;
  };
  interface HTMLElementTagNameMap {
    'pwc-choices-2': HTMLPwcChoices2Element;
  }
}

declare namespace LocalJSX {
  interface PwcChoices2 {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }

  interface IntrinsicElements {
    'pwc-choices-2': PwcChoices2;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'pwc-choices-2': LocalJSX.PwcChoices2 & JSXBase.HTMLAttributes<HTMLPwcChoices2Element>;
    }
  }
}


