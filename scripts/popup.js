function closePopup() {
    document.getElementById('addToHomePopup').style.display = 'none';
  }

  function showAddToHomePopup() {
    const popup = document.getElementById('addToHomePopup');
    const popupText = document.getElementById('popupText');

    // Detect iOS
    const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent) && !window.MSStream;
    // Detect Android
    const isAndroid = /Android/.test(navigator.userAgent);

    if (isIOS) {
      popupText.innerHTML = 'To add this page to your home screen, tap <i class="fas fa-share"></i> and then <b>"Add to Home Screen"</b>.';
      popup.style.display = 'block';
    } else if (isAndroid) {
      popupText.innerHTML = 'To add this page to your home screen, tap the browser menu and select <b>"Add to Home Screen"</b>.';
      popup.style.display = 'block';
    }
  }

  // Show popup after a delay (2 seconds here)
  setTimeout(showAddToHomePopup, 2000);