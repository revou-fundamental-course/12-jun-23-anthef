//mendeklarasikan variabel yang berhubungan dengan fungsi convert
function convert() {
    var celsiusInput = document.getElementById("celsiusInput");
    var fahrenheitInput = document.getElementById("fahrenheitInput");
    var calculationResult = document.getElementById("calculationResult");
    var degreeSymbol = String.fromCharCode(176);
  //mendefinisikan fungsi bahwa fungsi akan bekerja jika input tidak kosong
    if (celsiusInput.value !== "") {
      var celsius = parseFloat(celsiusInput.value);
      var fahrenheit = (celsius * 9/5) + 32;
      //toFixed(2) digunakan supaya bilangan desimal yang dihasilkan dibulatkan menjadi 2 angka di belakang desimal
      fahrenheitInput.value = fahrenheit.toFixed(2);
      calculationResult.value = celsius + degreeSymbol + " C = (" + celsius + " * 9/5) + 32 = " + fahrenheit.toFixed(2) + degreeSymbol + " F";
    } else if (fahrenheitInput.value !== "") {
      var fahrenheit = parseFloat(fahrenheitInput.value);
      var celsius = (fahrenheit - 32) * 5/9;
      celsiusInput.value = celsius.toFixed(2);
      calculationResult.value = fahrenheit + degreeSymbol + " F = (" + fahrenheit + " - 32) * 5/9 = " + celsius.toFixed(2) + degreeSymbol + " C";
    }
  }
  //mendefinisikan bahwa tombol reset akan mengosongkan input jika di klik
  function reset() {
    document.getElementById("celsiusInput").value = "";
    document.getElementById("fahrenheitInput").value = "";
    document.getElementById("calculationResult").value = "";
  }
  //mendefinisikan bahwa value dari sebuah input akan berpindah posisi
  function reverse() {
    var celsiusInput = document.getElementById("celsiusInput");
    var fahrenheitInput = document.getElementById("fahrenheitInput");
    var celsius = celsiusInput.value;
    var fahrenheit = fahrenheitInput.value;
  
    celsiusInput.value = fahrenheit;
    fahrenheitInput.value = celsius;
    document.getElementById("calculationResult").value = "";
  }