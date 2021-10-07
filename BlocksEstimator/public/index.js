// METRES 1ST PHASE
function metresPhase1() {
   if (number1Phase1.value.trim() === "" || number2Phase1.value.trim() === "") {
      alert("Please enter the total length and height of the walls");
   } else {
      var field1Phase1 = document.getElementById("number1Phase1").value;
      var field2Phase1 = document.getElementById("number2Phase1").value;
      var resultPhase1 =
         parseFloat(field1Phase1) * parseFloat(field2Phase1) * 9.876;
      if (!isNaN(resultPhase1)) {
         document.getElementById("list").innerHTML =
            "The total of blocks required from foundation to dpc is " +
            Math.round(resultPhase1) +
            " blocks";
      }
   }
}

function metresPhase1clear() {
   document.getElementById("list").remove();
}

// METRES PHASE 2

function metresPhase2() {
   if (
      number1Phase2.value.trim() === "" ||
      number2Phase2.value.trim() === "" ||
      number3Phase2.value.trim() === "" ||
      number4Phase2.value.trim() === ""
   ) {
      alert("Please enter the total length and height of the walls");
   } else {
      var field1Phase2 = document.getElementById("number1Phase2").value;
      var field2Phase2 = document.getElementById("number2Phase2").value;
      var field3Phase2 = document.getElementById("number3Phase2").value;
      var field4Phase2 = document.getElementById("number4Phase2").value;

      var resultPhase2 =
         (parseFloat(field1Phase2) * parseFloat(field2Phase2) -
            parseFloat(field3Phase2) -
            parseFloat(field4Phase2)) *
         9.876;

      if (!isNaN(resultPhase2)) {
         document.getElementById("show").innerHTML =
            "The total of blocks required from DPC to Lintel is " +
            Math.round(resultPhase2) +
            " blocks";
      }
   }
}

function metresPhase2clear() {
   document.getElementById("show").remove();
}

// METRES PHASE 3

function metresPhase3() {
   if (number1Phase3.value.trim() === "" || number2Phase3.value.trim() === "") {
      alert("Please enter the total length and height of the walls");
   } else {
      var field1Phase3 = document.getElementById("number1Phase3").value;
      var field2Phase3 = document.getElementById("number2Phase3").value;

      var resultPhase3 =
         parseFloat(field1Phase3) * parseFloat(field2Phase3) * 9.876;

      if (!isNaN(resultPhase3)) {
         document.getElementById("display").innerHTML =
            "The total of blocks required from Lintel to Roofing is " +
            Math.round(resultPhase3) +
            " blocks";
      }
   }
}
function metresPhase3clear() {
   document.getElementById("display").remove();
}

// TOTAL BLOCKS FOR Metres 1
function totalMetres() {
   var totalField1Phase1 = document.getElementById("number1Phase1").value;
   var totalField2Phase1 = document.getElementById("number2Phase1").value;
   var totalResultPhase1 =
      parseFloat(totalField1Phase1) * parseFloat(totalField2Phase1) * 9.876;

   var totalField1Phase2 = document.getElementById("number1Phase2").value;
   var totalField2Phase2 = document.getElementById("number2Phase2").value;
   var totalField3Phase2 = document.getElementById("number3Phase2").value;
   var totalField4Phase2 = document.getElementById("number4Phase2").value;
   var totalResultPhase2 =
      (parseFloat(totalField1Phase2) * parseFloat(totalField2Phase2) -
         parseFloat(totalField3Phase2) -
         parseFloat(totalField4Phase2)) *
      9.876;

   var totalField1Phase3 = document.getElementById("number1Phase3").value;
   var totalField2Phase3 = document.getElementById("number2Phase3").value;
   var totalResultPhase3 =
      parseFloat(totalField1Phase3) * parseFloat(totalField2Phase3) * 9.876;

   var solution =
      Math.round(totalResultPhase1) +
      Math.round(totalResultPhase2) +
      Math.round(totalResultPhase3);

   if (!isNaN(solution)) {
      document.getElementById("totalMetres").innerHTML =
         "The total of blocks is required for the whole building is " +
         Math.round(solution) +
         " blocks (disregarding Wastage)";
   }
}

// MILLIMETRES

