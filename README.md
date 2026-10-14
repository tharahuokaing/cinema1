# Legend Cinema Online Ticketing System 🎬
## 🚀 Features

* **Dynamic Schedule & Movie Selection**: Browse what's currently showing with real-time schedule displays.
* **Interactive Seat Selection**: Visual cinema screen layout with dynamic tracking of available, selected, and occupied seats.
* **Flexible Checkout & Payments**:
* Credit Card payment options.
* Local Cambodian banking integration via **KHQR / ABA**.

* **Instant Digital Tickets**: Generates a unique QR code upon booking confirmation.
* **PDF Receipt Export**: Easily download booking receipts powered by `jspdf`.
* **Booking History & Management**: Local storage persistence to view and clear past bookings.
* **Multilingual Support**: Built-in Google Translate widget container.

## 🛠️ Tech Stack

* **Frontend**: HTML5, Modern CSS (`style.css`), Vanilla JavaScript (`app.js`)
* **External Libraries**:
* [QRCode.js](https://github.com/davidshimjs/qrcodejs) – For generating ticket QR codes.
* [jsPDF](https://github.com/parallax/jsPDF) – For client-side PDF receipt generation.

## 📁 Project Structure

├── index.html            # Main entry point containing application layout and steps
├── style.css             # Stylesheet for layout, components, and responsive design
├── app.js                # Core booking logic, state management, and DOM controllers
├── translate.js          # Google Translate integration script
├── ultra_secure_mode.js  # Security and validation utilities
├── music.js              # Background audio/ambiance handler
└── README.md             # Project documentation

## ⚙️ Getting Started

To run this project locally, follow these simple steps:

1. **Clone the repository**:

git clone https://github.com/your-username/legend-cinema-ticketing.git

2. **Navigate to the project directory**:

cd legend-cinema-ticketing

3. **Open `index.html**` in your favorite modern web browser, or serve it using a local development server (such as Live Server in VS Code).

## 💡 Usage

1. **Select a Movie**: Browse the schedule on the home page and click on your desired movie or screening slot.
2. **Choose Seats**: Pick your preferred seats from the interactive seat map and proceed to checkout.
3. **Complete Payment**: Choose either Credit Card or KHQR/ABA, input your details (or simulate the scan), and confirm payment.
4. **View & Save Ticket**: View your confirmation screen with your generated QR code and ticket ID, or click **Download PDF Receipt** to save a copy.
