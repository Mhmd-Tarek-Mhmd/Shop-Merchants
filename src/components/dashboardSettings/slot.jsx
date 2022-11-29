import { useState } from "preact/hooks";
import { useDispatch } from "react-redux";

import { useFireAuthRedux } from "../../hooks";
import { openDialog, closeDialog } from "../../store/actions";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Input from "../input";
import ReAuth from "./reAuth";

function Slot({
  sx,
  msg,
  title,
  color,
  actionTxt,
  authMethod,
  settingName,
  storeAction,
  settingViews,
}) {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const settingHook = useFireAuthRedux(authMethod, storeAction);

  const reAuthHandler = () => {
    const success = {
      cb: () => dispatch(closeDialog()),
      getMsg: () => msg || `${settingName} changed successfully`,
    };
    settingHook([value], [{ [settingName]: value }], success);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      openDialog({
        title: "Are you sure?",
        desc: "Please enter your password to confirm",
        children: <ReAuth reAuthHandler={reAuthHandler} />,
      })
    );
  };

  return (
    <Views
      sx={sx}
      value={value}
      color={color}
      title={title}
      setValue={setValue}
      actionTxt={actionTxt}
      settingName={settingName}
      settingViews={settingViews}
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
