import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-gray-900 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <div className="mr-2">
                        <img
                            src="/logo.png"
                            alt="IUTDS Logo"
                            className="h-8 w-8"
                        />
                    </div>
                    <Link href="/">
                        <div>
                            <h1 className="text-white font-bold text-lg">IUTDS</h1>
                        </div>
                    </Link>
                </div>
                <div className="flex ml-4 mr-4 pl-10 pr-10">
                    <Link className="mr-4" href="/about">
                        About
                    </Link>
                    <Link className="mr-4" href="/panel">
                        Panel
                    </Link>
                    <Link className="mr-4" href="/programs">
                        Events
                    </Link>
                    <Link className="mr-4" href="/achievements">
                        Achievements
                    </Link>
                    <Link className="mr-4" href="/blog">
                        Blog
                    </Link>
                    <Link className="mr-4" href="/debate-resources">
                        Debate Resources
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
