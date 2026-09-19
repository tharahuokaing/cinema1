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
            title: "Tenement (អ្នកស្នងអាគារ)",
            genre: "Horror, Thriller, Supernatural • 1h 28m",
            price: 8.00,
            icon: "🏢👻",
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMNmRzMxOKY6JjQ99ckB8Stdk8fiCv9Hjw-TnP240N1g&s=10",
            time: "12: 00 PM",
            trailerUrl: "https://youtu.be/_9-FZ_HGi_Y?si=j0focIUVv70c5EwD"
        },
        {
            title: "ហាងកែសម្ភស្សបិសាច (Demonic Beauty Salon)",
            genre: "Horror, Thriller, Supernatural • 1h 40m",
            price: 8.00,
            icon: "🪞🩸",
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcbrJ6ADT3aeaOQIznlZfTGSEcYGh9Z_Wp9vhXdrk9Gw&s=10",
            time: "12: 00 PM",
            trailerUrl: "https://youtu.be/RJtdMpSk6RU?si=k5i8ouIwmDcUsXiB"
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
