export interface Redirect {
  /**
   * The X Coordinate
   */
  status: number;
  /**
   * The Y Coordinate
   */
  location: string;
}

export interface RedirectInDb {
  originalUrl: string;
  redirectUrl: string;
  statusCode: number;
  redirectedAt: string;
}
