Swal.fire({
    icon: 'info',
    title: 'Breaking News Added!',
    text: 'We are excited to announce the addition of our new breaking news feature.',
    confirmButtonText: 'Read More',
    showCancelButton: true,
    cancelButtonText: 'Close',
    reverseButtons: true,
    customClass: {
        popup: "custom-popup",
        confirmButton: "custom-confirm-btn",
        cancelButton: "custom-close-btn"
    }
  }).then((result) => {
    if (result.isConfirmed) {
      // Redirect to the breaking news page
      window.location.href = '/breaking-news-list.html';
    }
  });