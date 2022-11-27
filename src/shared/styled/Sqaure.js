import styled from "@emotion/styled";
import { theme } from "../themes/Themes";

export const Square = styled("div")(({ active, selected, theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    backgroundColor: selected ? theme.palette.primary.main : "696969",
    border: active ? "1px solid #eeffcc" : "1px solid #89a257",
}));
