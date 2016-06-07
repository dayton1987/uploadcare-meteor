
uploadCare= function(option,cb){
    if(!option.publicKey){
      alert('public key required')
      return
    }
    this._options=option
    this._cb=cb

    $('head').append(`<script> UPLOADCARE_PUBLIC_KEY = '${option.publicKey}';</script>`)

    let uploadcare_url='https://ucarecdn.com/widget/2.9.0/uploadcare/uploadcare.full.min.js'

    if(window.uploadcare){
      this._widget=uploadcare.Widget('[role=uploadcare-uploader]')
      this.init()
    }
    else{
      $.getScript( uploadcare_url, ( script, textStatus, jqxhr )=> {
        this._widget=uploadcare.Widget('[role=uploadcare-uploader]')
        this.init()
      });

    }
  }

uploadCare.prototype.init=function(){
  this._widget.onUploadComplete((info)=> {
    this._cb(info)
  });
}
