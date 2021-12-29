import React from 'react';
import { LinkProps, NavLink, useMatch, useResolvedPath } from "react-router-dom";

export const NavigationLink = ({children, to, ...props}: LinkProps) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({path: resolved.pathname, end: true});

    return (
        <div>
            <NavLink
                className={match ? "activeClass" : "navLink"}
                to={to}
                {...props}
            >
                {children}
            </NavLink>
        </div>
    );
};