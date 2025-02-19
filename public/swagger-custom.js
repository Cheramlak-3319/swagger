document.addEventListener('DOMContentLoaded', function() {
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
          const mobileInput = document.querySelector('input[data-param="mobile"]');
          if (mobileInput) {
            mobileInput.placeholder = '+XXX';
            mobileInput.value = '+XXX';
  
            mobileInput.addEventListener('focus', function() {
              if (this.value === '+XXX') {
                this.value = '';
              }
            });
  
            mobileInput.addEventListener('blur', function() {
              if (this.value === '') {
                this.value = '+XXX';
              }
            });
  
            observer.disconnect();
          }
        }
      });
    });
  
    const swaggerContainer = document.querySelector('.swagger-ui');
    if (swaggerContainer) {
      observer.observe(swaggerContainer, { childList: true, subtree: true });
    }
  });