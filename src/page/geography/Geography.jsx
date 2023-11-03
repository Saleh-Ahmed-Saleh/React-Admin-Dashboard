import { Box, useTheme } from "@mui/material";
import Geo from "./geo";
import Header from "../../components/Header";

const Geography = () => {
    const theme = useTheme();
    return (
        <Box>
        <Header title="Geography" subTitle="Simple Geography Chart" />

        <Geo />
        </Box>
    );
};

export default Geography;