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
                "flex flex-wrap -m-[5px]",
                className,
            )}
        >
            {children}
        </div>
    );
};

const BentoCard = ({
    name,
    backgroundNode,
    descriptionNode,
    href,
    cta,
}: {
    name: string;
    backgroundNode?: ReactNode;
    descriptionNode: ReactNode,
    href: string;
    cta: string;
}) => (
    <div
        key={name}
        className="group w-full m-[5px] relative flex flex-col justify-between overflow-hidden rounded-xl bg-white lg:w-[calc(50%-10px)] [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
    >
        <div>
            <div className="z-10 flex flex-col gap-1 p-6 text-[1.3rem]">
                <h3 className="pointer-events-none text-xl font-semibold text-primary">
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
