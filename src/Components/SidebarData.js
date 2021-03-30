import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import Looks3Icon from '@material-ui/icons/Looks3';
import AssessmentIcon from '@material-ui/icons/Assessment';
export const SidebarData = [
    {
        title: "Home",
        link: "/home",
        icon: <HomeIcon/>
    },

    {
        title: "Floor 1",
        link: "/Floor1",
        icon: <LooksOneIcon/>
    },

    {
        title: "Floor 2",
        link: "/Floor2",
        icon: <LooksTwoIcon/>
    },

    {
        title: "Floor 3",
        link: "/Floor3",
        icon: <Looks3Icon/>
    },

    {
        title: "ANALYTICS",
        link: "/analytics",
        icon: <AssessmentIcon/>
    }
];