// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

console.log("This is a popup!");
document.getElementById("myButton").addEventListener("click", myFunction);

async function myFunction() {
//     const permissionsToRequest = {
//     permissions: ["USB"],
//     origins: ["https://connect.dev.ittron.co.id/"],
//   };
//     const response = await chrome.permissions.request(permissionsToRequest);
//     if (response) {
//         document.getElementById("myButton").innerHTML = 'response';
//     } else {
//         document.getElementById("myButton").innerHTML = 'Permission was refused';
//       console.log("Permission was refused");
//     }
    document.getElementById("myButton").innerHTML = 'xxxxx';
    try {
        navigator.usb.getDevices().then(devices => {
            document.getElementById("myButton").innerHTML = 'devices' + devices.length;
            devices.forEach(device => {
                document.getElementById("myButton").innerHTML = 'device.productName' + device.productName;
              console.log(device.productName);      // "Arduino Micro"
              console.log(device.manufacturerName); // "Arduino LLC"
            });
          });
          chrome.printing.getPrinters().then((printers) => {});
    } catch (error) {
        document.getElementById("myButton").innerHTML = 'errror';
    } finally {
    }
}