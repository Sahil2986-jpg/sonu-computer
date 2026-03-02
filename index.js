// ===== Smooth Scroll for Navigation =====
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const sectionId = link.getAttribute("href");
    if (sectionId.startsWith("#")) {
      document.querySelector(sectionId)?.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// ===== Book Repair Button =====
const bookButtons = document.querySelectorAll(
  ".btn-primary, .repair-card button"
);

bookButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert(
      "📞 Repair booking initiated!\nOur technician will contact you shortly."
    );
  });
});

// ===== Learn More / CTA Buttons =====
document.querySelectorAll(".btn-outline").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("ℹ️ More details coming soon!");
  });
});

// ===== Fake Product Load (Demo Logic) =====
const products = [
  { name: "Gaming Laptop", price: "₹75,000" },
  { name: "Office Desktop", price: "₹45,000" },
  { name: "LED Monitor", price: "₹12,000" },
  { name: "WiFi Router", price: "₹3,500" }
];

function loadProducts() {
  const container = document.querySelector(".products");
  if (!container) return;

  products.forEach(product => {
    console.log(`Loaded: ${product.name} - ${product.price}`);
  });
}

loadProducts();

// ===== WhatsApp Integration (Optional) =====
function openWhatsApp(service) {
  const phone = "91XXXXXXXXXX"; // replace with real number
  const msg = encodeURIComponent(
    `Hello, I want to book ${service} service`
  );
  window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
}

// ===== Attach WhatsApp to Repair Cards =====
document.querySelectorAll(".repair-card").forEach(card => {
  card.addEventListener("dblclick", () => {
    const serviceName = card.querySelector("h3").innerText;
    openWhatsApp(serviceName);
  });
});

// ===== Navbar Shadow on Scroll =====
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// ===== Simple Page Loaded Confirmation =====
window.addEventListener("load", () => {
  console.log("✅ Website Loaded Successfully");
});
