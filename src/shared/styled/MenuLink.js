import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const MenuLink = styled(NavLink)(({ theme }) => ({
    flexBasis: "auto",
    padding: "5px",
    textAlign: "center",
    textDecoration: "none",
    border: "1px solid",
    borderColor: theme.palette.secondary.main,
    borderRadius: "5px",
    color: theme.palette.secondary.main,
    "&:not(.active):hover": {
        color: theme.palette.primary.main,
    },
    "&.active": {
        color: theme.palette.primary.main,
    },

    // backgroundColor: theme.palette.primary,
    // "&:not(.active):hover": {
    //     backgroundColor: theme.palette.primary.main,
    // },
    // "&.active": {
    //     backgroundColor: theme.palette.primary.main,
    // },
}));
