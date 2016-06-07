
import {uploadCare} from 'meteor/uploadcare:core'

Template.up_upload.onRendered(function(){
  let option=Template.instance().data.option || {}
  const defaultOptions={
    publicKey:'data-public-key',
    multiple:'data-multiple',
    multipleMax:'data-multiple-max',
    multipleMin:'data-multiple-min',
    imagesOnly:'data-images-only',
    previewStep:'data-preview-step',
    imageShrink:'data-image-shrink',
    tabs:'data-tabs',
    inputAcceptTypes:'data-input-accept-types',
    preferredTypes:'data-preferred-types',
    cdnBase:'data-cdn-base',
    doNotStore:'data-do-not-store'

  }

  $.each(option,(key,value)=>{
    const dataElm=defaultOptions[key]
    if(dataElm){
      console.log(dataElm)
      $('#uploadcare____input').attr(dataElm,value)
    }
  })
  let upload=new uploadCare(option,Template.instance().data.action);
});

Template.up_upload.onCreated(function(){


});

