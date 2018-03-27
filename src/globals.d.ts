declare module '*.st.css' {
    const stylesheet: RuntimeStylesheet;
    export default stylesheet;
}

declare module '*.svg' {
    const urlToFile: string;
    export default urlToFile;
}

declare module '*.css' {
    const stylesheet: void;
    export default stylesheet;
}

interface StateMap {
    [key: string]: boolean;
}

interface Stylesheet {
    namespace: string;
    root: string;
    get: (localName: string) => string;
    cssStates: (stateMapping: StateMap) => StateMap;
}

interface RuntimeHelpers {
    $get: (localName: string) => string;
    $cssStates: (stateMapping: StateMap) => StateMap;
}

type StylesheetLocals = {[key: string]: string} & {$stylesheet: Stylesheet} & RuntimeHelpers;
type RuntimeStylesheet = StylesheetLocals & (
    (
        className: string,
        states?: StateMap,
        props?: {className?: string, [key: string]: any}
    ) => {[key: string]: string}
);

interface Coordinates {
    width: number
    height: number
    top: number
    left: number
  }
  
interface IPattern {
    name?: string
    coordinates: Coordinates
    tags?: Array<{name:string, count:number}>
  }

  interface ITag {
    name:string
    count:number
  }