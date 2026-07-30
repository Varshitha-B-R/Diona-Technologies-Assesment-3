document.addEventListener("DOMContentLoaded", () => {

  function getInput(name) {
    return document.querySelector(`[name="${name}"]`);
  }

  function showError(name, msg) {
    const el = getInput(name);
    if (!el) return;

    el.classList.add("error-border");

    let err = el.parentNode.querySelector(".error");

    if (!err) {
      err = document.createElement("div");
      err.className = "error";
      el.parentNode.appendChild(err);
    }

    err.textContent = msg;
  }

  function clearError(name) {
    const el = getInput(name);
    if (!el) return;

    el.classList.remove("error-border");

    let err = el.parentNode.querySelector(".error");
    if (err) err.textContent = "";
  }

  // ===========================
  // LIVE VALIDATION FUNCTION
  // ===========================

  function validateField(name, validator) {
    const el = getInput(name);
    if (!el) return;

    el.addEventListener("input", () => {
      clearError(name);
      validator();
    });

    el.addEventListener("blur", () => {
      validator();
    });
  }

  // ===========================
  // APPLY VALIDATIONS
  // ===========================

  // FIRST NAME
  validateField("first_name", () => {
    let val = getInput("first_name").value.trim();
    if (!val) showError("first_name", "First name required");
  });

  // LAST NAME
  validateField("last_name", () => {
    let val = getInput("last_name").value.trim();
    if (!val) showError("last_name", "Last name required");
  });

  // PHONE (IMPORTANT)
  validateField("phone", () => {
    let val = getInput("phone").value.trim();
    let digits = val.replace(/\D/g, "");

    if (!val) {
      showError("phone", "Phone required");
    } else if (digits.length !== 10) {
      showError("phone", "Must be exactly 10 digits");
    }
  });

  // EMAIL
  validateField("designate_email", () => {
    let val = getInput("designate_email").value.trim();
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!val) {
      showError("designate_email", "Email required");
    } else if (!regex.test(val)) {
      showError("designate_email", "Invalid email");
    }
  });

  // REQUEST DATE
  validateField("request_date", () => {
    let val = getInput("request_date").value.trim();
    if (!val) showError("request_date", "Date required");
  });

  // AGENCY
  validateField("agency_name", () => {
    let val = getInput("agency_name").value.trim();
    if (!val) showError("agency_name", "Agency required");
  });

  // WORKER
  validateField("assigned_worker", () => {
    let val = getInput("assigned_worker").value.trim();
    if (!val) showError("assigned_worker", "Worker required");
  });

  // DESIGNATE
  validateField("designate_name", () => {
    let val = getInput("designate_name").value.trim();
    if (!val) showError("designate_name", "Designate required");
  });

});

console.log("VALIDATION RUNNING");