// PHASE 1
function millimetresPhase1() {
   if (digit1Phase1.value.trim() === "" || digit2Phase1.value.trim() === "") {
      alert("Please enter the total length and height of the walls");
   } else {
      var field1Phase1 = document.getElementById("digit1Phase1").value;
      var field2Phase1 = document.getElementById("digit2Phase1").value;
      var resultPhase1 =
         (((parseFloat(field1Phase1) / 1000) * parseFloat(field2Phase1)) /
            1000) *
         9.876;
      if (!isNaN(resultPhase1)) {
         document.getElementById("list1").innerHTML =
            "The total of blocks required from foundation to dpc is " +
            Math.round(resultPhase1) +
            " blocks";
      }
   }
}

function millimetresPhase1clear() {
   document.getElementById("list1").remove();
}

// MIILLIMETRES PHASE 2
function millimetresPhase2() {
   if (
      digit1Phase2.value.trim() === "" ||
      digit2Phase2.value.trim() === "" ||
      digit3Phase2.value.trim() === "" ||
      digit4Phase2.value.trim() === ""
   ) {
      alert("Please enter the total length and height of the walls");
   } else {
      var field1Phase2 = document.getElementById("digit1Phase2").value;
      var field2Phase2 = document.getElementById("digit2Phase2").value;
      var field3Phase2 = document.getElementById("digit3Phase2").value;
      var field4Phase2 = document.getElementById("digit4Phase2").value;

      var resultPhase2 =
         (((parseFloat(field1Phase2) / 1000) * parseFloat(field2Phase2)) /
            1000 -
            parseFloat(field3Phase2) / 1000 -
            parseFloat(field4Phase2) / 1000) *
         9.876;

      if (!isNaN(resultPhase2)) {
         document.getElementById("show1").innerHTML =
            "The total of blocks required from DPC to Lintel is " +
            Math.round(resultPhase2) +
            " blocks";
      }
   }
}

function millimetresPhase2clear() {
   document.getElementById("show1").remove();
}

// PHASE 3
function millimetresPhase3() {
   if (digit1Phase3.value.trim() === "" || digit2Phase3.value.trim() === "") {
      alert("Please enter the total length and height of the walls");
   } else {
      var field1Phase3 = document.getElementById("digit1Phase3").value;
      var field2Phase3 = document.getElementById("digit2Phase3").value;
      var resultPhase3 =
         (((parseFloat(field1Phase3) / 1000) * parseFloat(field2Phase3)) /
            1000) *
         9.876;
      if (!isNaN(resultPhase3)) {
         document.getElementById("display1").innerHTML =
            "The total of blocks required from Lintel to Roofing is " +
            Math.round(resultPhase3) +
            " blocks";
      }
   }
}

function millimetresPhase3clear() {
   document.getElementById("display1").remove();
}

// TOTAL MILLIMETRES

function totalMillimetres() {
   var totalField1Phase1 = document.getElementById("digit1Phase1").value;
   var totalField2Phase1 = document.getElementById("digit2Phase1").value;
   var totalResultPhase1 =
      parseFloat(totalField1Phase1 / 1000) *
      parseFloat(totalField2Phase1 / 1000) *
      9.876;

   var totalField1Phase2 = document.getElementById("digit1Phase2").value;
   var totalField2Phase2 = document.getElementById("digit2Phase2").value;
   var totalField3Phase2 = document.getElementById("digit3Phase2").value;
   var totalField4Phase2 = document.getElementById("digit4Phase2").value;
   var totalResultPhase2 =
      (parseFloat(totalField1Phase2 / 1000) *
         parseFloat(totalField2Phase2 / 1000) -
         parseFloat(totalField3Phase2 / 1000) -
         parseFloat(totalField4Phase2 / 1000)) *
      9.876;

   var totalField1Phase3 = document.getElementById("digit1Phase3").value;
   var totalField2Phase3 = document.getElementById("digit2Phase3").value;
   var totalResultPhase3 =
      parseFloat(totalField1Phase3 / 1000) *
      parseFloat(totalField2Phase3 / 1000) *
      9.876;

   var solution =
      Math.round(totalResultPhase1) +
      Math.round(totalResultPhase2) +
      Math.round(totalResultPhase3);

   if (!isNaN(solution)) {
      document.getElementById("totalMillimetres").innerHTML =
         "The total of blocks is required for the whole building is " +
         Math.round(solution) +
         " blocks (disregarding Wastage)";
   }
}

// CENTIMETRES

