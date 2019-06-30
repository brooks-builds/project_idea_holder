import axios from "axios";

const csrfToken = document.querySelector('meta[name="csrfToken"]').attributes
    .content.value;

axios.defaults.headers.post["X-CSRF-TOKEN"] = csrfToken;
