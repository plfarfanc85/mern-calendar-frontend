/*
 [auth] Start login -> proceso asincrono para realizar el posteo y autenticación
 [auth] Login -> cuando ya tengamos la autenticación y quiera llamar algo para establecer la información del usuario
*/

export const types = {
  uiOpenModal: "[ui] Open modal",
  uiCloseModal: "[ui] Close modal",

  eventSetActive: "[event] Set Active",
  eventLogout: "[event] Logout event",

  eventStartAddNew: "[event] Start add New",
  eventAddNew: "[event] Add new",
  eventClearActiveEvent: "[event] Clear active event",
  eventUpdated: "[event] Event updated",
  eventDeleted: "[event] Event deleted",
  eventLoaded: "[event] Events loaded",

  authCheckingFinish: "[auth] Finish checking login state",
  authStartLogin: "[auth] Start login",
  authLogin: "[auth] Login",
  authStartRegister: "[auth] Start Register",
  authStartTokenRenew: "[auth] Start token renew",
  authLogout: "[auth] Logout",
};
