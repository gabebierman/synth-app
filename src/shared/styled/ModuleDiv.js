import styled from "@emotion/styled";

export const ModuleDiv = styled("div")(({ theme }) => ({
    width: "auto",
    display: "flex",
    border: "1px solid",
    borderColor: theme.palette.secondary.main,
    borderRadius: "5px",
    padding: "10px",
    margin: "10px",
}));
