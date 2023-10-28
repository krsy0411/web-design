import { nextTick } from "..";
import { RequireRule } from "../constraint";
import { ValidateRule } from "../types";
import template from "./templates/text-field.template";

type Props = {
    id: string;
    label: string;
    type: 'text' | 'email' | 'number';
    placeholder?: string;
    text?: string;
    require: boolean;
}

const DefaultProps: Props = {
    id: '',
    label: 'label',
    type: 'text',
    text: '',
    placeholder: '',
    require: false,
}


export default class TextField {
    private template = template;
    private container: string;
    private data: Props;
    private validateRules: ValidateRule[] = [];
    private updated: boolean = false;

    constructor(container: string, data: Props) {
        this.container = container;
        // default 값들을 넣어주고, 실제로 들어오는 데이터는 오버라이팅
        this.data = {...DefaultProps, ...data};

        // 필수 항목인 경우엔 검증 규칙에 RequireRule 추가 : 디폴트 require는 false
        if(this.data.require) {
            this.addValidateRule(RequireRule);
        }

        nextTick(this.attachEventHandler);
    }
    
    // 검증 함수 => 유효하지 않으면 오류처리
    private validate = (): ValidateRule | null => {
        const target = this.data.text ? this.data.text.trim() : '';
        // 검증룰들에서 룰이 데이터의 텍스트와 값에 부합한지 테스트한게 match값과 다른 것들만 invalidateRules 배열에 넣기
        const invalidateRules = this.validateRules.filter(
            validateRule => validateRule.rule.test(target) !== validateRule.match
        );
        // 하나 이상의 유효하지 않은 룰이 있으면 하나를 리턴
        // 리턴되는 값이 있다느건, 유효하지 않다는 의미
        return (invalidateRules.length > 0) ? invalidateRules[0] : null;
    }

    private onChange = (e: Event) => {
        const {value, id} = e.target as HTMLInputElement;

        if(id === this.data.id) {
            this.updated = true;
            // 인풋값으로 넘어온 value값을 데이터의 텍스트에 저장
            this.data.text = value;
            this.update();
        }
    }

    private buildData = () => {
        const isInvalid: ValidateRule | null = this.validate();
        // 업데이트가 이뤄졌다면 : 유효하지 않을 때의 메시지를 추가해서 새로운 객체 리턴
        if(this.updated) {
            return {
                ...this.data,
                updated: this.updated,
                valid: !isInvalid,
                validateMessage: !!isInvalid ? isInvalid.message : ''
            }
        } else {
            // 업데이트가 이뤄진게 아니라면
            return {
                ...this.data,
                updated: this.updated,
                valid: true,
                validateMessage: ''
            }
        }
    }

    private update = () => {
        const container = document.querySelector(`#field-${this.data.id}`) as HTMLElement;
        const docFrag = document.createElement('div');

        docFrag.innerHTML = this.template(this.buildData());
        container.innerHTML = docFrag.children[0].innerHTML;
    }

    private attachEventHandler = () => {
        document.querySelector(this.container)?.addEventListener('change', this.onChange);
    }

    private addValidateRule = (rule: ValidateRule) => {
        this.validateRules.push(rule);
    }

    public get name(): string {
        return this.data.id;
    }

    // 타당하다면 validate()에서 false여야한다
    public get isValid(): boolean {
        return !this.validate();
    }
    
    public render = (append: boolean = false) => {
        const container = document.querySelector(this.container) as HTMLElement;

        if(append) {
            const divElement = document.createElement('div');
            divElement.innerHTML = this.template(this.buildData());

            container.appendChild(divElement.children[0]);
        } else {
            container.innerHTML = this.template(this.buildData());
        }   
    }
}