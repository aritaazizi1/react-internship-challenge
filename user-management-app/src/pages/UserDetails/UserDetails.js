import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Card } from "antd";
import styles from "./UserDetails.module.css";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user:", error));
  }, [id]);

  return (
    <div className={styles.userDetails}>
      <Navbar />
      <div className={styles.content}>
        {user ? (
          <Card title={user.name} className={styles.card}>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Website:</strong> {user.website}
            </p>
            <p>
              <strong>Address:</strong> {user.address.street},
              {user.address.suite}, {user.address.city}, {user.address.zipcode}
            </p>
          </Card>
        ) : (
          <p>User not found!</p>
        )}
      </div>
    </div>
  );
}

export default UserDetails;
