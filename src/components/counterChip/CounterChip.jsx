import { Chip } from "@mui/material";
import { addSeperatorToNumber } from "../../utilities/utils";

const CounterChip = ({count, icon}) => {
    const propsValid = typeof count === "number" && typeof icon === "object";
    
    const formattedCount = addSeperatorToNumber(count);

    return (
        propsValid ? <Chip icon={icon} label={formattedCount} color="primary" /> : <></>
    );
};

export default CounterChip;