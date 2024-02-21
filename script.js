function uploadImage(source) {
    if(source === 'camera') {
      // Příprava pro otevření fotoaparátu zařízení
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
          // `stream` obsahuje mediální data z fotoaparátu
          // Zde byste mohli zobrazit 'stream' v HTML video elementu a/nebo jej uložit
          console.log('Kamera je připravena a stream je dostupný');
          
          // Poznámka: Nezapomeňte zpracovat stream, připojit ho k video elementu nebo pořídit fotografii
        })
        .catch(function(error) {
          console.error("Došlo k chybě při získávání přístupu k fotoaparátu:", error);
        });
    } else {
      // zde bude alternativní komunikace pro zpracování souboru fotografie
    }

  }
  
  function toggleSubmitButton() {
    const category = document.getElementById('category').value;
    const termsChecked = document.getElementById('terms-checkbox').checked;
    document.getElementById('submit-btn').disabled = !category || !termsChecked;
  }
  
  function insertImageFromFile() {
    // zde bude kód pro vložení fotografie z vybraného souboru
    alert("Fotografie byla vybrána (fiktivní akce).");
  }
  
  function submitReport() {
    // zde bude kód pro odeslání dat na server pomocí AJAX nebo formuláře
    alert("Hlášení bylo odesláno (fiktivní akce).");
  }
  
// JavaScriptové funkce

function showUploadButtons() {
    document.getElementById('showUploadButtons').style.display = 'none'; // Skryje tlačítko pro zobrazení
    document.getElementById('uploadButtons').style.display = 'block'; // Zobrazí tlačítka pro nahrání fotek
  }
  
  // další JavaScriptové funkce