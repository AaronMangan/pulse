export default function SmallText({ id, value, className }) {
    return (
        <small
            id={id}
            name={id}
            className={`text-light font-xs text-gray-400 ${className}`}
        >{value}</small>
    );
}