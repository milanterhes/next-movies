import withAuth from "./withAuth";

export default (headers: HeadersInit = {}) => new Headers(withAuth(headers));
