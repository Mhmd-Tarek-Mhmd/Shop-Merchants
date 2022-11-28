import { useState } from "preact/hooks";

import { useFireAuthRedux } from "../../hooks";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Input from "../input";

function Slot({ settingName, slotHandler, authMethod, storeAction }) {
  const [value, setValue] = useState("");
  const settingHook = useFireAuthRedux(authMethod, storeAction);

  const handleSubmit = (e) => {
    e.preventDefault();
    const args = [
      [value],
      [{ [settingName]: value }],
      {
        getMsg: () => `${settingName} changed successfully`,
      },
    ];

    slotHandler(settingHook, args);
  };

  return (
    <Views
      value={value}
      setValue={setValue}
      settingName={settingName}
      actionHandler={handleSubmit}
    />
  );
}

export default Slot;

export const Views = ({
  sx,
  title,
  color,
  value,
  setValue,
  actionTxt,
  settingName,
  settingViews,
  actionHandler,
}) => {
  const fallbackColor = color || "primary";
  const getFallbackTitle = (txt, verb) => txt || `${verb} ${settingName}`;

  return (
    <Paper sx={{ ...sx, py: 2, px: { xs: 2, sm: 3 } }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{ mb: 2.5 }}
        color={fallbackColor}
      >
        {getFallbackTitle(title, "Change")}
      </Typography>

      {settingViews ? (
        <>
          {settingViews}
          <ActionButton
            actionTxt={actionTxt}
            onClick={actionHandler}
            actionColor={fallbackColor}
          />
        </>
      ) : (
        <Box component="form" onSubmit={actionHandler}>
          <Input
            value={value}
            autoComplete="off"
            type={`${settingName}`}
            label={`New ${settingName}`}
            onChange={(e) => setValue(e.target.value)}
          />
          <ActionButton
            type="submit"
            actionColor={fallbackColor}
            actionTxt={getFallbackTitle(actionTxt, "Update")}
          />
        </Box>
      )}
    </Paper>
  );
};

const ActionButton = ({ actionTxt, actionColor, ...props }) => (
  <Button sx={{ mt: 1.5 }} variant="contained" color={actionColor} {...props}>
    {actionTxt}
  </Button>
);