// PHASE 1
function centimetresPhase1() {
   if (
      numeral1Phase1.value.trim() === "" ||
      numeral2Phase1.value.trim() === ""
   ) {
      alert("Please enter the total length and height of the walls");
   } else {
      var field1Phase1 = document.getElementById("numeral1Phase1").value;
      var field2Phase1 = document.getElementById("numeral2Phase1").value;
      var resultPhase1 =
         (((parseFloat(field1Phase1) / 100) * parseFloat(field2Phase1)) / 100) *
         9.876;
      if (!isNaN(resultPhase1)) {
         document.getElementById("list2").innerHTML =
            "The total of blocks required from foundation to dpc is " +
            Math.round(resultPhase1) +
            " blocks";
      }
   }
}

function centimetresPhase1clear() {
   document.getElementById("list2").remove();
}

// CENTIMETRES PHASE 2
function centimetresPhase2() {
   if (
      numeral1Phase2.value.trim() === "" ||
      numeral2Phase2.value.trim() === "" ||
      numeral3Phase2.value.trim() === "" ||
      numeral4Phase2.value.trim() === ""
   ) {
      alert("Please enter the total length and height of the walls");
   } else {
      var field1Phase2 = document.getElementById("numeral1Phase2").value;
      var field2Phase2 = document.getElementById("numeral2Phase2").value;
      var field3Phase2 = document.getElementById("numeral3Phase2").value;
      var field4Phase2 = document.getElementById("numeral4Phase2").value;

      var resultPhase2 =
         (((parseFloat(field1Phase2) / 100) * parseFloat(field2Phase2)) / 100 -
            parseFloat(field3Phase2) / 100 -
            parseFloat(field4Phase2) / 100) *
         9.876;

      if (!isNaN(resultPhase2)) {
         document.getElementById("show2").innerHTML =
            "The total of blocks required from DPC to Lintel is " +
            Math.round(resultPhase2) +
            " blocks";
      }
   }
}

function centimetresPhase2clear() {
   document.getElementById("show2").remove();
}

// PHASE 3
function centimetresPhase3() {
   if (
      numeral1Phase3.value.trim() === "" ||
      numeral2Phase3.value.trim() === ""
   ) {
      alert("Please enter the total length and height of the walls");
   } else {
      var field1Phase3 = document.getElementById("numeral1Phase3").value;
      var field2Phase3 = document.getElementById("numeral2Phase3").value;
      var resultPhase3 =
         (((parseFloat(field1Phase3) / 100) * parseFloat(field2Phase3)) / 100) *
         9.876;
      if (!isNaN(resultPhase3)) {
         document.getElementById("display2").innerHTML =
            "The total of blocks required from Lintel to Roofing is " +
            Math.round(resultPhase3) +
            " blocks";
      }
   }
}

function centimetresPhase3clear() {
   document.getElementById("display2").remove();
}

// TOTAL CENTIMETRES

function totalCentimetres() {
   var totalField1Phase1 = document.getElementById("numeral1Phase1").value;
   var totalField2Phase1 = document.getElementById("numeral2Phase1").value;
   var totalResultPhase1 =
      parseFloat(totalField1Phase1 / 100) *
      parseFloat(totalField2Phase1 / 100) *
      9.876;

   var totalField1Phase2 = document.getElementById("numeral1Phase2").value;
   var totalField2Phase2 = document.getElementById("numeral2Phase2").value;
   var totalField3Phase2 = document.getElementById("numeral3Phase2").value;
   var totalField4Phase2 = document.getElementById("numeral4Phase2").value;
   var totalResultPhase2 =
      (parseFloat(totalField1Phase2 / 100) *
         parseFloat(totalField2Phase2 / 100) -
         parseFloat(totalField3Phase2 / 100) -
         parseFloat(totalField4Phase2 / 100)) *
      9.876;

   var totalField1Phase3 = document.getElementById("numeral1Phase3").value;
   var totalField2Phase3 = document.getElementById("numeral2Phase3").value;
   var totalResultPhase3 =
      parseFloat(totalField1Phase3 / 100) *
      parseFloat(totalField2Phase3 / 100) *
      9.876;

   var solution =
      Math.round(totalResultPhase1) +
      Math.round(totalResultPhase2) +
      Math.round(totalResultPhase3);

   if (!isNaN(solution)) {
      document.getElementById("totalCentimetres").innerHTML =
         "The total of blocks is required for the whole building is " +
         Math.round(solution) +
         " blocks (disregarding Wastage)";
   }
}

// FEET

