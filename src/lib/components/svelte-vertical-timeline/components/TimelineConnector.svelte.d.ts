import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type TimelineConnectorProps = typeof __propDef.props;
export declare type TimelineConnectorEvents = typeof __propDef.events;
export declare type TimelineConnectorSlots = typeof __propDef.slots;
export default class TimelineConnector extends SvelteComponentTyped<TimelineConnectorProps, TimelineConnectorEvents, TimelineConnectorSlots> {
}
export {};
