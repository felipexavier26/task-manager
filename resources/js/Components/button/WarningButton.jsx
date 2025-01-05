export default function WarningButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center rounded-md border border-transparent bg-yellow-500 
                px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white
                transition duration-150 ease-in-out hover:bg-yellow-400 focus:bg-yellow-400
                focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2
                active:bg-yellow-600 dark:bg-yellow-500 dark:text-white dark:hover:bg-yellow-400
                dark:focus:bg-yellow-400 dark:focus:ring-offset-gray-800 dark:active:bg-yellow-600
                ${disabled && 'opacity-25 cursor-not-allowed'}
                ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
