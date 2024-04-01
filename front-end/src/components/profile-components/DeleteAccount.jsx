import axios from "axios";
import { useState, useEffect } from "react";

import Example from "../ui/Example";

const DeleteAccount = () => {
  const [nameFromToken, setNameFromToken] = useState("");
  const [idFromToken, setIdFromToken] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/gettoken")
      .then((response) => setNameFromToken(response.data.token.name))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (nameFromToken) {
      axios
        .post("http://localhost:3001/auth/getuser", { nameFromToken })
        .then((response) => setIdFromToken(response.data.currentUser._id))
        .catch((error) => console.log(error));
    }
  }, [nameFromToken]);

  /* useEffect(() => {
    if (idFromToken) {
      axios
        .delete("http://localhost:3001/auth/delUser", { data: { idFromToken } })
        .then((response) => {
          console.log(response.data); // Handle success response
        })
        .catch((error) => {
          console.error("Error:", error); // Handle errors
        });
    }
  }, [idFromToken]); */
  const handleDeleteAccount = () => {
    if (idFromToken) {
      axios
        .delete("http://localhost:3001/auth/delUser", { data: { idFromToken } })
        .then((response) => {
          console.log(response.data); // Handle success response
        })
        .catch((error) => {
          console.error("Error:", error); // Handle errors
          //<button onClick={handleDeleteAccount}>Delete Account</button>;
        });
    }
  };

  return (
    <div>
      <Example onDelete={handleDeleteAccount} />{" "}
    </div>
  );
};

export default DeleteAccount;
