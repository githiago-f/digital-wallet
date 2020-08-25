
declare type PropsBase<T extends Object> = React.PropsWithChildren<T>;

declare type PageProps<T extends Object, RT extends Object> =
    import('react-router-dom').RouteComponentProps<T> &
    React.Props<RT>;
