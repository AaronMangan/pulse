
export default function FloatButton({ action }) {
    return (
        <div className="invisible lg:visible fab-container">
            <div className="custom-button icon-button" onClick={action}>
                <svg fill="none" className='text-primary fill-transparent' stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </div>
    );
}
