import {IconName} from "@fortawesome/fontawesome-svg-core";

export interface AlertModalInput {
  title: string;
  icon: IconName;
  message: string;
  buttonAcceptText: string;
  buttonDeclineText: string;

}
