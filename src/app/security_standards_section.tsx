import { Icons } from "../components/icons";

export function SecurityStandardsSection() {
    return (
        <div className="mx-auto max-w-screen-xl px-4 mt-12 flex h-full flex-col items-center justify-between gap-8 text-center text-black md:flex-row md:gap-0">
            <div className="flex size-full flex-col justify-center gap-4 md:w-1/3">
                <div className="mx-auto mb-2">
                    {Icons.security_soc2type2({ className: "size-16" })}
                </div>
                <p className="text-[1.5rem]">
                    SOC 2 Type II
                </p>
            </div>
            <div className="mx-4 hidden h-[150px] w-[2px] bg-gradient-to-b from-transparent via-black/40 to-transparent md:block"></div>
            <div className="flex size-full flex-col justify-center gap-4 md:w-1/3">
                <div className="mx-auto mb-2">
                    {Icons.security_gdpr({ className: "size-16" })}
                </div>
                <p className="text-[1.5rem]">
                    GDPR
                </p>
            </div>
            <div className="mx-4 hidden h-[150px] w-[2px] bg-gradient-to-b from-transparent via-black/40 to-transparent md:block"></div>
            <div className="flex size-full flex-col justify-center gap-4 md:w-1/3">
                <div className="mx-auto mb-2">
                    {Icons.security_hipaa({ className: "size-16" })}
                </div>
                <p className="text-[1.5rem]">
                    HIPAA
                </p>
            </div>
        </div>
    )
}