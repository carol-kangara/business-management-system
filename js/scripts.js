function doGet(e) {
    return HtmlService.createHtmlOutputFromFile('inventory');
  }
  function addRecord(Code,Name,Pack){
    var url ='https://docs.google.com/spreadsheets/d/107y0j9XsbVWglcv5tPsvkhBxxvhzWZOCOp-EJMai5fY/edit#gid=0';
    var ss=SpreadsheetApp.openByUrl(url);
    var inventorySheet=ss.getSheetByName('item')
    inventorySheet.appendRow("Code","Name","Pack", "newDate()")
  }
function AddRow(){
    var code = getElementById("code").value;
    var name =getElementById("Name").value;
    var pack =getElementById("pack").value;
    google.script.run.AddRecord(code,name,pack);
    document.getElementById("code").value="";
    var name =getElementById("Name").value="";
    var pack =getElementById("pack").value="";

  }  
  