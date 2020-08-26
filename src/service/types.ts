export type RequestObject<T> = { [k in keyof T ]: (...args: any[]) => Promise<any>};

export type Generic = { [key: string]: (...args: any[]) => Promise<any>};

export type keys<T> = keyof T;
