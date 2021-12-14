declare global {
  interface Window { BANUBA_CLIENT_TOKEN: string }
}
window.BANUBA_CLIENT_TOKEN = process.env.REACT_APP_BANUBA_KEY as string;

export {};
