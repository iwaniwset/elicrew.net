import React from "react";

export default function Maps() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d349.45409161618545!2d109.01255836827778!3d-7.723671715221728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6513378c8260ad%3A0x43332280584d703c!2sELI%20(English%20Language%20Institute)!5e0!3m2!1sen!2sid!4v1682776393362!5m2!1sen!2sid"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-64 h-64"
      ></iframe>
    </div>
  );
}
