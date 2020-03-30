import React from 'react';
import Badge from '@material-ui/core/Badge';
import { Theme, withStyles, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from 'material-ui/svg-icons/action/shopping-cart';

const StyledBadge = withStyles((theme: Theme) =>
    createStyles({
        badge: {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }),
)(Badge);

export default function ShoppingCartBadge(props: any) {
    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={props.cartCount} color="secondary">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
    );
}