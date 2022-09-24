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
export declare type TimelineDotProps = typeof __propDef.props;
export declare type TimelineDotEvents = typeof __propDef.events;
export declare type TimelineDotSlots = typeof __propDef.slots;
export default class TimelineDot extends SvelteComponentTyped<TimelineDotProps, TimelineDotEvents, TimelineDotSlots> {
}
export {};
