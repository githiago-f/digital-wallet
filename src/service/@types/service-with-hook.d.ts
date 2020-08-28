export type TRequestObject<T> = { [k in keyof T ]: (...args: any[]) => Promise<any>};

export type TGeneric = { [key: string]: (...args: any[]) => Promise<any>};

export type TKeys<T> = keyof T;
