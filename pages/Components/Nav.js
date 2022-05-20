import React from "react";
import { useRouter } from 'next/router'

 const Nav = () => {
     const router = useRouter();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <div className="nav-link active" style={{cursor: "pointer"}} onClick={() => router.push('/')}> Home </div>
                            </li>
                            <li className="nav-item" style={{cursor: "pointer"}} onClick={() => router.push(`/Components/Blog/${'Add_Blog'}`)}>
                                <div className="nav-link active" > Add blog </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;