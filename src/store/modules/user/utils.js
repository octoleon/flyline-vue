export const userStorage = {
  keys: {
    token: "authToken",
    tokenExpiry: "authTokenExpiry"
  },

  /**
   * Stores user sesstion to localstorage
   * @param {string} token
   * @param {string} expiry
   */
  setSession(token, expiry) {
    localStorage.setItem(this.keys.token, token);
    localStorage.setItem(this.keys.tokenExpiry, expiry);
  },

  dropSession() {
    localStorage.removeItem(this.keys.token);
    localStorage.removeItem(this.keys.tokenExpiry);
  },
  /**
   * @returns {(string|null)}
   */
  get token() {
    if (this.isExpired) {
      this.dropSession();
    }
    return localStorage.getItem(this.keys.token);
  },

  /**
   * @returns {string}
   */
  get tokenExpiry() {
    return localStorage.getItem(this.keys.tokenExpiry);
  },

  /**
   * @returns {boolean}
   */
  get isExpired() {
    return new Date() > new Date(this.tokenExpiry);
  },

  /**
   * @returns {boolean}
   */
  get isSessionValid() {
    return !(this.isExpired || this.token === null);
  }
};

export function processTrips(data) {
  return data.map(o => {
    const innerData = o.data;
    delete o.data;
    o.flights = o.flights.map(f => {
      const innerData = f.data;
      delete f.data;
      return { ...f, ...innerData };
    });
    return { ...o, ...innerData };
  });
}
