import SmallText from "./SmallText";

/**
 * Creates a bootstrap style badge!
 * Remember that if you use a custom color set the type to `custom` and the `custom` prop to the colour you want. If it does not work check the tailwind config for the color definition.
 * @param {*} props type: The type of badge to make | value: What is written on the badge | custom: If you want to use a custom color specify it here. The type must also be 'custom'.
 * @returns
 */
export default function Badge({ type, value, custom = '' }) {
    const whichType = () => {
        switch(type) {
            case 'default':
                return 'blue';
            case 'success':
                return 'green';
            case 'info':
                return 'blue';
            case 'warning':
                return 'yellow';
            case 'danger':
                return 'red';
            case 'error':
                return 'red';
            case 'custom':
                return custom;
            default:
                return 'purple';
        }
    };
    return (
        <SmallText value={value} className={`bg-${whichType()}-100 text-${whichType()}-800 text-xs font-bold px-1.5 py-0.5 rounded dark:bg-${whichType()}-900 dark:text-${whichType()}-300`} />
    );
}
