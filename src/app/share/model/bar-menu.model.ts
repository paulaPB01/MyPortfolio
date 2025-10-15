export class BarMenuItem {
    label: string = '';
    icon?: string;
    section: string = '';
    command: (section: string) => void = () => {};
    active?: boolean;
    styleClass?: string;
    visible: boolean = true;
}