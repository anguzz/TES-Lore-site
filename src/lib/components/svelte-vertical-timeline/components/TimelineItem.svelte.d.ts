import { SvelteComponentTyped } from "svelte";
import type { ParentPosition } from '../types';
declare const __propDef: {
    props: {
        position?: ParentPosition | null;
        style?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        'opposite-content': {};
        default: {};
    };
};
export declare type TimelineItemProps = typeof __propDef.props;
export declare type TimelineItemEvents = typeof __propDef.events;
export declare type TimelineItemSlots = typeof __propDef.slots;
export default class TimelineItem extends SvelteComponentTyped<TimelineItemProps, TimelineItemEvents, TimelineItemSlots> {
}
export {};
