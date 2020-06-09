import React from "react";

const styles = {
  message: {
    color: "red"
  }
};

const ErrorMessage = ({ message }) => (
  <div style={styles.message}>{message}</div>
);

export default ErrorMessage;
