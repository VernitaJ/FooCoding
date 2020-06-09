import React from "react";
import { useBackend } from "../state/use-backend";

/**
 * LAYOUTS
 * Read more about views in `docs/LAYOUTS.md`
 */
import ProfileViewLayout from "../layouts/ProfileViewLayout";

/**
 * COMPONENTS
 * Read more about views in `docs/COMPONENTS.md`
 */
import LoadingIndicator from "../components/LoadingIndicator";
import ErrorMessage from "../components/ErrorMessage";
import ProfileUI from "../components/ProfileUI";

const ProfileView = ({ match }) => {
  const { uname } = match.params;
  const { data, error, isLoading } = useBackend(uname);

  const createBody = () => {
    if (isLoading) return <LoadingIndicator />;
    if (error) return <ErrorMessage message={error.message} />;
    return <ProfileUI {...data} />;
  };

  return (
    <ProfileViewLayout uname={uname} error={error}>
      {createBody()}
    </ProfileViewLayout>
  );
};

export default ProfileView;
