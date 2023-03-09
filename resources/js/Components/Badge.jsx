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
                return {
                    bg: 'info',
                    text: 'gray-500'
                };
            case 'success':
                return {
                    bg: 'success',
                    text: 'white',
                };
            case 'info':
                return {
                    bg: 'info',
                    text: 'gray-500',
                };
            case 'warning':
                return {
                    bg: 'warning',
                    text: 'gray-900',
                };
            case 'danger':
                return {
                    bg: 'danger',
                    text: 'white',
                };
            case 'error':
                return {
                    bg: 'danger',
                    text: 'white',
                };
            case 'custom':
                return {custom};
            default:
                return 'gray-500';
        }
    };
    return (
        <SmallText value={value} className={`h-5 bg-${whichType(type).bg} text-white text-xs font-bold px-1.5 py-0.5 rounded dark:bg-${whichType(type).bg} dark:text-${whichType(type).text} ${className}`} />
    );
}
