import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedInUser } from '../../store/auth/actions';
import checkJWT from '../../utils/jwtDecoder';

function AuthHOC({ children }) {
  const auth = checkJWT();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const authId = auth && auth.id;
  const userId = user && user.id;
  useEffect(() => {
    if (authId && !userId) {
      dispatch(getLoggedInUser());
    }
  }, [auth, user]);
  return <>{children}</>;
}

export default memo(AuthHOC);
