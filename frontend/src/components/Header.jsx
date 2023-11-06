import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className="sticky w-full top-0 bg-white py-4 shadow-sm border-b border-gray-200 z-20">
            <div className="container-max flex justify-between items-center">
                <div className="flex items-center gap-2 md:gap-4 ">
                    <Link to="/" className="font-serif font-extrabold text-3xl">
                        FOODISTA
                    </Link>
                </div>

                <ul className="text-gray-600 gap-2 md:gap-4 md:flex items-center hidden">
                    <li>
                        <Link
                            to="/"
                            className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2 text-lg">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2 text-lg">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2 text-lg">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/cart"
                            className="p-2 md:px-4 hover:bg-gray-50 rounded-md flex items-center gap-2 text-lg">
                            Cart
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
