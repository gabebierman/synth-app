import styled from "@emotion/styled";

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

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
