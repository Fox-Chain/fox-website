declare type SVGComponent = React.FC<React.SVGProps<SVGSVGElement>>;

declare type Option<T> = T | undefined;

declare type Ok<T> = T;
declare type Err<E> = E;
declare type Result<T, E> = Ok<T> | Err<E>;
