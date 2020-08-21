
declare type PropsBase<T = Record<string, unknown>> = React.PropsWithChildren<T>;

declare type PageProps<T = {}, RT = {}> =
    import('react-router-dom').RouteComponentProps<T> &
    React.Props<RT>;
