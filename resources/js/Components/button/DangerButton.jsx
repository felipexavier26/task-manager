export default function DangerButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center rounded-md border border-transparent bg-[#DC2626] 
                px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white
                transition duration-150 ease-in-out hover:bg-[#B91C1C] focus:bg-[#B91C1C]
                focus:outline-none focus:ring-2 focus:ring-[#B91C1C] focus:ring-offset-2
                active:bg-[#991B1B] dark:bg-[#DC2626] dark:text-white dark:hover:bg-[#B91C1C]
                dark:focus:bg-[#B91C1C] dark:focus:ring-offset-gray-800 dark:active:bg-[#991B1B]
                ${disabled && 'opacity-25 cursor-not-allowed'}
                ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
