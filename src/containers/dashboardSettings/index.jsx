import { update, clear } from "../../store/actions";
import { updateEmail, updatePassword, deleteProfile } from "../../firebase";

import Slot from "./slot";

function DashboardSettings() {
  const getProps = (authMethod, storeAction) => ({
    authMethod,
    storeAction,
  });

  return (
    <>
      <Slot settingName="email" {...getProps(updateEmail, update)} />
      <Slot settingName="password" {...getProps(updatePassword, null)} />
      <DangerZone {...getProps(deleteProfile, clear)} />
    </>
  );
}

export default DashboardSettings;

const DangerZone = ({ storeAction, authMethod }) => {
  return (
    <Slot
      storeAction={storeAction}
      authMethod={authMethod}
      msg="Profile deleted successfully"
      color="error"
      sx={{ mt: 10 }}
      actionTxt="Delete"
      title="Danger Zone"
      settingViews={
        <>
          <strong>Delete account</strong>
          <p style={{ margin: "2px 0" }}>
            Once you deleted an account, there is no going back. Please be
            certain.
          </p>
        </>
      }
    />
  );
};
