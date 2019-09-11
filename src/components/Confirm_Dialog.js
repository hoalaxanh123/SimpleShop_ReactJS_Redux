import Noty from "noty";
import "./../../node_modules/noty/lib/noty.css";
import "./../../node_modules/noty/lib/noty.js";
import "./../../node_modules/noty/lib/themes/relax.css"; //ok

function Confirm_Dialog(params,type) {
  new Noty({
    text: params,             //This string can contain HTML too. But be careful and don't pass user inputs to this parameter.
    type: type,               //alert, success, error, warning, info
    timeout: 1500,            //false, 1000, 3000, 3500, etc. Delay for closing event in milliseconds (ms). Set 'false' for sticky notifications
    theme: "relax",           //relax, mint, metroui - ClassName generator uses this value 
    progressBar: true,        //true, false - Displays a progress bar if timeout is not false.
    layout: "topRight",       //top, topLeft, topCenter, topRight, center, centerLeft, centerRight, bottom, bottomLeft, bottomCenter, bottomRight - ClassName generator uses this value → 
    buttons: [
      Noty.button('YES', 'btn btn-success', function () {
          return true
      }, {id: 'button1', 'data-status': 'ok'}),
  
      Noty.button('NO', 'btn btn-error', function () {
          console.log('button 2 clicked');
          this.close();
      })
    ]
  
  
  }).show();
}

export default Confirm_Dialog;










//More info here: https://ned.im/noty/#/options
//This component made by 1510289
