import React, { useState } from "react";

const Pengguna = () => {
  // State untuk menyimpan daftar pengguna
  const [penggunaList, setPenggunaList] = useState([
    { id: 1, nama: "Key Alderan", username: "keyalderan", email: "keyalderan@gmail.com", password: "fufufafa" },
    // Tambahkan lebih banyak pengguna jika diperlukan
  ]);

  // Fungsi untuk menangani penghapusan pengguna
  const handleDelete = (id) => {
    const updatedList = penggunaList.filter((pengguna) => pengguna.id !== id);
    setPenggunaList(updatedList);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Pengguna</h2>
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>No</th>
              <th style={styles.th}>Nama Lengkap</th>
              <th style={styles.th}>Username</th>
              <th style={styles.th}>Email</th>
              <th style={styles.th}>Password</th>
              <th style={styles.th}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {penggunaList.map((pengguna) => (
              <tr key={pengguna.id}>
                <td style={styles.td}>{pengguna.id}</td>
                <td style={styles.td}>{pengguna.nama}</td>
                <td style={styles.td}>{pengguna.username}</td>
                <td style={styles.td}>{pengguna.email}</td>
                <td style={styles.td}>{pengguna.password}</td>
                <td style={styles.td}>
                  <button style={styles.verifyButton} onClick={() => handleDelete(pengguna.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginLeft: "200px", // Offset untuk sidebar
    padding: "20px",
    backgroundColor: "#fcefe3", // Warna latar belakang lembut
    minHeight: "100vh",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  tableWrapper: {
    borderTop: "5px solid #a855f7", // Garis ungu di atas tabel
    // borderRadius: "10px",
    overflow: "hidden", // Agar border terlihat rapi
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Bayangan tabel
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff", // Warna dasar tabel
  },
  th: {
    backgroundColor: "#f9f9f9", // Warna header tabel
    fontWeight: "bold",
    textAlign: "left",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  td: {
    padding: "10px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  },
  verifyButton: {
    backgroundColor: "#ff3b30",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Pengguna;
