export default function BentoGrid({ children }) {
    return (
        <div
            className="
                grid

                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-12

                auto-rows-min

                gap-4
                lg:gap-5
                xl:gap-6

                items-start
            "
        >
            {children}
        </div>
    );
}