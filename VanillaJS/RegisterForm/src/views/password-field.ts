import { nextTick } from "..";
import { RequireRule } from "../constraint";
import { ValidateRule } from "../types";
import template from "./templates/password-field.template";

enum StrongLevel {
    None,
    Light,
    Medium,
    Heavy,
}

const StrongMessage: string[] = [
    '금지된 수준',
    '심각한 수준',
    '보통 수준',
    '강력한 암호',
]

type Props = {
    id: string;
    label: string;
    text?: string;
    require?: boolean;
    placeholder?: string;
    strong?: StrongLevel;
}

const DefaultProps: Props = {
    id: '',
    label: 'label',
    text: '',
    require: true,
    placeholder: '',
    strong: StrongLevel.None,
}

export default class PasswordField {
    private template = template;
    private container: string;
    private data: Props;
    private updated: boolean = false;
    private validateRules: ValidateRule[] = [];

    constructor(container: string, data: Props) {
        this.container = container;
        this.data = { ...DefaultProps, ...data };

        if(this.data.require) {
            this.addValidateRule(RequireRule);
        }

        nextTick(this.attachEventHandler);
    }

    private addValidateRule = (rule: ValidateRule) => {
        this.validateRules.push(rule);
    }

    private attachEventHandler = () => {
        document.querySelector(this.container)?.addEventListener('change', this.onChange);
    }

    private onChange = (e: Event) => {
        const { value, id } = e.target as HTMLInputElement;

        if(id === this.data.id) {
            this.updated = true;
            this.data.text = value;
            this.update();
        }
    }

    private update = () => {
        const container = document.querySelector(`#field-${this.data.id}`) as HTMLElement;
        const docElement = document.createElement('div');

        docElement.innerHTML = this.template(this.buildData());
        container.innerHTML = docElement.children[0].innerHTML;
    }

    private buildData = () => {
        let strongLevel = -1;
        const isInvalid: ValidateRule | null = this.validate();

        if(this.data.text!.length > 0) {
            strongLevel++;
        }
        if(this.data.text!.length > 12) {
            strongLevel++;
        }
        if(/[!@#$%^&*()]/.test(this.data.text!)) {
            strongLevel++;
        }
        if(/\d/.test(this.data.text!)) {
            strongLevel++;
        }

        return {
            ...this.data,
            updated: this.updated,
            valid : this.updated ? !isInvalid : true,
            strongMessage : strongLevel < 0 ? '' : StrongMessage[strongLevel],
            strongLevel0 : strongLevel >= 1,
            strongLevel1 : strongLevel >= 2,
            strongLevel2 : strongLevel >= 3,
            strongLevel3 : strongLevel >= 4,
        }
    }

    private validate = (): ValidateRule | null => {
        const target = this.data.text ? this.data.text.trim() : '';

        const invalidateRules = this.validateRules.filter(
            validateRule => validateRule.rule.test(target) !== validateRule.match
        );
        // 유효하지 않는 룰이 하나 이상이면, 유효하지 않은 룰에 대한 설명을 리턴 or 널값
        return (invalidateRules.length > 0) ? invalidateRules[0] : null;
    }

    public get name(): string {
        return this.data.id;
    }
    public get value(): string {
        return this.data.text || '';
    }
    public isValid(): boolean {
        return !this.validate();
    }

    public render = (append: boolean = false) => {
        const container = document.querySelector(this.container) as HTMLElement;

        if(append) {
            const divElement = document.createElement('div');
            divElement.innerHTML = this.template(this.buildData());

            container.appendChild(divElement.firstElementChild as HTMLElement);
        } else {
            container.innerHTML = this.template(this.buildData());
        }
    }
}