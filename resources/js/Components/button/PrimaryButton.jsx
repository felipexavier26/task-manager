export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center rounded-md border border-transparent bg-blue-600 
                px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white
                transition duration-150 ease-in-out hover:bg-blue-500 focus:bg-blue-500
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                active:bg-blue-700 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500
                dark:focus:bg-blue-500 dark:focus:ring-offset-gray-800 dark:active:bg-blue-700
                ${disabled && 'opacity-25 cursor-not-allowed'}
                ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
