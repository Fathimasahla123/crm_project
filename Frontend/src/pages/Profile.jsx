import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserProfile } from "../services/authService";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profile = await getUserProfile();
        if (profile.success) {
          setUser(profile.data); // Set user data if successful
        } else {
          navigate("/login"); // Redirect to login if not authenticated
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        navigate("/login"); // Redirect to login on error
      } finally {
        setIsLoading(false); // Set loading to false
      }
    };

    fetchUserProfile();
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading state
  }

  return (
    <div>
      <h1>Profile</h1>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
};

export default ProfilePage;
