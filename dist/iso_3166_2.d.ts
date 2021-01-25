declare type Code = string;
declare type LocationInfo = {
    code: Code;
    name: string;
    division: string;
    parent?: Code;
    lat?: number;
    lng?: number;
};
declare const iso_3166_2: Record<Code, LocationInfo>;
export default iso_3166_2;
