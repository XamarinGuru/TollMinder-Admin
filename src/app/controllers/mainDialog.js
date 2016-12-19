export class MainDialogController{

  hide() {
    if (document.querySelector('#hiddenModalButton')) document.querySelector('#hiddenModalButton').style.display = 'none';
    localStorage.document = '';
    this.dialog.hide();
  }

  min() {
    if (document.querySelector('#hiddenModalButton')) document.querySelector('#hiddenModalButton').style.display = 'block';
    localStorage.document = JSON.stringify(this.document);
    this.dialog.hide();
  }
}
