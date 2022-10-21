const NavItem = ({ itemProps }) => {
    const { label, icon, active } = itemProps;
    return (
        <div>
            <li
                className={`flex justify-end items-center cursor-pointer my-2 ${
                    active ? ' bg-primary text-white' : ''
                }`}
            >
                <div>{label} </div>
                <div> {icon}</div>
            </li>
        </div>
    );
};

export default NavItem;
