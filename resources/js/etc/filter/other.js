export function get_age(value) {
    let currentDate = new Date();
    let birthDate = new Date(value);
    let difference = currentDate - birthDate;
    let age = Math.floor(difference / 31557600000);
    return age;
}


export function excel(value, filename) {
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(value);
    var tableHTML = tableSelect.innerHTML.replace(/ /g, '%20');

    // Specify file name
    filename = filename ? filename + '.xls' : 'excel_data.xls';

    // Create download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Setting the file filename
        downloadLink.download = filename;

        //triggering the function
        downloadLink.click();
    }

}

export function print(id) {
    // Get HTML to print from element
    const prtHtml = document.getElementById(id).innerHTML;

    // Get all stylesheets HTML
    let stylesHtml = '';
    for (const node of[...document.querySelectorAll('link[rel="stylesheet"], style')]) {
        stylesHtml += node.outerHTML;
    }

    // Open the print window
    const WinPrint = window.open('', '', 'left=0,top=0,width=800,height=800,toolbar=0,scrollbars=0,status=0');

    const data = `<!DOCTYPE html><html><head>${stylesHtml}<style>body{background-color:white !important;}@page { size: 84.1cm 59.4cm;margin: 1cm 1cm 1cm 1cm; }</style></head><body>${prtHtml}</body></html>`

    WinPrint.document.write(data);

    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();

}

export function printReceipt(id) {
    // Get HTML to print from element
    const prtHtml = document.getElementById(id).innerHTML;

    // Get all stylesheets HTML
    let stylesHtml = '';
    for (const node of[...document.querySelectorAll('link[rel="stylesheet"], style')]) {
        stylesHtml += node.outerHTML;
    }

    // Open the print window
    const WinPrint = window.open('', '', 'left=0,top=0,width=800,height=800,toolbar=0,scrollbars=0,status=0');

    const data = `<!DOCTYPE html><html><head>${stylesHtml}</head><body>${prtHtml}</body></html>`

    WinPrint.document.write(data);

    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();

}
