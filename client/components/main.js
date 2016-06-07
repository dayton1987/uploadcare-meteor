Template.body.helpers({
  options:function(){
    return {
      publicKey:'c1e20643159bc563b4ea',
      imagesOnly:true
    }
  },
  action:function(){
    return function (info){
      console.log(info)
    }
  }
});