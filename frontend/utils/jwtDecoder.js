import decode from 'jwt-decode';

const checkJWT = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('ecommerceMS');
    if (!token) return false;

    try {
      const { exp, id, email } = decode(token);
      if (exp < new Date().getTime() / 1000) {
        return false;
      }
      return { id, email };
    } catch (e) {
      return false;
    }
  }
  return false;
};
export default checkJWT;