// PHASE 1
function feetPhase1() {
   if (figure1Phase1.value.trim() === "" || figure2Phase1.value.trim() === "") {
      alert("Please enter the total length and height of the walls");
   } else {
      var field1Phase1 = document.getElementById("figure1Phase1").value;
      var field2Phase1 = document.getElementById("figure2Phase1").value;
      var resultPhase1 =
         parseFloat(field1Phase1) *
         0.3048 *
         parseFloat(field2Phase1) *
         0.3048 *
         9.876;
      if (!isNaN(resultPhase1)) {
         document.getElementById("list3").innerHTML =
            "The total of blocks required from foundation to dpc is " +
            Math.round(resultPhase1) +
            " blocks";
      }
   }
}

function feetPhase1clear() {
   document.getElementById("list3").remove();
}

// CENTIMETRES PHASE 2
function feetPhase2() {
   if (
      figure1Phase2.value.trim() === "" ||
      figure2Phase2.value.trim() === "" ||
      figure3Phase2.value.trim() === "" ||
      figure4Phase2.value.trim() === ""
   ) {
      alert("Please enter the total length and height of the walls");
   } else {
      var field1Phase2 = document.getElementById("figure1Phase2").value;
      var field2Phase2 = document.getElementById("figure2Phase2").value;
      var field3Phase2 = document.getElementById("figure3Phase2").value;
      var field4Phase2 = document.getElementById("figure4Phase2").value;

      var resultPhase2 =
         ((parseFloat(field1Phase2) * 0.3048 * parseFloat(field2Phase2)) /
            0.3048 -
            parseFloat(field3Phase2) * 0.3048 -
            parseFloat(field4Phase2) * 0.3048) *
         9.876;

      if (!isNaN(resultPhase2)) {
         document.getElementById("show3").innerHTML =
            "The total of blocks required from DPC to Lintel is " +
            Math.round(resultPhase2) +
            " blocks";
      }
   }
}

function feetPhase2clear() {
   document.getElementById("show3").remove();
}

// PHASE 3
function feetPhase3() {
   if (figure1Phase3.value.trim() === "" || figure2Phase3.value.trim() === "") {
      alert("Please enter the total length and height of the walls");
   } else {
      var field1Phase3 = document.getElementById("figure1Phase3").value;
      var field2Phase3 = document.getElementById("figure2Phase3").value;
      var resultPhase3 =
         parseFloat(field1Phase3) *
         0.3048 *
         parseFloat(field2Phase3) *
         0.3048 *
         9.876;
      if (!isNaN(resultPhase3)) {
         document.getElementById("display3").innerHTML =
            "The total of blocks required from Lintel to Roofing is " +
            Math.round(resultPhase3) +
            " blocks";
      }
   }
}

function feetPhase3clear() {
   document.getElementById("display3").remove();
}

// TOTAL CENTIMETRES

function totalFeet() {
   var totalField1Phase1 = document.getElementById("figure1Phase1").value;
   var totalField2Phase1 = document.getElementById("figure2Phase1").value;
   var totalResultPhase1 =
      parseFloat(totalField1Phase1 * 0.3048) *
      parseFloat(totalField2Phase1 * 0.3048) *
      9.876;

   var totalField1Phase2 = document.getElementById("figure1Phase2").value;
   var totalField2Phase2 = document.getElementById("figure2Phase2").value;
   var totalField3Phase2 = document.getElementById("figure3Phase2").value;
   var totalField4Phase2 = document.getElementById("figure4Phase2").value;
   var totalResultPhase2 =
      (parseFloat(totalField1Phase2 * 0.3048) *
         parseFloat(totalField2Phase2 * 0.3048) -
         parseFloat(totalField3Phase2 * 0.3048) -
         parseFloat(totalField4Phase2 * 0.3048)) *
      9.876;

   var totalField1Phase3 = document.getElementById("figure1Phase3").value;
   var totalField2Phase3 = document.getElementById("figure2Phase3").value;
   var totalResultPhase3 =
      parseFloat(totalField1Phase3 * 0.3048) *
      parseFloat(totalField2Phase3 * 0.3048) *
      9.876;

   var solution =
      Math.round(totalResultPhase1) +
      Math.round(totalResultPhase2) +
      Math.round(totalResultPhase3);

   if (!isNaN(solution)) {
      document.getElementById("totalFeet").innerHTML =
         "The total of blocks is required for the whole building is " +
         Math.round(solution) +
         " blocks (disregarding Wastage)";
   }
}

// INCHES

