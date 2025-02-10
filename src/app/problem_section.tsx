import { ClockIcon, DashboardIcon, Share1Icon } from "@radix-ui/react-icons";

export function ProblemSection() {
    return (
        <div className="mt-12 flex h-full flex-col items-center justify-between gap-8 text-center text-gray-600 md:flex-row md:gap-0">
            <div className="flex size-full flex-col justify-center gap-4 md:w-1/3">
                <div className="mx-auto mb-2">
                    <ClockIcon className="size-16" />
                </div>
                <p className="text-[1.5rem]">
                    Event Tracking Plan demand time to implement and maintain.
                </p>
            </div>
            <div className="mx-4 hidden h-[150px] w-[2px] bg-gradient-to-b from-transparent via-black/40 to-transparent md:block"></div>
            <div className="flex size-full flex-col justify-center gap-4 md:w-1/3">
                <div className="mx-auto mb-2">
                    <DashboardIcon className="size-16" />
                </div>
                <p className="text-[1.5rem]">
                    Product and Growth teams barely understand the collected data.
                </p>
            </div>
            <div className="mx-4 hidden h-[150px] w-[2px] bg-gradient-to-b from-transparent via-black/40 to-transparent md:block"></div>
            <div className="flex size-full flex-col justify-center gap-4 md:w-1/3">
                <div className="mx-auto mb-2">
                    <Share1Icon className="size-16" />
                </div>
                <p className="text-[1.5rem]">
                    The cost of analytics software tied up to amount of users and events.
                </p>
            </div>
        </div>
    )
}