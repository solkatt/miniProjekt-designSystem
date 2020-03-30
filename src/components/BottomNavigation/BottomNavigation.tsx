import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from 'material-ui/svg-icons/action/restore';

import ShoppingCartIcon from 'material-ui/svg-icons/action/shopping-cart';

const useStyles = makeStyles({
    root: {
        width: '100vw',
    },
});

export default function MobileNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Favorites" value="favorites" icon={<ShoppingCartIcon />} />
            <BottomNavigationAction label="Nearby" value="nearby" icon={<RestoreIcon />} />

            <BottomNavigationAction label="Kundvagn" value="folder" icon={<ShoppingCartIcon />} />
        </BottomNavigation>
    );
}