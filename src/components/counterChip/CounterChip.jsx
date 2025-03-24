import { Chip } from "@mui/material";

const CounterChip = ({count, icon}) => {
    return (
        <Chip icon={icon} label={count} />
    );
};

export default CounterChip;