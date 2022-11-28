import { useState } from "preact/hooks";
import { useSelector } from "react-redux";

import { update } from "../../store/actions";
import { updateEmail, updatePassword } from "../../firebase";

import Slot from "./slot";
import DangerZone from "./dangerZone";
import ReAuthModal from "./reAuthModal";

let settingHandler, handlerArgs;

function DashboardSettings() {
  const user = useSelector((state) => state.authedUser);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModalHandler = () => setIsModalOpen(false);
  const slotHandler = (handler, args = []) => {
    settingHandler = handler;
    handlerArgs = args;
    setIsModalOpen(true);
  };
  const reAuthHandler = () => {
    settingHandler(...handlerArgs);
    let reAuthTimer = setTimeout(() => {
      closeModalHandler();
      clearTimeout(reAuthTimer);
    }, 100);
  };

  return (
    <>
      <Slots slotHandler={slotHandler} />
      <ReAuthModal
        isModalOpen={isModalOpen}
        provider={user.providerId}
        reAuthHandler={reAuthHandler}
        closeModalHandler={closeModalHandler}
      />
    </>
  );
}

export default DashboardSettings;

const Slots = ({ slotHandler }) => {
  const getProps = (authMethod, isStoreAction = true) => ({
    authMethod,
    slotHandler,
    ...(isStoreAction && { storeAction: update }),
  });

  return (
    <>
      <Slot settingName="email" {...getProps(updateEmail)} />
      <Slot settingName="password" {...getProps(updatePassword, false)} />
      <DangerZone slotHandler={slotHandler} />
    </>
  );
};
