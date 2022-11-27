import styled from "@emotion/styled";

export const Square = styled("div")(({ active, selected, lightTheme, theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    backgroundColor: selected ? lightTheme.primary.value : "696969",
    border: active ? "1px solid #999" : "1px solid #eee",
}));
