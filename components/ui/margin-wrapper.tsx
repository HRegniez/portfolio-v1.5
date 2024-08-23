import { cn } from "@/lib/utils";

export const MarginWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={cn("max-w-[1200px] mx-auto", className)}>
            {children}
        </div>
    )
}