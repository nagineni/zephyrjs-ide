import { WebUsbPort } from '../../shared/webusb/webusb.port';
import { WebUsbLinuxPort } from '../../shared/webusb/webusblinux.port';

export enum OPERATION_STATUS {
    NOT_STARTED,
    STARTING,
    IN_PROGRESS,
    DONE,
    ERROR
}

export interface EditorTab {
    id: number;
    active: boolean;
    title: string;
    filename?: string;
    saveToDevice?: boolean;
    editor: any;
    runStatus?: OPERATION_STATUS;
    editing?: boolean;
    hasError?: boolean;
}
