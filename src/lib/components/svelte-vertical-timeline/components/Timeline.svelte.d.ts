import { SvelteComponentTyped } from "svelte";
import type { TimelinePosition } from '../types';
declare const __propDef: {
    props: {
        position?: TimelinePosition;
        style?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type TimelineProps = typeof __propDef.props;
export declare type TimelineEvents = typeof __propDef.events;
export declare type TimelineSlots = typeof __propDef.slots;
export default class Timeline extends SvelteComponentTyped<TimelineProps, TimelineEvents, TimelineSlots> {
}
export {};
