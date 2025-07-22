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

  return isLoading ? (
    <div className="text-center py-10">Loading...</div>
  ) : (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Profile</h1>
        {user ? (
          <div className="space-y-2 text-lg">
            <p><strong>Name:</strong> {user.name || "Not Available"}</p>
            <p><strong>Email:</strong> {user.email || "Not Available"}</p>
          </div>
        ) : (
          <p>No user data found.</p>
        )}
      </div>
    </div>
  );
};
export default ProfilePage;
