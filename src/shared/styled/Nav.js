import styled from "@emotion/styled";

export const Nav = styled("nav")(({ theme }) => ({
    width: "auto",
    display: "flex",
    border: "1px solid",
    borderColor: theme.palette.secondary.main,
    borderRadius: "5px",
    justifyContent: "space-around",
    backgroundColor: theme.palette.background.main,
    verticalAlign: "middle",
    minHeight: "50px",
    padding: "10px",
    margin: "10px",
}));
