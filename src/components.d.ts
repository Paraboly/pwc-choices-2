/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  PwcChoices2,
} from './utils/PwcChoices2';

export namespace Components {
  interface PwcChoices2 {
    'currentSelectedOptions': PwcChoices2.IOption[];
    'isDropDownOpen': boolean;
    'options': PwcChoices2.IOption[] | string;
    'type': "single" | "multi";
  }
  interface PwcChoices2SelectedItemBubble {
    'indexInSelectedList': number;
    'option': PwcChoices2.IOption;
    'showCloseButton': boolean;
  }
}

declare global {


  interface HTMLPwcChoices2Element extends Components.PwcChoices2, HTMLStencilElement {}
  var HTMLPwcChoices2Element: {
    prototype: HTMLPwcChoices2Element;
    new (): HTMLPwcChoices2Element;
  };

  interface HTMLPwcChoices2SelectedItemBubbleElement extends Components.PwcChoices2SelectedItemBubble, HTMLStencilElement {}
  var HTMLPwcChoices2SelectedItemBubbleElement: {
    prototype: HTMLPwcChoices2SelectedItemBubbleElement;
    new (): HTMLPwcChoices2SelectedItemBubbleElement;
  };
  interface HTMLElementTagNameMap {
    'pwc-choices-2': HTMLPwcChoices2Element;
    'pwc-choices-2-selected-item-bubble': HTMLPwcChoices2SelectedItemBubbleElement;
  }
}

declare namespace LocalJSX {
  interface PwcChoices2 {
    'currentSelectedOptions'?: PwcChoices2.IOption[];
    'isDropDownOpen'?: boolean;
    'options'?: PwcChoices2.IOption[] | string;
    'type'?: "single" | "multi";
  }
  interface PwcChoices2SelectedItemBubble {
    'indexInSelectedList'?: number;
    'onCloseClicked'?: (event: CustomEvent<PwcChoices2.ISelectedItemBubbleCloseClickedEventPayload>) => void;
    'option'?: PwcChoices2.IOption;
    'showCloseButton'?: boolean;
  }

  interface IntrinsicElements {
    'pwc-choices-2': PwcChoices2;
    'pwc-choices-2-selected-item-bubble': PwcChoices2SelectedItemBubble;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'pwc-choices-2': LocalJSX.PwcChoices2 & JSXBase.HTMLAttributes<HTMLPwcChoices2Element>;
      'pwc-choices-2-selected-item-bubble': LocalJSX.PwcChoices2SelectedItemBubble & JSXBase.HTMLAttributes<HTMLPwcChoices2SelectedItemBubbleElement>;
    }
  }
}


