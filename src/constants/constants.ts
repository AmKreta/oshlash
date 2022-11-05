import { PERMISSIONS} from "../types/customComponents";

export const share_permission_display_val: {
  [key in PERMISSIONS]: string;
} = {
  [PERMISSIONS.FULL_ACESS]: "Full access",
  [PERMISSIONS.CAN_VIEW]: "Can View",
  [PERMISSIONS.CAN_EDIT]: "Can Edit",
  [PERMISSIONS.NO_ACCESS]: "No Access",
};
