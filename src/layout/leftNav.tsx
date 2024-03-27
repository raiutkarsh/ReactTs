import React, { FC } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {useNavigate} from "react-router";
import {BrowserRouter} from "react-router-dom";
interface NavigationItem {
    label: string;
    route: string;
}

interface LeftNavigationProps {
    items: NavigationItem[];
}

const LeftNavigation: FC<LeftNavigationProps> = ({ items }) => {
    const navigate = useNavigate();

    const handleNavigation = (route: string) => {
        navigate(route);
    };

    return (
            <Drawer variant="permanent" anchor="left">
                <List>
                    {items.map((item, index) => (
                        <ListItem key={index} onClick={() => handleNavigation(item.route)}>
                            <ListItemText primary={item.label} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </BrowserRouter>
    );
};

export default LeftNavigation;
