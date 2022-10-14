import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface buttonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function button({children,asChild}: buttonProps) {
    const Comp = asChild ? Slot : 'button';
    return(
        <Comp className={clsx(
            'py-4 px-3 bg-cyan-600 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white'  ,
     
            )}
            >
             {children}
        </Comp>
      
        
    )
}