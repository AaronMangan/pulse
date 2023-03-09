import SmallText from "./SmallText";

/**
 * Creates a bootstrap style badge!
 * Remember that if you use a custom color set the type to `custom` and the `custom` prop to the colour you want. If it does not work check the tailwind config for the color definition.
 * @param {*} props type: The type of badge to make | value: What is written on the badge | custom: If you want to use a custom color specify it here. The type must also be 'custom'.
 * @returns
 */
export default function Badge({ className, type, value, custom = 'info' }) {
    const whichType = (type) => {
        switch(type) {
            case 'default':
                return 'info';
            case 'success':
                return 'success';
            case 'info':
                return 'info';
            case 'warning':
                return 'warning';
            case 'danger':
                return 'danger';
            case 'error':
                return 'error';
            case 'custom':
                return {custom};
            default:
                return 'gray-500';
        }
    };
    return (
        <SmallText value={value} className={`h-5 bg-${whichType(type)} text-white text-xs font-bold px-1.5 py-0.5 rounded dark:bg-${whichType(type)} dark:text-${whichType(type)} ${className}`} />
    );
}
