export default function BentoGrid({ children }) {
    return (
        <div
            className="
                grid
                grid-cols-1
                gap-6

                md:grid-cols-2

                xl:grid-cols-12

                auto-rows-[170px]
            "
        >
            {children}
        </div>
    );
}