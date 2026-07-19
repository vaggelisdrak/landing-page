import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva('border h-12 rounded-full px-6 font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.97]', {
    variants: {
        variant: {
            primary: 'bg-pink-400 text-neutral-950 border-pink-400 hover:bg-pink-300 hover:border-pink-300 hover:shadow-pink-400/20',
            secondary: 'border-white text-white bg-transparent hover:bg-white hover:text-neutral-950',
        },
        size: {
            sm: 'h-10',
        },
    },
});

export default function Button(
    props: { 
        variant: "primary" | "secondary" ;
        size?: "sm";
    } & ButtonHTMLAttributes<HTMLButtonElement>) {
    
    const { variant, className, size, ...rest } = props;
    return (
        <button 
            className={classes({
                variant, 
                className,
                size,
         })}
            {...rest}
        />
    );
}
