export type Address = {
    zip: string;
    address1: string;
    address2: string | '';
}

// daum 주소 검색 후 반환된 데이터 중 다룰 데이터 타입 설정
export type DaumAddress = {
    address: string;
    autoJibunAddress: string;
    roadAddress: string;
    sigunguCode: string;
}