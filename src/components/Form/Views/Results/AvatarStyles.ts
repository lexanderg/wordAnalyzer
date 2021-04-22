import { createStyles, makeStyles, Theme } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        large: {
            width: 150,
            height: 100,
            borderRadius: 10
        },
    }),
);

export { useStyles };
