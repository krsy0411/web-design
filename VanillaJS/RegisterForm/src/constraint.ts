import { ValidateRule } from "./types";

// . : 모든 문자열(숫자, 한글, 영어, 특수기호, 공백 모두)
// + : 최소 한개 or 여러개
export const RequireRule: ValidateRule = {
    rule: /.+/,
    match: true,
    message: '필수 입력 항목입니다.',
};

// \s : space 공백
export const CantContainWhiteSpace: ValidateRule = {
    rule: /\s/,
    match: false,
    message: '공백을 포함 할 수 없습니다.',
};

// ^문자열 : 특정 문자열로 시작 (시작점)
// \d : 숫자
export const CantStartNumber: ValidateRule = {
    rule: /^\d/,
    match: false,
    message: '숫자로 시작하는 아이디는 사용할 수 없습니다.',
}

// 필드마다 최소글자 제한 개수가 다르므로 함수 형태로 갯수를 인자로 받아 정규표현식을 돌린다
export const MinimumLengthLimit = (limit: number): ValidateRule => ({
    rule: new RegExp(`(.)(${limit})`),
    match: true,
    message: `최소한 ${limit}글자 이상 이어야 합니다.`,
})