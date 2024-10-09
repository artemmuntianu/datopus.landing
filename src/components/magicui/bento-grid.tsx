import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ReactNode } from "react";

const BentoGrid = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "grid w-full gap-4",
                className,
            )}
        >
            {children}
        </div>
    );
};

const BentoCard = ({
    name,
    className,
    backgroundNode,
    descriptionNode,
    href,
    cta,
}: {
    name: string;
    className: string;
    backgroundNode?: ReactNode;
    descriptionNode: ReactNode,
    href: string;
    cta: string;
}) => (
    <div
        key={name}
        className={cn(
            "group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
            className
        )}
    >
        <div>
            <div className="z-10 flex flex-col gap-1 p-6 ">
                <h3 className="pointer-events-none text-xl font-semibold text-neutral-700">
                    {name}
                </h3>
                {descriptionNode}
            </div>
            {backgroundNode}
        </div>
        <div className="flex w-full flex-row items-center p-4">
            <Button variant="ghost" asChild size="sm">
                <Link href={href}>
                    {cta}
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
    </div>
);

export { BentoCard, BentoGrid };
