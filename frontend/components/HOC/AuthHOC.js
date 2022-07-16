import { useEffect } from 'react';
import { useSelector } from 'react-redux';


const withAuthentication = (WrappedComponent) => {
  const RequiresAuthentication = (props) => {
    // get user role from redux state
    const id = useSelector(({ user }) => user.id);

    useEffect(() => {
      // if a there isn't a logged in user and their role has been set to "guest"
      // then redirect them to "/signin"
      if (role === 'guest') Router.push('/signin');
    }, [role]);

    // if there's a loggedInUser, show the wrapped page, otherwise show a loading indicator
    return role && role !== 'guest' ? (
      <WrappedComponent {...props} />
    ) : (
      <div>Loading...</div>
    );
  };

  return RequiresAuthentication;
};

export default withAuthentication;
