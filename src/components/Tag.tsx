import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
    const {className, children,  ...rest} = props;
    return (
        <div className={twMerge('inline-flex border border-pink-400 gap-2 text-pink-400 px-3 py-1 rounded-full uppercase items-center', className)} {...rest}>
            <span>&#10038;</span>
            <span className="text-sm">{children}</span>
        </div>
    );
}