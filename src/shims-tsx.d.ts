import Vue, { VNode } from 'vue';

type Vue = typeof Vue;

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
    interface LabeledValue {
      label: string;
      size: number;
    }
  }
}
