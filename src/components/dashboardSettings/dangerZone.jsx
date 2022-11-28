import { clear } from "../../store/actions";
import { deleteProfile } from "../../firebase";
import { useFireAuthRedux } from "../../hooks";

import Typography from "@mui/material/Typography";

import { Views as Slot } from "./slot";

function DangerZone({ slotHandler }) {
  const deleteProfileHook = useFireAuthRedux(deleteProfile, clear);

  const actionHandler = () => {
    slotHandler(deleteProfileHook, [
      [],
      [],
      {
        getMsg: () => "Profile deleted successfully",
      },
    ]);
  };

  return (
    <Slot
      color="error"
      sx={{ mt: 10 }}
      actionTxt="Delete"
      title="Danger Zone"
      actionHandler={actionHandler}
      settingViews={
        <>
          <strong>Delete account</strong>
          <Typography>
            Once you deleted an account, there is no going back. Please be
            certain.
          </Typography>
        </>
      }
    />
  );
}

export default DangerZone;
