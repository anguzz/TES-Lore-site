import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type TimelineContentProps = typeof __propDef.props;
export declare type TimelineContentEvents = typeof __propDef.events;
export declare type TimelineContentSlots = typeof __propDef.slots;
export default class TimelineContent extends SvelteComponentTyped<TimelineContentProps, TimelineContentEvents, TimelineContentSlots> {
}
export {};
