"use client";

import { CircleX } from "lucide-react";
import { useState } from "react";

// Dummy data for withdrawal history
const withdrawalHistory = [
  {
    invoice: "#113134",
    date: "12th Jan, 2024",
    total: "500,000",
    status: "Successful",
  },
  {
    invoice: "#113134",
    date: "12th Jan, 2024",
    total: "500,000",
    status: "Successful",
  },
  {
    invoice: "#113134",
    date: "12th Jan, 2024",
    total: "500,000",
    status: "Successful",
  },
  {
    invoice: "#113134",
    date: "12th Jan, 2024",
    total: "500,000",
    status: "Successful",
  },
  {
    invoice: "#113134",
    date: "12th Jan, 2024",
    total: "500,000",
    status: "Successful",
  },
];

// Form validation types
type FormData = {
  accountNumber: string;
  bank: string;
  amount: string;
  accountName: string;
  remark: string;
};

type FormErrors = {
  [key in keyof FormData]?: string;
};

export default function WithdrawalClient() {
  const [showWithdrawalModal, setShowWithdrawalModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    accountNumber: "",
    bank: "",
    amount: "",
    accountName: "",
    remark: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.accountNumber) {
      newErrors.accountNumber = "Account number is required";
    }
    if (!formData.bank) {
      newErrors.bank = "Bank selection is required";
    }
    if (!formData.amount) {
      newErrors.amount = "Amount is required";
    }
    if (!formData.accountName) {
      newErrors.accountName = "Account name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setShowWithdrawalModal(false);
      setShowSuccessModal(true);
      // Reset form
      setFormData({
        accountNumber: "",
        bank: "",
        amount: "",
        accountName: "",
        remark: "",
      });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Stats Cards */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
        <div
          style={{
            flex: 1,
            padding: "20px",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Total Received</span>
            <span>₦</span>
          </div>
          <h2 style={{ fontSize: "24px", margin: "10px 0" }}>₦ 10,000.00</h2>
          <p style={{ fontSize: "14px", color: "#6b7280" }}>
            Updated at every new withdrawal
          </p>
        </div>
        <div
          style={{
            flex: 1,
            padding: "20px",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Total Withdrawn</span>
            <span>₦</span>
          </div>
          <h2 style={{ fontSize: "24px", margin: "10px 0" }}>₦ 10,000.00</h2>
          <p style={{ fontSize: "14px", color: "#6b7280" }}>
            Updated at every new Withdrawal
          </p>
        </div>
      </div>

      {/* Header with Withdraw button */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ fontSize: "24px" }}>Withdrawal History</h2>
        <button
          onClick={() => setShowWithdrawalModal(true)}
          style={{
            backgroundColor: "#22C55E",
            color: "white",
            padding: "10px 20px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Withdraw
        </button>
      </div>

      {/* Withdrawal History Table */}
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#22C55E", color: "white" }}>
              <th style={{ padding: "12px", textAlign: "left" }}>Invoice</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Date</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Total</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {withdrawalHistory.map((item, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f9fafb" : "white",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <td style={{ padding: "12px" }}>{item.invoice}</td>
                <td style={{ padding: "12px" }}>{item.date}</td>
                <td style={{ padding: "12px" }}>₦ {item.total}</td>
                <td style={{ padding: "12px" }}>
                  <span
                    style={{
                      backgroundColor: "#22C55E",
                      color: "white",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      fontSize: "14px",
                    }}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Withdrawal Modal */}
      {showWithdrawalModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 50,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              width: "90%",
              maxWidth: "500px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <h2 style={{ fontSize: "20px" }}>Withdrawal</h2>
              <button
                onClick={() => setShowWithdrawalModal(false)}
                style={{
                  border: "none",
                  background: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "15px" }}>
                <input
                  type="text"
                  name="accountNumber"
                  placeholder="Account Number"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "4px",
                  }}
                />
                {errors.accountNumber && (
                  <span style={{ color: "red", fontSize: "14px" }}>
                    {errors.accountNumber}
                  </span>
                )}
              </div>
              <div style={{ marginBottom: "15px" }}>
                <select
                  name="bank"
                  value={formData.bank}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "4px",
                  }}
                >
                  <option value="">Select Bank</option>
                  <option value="access">Access Bank</option>
                  <option value="gtb">GTBank</option>
                  <option value="zenith">Zenith Bank</option>
                </select>
                {errors.bank && (
                  <span style={{ color: "red", fontSize: "14px" }}>
                    {errors.bank}
                  </span>
                )}
              </div>
              <div style={{ marginBottom: "15px" }}>
                <input
                  type="number"
                  name="amount"
                  placeholder="Amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "4px",
                  }}
                />
                {errors.amount && (
                  <span style={{ color: "red", fontSize: "14px" }}>
                    {errors.amount}
                  </span>
                )}
              </div>
              <div style={{ marginBottom: "15px" }}>
                <input
                  type="text"
                  name="accountName"
                  placeholder="Account Name"
                  value={formData.accountName}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "4px",
                  }}
                />
                {errors.accountName && (
                  <span style={{ color: "red", fontSize: "14px" }}>
                    {errors.accountName}
                  </span>
                )}
              </div>
              <div style={{ marginBottom: "15px" }}>
                <input
                  type="text"
                  name="remark"
                  placeholder="Remark"
                  value={formData.remark}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "4px",
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#22C55E",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Withdraw
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 50,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "8px",
              width: "90%",
              maxWidth: "400px",
              textAlign: "center",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: "#dcfce7",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <div
                  style={{
                    color: "#22C55E",
                    fontSize: "30px",
                  }}
                >
                  ✓
                </div>
              </div>
              <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
                Withdrawal Successful!
              </h2>
              <p style={{ color: "#6b7280" }}>
                10,000 has been credited into your account
                <br />
                You should receive your money in an hour
              </p>
            </div>
            <button
              onClick={() => setShowSuccessModal(false)}
              style={{
                padding: "8px 16px",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
            >
              <CircleX color="red" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
