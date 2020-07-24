import { SessionCache } from './sessioncache';

/**
 * ServerClient is responsible for keeping up-to-date with the current 
 * session and handles many of the client-to-server interactions, 
 * like passing the controller.
 */
class ServerClient {
  /**
   * Initalizes a ServerClient object.
   * @param {URLSearchParams} urlParams Represents the URLSearchParams 
   *    of the session the client is in, holds information such as the
   *    session ID and the screen name of the current user.
   */
  constructor(urlParams) {
    /**
     * function sessionRequest_() is the fetch api request
     * responsible for contacting the server to retrieve the Session
     * object.
     * @return {function(): Promise<any>} 
     * @private
     */
    async function sessionRequest_() {
      const /** string */ name = encodeURI(urlParams.get('name'));
      const /** string */ sessionID = 
          encodeURI(urlParams.get('session-id'));
      const /** Response */ response = await fetch(
          `/get-session-info?name=${name}&session-id=${sessionID}`);
      return await response.json();
    }

    /**
     * The SessionCache for the current session, contacts the server for 
     * the Session object.
     * @private {SessionCache}
     */
    this.sessionCache_ = new SessionCache(sessionRequest_);

    /**
     * @private {URLSearchParams}
     */
    this.urlParams_ = urlParams;
  }

  /** 
   * This method starts to cache.
   * @private
   */
  startSessionCache_() {
    throw new Error('Unimplemented');
  }

  /**
   * This method changes the controller of the current session to the 
   * Attendee pased in.
   * @param {string} name 
   */
  passController(name) {
    throw new Error('Unimplemented');
  }

  /**
   * Returns a promise containing the Session object, given how updated the 
   * cache is in refreshing.
   * @return {Promise} The Promise object
   */
  getSession() {
    throw new Error('Unimplemented');
  }
}

export { ServerClient };