// PHASE 1
function inchesPhase1() {
   if (value1Phase1.value.trim() === "" || value2Phase1.value.trim() === "") {
      alert("Please enter the total length and height of the walls");
   } else {
      var field1Phase1 = document.getElementById("value1Phase1").value;
      var field2Phase1 = document.getElementById("value2Phase1").value;
      var resultPhase1 =
         parseFloat(field1Phase1) *
         0.0254 *
         parseFloat(field2Phase1) *
         0.0254 *
         9.876;
      if (!isNaN(resultPhase1)) {
         document.getElementById("list4").innerHTML =
            "The total of blocks required from foundation to dpc is " +
            Math.round(resultPhase1) +
            " blocks";
      }
   }
}

function inchesPhase1clear() {
   document.getElementById("list4").remove();
}

// CENTIMETRES PHASE 2
function inchesPhase2() {
   if (
      value1Phase2.value.trim() === "" ||
      value2Phase2.value.trim() === "" ||
      value3Phase2.value.trim() === "" ||
      value4Phase2.value.trim() === ""
   ) {
      alert("Please enter the total length and height of the walls");
   } else {
      var field1Phase2 = document.getElementById("value1Phase2").value;
      var field2Phase2 = document.getElementById("value2Phase2").value;
      var field3Phase2 = document.getElementById("value3Phase2").value;
      var field4Phase2 = document.getElementById("value4Phase2").value;

      var resultPhase2 =
         ((parseFloat(field1Phase2) * 0.0254 * parseFloat(field2Phase2)) /
            0.0254 -
            parseFloat(field3Phase2) * 0.0254 -
            parseFloat(field4Phase2) * 0.0254) *
         9.876;

      if (!isNaN(resultPhase2)) {
         document.getElementById("show4").innerHTML =
            "The total of blocks required from DPC to Lintel is " +
            Math.round(resultPhase2) +
            " blocks";
      }
   }
}

function inchesPhase2clear() {
   document.getElementById("show4").remove();
}

// PHASE 3
function inchesPhase3() {
   if (value1Phase3.value.trim() === "" || value2Phase3.value.trim() === "") {
      alert("Please enter the total length and height of the walls");
   } else {
      var field1Phase3 = document.getElementById("value1Phase3").value;
      var field2Phase3 = document.getElementById("value2Phase3").value;
      var resultPhase3 =
         parseFloat(field1Phase3) *
         0.0254 *
         parseFloat(field2Phase3) *
         0.0254 *
         9.876;
      if (!isNaN(resultPhase3)) {
         document.getElementById("display4").innerHTML =
            "The total of blocks required from Lintel to Roofing is " +
            Math.round(resultPhase3) +
            " blocks";
      }
   }
}

function inchesPhase3clear() {
   document.getElementById("display3").remove();
}

// TOTAL INCHES

function totalInches() {
   var totalField1Phase1 = document.getElementById("value1Phase1").value;
   var totalField2Phase1 = document.getElementById("value2Phase1").value;
   var totalResultPhase1 =
      parseFloat(totalField1Phase1 * 0.0254) *
      parseFloat(totalField2Phase1 * 0.0254) *
      9.876;

   var totalField1Phase2 = document.getElementById("value1Phase2").value;
   var totalField2Phase2 = document.getElementById("value2Phase2").value;
   var totalField3Phase2 = document.getElementById("value3Phase2").value;
   var totalField4Phase2 = document.getElementById("value4Phase2").value;
   var totalResultPhase2 =
      (parseFloat(totalField1Phase2 * 0.0254) *
         parseFloat(totalField2Phase2 * 0.0254) -
         parseFloat(totalField3Phase2 * 0.0254) -
         parseFloat(totalField4Phase2 * 0.0254)) *
      9.876;

   var totalField1Phase3 = document.getElementById("value1Phase3").value;
   var totalField2Phase3 = document.getElementById("value2Phase3").value;
   var totalResultPhase3 =
      parseFloat(totalField1Phase3 * 0.0254) *
      parseFloat(totalField2Phase3 * 0.0254) *
      9.876;

   var solution =
      Math.round(totalResultPhase1) +
      Math.round(totalResultPhase2) +
      Math.round(totalResultPhase3);

   if (!isNaN(solution)) {
      document.getElementById("totalInches").innerHTML =
         "The total of blocks is required for the whole building is " +
         Math.round(solution) +
         " blocks (disregarding Wastage)";
   }
}
