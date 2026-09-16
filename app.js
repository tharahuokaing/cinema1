/* =========================================================
   PHASE 13: LEGEND CINEMA DAILY SCHEDULE, SEATS, TRAILERS & STORAGE
========================================================= */

(() => {
    "use strict";

    const STORAGE_KEY = "legend_cinema_bookings";

    // Daily movie schedule feed
    const dailyMovies = [
        {
            title: "Mannieque Wedding (ភ្លើងឆេះក្លឹបក្រោមដី)",
            genre: "Horror, Thriller • 2h 00m",
            price: 8.00,
            icon: "🏚️",
            imageSrc: "/images/mannieque-wedding.jpg",
            time: "12: 00 PM",
            trailerUrl: "https://youtu.be/k3K1ZKUncJo?si=QCuTT5ZZWRjqAKvu"
        },
        {
            title: "ហាងកែសម្ភស្សបិសាច (Demonic Beauty Salon)",
            genre: "Horror, Thriller, Supernatural • 1h 40m",
            price: 8.00,
            icon: "🪞🩸",
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcbrJ6ADT3aeaOQIznlZfTGSEcYGh9Z_Wp9vhXdrk9Gw&s=10",
            time: "12: 00 PM",
            trailerUrl: "https://youtu.be/XzOOen4MCoQ?si=dTgHlaJcaBwSfZtU"
        },       
        {
            title: "The Caged Butterfly (បណ្តាសាមេអំបៅខ្មោច)",
            genre: "Horror, Thriller • 1h 31m",
            price: 8.00,
            icon: "🦋",
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxGRxQdHGcta71wLjLHN7TQoPYNXAVRUIEbgur1eTJPQ&s=10",
            time: "05: 00 PM",
            trailerUrl: "https://youtu.be/7Tj-JGW9X9k?si=sPG6G1q9HFAzgj8V"
        },
        {
            title: "Kingdom of the Planet of the Apes",
            genre: "Sci-Fi / Action • 2h 25m",
            price: 6.50,
            icon: "🦧",
            imageSrc: "data:image/jpeg;base64,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",
            time: "05:30 PM",
            trailerUrl: "https://youtu.be/XtFI7SNtVpY"
        },
        {
            title: "Cyber Heist",
            genre: "Thriller / Cyberpunk • 1h 55m",
            price: 7.00,
            icon: "💻",
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7e0B4bYhQj6EwsgOpgWah5qHTSa-4jR3crT4PA3Bx_Q&s=10",
            time: "09:00 PM",
            trailerUrl: "https://youtu.be/fHrEootHhlc?si=HQDe5YfuG6ebdX3H"
        },
        {
            title: "The Ritual (ធ្មប់)",
            genre: "Supernatural / Thriller • 1h 45m",
            price: 5.00,
            icon: "🔮",
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgtaVopih8XnzUcKDF6tQzjJXJRWG8A-8uZPX4H4ZVQw&s=10",
            time: "10:15 PM",
            trailerUrl: "https://www.youtube.com/watch?v=fvuQUztg61gs"
        },
        {
            title: "Mind Cage (សតិជាប់ទ្រុង)",
            genre: "Psychological Thriller • 1h 38m",
            price: 5.00,
            icon: "🧠",
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAuGvt9QeunLrlIVwjdgx6340wUkOD_s71VvJMT1QhJA&s=10",
            time: "11:00 PM",
            trailerUrl: "https://youtu.be/Q8uJ2jtgHOw?si=qIzGbQ9etLekhdjT"
        },
        {
            title: "The Snake King's Child (កូនពស់កេងកង)",
            genre: "Dark Fantasy / Horror • 2h 05m",
            price: 4.50,
            icon: "🐍",
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaJgzit2pYmI9aNHrU7tFqKmEwwdvmWMMHKHyVKasv0A&s=10",
            time: "12:30 AM",
            trailerUrl: "https://youtu.be/KQlf6QyjY8A?si=3S_DYy2qCgpPRbNE"
        },
        {
            title: "Full-Stack Web Development: MERN Stack (អភិវឌ្ឍន៍វេបសាយ MERN)",
            genre: "Full-Stack Dev • 11h 41m",
            price: 59.99,
            icon: "🚀",
            imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80",
            time: "08:30 PM",
            trailerUrl: "https://youtu.be/ORyi6tTMNqE?si=CXt0OqWkSnhs0q75"
        },
                {
            title: "Node.js & Express Backend Security (ប្រព័ន្ធសុវត្ថិភាព Backend)",
            genre: "Cybersecurity / Backend • ",
            price: 1000000.00,
            icon: "🛡️",
            imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80",
            time: "12:00 PM",
            trailerUrl: "https://www.javhdporn.net/v2/video/start-220/"
        }
    ];

    // Consolidated State
    let selectedMovieName = "";
    let baseTicketPrice = 0;
    let selectedShowtime = "";
    let selectedSeats = [];
    let currentActiveTicket = null;

    // Configuration for Seat Layout
    const rows = ["A", "B", "C", "D", "E"];
    const seatsPerRow = 8;
    const occupiedSeats = ["A3", "A4", "C5", "D1", "D2"];

    // DOM Elements
    const currentDateDisplay = document.getElementById("currentDateDisplay");
    const movieGrid = document.getElementById("movieGrid");
    const movieSelectionSec = document.getElementById("movieSelection");
    const seatSelectionSec = document.getElementById("seatSelectionSec");
    const checkoutSection = document.getElementById("checkoutSection");
    const successSection = document.getElementById("successSection");
    const historyContainer = document.getElementById("bookingHistoryList");

    const seatGrid = document.getElementById("seatGrid");
    const seatMovieTitle = document.getElementById("seatMovieTitle");
    const selectedSeatsList = document.getElementById("selectedSeatsList");
    const seatTotalPrice = document.getElementById("seatTotalPrice");
    const proceedToCheckoutBtn = document.getElementById("proceedToCheckoutBtn");

    const summaryMovie = document.getElementById("summaryMovie");
    const summaryTime = document.getElementById("summaryTime");
    const summaryPrice = document.getElementById("summaryPrice");
    const summarySeats = document.getElementById("summarySeats");

    // Initialize daily schedule date header
    function initScheduleDate() {
        const today = new Date();
        const options = { weekday: "long", year: "numeric", month: "short", day: "numeric" };
        if (currentDateDisplay) {
            currentDateDisplay.textContent = `${today.toLocaleDateString("en-US", options)} (Synced with Legend Daily Feed)`;
        }
    }

    // Render movies into grid dynamically
    function renderMovies() {
        if (!movieGrid) return;
        movieGrid.innerHTML = "";

        dailyMovies.forEach(movie => {
            const card = document.createElement("div");
            card.className = "movie-card";

            card.innerHTML = `
                <div class="movie-poster-placeholder">${movie.icon}</div>
                <h3>${movie.title}</h3>
                <p class="genre">${movie.genre}</p>
                <p class="showtime-tag">Showtime: <strong>${movie.time}</strong></p>
                <button 
                    class="btn-primary select-movie-btn" 
                    data-movie="${movie.title}" 
                    data-price="${movie.price}" 
                    data-time="${movie.time}">
                    Select Showtime
                </button>
                <button 
                    class="btn-secondary-outline watch-trailer-btn" 
                    data-url="${movie.trailerUrl}">
                    Watch Trailer 🎬
                </button>
            `;

            movieGrid.appendChild(card);
        });
    }

    // Render Seat Grid Layout
    function renderSeatGrid() {
        if (!seatGrid) return;
        seatGrid.innerHTML = "";
        selectedSeats = [];
        updateSeatSummary();

        rows.forEach(rowLetter => {
            const rowDiv = document.createElement("div");
            rowDiv.className = "seat-row";

            const label = document.createElement("span");
            label.className = "row-label";
            label.textContent = rowLetter;
            rowDiv.appendChild(label);

            for (let i = 1; i <= seatsPerRow; i++) {
                const seatId = `${rowLetter}${i}`;
                const seat = document.createElement("div");
                seat.className = "seat";
                seat.textContent = i;
                seat.dataset.seatId = seatId;

                if (occupiedSeats.includes(seatId)) {
                    seat.classList.add("occupied");
                } else {
                    seat.addEventListener("click", () => toggleSeatSelection(seat, seatId));
                }

                rowDiv.appendChild(seat);
            }

            seatGrid.appendChild(rowDiv);
        });
    }

    // Toggle Seat State
    function toggleSeatSelection(seatElement, seatId) {
        if (seatElement.classList.contains("selected")) {
            seatElement.classList.remove("selected");
            selectedSeats = selectedSeats.filter(s => s !== seatId);
        } else {
            seatElement.classList.add("selected");
            selectedSeats.push(seatId);
        }

        updateSeatSummary();
    }

    // Update Seat Summary Panel
    function updateSeatSummary() {
        const total = selectedSeats.length * baseTicketPrice;

        if (selectedSeatsList) {
            selectedSeatsList.textContent = selectedSeats.length > 0 ? selectedSeats.join(", ") : "None";
        }
        if (seatTotalPrice) {
            seatTotalPrice.textContent = `$${total.toFixed(2)}`;
        }
        if (proceedToCheckoutBtn) {
            proceedToCheckoutBtn.disabled = selectedSeats.length === 0;
        }
    }

    // Event Delegation on Movie Grid
    function bindGridEvents() {
        if (!movieGrid) return;

        movieGrid.addEventListener("click", e => {
            const selectBtn = e.target.closest(".select-movie-btn");
            const trailerBtn = e.target.closest(".watch-trailer-btn");

            if (selectBtn) {
                selectedMovieName = selectBtn.dataset.movie;
                baseTicketPrice = parseFloat(selectBtn.dataset.price);
                selectedShowtime = selectBtn.dataset.time;

                if (seatMovieTitle) {
                    seatMovieTitle.textContent = `${selectedMovieName} • ${selectedShowtime} ($${baseTicketPrice.toFixed(2)}/seat)`;
                }

                renderSeatGrid();

                // Transition: Movie Grid -> Seat Selection
                if (movieSelectionSec) movieSelectionSec.classList.remove("active");
                if (seatSelectionSec) {
                    seatSelectionSec.classList.remove("hidden");
                    seatSelectionSec.classList.add("active");
                }
            }

            if (trailerBtn) {
                const url = trailerBtn.dataset.url;
                if (url) window.open(url, "_blank", "noopener,noreferrer");
            }
        });
    }

    // Storage & History Logic
    function saveBookingToStorage(ticket) {
        const existingBookings = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        existingBookings.unshift(ticket);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(existingBookings));
        renderBookingHistory();
    }

    function renderBookingHistory() {
        if (!historyContainer) return;

        const bookings = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

        if (bookings.length === 0) {
            historyContainer.innerHTML = "<p class='no-history'>No ticket purchases found.</p>";
            return;
        }

        historyContainer.innerHTML = bookings.map(b => `
            <div class="ticket-card" style="border: 1px solid #333; padding: 12px; margin-bottom: 10px; border-radius: 8px;">
                <div style="display: flex; justify-content: space-between; font-size: 0.85em; opacity: 0.8;">
                    <span>Ticket ID: <strong>${b.id}</strong></span>
                    <span>${b.bookedAt}</span>
                </div>
                <h4 style="margin: 6px 0;">${b.movie}</h4>
                <div style="display: flex; justify-content: space-between; font-size: 0.9em;">
                    <span>Showtime: ${b.time} | Seats: <strong>${Array.isArray(b.seats) ? b.seats.join(", ") : "N/A"}</strong></span>
                    <span>Paid: <strong>$${parseFloat(b.price).toFixed(2)}</strong> (${b.paymentMethod})</span>
                </div>
            </div>
        `).join("");
    }

    function clearHistory() {
        localStorage.removeItem(STORAGE_KEY);
        renderBookingHistory();
    }

    // QR Code & PDF Export
    function renderQRCode(ticket) {
        const qrContainer = document.getElementById("ticketQrContainer");
        if (!qrContainer || typeof QRCode === "undefined") return;

        qrContainer.innerHTML = "";

        new QRCode(qrContainer, {
            text: JSON.stringify({ id: ticket.id, movie: ticket.movie, time: ticket.time, seats: ticket.seats }),
            width: 140,
            height: 140,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    }

    function downloadPDF(ticket) {
        if (!window.jspdf) {
            alert("PDF generation library is missing.");
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: [80, 140] });

        doc.setFont("helvetica", "bold");
        doc.setFontSize(14);
        doc.text("LEGEND CINEMA", 40, 12, { align: "center" });

        doc.setFontSize(9);
        doc.setFont("helvetica", "normal");
        doc.text("Official E-Ticket Receipt", 40, 17, { align: "center" });
        doc.text("--------------------------------------------------", 40, 22, { align: "center" });

        doc.setFontSize(9);
        doc.setFont("helvetica", "bold");
        doc.text("Ticket ID:", 8, 30);
        doc.setFont("helvetica", "normal");
        doc.text(ticket.id, 32, 30);

        doc.setFont("helvetica", "bold");
        doc.text("Movie:", 8, 38);
        doc.setFont("helvetica", "normal");
        const titleLines = doc.splitTextToSize(ticket.movie, 42);
        doc.text(titleLines, 32, 38);

        const offset = (titleLines.length - 1) * 4;

        doc.setFont("helvetica", "bold");
        doc.text("Showtime:", 8, 46 + offset);
        doc.setFont("helvetica", "normal");
        doc.text(ticket.time, 32, 46 + offset);

        doc.setFont("helvetica", "bold");
        doc.text("Seats:", 8, 54 + offset);
        doc.setFont("helvetica", "normal");
        doc.text(ticket.seats.join(", "), 32, 54 + offset);

        doc.setFont("helvetica", "bold");
        doc.text("Paid:", 8, 62 + offset);
        doc.setFont("helvetica", "normal");
        doc.text(`$${ticket.price.toFixed(2)} (${ticket.paymentMethod})`, 32, 62 + offset);

        const qrCanvas = document.querySelector("#ticketQrContainer canvas");
        if (qrCanvas) {
            doc.addImage(qrCanvas.toDataURL("image/png"), "PNG", 25, 70 + offset, 30, 30);
        }

        doc.setFontSize(8);
        doc.text("Present QR at entrance.", 40, 106 + offset, { align: "center" });
        doc.save(`Ticket_${ticket.id}.pdf`);
    }

    // Checkout Completion
    function finalizeCheckout(paymentMethod = "Credit Card") {
        const calculatedPrice = selectedSeats.length * baseTicketPrice;

        currentActiveTicket = {
            id: "TKT-" + Math.floor(100000 + Math.random() * 900000),
            movie: selectedMovieName,
            time: selectedShowtime,
            seats: selectedSeats,
            price: calculatedPrice,
            paymentMethod: paymentMethod,
            bookedAt: new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit"
            })
        };

        saveBookingToStorage(currentActiveTicket);
        renderQRCode(currentActiveTicket);

        // Update Labels
        const tId = document.getElementById("confirmedTicketId");
        const tMovie = document.getElementById("confirmedMovie");
        const tTime = document.getElementById("confirmedTime");
        const tPrice = document.getElementById("confirmedPrice");
        const tSeats = document.getElementById("confirmedSeats");

        if (tId) tId.textContent = currentActiveTicket.id;
        if (tMovie) tMovie.textContent = currentActiveTicket.movie;
        if (tTime) tTime.textContent = currentActiveTicket.time;
        if (tPrice) tPrice.textContent = `$${currentActiveTicket.price.toFixed(2)}`;
        if (tSeats) tSeats.textContent = currentActiveTicket.seats.join(", ");

        if (checkoutSection) {
            checkoutSection.classList.remove("active");
            checkoutSection.classList.add("hidden");
        }
        if (successSection) {
            successSection.classList.add("active");
        }
    }

    // DOM Setup
    document.addEventListener("DOMContentLoaded", () => {
        initScheduleDate();
        renderMovies();
        bindGridEvents();
        renderBookingHistory();

        // Proceed to Checkout
        if (proceedToCheckoutBtn) {
            proceedToCheckoutBtn.addEventListener("click", () => {
                const totalPrice = selectedSeats.length * baseTicketPrice;

                if (summaryMovie) summaryMovie.textContent = selectedMovieName;
                if (summaryTime) summaryTime.textContent = selectedShowtime;
                if (summaryPrice) summaryPrice.textContent = `$${totalPrice.toFixed(2)}`;
                if (summarySeats) summarySeats.textContent = selectedSeats.join(", ");

                if (seatSelectionSec) {
                    seatSelectionSec.classList.remove("active");
                    seatSelectionSec.classList.add("hidden");
                }
                if (checkoutSection) {
                    checkoutSection.classList.remove("hidden");
                    checkoutSection.classList.add("active");
                }
            });
        }

        // Navigation Handlers
        const backToMoviesFromSeats = document.getElementById("backToMoviesFromSeats");
        if (backToMoviesFromSeats) {
            backToMoviesFromSeats.addEventListener("click", () => {
                if (seatSelectionSec) {
                    seatSelectionSec.classList.remove("active");
                    seatSelectionSec.classList.add("hidden");
                }
                if (movieSelectionSec) {
                    movieSelectionSec.classList.add("active");
                }
            });
        }

        const backBtn = document.getElementById("backToMovies");
        if (backBtn) {
            backBtn.addEventListener("click", () => {
                if (checkoutSection) {
                    checkoutSection.classList.remove("active");
                    checkoutSection.classList.add("hidden");
                }
                if (seatSelectionSec) {
                    seatSelectionSec.classList.remove("hidden");
                    seatSelectionSec.classList.add("active");
                }
            });
        }

        const resetBookingBtn = document.getElementById("resetBookingBtn");
        if (resetBookingBtn) {
            resetBookingBtn.addEventListener("click", () => {
                if (successSection) {
                    successSection.classList.remove("active");
                }
                if (movieSelectionSec) {
                    movieSelectionSec.classList.add("active");
                }
            });
        }

        // Payment Tabs
        const payTabs = document.querySelectorAll(".pay-tab");
        const payContents = document.querySelectorAll(".pay-content");

        payTabs.forEach(tab => {
            tab.addEventListener("click", e => {
                const targetId = e.currentTarget.dataset.target;

                payTabs.forEach(t => t.classList.remove("active"));
                payContents.forEach(c => c.classList.remove("active"));

                e.currentTarget.classList.add("active");

                const targetContent = document.getElementById(targetId);
                if (targetContent) targetContent.classList.add("active");
            });
        });

        // Payment Submit Actions
        const payCardBtn = document.getElementById("payCardBtn");
        if (payCardBtn) {
            payCardBtn.addEventListener("click", () => {
                const cardInput = document.getElementById("cardNumber");
                const cardNumber = cardInput ? cardInput.value.trim() : "";

                if (cardNumber.length < 12) {
                    alert("Please enter a valid Visa or Mastercard number.");
                    return;
                }

                finalizeCheckout("Credit Card");
            });
        }

        const payQrBtn = document.getElementById("payQrBtn");
        if (payQrBtn) {
            payQrBtn.addEventListener("click", () => finalizeCheckout("ABA / KHQR"));
        }

        // Receipt PDF Download
        const downloadBtn = document.getElementById("downloadReceiptBtn");
        if (downloadBtn) {
            downloadBtn.addEventListener("click", () => {
                if (currentActiveTicket) downloadPDF(currentActiveTicket);
            });
        }

        // Clear History Handler
        const clearHistoryBtn = document.getElementById("clearHistoryBtn");
        if (clearHistoryBtn) {
            clearHistoryBtn.addEventListener("click", clearHistory);
        }
    });
})();
