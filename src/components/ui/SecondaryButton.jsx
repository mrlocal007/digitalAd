export default function SecondaryButton({
    children,
}) {
    return (
        <button className="inline-flex items-center rounded-full border border-slate-300 px-7 py-4 font-semibold text-slate-800 transition hover:bg-slate-100">
            {children}
        </button>
    );
}