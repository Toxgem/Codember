let data = "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&"

function procesarString(data) {
  let num = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "#") {
      num++;
    } else if (data[i] === "@") {
      num--;
    } else if (data[i] === "*") {
      num *= num;
    } else if (data[i] === "&") {
      console.log(num);
    }
  }
  }

  procesarString(data)
  
  


