// Dummy notifications data

export default function NotificationsClient() {
  return (
    <div style={{ margin: "0 auto", padding: "20px 0" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {notifications.map((notification) => (
          <div
            key={notification.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              padding: "12px",
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ flex: 1 }}>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginBottom: "4px",
                }}
              >
                {notification.sender}
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "#4B5563",
                  margin: 0,
                  lineHeight: "1.5",
                }}
              >
                {notification.message}
              </p>
              <span
                style={{
                  fontSize: "12px",
                  color: "#9CA3AF",
                  marginTop: "4px",
                  display: "block",
                }}
              >
                {notification.timestamp}
              </span>
            </div>
            <div
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: "#22C55E",
                borderRadius: "50%",
                marginLeft: "12px",
                marginTop: "8px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const notifications = [
  {
    id: 1,
    sender: "Taskman",
    message:
      "Your request for withdrawal have been sent you should get a response soon",
    status: "unread",
    timestamp: "2 min ago",
  },
  {
    id: 2,
    sender: "Taskman",
    message: "Your withdrawal request is successful please check your bank",
    status: "unread",
    timestamp: "5 min ago",
  },
  {
    id: 3,
    sender: "Taskman",
    message:
      "Your request for withdrawal have been sent you should get a response soon",
    status: "unread",
    timestamp: "10 min ago",
  },
  {
    id: 4,
    sender: "Taskman",
    message: "Your withdrawal request is successful please check your bank",
    status: "unread",
    timestamp: "15 min ago",
  },
  {
    id: 5,
    sender: "Taskman",
    message:
      "Your request for withdrawal have been sent you should get a response soon",
    status: "unread",
    timestamp: "20 min ago",
  },
  {
    id: 6,
    sender: "Taskman",
    message: "Your withdrawal request is successful please check your bank",
    status: "unread",
    timestamp: "25 min ago",
  },
  {
    id: 7,
    sender: "Taskman",
    message:
      "Your request for withdrawal have been sent you should get a response soon",
    status: "unread",
    timestamp: "30 min ago",
  },
  {
    id: 8,
    sender: "Taskman",
    message: "Your withdrawal request is successful please check your bank",
    status: "unread",
    timestamp: "35 min ago",
  },
  {
    id: 9,
    sender: "Taskman",
    message:
      "Your request for withdrawal have been sent you should get a response soon",
    status: "unread",
    timestamp: "40 min ago",
  },
  {
    id: 10,
    sender: "Taskman",
    message: "Your withdrawal request is successful please check your bank",
    status: "unread",
    timestamp: "45 min ago",
  },
];
