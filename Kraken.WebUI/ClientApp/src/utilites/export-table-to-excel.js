﻿export const exportTableToExcel = (tableId, filename = '') => {
const uri = 'data:application/vnd.ms-excel;base64,'
    , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'
    , base64 = function (s) { return window.btoa(unescape(encodeURIComponent(s))) }
    , format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }
    
        const table = document.getElementById(tableId)
    var ctx = { worksheet: filename || 'Worksheet', table: table.innerHTML }

    const downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    downloadLink.href  = uri + base64(format(template, ctx))
    downloadLink.download = filename;
    downloadLink.click();
}