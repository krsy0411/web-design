import { AnyObject } from "./types";

export const nextTick = (fn: Function) => setTimeout(fn, 16);

// handlebarsJS의 컴파일 함수의 타입 설정
// 다음 주소 검색 객체의 타입 설정 : 컴파일 오류 메시지 방지
declare global {
    interface Window {
        Handlebars: {
            compile: (template: string) => (data: AnyObject) => string;
        },
        daum: any,
    }
}