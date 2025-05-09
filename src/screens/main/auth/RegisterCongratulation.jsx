import React from "react";
import { useNavigate } from "react-router-dom";
import TelegramText from "../../../components/kit/Text/TelegramText";
import TelegramButton from "../../../components/kit/Button/TelegramButton";
import { PATH_SETTING } from "../../../constants/Paths";
import TelegramScreen from "../../../components/kit/Screen/TelegramScreen";

const Main = () => {
  const navigate = useNavigate();

  return (
    <TelegramScreen showbackbutton={true}>
      <div className="p-[16px]">
        <img className="logo" src="./success.svg" alt="logo" />
      </div>

      <div className="container">
        <div className="text-container ">
          <div className="title-container">
            <TelegramText className="title-text">
              Congratulations! You've
            </TelegramText>
            <TelegramText className="title-text">
              Successfully Signed Up for
            </TelegramText>
            <TelegramText className="title-text">BlockM!</TelegramText>
          </div>

          <TelegramText className="text-justify subtitle-text">
            You've earned BlockM tokens, which you can use for services like
            doctor appointments, shopping, rides, and even converting to local
            currency. Enjoy your rewards! BlockLoans?
          </TelegramText>
        </div>
        <div className="button-container">
          <TelegramButton onClick={() => navigate(PATH_SETTING)}>
            NEXT
          </TelegramButton>
        </div>
      </div>
    </TelegramScreen>
  );
};

export default Main;
