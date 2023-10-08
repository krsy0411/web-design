export const WindDirectiontext = ({deg = 0}) => {
    switch(true) {
        case((333.5 <= deg && deg<=360) || (0<=deg && deg<22.5)):
            return '북풍';
        case(22.5 <= deg && deg < 67.5):
            return '북동풍';
        case(67.5 <= deg && deg < 112.5):
            return '동풍';
        case(112.5 <= deg && deg < 157.5):
            return '남동풍';
        case(157.5 <= deg && deg < 202.5):
            return '남풍';
        case(202.5 <= deg && deg < 247.5):
            return '남서풍';
        case(247.5 <= deg && deg < 292.5):
            return '서풍';
        case(292.5 <= deg && deg < 337.5):
            return '북서풍';
        default:
            return "";
    }
}